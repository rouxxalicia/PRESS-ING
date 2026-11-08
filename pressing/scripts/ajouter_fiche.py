"""Ajoute une ou plusieurs fiches à la fin de data/referentiel.json sans toucher aux autres.

Usage : python3 scripts/ajouter_fiche.py nouvelle_fiche.json
Le fichier contient une fiche (objet JSON) ou une liste de fiches. Supprime-le ensuite.
"""
import json
import sys
from pathlib import Path

REF = Path(__file__).resolve().parent.parent / "data" / "referentiel.json"
if len(sys.argv) != 2:
    sys.exit(__doc__)
nouv = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
nouv = nouv if isinstance(nouv, list) else [nouv]
ref = json.loads(REF.read_text(encoding="utf-8"))
ids = {f["id"] for f in ref["fiches"]}
for f in nouv:
    if f.get("id") in ids:
        print(f"Déjà présente, ignorée : {f.get('id')}")
        continue
    ref["fiches"].append(f)
    ids.add(f["id"])
    print(f"Fiche ajoutée : {f['id']}")
REF.write_text(json.dumps(ref, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
