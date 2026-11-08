"""Trouve, dans les cours d'ESH d'Alicia, les auteurs et ouvrages liés à une actu.

Usage :
  python3 scripts/cours.py droits de douane Chine          -> chapitres et auteurs du cours liés à ces mots
  python3 scripts/cours.py --chapitre 2A-01-mondialisation-commerciale   -> toutes les références d'un chapitre
  python3 scripts/cours.py --liste                          -> liste des chapitres

Ne lis jamais data/cours/*.json à la main : ce script donne seulement ce qui est utile.
"""
import json
import re
import sys
import unicodedata
from pathlib import Path

DOSSIER = Path(__file__).resolve().parent.parent / "data" / "cours"
MOTS_VIDES = set("le la les de des du un une et en au aux a l d sur pour par dans avec sans est sont qui que ou the of and".split())


def norm(s):
    s = unicodedata.normalize("NFKD", str(s).lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", " ", s).strip()


def mots(s):
    return [m for m in norm(s).split() if m not in MOTS_VIDES and len(m) > 1]


def lire(p):
    return json.loads(p.read_text(encoding="utf-8"))


def ligne(r, chap=None):
    t = f"- {r.get('auteur', '')}"
    if r.get("ouvrage"):
        t += f", {r['ouvrage']}"
    if r.get("date"):
        t += f" ({r['date']})"
    if chap:
        t += f"   [cours : {chap}]"
    t += f"\n    idée : {r.get('idee', '')}"
    if r.get("a_quoi_ca_sert"):
        t += f"\n    sert à : {r['a_quoi_ca_sert']}"
    if r.get("a_verifier"):
        t += f"\n    ⚠ à vérifier : {r['a_verifier']} (n'écris pas le détail douteux)"
    return t


index = lire(DOSSIER / "index.json")["chapitres"]
args = sys.argv[1:]

if not args or args[0] == "--liste":
    for c in index:
        print(f"{c['id']:40} {c['annee']}  {c['chapitre']}  ({c['nb_references']} réf.)")
    sys.exit()

if args[0] == "--chapitre":
    c = lire(DOSSIER / f"{args[1]}.json")
    print(f"=== {c['chapitre']} ({c['annee']}) — {c.get('module', '')} ===")
    for r in c["references"]:
        print(ligne(r))
    sys.exit()

requete = " ".join(args)
q = set(mots(requete))
qn = " " + norm(requete) + " "
scores = []
for c in index:
    data = lire(DOSSIER / f"{c['id']}.json")
    sc_chap = 0
    for k in c.get("mots_cles_actu", []):
        kn = norm(k)
        if kn and f" {kn} " in qn:
            sc_chap += 3
        elif set(mots(k)) & q:
            sc_chap += 1
    for r in data["references"]:
        champs_forts = " ".join(r.get("mots_cles", []))
        champs = " ".join([r.get("idee", ""), r.get("a_quoi_ca_sert", ""), r.get("partie_lecon", "")])
        s = 2 * len(set(mots(champs_forts)) & q) + len(set(mots(champs)) & q)
        if s:
            scores.append((s + sc_chap / 3, c, r))
    meilleurs = sorted((s for s, cc, _ in scores if cc is c), reverse=True)[:5]
    c["_score"] = sc_chap + sum(meilleurs) / 2

chaps = sorted(index, key=lambda c: -c["_score"])
print(f"Recherche : {requete}\n")
print("=== CHAPITRES DU COURS LES PLUS PROCHES → champ « programme » de la carte ===")
for c in chaps[:3]:
    if c["_score"]:
        print(f"- cours : {c['chapitre']} ({c['annee']})  [id : {c['id']}]")
        print(f"    module : {c['module']}")
        print(f"    chapitre : {c['programme_chapitre']}")
print()
print("=== AUTEURS DU COURS À MOBILISER EN PRIORITÉ ===")
scores.sort(key=lambda x: -x[0])
vus = set()
n = 0
for s, c, r in scores:
    cle = (norm(r.get("auteur", "")), norm(r.get("idee", ""))[:60])
    if cle in vus:
        continue
    vus.add(cle)
    print(ligne(r, f"{c['chapitre']} – id {c['id']}"))
    n += 1
    if n >= 12:
        break
if not n:
    print("Aucun auteur du cours ne correspond : essaie d'autres mots (notions du programme), sinon choisis un auteur hors cours.")
