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

try:
    REF = json.loads((DATA / "referentiel.json").read_text(encoding="utf-8"))
except json.JSONDecodeError as e:
    sys.exit(f"JSON invalide dans data/referentiel.json : {e}")
ref_ids = set()
cat_ids = {c["id"] for c in REF.get("categories", [])}
for f in REF.get("fiches", []):
    fid = f.get("id", "?")
    if fid in ref_ids:
        errors.append(f"référentiel : fiche {fid} en double")
    ref_ids.add(fid)
    for k in ("nom", "categorie", "type", "annee", "auteur", "accroche", "blocs"):
        if not f.get(k):
            errors.append(f"référentiel : fiche {fid} sans {k}")
    if f.get("categorie") and f["categorie"] not in cat_ids:
        errors.append(f"référentiel : fiche {fid}, catégorie {f['categorie']!r} inconnue ({', '.join(sorted(cat_ids))})")
    for b in f.get("blocs", []):
        t = b.get("type")
        if t == "texte" and not b.get("paras"):
            errors.append(f"référentiel : fiche {fid}, bloc « {b.get('titre')} » sans paras")
        elif t in ("cartes", "etapes", "liens") and not b.get("items"):
            errors.append(f"référentiel : fiche {fid}, bloc « {b.get('titre')} » sans items")
        elif t == "cartes" and any(not i.get("t") or not i.get("d") for i in b["items"]):
            errors.append(f"référentiel : fiche {fid}, bloc « {b.get('titre')} » : chaque carte a besoin de t et d")
        elif t == "liens" and any(not i.get("sens") or not i.get("nom") or not i.get("idee") for i in b["items"]):
            errors.append(f"référentiel : fiche {fid}, bloc « {b.get('titre')} » : chaque lien a besoin de sens, nom et idee")
        elif t not in ("texte", "cartes", "etapes", "liens"):
            errors.append(f"référentiel : fiche {fid}, type de bloc {t!r} inconnu")
cards = ed.get("cards", [])

if ed.get("date") != date:
    errors.append(f"le champ date vaut {ed.get('date')!r} au lieu de {date!r}")
order = [c.get("matiere") for c in cards]
for m in MATS:
    n = order.count(m)
    if n != 4:
        errors.append(f"{m} : {n} carte(s) au lieu de 4")
if order != sorted(order, key=lambda m: MATS.index(m) if m in MATS else 9):
    errors.append("les cartes ne sont pas dans l'ordre esh, anglais, espagnol, allemand")

# Variété des journaux : au moins 3 journaux différents par matière, jamais plus de 2 du même
from collections import Counter
from urllib.parse import urlparse


def journal(c):
    h = (urlparse(str(c.get("url", ""))).hostname or "").removeprefix("www.")
    parts = h.split(".")
    return ".".join(parts[-3:]) if len(parts) > 2 and parts[-2] in ("co", "com") and len(parts[-1]) == 2 else ".".join(parts[-2:])


for m in MATS:
    cnt = Counter(journal(c) for c in cards if c.get("matiere") == m)
    if cnt and len(cnt) < 3:
        errors.append(f"{m} : seulement {len(cnt)} journal(aux) différent(s) ({', '.join(cnt)}) — il en faut au moins 3 sur les 4 actus")
    for j, n in cnt.items():
        if n > 2:
            errors.append(f"{m} : {n} actus viennent de {j} — 2 maximum par journal, va chercher dans d'autres journaux")

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
            if not a.get("ref"):
                errors.append(f"{cid} : auteur {a.get('nom', '?')} sans ref — crée sa fiche dans le référentiel")
            elif a["ref"] not in ref_ids:
                errors.append(f"{cid} : ref {a['ref']!r} absente du référentiel — crée la fiche")
            if a.get("cours") and not (ROOT / "data" / "cours" / f"{a['cours']}.json").exists():
                errors.append(f"{cid} : cours {a['cours']!r} inconnu — mets l'id donné par scripts/cours.py")
        notions = c.get("notions") or []
        if not 3 <= len(notions) <= 4 or any(not isinstance(v, list) or len(v) != 2 or not all(v) for v in notions):
            errors.append(f"{cid} : il faut 3 ou 4 notions [notion, définition]")
    elif c.get("matiere") in MATS:
        vo = c.get("vo") or {}
        for k in ("titre", "faits", "enjeux"):
            if not vo.get(k):
                errors.append(f"{cid} : vo.{k} manquant")
        voc = c.get("vocab") or []
        if len(voc) < 5 or any(not isinstance(v, list) or len(v) not in (2, 3) for v in voc):
            errors.append(f"{cid} : vocab doit contenir 6 entrées [mot, traduction, exemple]")
    if c.get("matiere") in ("esh", "anglais", "espagnol"):
        anki = c.get("anki") or []
        if not 2 <= len(anki) <= 4:
            errors.append(f"{cid} : il faut 2 à 4 cartes dans anki")
        if any(not f.get("q") or not f.get("r") for f in anki):
            errors.append(f"{cid} : chaque carte anki a besoin de q et r")
        if not (ROOT / "data" / "anki" / f"{cid}.apkg").exists():
            errors.append(f"{cid} : paquet Anki absent — lance python3 scripts/anki.py")

# Allemand : niveau B2
import re
MOTS_C1 = ["angesichts", "infolge", "zugunsten", "derartig", "maßgeblich", "eindrücklich", "offenbart", "offenbaren", "birgt", "bergen",
           "hinsichtlich", "bezüglich", "demzufolge", "seitens", "mittels", "gravierend", "unerlässlich", "unverzichtbar", "letztlich"]


def phrases(t):
    return [p for p in re.split(r"(?<=[.!?])\s+", str(t).strip()) if p]


for c in cards:
    if c.get("matiere") != "allemand":
        continue
    cid = c.get("id", "?")
    vo = c.get("vo") or {}
    textes = {"vo.faits": vo.get("faits", ""), "vo.enjeux": vo.get("enjeux", "")}
    for nom, t in textes.items():
        ps = phrases(t)
        if not ps:
            continue
        longues = [p for p in ps if len(p.split()) > 15]
        for p in longues:
            errors.append(f"{cid} : {nom}, phrase trop longue pour du B2 ({len(p.split())} mots, max 15) : « {p[:70]}… »")
        moy = sum(len(p.split()) for p in ps) / len(ps)
        if moy > 12:
            errors.append(f"{cid} : {nom}, phrases trop longues en moyenne ({moy:.1f} mots, max 12) — simplifie en B2")
        if ";" in t:
            errors.append(f"{cid} : {nom}, pas de point-virgule en B2")
    if len(str(vo.get("titre", "")).split()) > 9:
        errors.append(f"{cid} : vo.titre trop long pour du B2 (max 9 mots)")
    for v in c.get("vocab") or []:
        if isinstance(v, list) and len(v) == 3 and len(str(v[2]).split()) > 10:
            errors.append(f"{cid} : exemple de vocab trop long pour du B2 (max 10 mots) : « {v[2][:60]} »")
    for sj in c.get("sujets") or []:
        if len(str(sj).split()) > 12:
            errors.append(f"{cid} : sujet trop long pour du B2 (max 12 mots) : « {sj[:60]} »")
    tout = " ".join([str(vo.get("titre", "")), *textes.values(), *[str(v[2]) for v in c.get("vocab") or [] if isinstance(v, list) and len(v) == 3], *map(str, c.get("sujets") or [])]).lower()
    for m in MOTS_C1:
        if re.search(r"\b" + m, tout):
            errors.append(f"{cid} : mot trop soutenu pour du B2 : « {m}… » — remplace-le par un mot courant")

JOURNAUX = {"Les Échos": "lesechos.fr", "Le Monde": "lemonde.fr"}
a_lire = ed.get("a_lire") or []
card_urls = {c.get("url") for c in cards}
for j, dom in JOURNAUX.items():
    n = sum(1 for a in a_lire if a.get("journal") == j)
    if n != 3:
        errors.append(f"à lire : {n} article(s) {j} au lieu de 3")
seen = set()
for i, a in enumerate(a_lire, 1):
    nom = f"à lire n°{i}"
    for k in ("journal", "titre", "url", "pourquoi"):
        if not a.get(k):
            errors.append(f"{nom} : champ {k} manquant ou vide")
    url = str(a.get("url", ""))
    if a.get("journal") not in JOURNAUX:
        errors.append(f"{nom} : journal {a.get('journal')!r} — il faut « Les Échos » ou « Le Monde »")
    elif not allowed(url, [JOURNAUX[a["journal"]]]):
        errors.append(f"{nom} : l'adresse n'est pas sur {JOURNAUX[a['journal']]}")
    elif "--sans-liens" not in sys.argv:
        pb = check_link(url)
        if pb:
            errors.append(f"{nom} : {pb}. Retrouve le vrai article et copie l'adresse depuis la barre du navigateur.")
    if url in seen:
        errors.append(f"{nom} : article en double dans la liste")
    if url in card_urls:
        errors.append(f"{nom} : déjà utilisé comme source d'une carte, choisis-en un autre")
    seen.add(url)

for w in warnings:
    print(" (à noter)", w)
if errors:
    print(f"{len(errors)} problème(s) dans l'édition du {date} :")
    for e in errors:
        print(" -", e)
    sys.exit(1)
print(f"Édition valide : {date}, {len(cards)} cartes, {len(a_lire)} articles à lire.")
