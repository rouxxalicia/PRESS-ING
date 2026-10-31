"""Vérifie la dernière édition de Press'ing avant publication.

Usage : python3 scripts/verifier.py [AAAA-MM-JJ]
Sans date, vérifie l'édition la plus récente de data/index.json.
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
MATS = ["esh", "anglais", "espagnol", "allemand"]
errors = []

try:
    index = json.loads((DATA / "index.json").read_text(encoding="utf-8"))
except Exception as e:
    sys.exit(f"data/index.json illisible : {e}")

date = sys.argv[1] if len(sys.argv) > 1 else sorted(index.get("editions", []), reverse=True)[0]
path = DATA / "editions" / f"{date}.json"
if date not in index.get("editions", []):
    errors.append(f"{date} n'est pas dans data/index.json")
if not path.exists():
    sys.exit(f"Fichier introuvable : {path.relative_to(ROOT)}")

try:
    ed = json.loads(path.read_text(encoding="utf-8"))
except json.JSONDecodeError as e:
    sys.exit(f"JSON invalide dans {path.name} : {e}")

ref_ids = {f["id"] for f in json.loads((DATA / "referentiel.json").read_text(encoding="utf-8"))["fiches"]}
cards = ed.get("cards", [])

if ed.get("date") != date:
    errors.append(f"le champ date vaut {ed.get('date')!r} au lieu de {date!r}")
order = [c.get("matiere") for c in cards]
for m in MATS:
    n = order.count(m)
    if n != 3:
        errors.append(f"{m} : {n} carte(s) au lieu de 3")
if order != sorted(order, key=lambda m: MATS.index(m) if m in MATS else 9):
    errors.append("les cartes ne sont pas dans l'ordre esh, anglais, espagnol, allemand")

ids = set()
for c in cards:
    cid = c.get("id", "?")
    if cid in ids:
        errors.append(f"{cid} : id en double")
    ids.add(cid)
    if not str(cid).startswith(f"{date}-{c.get('matiere')}-"):
        errors.append(f"{cid} : l'id doit commencer par {date}-{c.get('matiere')}-")
    for k in ("matiere", "source", "url", "minutes", "titre", "faits", "enjeux", "sujets"):
        if not c.get(k):
            errors.append(f"{cid} : champ {k} manquant ou vide")
    if not str(c.get("url", "")).startswith("http"):
        errors.append(f"{cid} : url invalide")
    if len(c.get("sujets", [])) < 2:
        errors.append(f"{cid} : il faut 2 sujets")
    if len(str(c.get("faits", ""))) < 300 or len(str(c.get("enjeux", ""))) < 300:
        errors.append(f"{cid} : faits ou enjeux trop courts (5 à 7 phrases chacun)")
    if c.get("matiere") == "esh":
        p = c.get("programme") or {}
        if not p.get("module") or not p.get("chapitre"):
            errors.append(f"{cid} : programme (module et chapitre) manquant")
        auteurs = c.get("auteurs") or []
        if len(auteurs) != 2:
            errors.append(f"{cid} : il faut 2 auteurs")
        for a in auteurs:
            for k in ("nom", "ouvrage", "annee", "texte"):
                if not a.get(k):
                    errors.append(f"{cid} : auteur {a.get('nom', '?')} sans {k}")
            if a.get("ref") and a["ref"] not in ref_ids:
                errors.append(f"{cid} : ref {a['ref']!r} absente du référentiel (mets null)")
    elif c.get("matiere") in MATS:
        vo = c.get("vo") or {}
        for k in ("titre", "faits", "enjeux"):
            if not vo.get(k):
                errors.append(f"{cid} : vo.{k} manquant")
        voc = c.get("vocab") or []
        if len(voc) < 5 or any(not isinstance(v, list) or len(v) != 2 for v in voc):
            errors.append(f"{cid} : vocab doit contenir 6 paires [mot, traduction]")

if errors:
    print(f"{len(errors)} problème(s) dans l'édition du {date} :")
    for e in errors:
        print(" -", e)
    sys.exit(1)
print(f"Édition valide : {date}, {len(cards)} cartes.")
