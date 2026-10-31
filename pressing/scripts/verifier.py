"""Vérifie la dernière édition de Press'ing avant publication.

Usage : python3 scripts/verifier.py [AAAA-MM-JJ] [--sans-liens]
Ouvre chaque lien d'article pour vérifier qu'il existe (internet nécessaire).
Sans date, vérifie l'édition la plus récente de data/index.json.
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
MATS = ["esh", "anglais", "espagnol", "allemand"]
errors = []
warnings = []

SOURCES = """afp.com reuters.com apnews.com lemonde.fr lesechos.fr lefigaro.fr liberation.fr la-croix.com
ouest-france.fr francetvinfo.fr radiofrance.fr franceculture.fr france24.com rfi.fr latribune.fr challenges.fr
alternatives-economiques.fr lexpress.fr lepoint.fr nouvelobs.com courrierinternational.com mediapart.fr
publicsenat.fr bbc.com bbc.co.uk theguardian.com ft.com economist.com telegraph.co.uk thetimes.com
independent.co.uk nytimes.com washingtonpost.com wsj.com bloomberg.com politico.com politico.eu npr.org cnn.com
axios.com theatlantic.com elpais.com elmundo.es abc.es lavanguardia.com eldiario.es elconfidencial.com rtve.es
europapress.es efe.com expansion.com clarin.com lanacion.com.ar eluniversal.com.mx eltiempo.com latercera.com
tagesschau.de zdf.de dw.com spiegel.de zeit.de faz.net sueddeutsche.de handelsblatt.com welt.de tagesspiegel.de
taz.de nzz.ch derstandard.at diepresse.com""".split()
IMAGE_HOSTS = ["upload.wikimedia.org", "images.unsplash.com"]


def host(url):
    from urllib.parse import urlparse
    return (urlparse(url).hostname or "").lower()


def allowed(url, domains):
    h = host(url)
    return any(h == d or h.endswith("." + d) for d in domains)


def check_link(url):
    """Ouvre vraiment le lien. Renvoie None si l'article existe, sinon le problème."""
    import os, ssl, urllib.request, urllib.error
    from urllib.parse import urlparse
    ctx = ssl.create_default_context(cafile="/etc/ssl/cert.pem") if os.path.exists("/etc/ssl/cert.pem") else None
    req = urllib.request.Request(url, headers={
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
        "Accept": "text/html,application/xhtml+xml", "Accept-Language": "fr-FR,fr;q=0.9,en;q=0.8"})
    try:
        with urllib.request.urlopen(req, timeout=20, context=ctx) as r:
            final = r.geturl()
    except urllib.error.HTTPError as e:
        if e.code in (401, 402, 403, 429, 451):
            return None  # site qui bloque les robots ou paywall : on ne peut pas trancher
        return f"le lien ne marche pas (erreur {e.code}), l'adresse est fausse"
    except Exception as e:
        return "le lien ne s'ouvre pas (adresse fausse, ou pas de connexion internet)"
    if len(urlparse(final).path.strip("/")) < 12 <= len(urlparse(url).path.strip("/")):
        return "le lien renvoie vers la page d'accueil du journal, l'article n'existe pas à cette adresse"
    return None

try:
    index = json.loads((DATA / "index.json").read_text(encoding="utf-8"))
except Exception as e:
    sys.exit(f"data/index.json illisible : {e}")

args = [a for a in sys.argv[1:] if not a.startswith("--")]
date = args[0] if args else sorted(index.get("editions", []), reverse=True)[0]
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
    elif not allowed(c["url"], SOURCES):
        errors.append(f"{cid} : source non autorisée ({host(c['url'])}) — il faut un article de journal de la liste de CONSIGNES.md")
    elif "--sans-liens" not in sys.argv:
        pb = check_link(c["url"])
        if pb:
            errors.append(f"{cid} : {pb}. Retrouve le vrai article et copie l'adresse depuis la barre du navigateur.")
    img = c.get("image")
    if not img:
        warnings.append(f"{cid} : pas de photo")
    else:
        if not allowed(str(img.get("url", "")), IMAGE_HOSTS):
            errors.append(f"{cid} : photo hors Wikimedia Commons / Unsplash ({host(str(img.get('url', '')))})")
        for k in ("alt", "credit", "source"):
            if not img.get(k):
                errors.append(f"{cid} : photo sans {k}")
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

for w in warnings:
    print(" (à noter)", w)
if errors:
    print(f"{len(errors)} problème(s) dans l'édition du {date} :")
    for e in errors:
        print(" -", e)
    sys.exit(1)
print(f"Édition valide : {date}, {len(cards)} cartes.")
