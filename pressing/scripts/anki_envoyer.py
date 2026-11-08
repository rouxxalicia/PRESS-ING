"""Envoie les cartes Press'ing directement dans Anki (sur l'ordinateur d'Alicia).

Usage : python3 scripts/anki_envoyer.py [AAAA-MM-JJ]
Il faut qu'Anki soit ouvert, avec l'add-on AnkiConnect (code 2055492159).
Importe les paquets .apkg de l'édition, puis lance la synchronisation AnkiWeb.
"""
import json
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"


def anki(action, **params):
    req = urllib.request.Request("http://127.0.0.1:8765",
                                 json.dumps({"action": action, "version": 6, "params": params}).encode("utf-8"),
                                 {"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        rep = json.loads(r.read().decode("utf-8"))
    if rep.get("error"):
        raise RuntimeError(rep["error"])
    return rep.get("result")


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    date = args[0] if args else sorted(json.loads((DATA / "index.json").read_text(encoding="utf-8"))["editions"], reverse=True)[0]
    paquets = sorted((DATA / "anki").glob(f"{date}-*.apkg"))
    if not paquets:
        sys.exit(f"Aucun paquet pour le {date} : lance d'abord python3 scripts/anki.py")
    try:
        anki("version")
    except Exception:
        print("Anki est fermé (ou AnkiConnect n'est pas installé) : cartes non envoyées. "
              "Alicia pourra les importer avec le bouton Anki du site.")
        return
    ok = 0
    for p in paquets:
        try:
            anki("importPackage", path=str(p.resolve()))
            ok += 1
        except Exception as e:
            print(f"Échec pour {p.name} : {e}")
    try:
        anki("sync")
        sync = "synchronisé avec AnkiWeb"
    except Exception as e:
        sync = f"synchronisation AnkiWeb impossible ({e})"
    print(f"Anki : {ok}/{len(paquets)} paquet(s) importé(s) pour le {date}, {sync}.")


if __name__ == "__main__":
    main()
