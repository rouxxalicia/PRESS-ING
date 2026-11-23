"""Résumé à lire AVANT de rédiger l'édition : évite d'ouvrir les gros fichiers.

Usage : python3 scripts/preparer.py            -> sujets récents, programme, fiches, exemples
        python3 scripts/preparer.py --modele   -> en plus, la fiche modèle complète (si tu crées une fiche)
"""
import json
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
MATS = ["esh", "anglais", "espagnol", "allemand"]
MODELE_STYLE = "2026-10-31"


def lire(p):
    return json.loads(p.read_text(encoding="utf-8"))


try:
    from zoneinfo import ZoneInfo
    today = datetime.now(ZoneInfo("Europe/Paris")).date().isoformat()
except Exception:
    today = (datetime.now(timezone.utc) + timedelta(hours=1)).date().isoformat()

index = lire(DATA / "index.json")
editions = sorted(index.get("editions", []), reverse=True)
print(f"DATE DU JOUR (Paris) : {today}")
if (DATA / "editions" / f"{today}.json").exists():
    print(f"!! L'édition {today} existe déjà : arrête-toi et dis-le à Alicia.")
print()

# Articles proposés par Alicia depuis le site (file d'attente)
try:
    _mod = lire(DATA / "modifs.json")
except Exception:
    _mod = {}
try:
    _faits = set(lire(DATA / "demandes-traitees.json").get("ids", []))
except Exception:
    _faits = set()
_att = [d for d in (_mod.get("demandes") or []) if not d.get("annule") and d.get("id") not in _faits]
if _att:
    print(f"=== ARTICLES PROPOSÉS PAR ALICIA À TRAITER ({len(_att)}) : à ajouter à l'édition (voir « Articles proposés » dans CONSIGNES.md) ===")
    for d in _att:
        print(f"- id {d.get('id')} | matière {d.get('matiere')} | {d.get('url')}")
        if d.get("texte"):
            print("  Texte collé par Alicia (article payant) :")
            print("  " + d["texte"].strip().replace("\n", "\n  "))
    print()

sys.path.insert(0, str(ROOT / "scripts"))
import dossiers
print(dossiers.resume(today))
print("« suite seulement » = ce sujet ne revient que s'il y a une vraie évolution (champ \"suite\"), une seule suite")
print("par édition. Pour redire la même chose : non, choisis une autre actu. Les dossiers « libres » anciens ne sont pas affichés.")
print()
print("=== « À LIRE » DES 5 DERNIÈRES ÉDITIONS : ne pas les reprendre ===")
programme = {}
for d in editions[:5]:
    p = DATA / "editions" / f"{d}.json"
    if p.exists():
        for a in lire(p).get("a_lire", []) or []:
            print(f"  [{d}] {a.get('journal', '')} : {a.get('titre', '')}")
for d in editions:
    p = DATA / "editions" / f"{d}.json"
    if p.exists():
        for c in lire(p).get("cards", []):
            pr = c.get("programme") or {}
            if pr.get("module") and pr.get("chapitre"):
                programme.setdefault(pr["module"], set()).add(pr["chapitre"])
print()

print("=== INTITULÉS DU PROGRAMME DÉJÀ UTILISÉS ===")
print("(Pour les cartes esh, les intitulés officiels donnés par scripts/cours.py passent avant cette liste.)")
for mod in sorted(programme):
    print(f"- {mod}")
    for ch in sorted(programme[mod]):
        print(f"    · {ch}")
print()

ref = lire(DATA / "referentiel.json")
print("=== FICHES DU RÉFÉRENTIEL (id | nom | auteur) : ne pas créer de doublon ===")
for f in ref.get("fiches", []):
    print(f"- {f.get('id')} | {f.get('nom')} | {f.get('auteur')}")
print("Catégories possibles :", ", ".join(c["id"] for c in ref.get("categories", [])))
print()

p = DATA / "editions" / f"{MODELE_STYLE}.json"
if p.exists():
    ed = lire(p)
    print(f"=== MODÈLE DE STYLE ET DE LONGUEUR ({MODELE_STYLE}) : une carte esh et une carte anglais ===")
    print("(Le style seulement : ne reprends ni les sources ni les sujets. L'allemand suit la partie B2 de CONSIGNES.md.)")
    for m in ("esh", "anglais"):
        c = next((c for c in ed["cards"] if c.get("matiere") == m), None)
        if c:
            c = {k: v for k, v in c.items() if k not in ("image", "url")}
            print(json.dumps(c, ensure_ascii=False, indent=1))

if "--sans-rss" not in sys.argv:
    try:
        import rss
        print()
        print(rss.formater(rss.collecter(MATS, heures=48, par_matiere=10)))
    except Exception as e:
        print(f"\n(Flux RSS indisponibles : {e})")

if "--modele" in sys.argv:
    print()
    print("=== FICHE MODÈLE : avantages-comparatifs ===")
    f = next((f for f in ref["fiches"] if f["id"] == "avantages-comparatifs"), None)
    print(json.dumps(f, ensure_ascii=False, indent=1))
