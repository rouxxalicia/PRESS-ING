"""Dossiers : évite de traiter plusieurs fois le même sujet.

Chaque carte porte un champ "dossier" : un identifiant court de l'histoire de fond
qu'elle raconte (ex. "midterms-2026", "elections-espagne-29n", "economie-argentine-milei").
Toutes les cartes qui parlent de la même histoire ont le même dossier, quel que soit l'angle.

Règles (vérifiées par scripts/verifier.py) :
- un dossier traité ces JOURS_PAUSE derniers jours, ou saturé (MAX_FENETRE cartes ou plus
  sur les FENETRE derniers jours), ne revient qu'en carte "suite" : champ "suite" = la vraie
  évolution en une phrase (résultat, vote, décision, chiffre officiel), jamais pour redire la même chose ;
- un dossier qui a eu une carte "suite" ces PAUSE_SUITE derniers jours est INTERDIT ;
- un dossier très saturé (MAX_INTERDIT cartes ou plus sur FENETRE jours) est INTERDIT, sauf une
  seule "suite" tous les PAUSE_SUITE jours pour un résultat/vote/décision définitif ;
- une seule carte "suite" par édition ;
- jamais deux cartes du même dossier dans une édition (toutes matières confondues).

Usage : python3 scripts/dossiers.py   -> affiche les dossiers récents (comme preparer.py)
"""
import json
import re
from datetime import date as _date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"

JOURS_PAUSE = 10
FENETRE = 30
MAX_FENETRE = 3
MAX_INTERDIT = 5      # 5 cartes ou plus en 30 jours : dossier interdit (sauf une "suite" espacée)
PAUSE_SUITE = 14      # après une carte "suite", le dossier est interdit pendant 14 jours

# Sujets mis en pause par Alicia : interdits jusqu'à la date indiquée (incluse), même en "suite".
PAUSES = {
    "relation-royaume-uni-ue": "2026-12-05",
}


def slug_ok(s):
    return bool(re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+){1,5}", str(s or "")))


def historique(avant, jours=FENETRE):
    """{dossier: [(date, id, titre), ...]} pour les éditions des `jours` jours avant `avant` (exclu)."""
    d0 = _date.fromisoformat(avant)
    out = {}
    for p in sorted((DATA / "editions").glob("*.json")):
        d = p.stem
        try:
            ecart = (d0 - _date.fromisoformat(d)).days
        except ValueError:
            continue
        if not 0 < ecart <= jours:
            continue
        try:
            ed = json.loads(p.read_text(encoding="utf-8"))
        except Exception:
            continue
        for c in ed.get("cards", []):
            if c.get("dossier"):
                out.setdefault(c["dossier"], []).append((d, c.get("id", ""), c.get("titre", ""), bool(str(c.get("suite", "")).strip())))
    for v in out.values():
        v.sort(reverse=True)
    return out


def bloques(avant):
    """(interdits, suite_possible) : dossiers interdits et dossiers où une "suite" est encore possible."""
    d0 = _date.fromisoformat(avant)
    h = historique(avant)
    interdits, suite_ok = {}, {}
    for dos, fin in PAUSES.items():
        if avant <= fin:
            interdits[dos] = f"INTERDIT : mis en pause par Alicia jusqu'au {fin}, même avec une évolution"
    for dos, cartes in h.items():
        dernier = cartes[0][0]
        ecart = (d0 - _date.fromisoformat(dernier)).days
        sature = len(cartes) >= MAX_FENETRE
        suites = [x[0] for x in cartes if len(x) > 3 and x[3]]
        if suites and (d0 - _date.fromisoformat(suites[0])).days <= PAUSE_SUITE:
            interdits[dos] = f"INTERDIT : déjà une « suite » le {suites[0]}, plus rien sur ce sujet avant {PAUSE_SUITE} jours"
        elif len(cartes) >= MAX_INTERDIT:
            suite_ok[dos] = (f"TRÈS SATURÉ ({len(cartes)} cartes en {FENETRE} jours) : Alicia en a assez — seulement un résultat "
                             "d'élection, un vote définitif ou une décision officielle qui change tout, sinon choisis une autre actu")
        elif ecart <= JOURS_PAUSE:
            suite_ok[dos] = f"traité le {dernier} : seulement en « suite » s'il y a une vraie évolution"
        elif sature:
            suite_ok[dos] = f"saturé ({len(cartes)} cartes en {FENETRE} jours) : seulement en « suite » s'il y a une vraie évolution"
    return interdits, suite_ok


def verifier(date, cards):
    """Liste d'erreurs pour les cartes d'une édition."""
    errors = []
    interdits, suite_ok = bloques(date)
    vus = {}
    suites = []
    for c in cards:
        cid = c.get("id", "?")
        dos = c.get("dossier")
        if not dos:
            errors.append(f"{cid} : champ dossier manquant — voir « Ne pas reprendre un sujet » dans CONSIGNES.md")
            continue
        if not slug_ok(dos):
            errors.append(f"{cid} : dossier {dos!r} invalide — 2 à 6 mots en minuscules sans accents, séparés par des tirets")
            continue
        if dos in vus:
            errors.append(f"{cid} : même dossier ({dos}) que {vus[dos]} — deux cartes de l'édition racontent la même histoire, change l'une des deux")
        vus[dos] = cid
        if c.get("perso"):
            continue  # article choisi par Alicia : jamais bloqué
        if dos in interdits:
            errors.append(f"{cid} : dossier {dos} {interdits[dos]} — choisis une autre actu")
        elif dos in suite_ok:
            if not str(c.get("suite", "")).strip():
                errors.append(f"{cid} : dossier {dos} {suite_ok[dos]} — sinon choisis une autre actu")
            else:
                suites.append(cid)
        elif c.get("suite"):
            errors.append(f"{cid} : champ suite inutile (le dossier {dos} n'a pas été traité récemment) — retire-le")
    if len(suites) > 1:
        errors.append(f"une seule carte « suite » par édition (ici : {', '.join(suites)}) — remplace les autres par des sujets neufs")
    return errors


def resume(avant):
    """Texte affiché par preparer.py."""
    h = historique(avant)
    interdits, suite_ok = bloques(avant)
    lignes = [f"=== DOSSIERS DES {FENETRE} DERNIERS JOURS : réutilise exactement ces identifiants si c'est la même histoire ==="]
    if not h:
        lignes.append("(aucun)")
    for dos in sorted(h, key=lambda d: (-len(h[d]), d)):
        cartes = h[dos]
        etat = "INTERDIT" if dos in interdits else (("TRÈS SATURÉ : résultat/vote/décision définitive seulement" if len(cartes) >= MAX_INTERDIT else "suite seulement") if dos in suite_ok else "libre")
        if etat == "libre" and len(cartes) < 2:
            continue
        lignes.append(f"- {dos} [{etat}] {len(cartes)}x, dernière le {cartes[0][0][5:]} : {cartes[0][2][:75]}")
    return "\n".join(lignes)


if __name__ == "__main__":
    try:
        from zoneinfo import ZoneInfo
        from datetime import datetime
        today = datetime.now(ZoneInfo("Europe/Paris")).date().isoformat()
    except Exception:
        today = _date.today().isoformat()
    print(resume(today))
