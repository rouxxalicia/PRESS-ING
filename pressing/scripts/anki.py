"""Fabrique les paquets Anki de Press'ing : un fichier .apkg par article.

Usage : python3 scripts/anki.py [AAAA-MM-JJ | --tout]
Sans date, traite l'édition la plus récente de data/index.json.
N'utilise que Python, rien à installer. Le type de note et les paquets
sont dans scripts/anki_config.json : ne pas les modifier.
"""
import hashlib
import html
import json
import re
import sqlite3
import sys
import tempfile
import time
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
OUT = DATA / "anki"
CONFIG = json.loads((ROOT / "scripts" / "anki_config.json").read_text(encoding="utf-8"))
MODEL = CONFIG["modele"]
MODEL_ID = int(MODEL["id"])
FIELDS = [f["name"] for f in MODEL["flds"]]
MATIERES = ("esh", "anglais", "espagnol")  # pas d'allemand
MOIS = "janv. févr. mars avr. mai juin juil. août sept. oct. nov. déc.".split()

SCHEMA = """
CREATE TABLE col (id integer PRIMARY KEY, crt integer NOT NULL, mod integer NOT NULL, scm integer NOT NULL,
 ver integer NOT NULL, dty integer NOT NULL, usn integer NOT NULL, ls integer NOT NULL, conf text NOT NULL,
 models text NOT NULL, decks text NOT NULL, dconf text NOT NULL, tags text NOT NULL);
CREATE TABLE notes (id integer PRIMARY KEY, guid text NOT NULL, mid integer NOT NULL, mod integer NOT NULL,
 usn integer NOT NULL, tags text NOT NULL, flds text NOT NULL, sfld integer NOT NULL, csum integer NOT NULL,
 flags integer NOT NULL, data text NOT NULL);
CREATE TABLE cards (id integer PRIMARY KEY, nid integer NOT NULL, did integer NOT NULL, ord integer NOT NULL,
 mod integer NOT NULL, usn integer NOT NULL, type integer NOT NULL, queue integer NOT NULL, due integer NOT NULL,
 ivl integer NOT NULL, factor integer NOT NULL, reps integer NOT NULL, lapses integer NOT NULL, left integer NOT NULL,
 odue integer NOT NULL, odid integer NOT NULL, flags integer NOT NULL, data text NOT NULL);
CREATE TABLE revlog (id integer PRIMARY KEY, cid integer NOT NULL, usn integer NOT NULL, ease integer NOT NULL,
 ivl integer NOT NULL, lastIvl integer NOT NULL, factor integer NOT NULL, time integer NOT NULL, type integer NOT NULL);
CREATE TABLE graves (usn integer NOT NULL, oid integer NOT NULL, type integer NOT NULL);
CREATE INDEX ix_notes_usn ON notes (usn);
CREATE INDEX ix_cards_usn ON cards (usn);
CREATE INDEX ix_revlog_usn ON revlog (usn);
CREATE INDEX ix_cards_nid ON cards (nid);
CREATE INDEX ix_cards_sched ON cards (did, queue, due);
CREATE INDEX ix_revlog_cid ON revlog (cid);
CREATE INDEX ix_notes_csum ON notes (csum);
"""


def num(text):
    return int(hashlib.sha1(text.encode("utf-8")).hexdigest()[:13], 16)


def sfield(text):
    return re.sub(r"<[^>]+>", "", text)


def markup(text):
    """A{auteur} O{ouvrage} D{date} C{chiffre} B{gras}, et un retour à la ligne pour <br>."""
    out = html.escape(text, quote=False)
    for letter, cls in (("A", "a"), ("O", "o"), ("D", "d"), ("C", "c")):
        out = re.sub(letter + r"\{([^{}]*)\}", rf'<span class="{cls}">\1</span>', out)
    out = re.sub(r"B\{([^{}]*)\}", r"<b>\1</b>", out)
    return out.replace("\n", "<br>")


def label(date, c):
    a, m, j = date.split("-")
    return f"Press'ing · {int(j)} {MOIS[int(m) - 1]} {a}"


def notes_of(date, c):
    """Renvoie [(paquet, champs, étiquettes)] pour un article."""
    m = c["matiere"]
    tag = "Pressing"
    out = []
    for f in c.get("anki") or []:
        out.append((CONFIG["paquets"][m], {"Question": markup(f["q"]), "Réponse": markup(f["r"]), "Partie": label(date, c)},
                    [tag, m, "actu"]))
    for v in c.get("notions") or []:
        if m != "esh" or len(v) < 2:
            continue
        out.append((CONFIG["paquets_vocab"][m], {"Question": html.escape(v[0], quote=False), "Réponse": markup(v[1])},
                    [tag, m, "vocabulaire"]))
    for v in c.get("vocab") or []:
        if m == "esh":
            continue
        fields = {"Question": html.escape(v[1], quote=False), "Réponse": html.escape(v[0], quote=False)}
        if len(v) > 2 and v[2]:
            fields["Exemple"] = html.escape(v[2], quote=False)
        out.append((CONFIG["paquets_vocab"][m], fields, [tag, m, "vocabulaire"]))
    return out


def build(path, card_id, notes):
    now = int(time.time())
    decks = {"1": {"id": 1, "mod": now, "name": "Default", "usn": -1, "lrnToday": [0, 0], "revToday": [0, 0],
                   "newToday": [0, 0], "timeToday": [0, 0], "collapsed": False, "browserCollapsed": False, "desc": "",
                   "dyn": 0, "conf": 1, "extendNew": 0, "extendRev": 0}}
    ids = {}
    for name in sorted({n[0] for n in notes}):
        did = num("deck:" + name) >> 12
        ids[name] = did
        decks[str(did)] = dict(decks["1"], id=did, name=name)
    dconf = {"1": {"id": 1, "mod": 0, "name": "Default", "usn": 0, "maxTaken": 60, "autoplay": True, "timer": 0,
                   "replayq": True, "dyn": False,
                   "new": {"bury": False, "delays": [1, 10], "initialFactor": 2500, "ints": [1, 4, 0], "order": 1, "perDay": 20},
                   "rev": {"bury": False, "ease4": 1.3, "ivlFct": 1, "maxIvl": 36500, "perDay": 200, "hardFactor": 1.2},
                   "lapse": {"delays": [10], "leechAction": 1, "leechFails": 8, "minInt": 1, "mult": 0}}}
    with tempfile.TemporaryDirectory() as tmp:
        db_path = Path(tmp) / "collection.anki2"
        db = sqlite3.connect(db_path)
        db.executescript(SCHEMA)
        db.execute("INSERT INTO col VALUES (1,?,?,?,11,0,0,0,?,?,?,?,'{}')",
                   (now, now * 1000, now * 1000, json.dumps({"nextPos": len(notes) + 1, "curModel": MODEL_ID}),
                    json.dumps({str(MODEL_ID): MODEL}, ensure_ascii=False), json.dumps(decks, ensure_ascii=False), json.dumps(dconf)))
        for i, (deck, fields, tags) in enumerate(notes, 1):
            flds = "\x1f".join(fields.get(n, "") for n in FIELDS)
            key = card_id + "|" + fields["Question"]
            guid = "pressing-" + hashlib.sha1(key.encode("utf-8")).hexdigest()[:16]
            nid = num(key) >> 12
            sf = sfield(fields["Question"])
            csum = int(hashlib.sha1(sf.encode("utf-8")).hexdigest()[:8], 16)
            db.execute("INSERT INTO notes VALUES (?,?,?,?,-1,?,?,?,?,0,'')",
                       (nid, guid, MODEL_ID, now, " " + " ".join(tags) + " ", flds, sf, csum))
            db.execute("INSERT INTO cards VALUES (?,?,?,0,?,-1,0,0,?,0,0,0,0,0,0,0,0,'')",
                       (nid + 1, nid, ids[deck], now, i))
        db.commit()
        db.close()
        OUT.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
            z.write(db_path, "collection.anki2")
            z.writestr("media", "{}")


def main():
    args = sys.argv[1:]
    if args == ["--tout"]:
        for d in json.loads((DATA / "index.json").read_text(encoding="utf-8"))["editions"]:
            sys.argv[1:] = [d]
            main()
        return
    if args:
        date = args[0]
    else:
        date = sorted(json.loads((DATA / "index.json").read_text(encoding="utf-8"))["editions"], reverse=True)[0]
    ed = json.loads((DATA / "editions" / f"{date}.json").read_text(encoding="utf-8"))
    total = 0
    for c in ed["cards"]:
        if c.get("matiere") not in MATIERES:
            continue
        notes = notes_of(date, c)
        if notes:
            build(OUT / f"{c['id']}.apkg", c["id"], notes)
            total += 1
    print(f"Paquets Anki : {total} fichier(s) pour le {date}.")


if __name__ == "__main__":
    main()
