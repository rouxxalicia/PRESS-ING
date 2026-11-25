"""Collecte les flux RSS des grands journaux autorisés (48h) et filtre les sujets utiles prépa ECG.

Usage :
    python3 scripts/rss.py              -> toutes les matières (esh, anglais, espagnol)
    python3 scripts/rss.py esh anglais  -> seulement les matières demandées
    python3 scripts/rss.py --max 15     -> nombre d'articles affichés par matière (défaut : 12)
"""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
import html
import re
import subprocess
import sys
import unicodedata
import xml.etree.ElementTree as ET

# Tous les domaines ci-dessous figurent dans « Sources autorisées » de CONSIGNES.md
FEEDS = {
    "esh": [
        ("Le Monde", "https://www.lemonde.fr/economie/rss_full.xml"),
        ("Le Monde", "https://www.lemonde.fr/rss/une.xml"),
        ("Le Figaro", "https://www.lefigaro.fr/rss/figaro_economie.xml"),
        ("La Tribune", "https://www.latribune.fr/feed.xml"),
        ("RFI", "https://www.rfi.fr/fr/economie/rss"),
        ("France 24", "https://www.france24.com/fr/eco-tech/rss"),
        ("Alternatives économiques", "https://www.alternatives-economiques.fr/rss.xml"),
        ("France Culture", "https://www.radiofrance.fr/franceculture/rss"),
    ],
    "anglais": [
        ("The Guardian", "https://www.theguardian.com/uk-news/rss"),
        ("The Guardian", "https://www.theguardian.com/us-news/rss"),
        ("BBC", "https://feeds.bbci.co.uk/news/uk/rss.xml"),
        ("BBC", "https://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml"),
        ("BBC", "https://feeds.bbci.co.uk/news/business/rss.xml"),
        ("The New York Times", "https://rss.nytimes.com/services/xml/rss/nyt/US.xml"),
        ("The New York Times", "https://rss.nytimes.com/services/xml/rss/nyt/Economy.xml"),
        ("NPR", "https://feeds.npr.org/1001/rss.xml"),
        ("Financial Times", "https://www.ft.com/rss/home"),
        ("The Economist", "https://www.economist.com/finance-and-economics/rss.xml"),
    ],
    "espagnol": [
        ("El País", "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/espana/portada"),
        ("El País", "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/economia/portada"),
        ("El País", "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/america/portada"),
        ("El Mundo", "https://e00-elmundo.uecdn.es/elmundo/rss/espana.xml"),
        ("El Mundo", "https://e00-elmundo.uecdn.es/elmundo/rss/economia.xml"),
        ("La Vanguardia", "https://www.lavanguardia.com/rss/economia.xml"),
        ("Expansión", "https://e00-expansion.uecdn.es/rss/economia.xml"),
        ("elDiario.es", "https://www.eldiario.es/rss/"),
        ("BBC Mundo", "https://feeds.bbci.co.uk/mundo/rss.xml"),
        ("La Nación", "https://www.lanacion.com.ar/arc/outboundfeeds/rss/"),
        ("El Tiempo", "https://www.eltiempo.com/rss/politica.xml"),
        ("Clarín", "https://www.clarin.com/rss/politica/"),
    ],
    "allemand": [
        ("Tagesschau", "https://www.tagesschau.de/infoservices/alle-meldungen-100~rss2.xml"),
        ("Der Spiegel", "https://www.spiegel.de/politik/deutschland/index.rss"),
        ("Der Spiegel", "https://www.spiegel.de/wirtschaft/index.rss"),
        ("Die Zeit", "https://newsfeed.zeit.de/wirtschaft/index"),
        ("Die Zeit", "https://newsfeed.zeit.de/politik/deutschland/index"),
        ("FAZ", "https://www.faz.net/rss/aktuell/wirtschaft/"),
        ("FAZ", "https://www.faz.net/rss/aktuell/politik/inland/"),
        ("DW", "https://rss.dw.com/rdf/rss-de-all"),
        ("Süddeutsche Zeitung", "https://rss.sueddeutsche.de/rss/Wirtschaft"),
    ],
}

# Exclusions automatiques : bruit pur (people, lifestyle, jeux, directs/liveblogs)
BAD_URL_RE = re.compile(
    r"/(?:people|celebrity|lifestyle|lifeandstyle|style|fashion|mode|food|recipes|gastronomie|"
    r"travel|voyage|horoscope|meteo|weather|games|crosswords|quiz|puzzles|"
    r"live|liveblog|liveticker|direct|en-direct|gallery|photos|slideshow|"
    r"gente|ocio|motor|salud-y-bienestar|espectaculos|horoscopo|"
    r"unterhaltung|reise|stil|panorama/leute)/",
    re.I,
)
BAD_TITLE_RE = re.compile(
    r"\b(?:en direct|live updates|liveblog|liveticker|quiz|crossword|"
    r"oscars|grammys|eurovision|horoscope|recipe|météo|loterie|euromillions)\b",
    re.I,
)
# Sport pur : exclu seulement s'il n'a aucun lien politique, économique ou social (score == 0)
SPORT_RE = re.compile(
    r"/(?:sport|sports|football|soccer|tennis|rugby|basketball|golf|cricket|f1|formula-?1|deportes|futbol|bundesliga)/|"
    r"\b(?:premier league|champions league|nba|nfl|bundesliga|la liga|roland-garros)\b",
    re.I,
)

# Mots-clés concours ECG à forte valeur ajoutée (remonte les incontournables en tête)
BOOST = {
    "esh": [
        "bce", "fed", "banque centrale", "taux", "inflation", "pib", "croissance", "recession",
        "dette", "deficit", "budget", "impot", "taxe", "fiscal", "reforme", "retraite",
        "chomage", "emploi", "salaire", "smic", "pouvoir d achat", "inegalite", "pauvrete",
        "commerce", "droits de douane", "libre echange", "protectionnisme", "omc", "mercosur",
        "industrie", "desindustrialisation", "productivite", "competitivite", "investissement",
        "intelligence artificielle", "ia", "transition ecologique", "carbone", "energie", "nucleaire",
        "union europeenne", "zone euro", "bruxelles", "fmi", "ocde", "chine", "etats unis",
        "greve", "logement", "demographie", "banque", "marche financier", "concurrence", "monopole",
    ],
    "anglais": [
        "economy", "inflation", "interest rate", "fed", "bank of england", "gdp", "recession",
        "budget", "tax", "debt", "deficit", "tariff", "trade", "labour", "conservative", "starmer",
        "trump", "congress", "senate", "supreme court", "election", "midterm", "governor",
        "nhs", "healthcare", "housing", "rent", "immigration", "asylum", "border", "migrant",
        "inequality", "poverty", "wage", "union", "strike", "unemployment", "ai", "tech",
        "climate", "energy", "net zero", "brexit", "eu", "nato", "china", "canada", "australia", "ireland",
    ],
    "espagnol": [
        "economia", "inflacion", "pib", "crecimiento", "deuda", "deficit", "presupuesto",
        "impuesto", "fiscal", "pension", "jubilacion", "vivienda", "alquiler", "empleo", "paro",
        "salario", "huelga", "desigualdad", "pobreza", "migracion", "inmigracion",
        "arancel", "comercio", "mercosur", "union europea", "banco central", "litio", "energia",
        "elecciones", "congreso", "parlamento", "gobierno", "reforma", "democracia", "justicia",
        "espana", "sanchez", "argentina", "milei", "mexico", "sheinbaum", "chile", "colombia", "peru", "brasil",
    ],
    "allemand": [
        "wirtschaft", "konjunktur", "rezession", "inflation", "ezb", "zinsen", "bip",
        "haushalt", "schuldenbremse", "schulden", "steuer", "rente", "reform", "sozialstaat",
        "arbeitsmarkt", "arbeitslos", "lohn", "tarif", "streik", "ig metall", "fachkrafte",
        "industrie", "auto", "volkswagen", "export", "zoll", "handel", "energie", "klimaschutz",
        "bundestag", "bundesrat", "koalition", "regierung", "merz", "afd", "wahl",
        "migration", "asyl", "grenze", "eu", "nato", "verteidigung", "bundeswehr", "wohnen", "miete",
    ],
}


def norm(s):
    s = unicodedata.normalize("NFD", str(s or "").lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", s).strip()


def clean_text(s):
    s = html.unescape(str(s or ""))
    s = re.sub(r"<[^>]+>", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def parse_date(raw):
    if not raw:
        return None
    raw = raw.strip()
    try:
        dt = parsedate_to_datetime(raw)
        return dt if dt.tzinfo else dt.replace(tzinfo=timezone.utc)
    except Exception:
        pass
    try:
        dt = datetime.fromisoformat(raw.replace("Z", "+00:00"))
        return dt if dt.tzinfo else dt.replace(tzinfo=timezone.utc)
    except Exception:
        return None


BAD_IMG_RE = re.compile(r"(?:1x1|pixel|spacer|blank|favicon|feedburner|doubleclick|scorecardresearch|logo[-_]?(?:default|placeholder)?\.(?:png|svg))", re.I)


def extract_rss_image(it, raw_desc=""):
    """Extrait l'URL d'image principale d'un item RSS/Atom (media:content, media:thumbnail, enclosure, img)."""
    candidates = []
    for tag in (
        "{http://search.yahoo.com/mrss/}content",
        "{http://search.yahoo.com/mrss/}thumbnail",
        "enclosure",
    ):
        for el in it.findall(tag):
            u = (el.attrib.get("url") or "").strip()
            if not u.startswith("http"):
                continue
            t = (el.attrib.get("type") or "").lower()
            m = (el.attrib.get("medium") or "").lower()
            if tag == "enclosure" and t and not t.startswith("image/"):
                continue
            if m and m != "image" and not t.startswith("image/"):
                continue
            candidates.append(u)
    if raw_desc:
        for m in re.finditer(r'<img[^>]+src=["\']([^"\']+)["\']', raw_desc, re.I):
            u = html.unescape(m.group(1).strip())
            if u.startswith("http"):
                candidates.append(u)
    for u in candidates:
        if u.startswith("http://"):
            u = "https://" + u[7:]
        if not BAD_IMG_RE.search(u):
            return u
    return ""


def fetch_feed(args):
    mat, source, url = args
    try:
        r = subprocess.run(["curl", "-sL", "--max-time", "7", url], capture_output=True)
        if r.returncode != 0 or not r.stdout:
            return []
        root = ET.fromstring(r.stdout)
    except Exception:
        return []

    out = []
    # RSS 2.0 / RDF 1.0 / Atom
    items = (
        root.findall(".//item")
        or root.findall(".//{http://purl.org/rss/1.0/}item")
        or root.findall(".//{http://www.w3.org/2005/Atom}entry")
    )
    for it in items:
        def get_tag(*names):
            for n in names:
                el = it.find(n)
                if el is not None and (el.text or el.attrib.get("href")):
                    return el.text or el.attrib.get("href")
            return ""

        title = clean_text(get_tag("title", "{http://purl.org/rss/1.0/}title", "{http://www.w3.org/2005/Atom}title"))
        link = clean_text(get_tag("link", "{http://purl.org/rss/1.0/}link", "{http://www.w3.org/2005/Atom}link"))
        raw_desc = get_tag(
            "description",
            "{http://purl.org/rss/1.0/}description",
            "{http://www.w3.org/2005/Atom}summary",
        )
        desc = clean_text(raw_desc)
        img = extract_rss_image(it, raw_desc)
        pub = get_tag(
            "pubDate",
            "{http://purl.org/dc/elements/1.1/}date",
            "{http://www.w3.org/2005/Atom}updated",
            "{http://www.w3.org/2005/Atom}published",
        )
        if not title or not link or not link.startswith("http"):
            continue
        out.append({
            "matiere": mat,
            "source": source,
            "titre": title,
            "desc": desc[:190] + ("…" if len(desc) > 190 else ""),
            "url": link.split("#")[0],
            "image": img,
            "dt": parse_date(pub),
        })
    return out


def score_item(item):
    txt = norm(item["titre"] + " " + item["desc"])
    kws = BOOST.get(item["matiere"], [])
    hits = sum(1 for k in kws if (" " in k and k in txt) or (re.search(r"\b" + re.escape(k) + r"\b", txt)))
    # Petit bonus aux titres qui contiennent un chiffre ou pourcentage (tendance/réforme chiffrée)
    has_num = 1 if re.search(r"\b\d+[.,]?\d*\s*(?:%|milliard|million|billion|euro|€|\$|£)", item["titre"] + " " + item["desc"], re.I) else 0
    return hits * 2 + has_num


def title_sig(title):
    return set(w for w in norm(title).split() if len(w) >= 5)


def collecter(matieres=None, heures=48, par_matiere=12):
    mats = [m for m in (matieres or ["esh", "anglais", "espagnol"]) if m in FEEDS]
    jobs = [(m, src, url) for m in mats for src, url in FEEDS[m]]
    now = datetime.now(timezone.utc)
    cutoff = now - timedelta(hours=heures)

    raw = []
    with ThreadPoolExecutor(max_workers=14) as ex:
        for batch in ex.map(fetch_feed, jobs):
            raw.extend(batch)

    result = {}
    for m in mats:
        seen_urls = set()
        kept = []
        for it in raw:
            if it["matiere"] != m:
                continue
            if it["url"] in seen_urls:
                continue
            if BAD_URL_RE.search(it["url"]) or BAD_TITLE_RE.search(it["titre"]):
                continue
            if it["dt"] and it["dt"] < cutoff:
                continue
            it["score"] = score_item(it)
            if (SPORT_RE.search(it["url"]) or SPORT_RE.search(it["titre"])) and it["score"] < 2:
                continue
            seen_urls.add(it["url"])
            it["sig"] = title_sig(it["titre"])
            kept.append(it)

        # Tri : pertinence concours d'abord, puis fraîcheur
        kept.sort(key=lambda x: (x["score"], x["dt"].timestamp() if x["dt"] else 0), reverse=True)

        # Déduplication de sujets quasi-identiques + plafond de 3 articles par journal
        picked = []
        per_src = {}
        for it in kept:
            if per_src.get(it["source"], 0) >= 3:
                continue
            if it["sig"] and any(
                len(it["sig"] & p["sig"]) >= 3 and len(it["sig"] & p["sig"]) / min(len(it["sig"]), len(p["sig"])) >= 0.5
                for p in picked if p["sig"]
            ):
                continue
            picked.append(it)
            per_src[it["source"]] = per_src.get(it["source"], 0) + 1
            if len(picked) >= par_matiere:
                break
        result[m] = picked
    return result


def formater(data):
    lignes = [
        "=== VIVIER RSS FRAIS (48h, sources autorisées, trié par pertinence concours ★) ===",
        "(Piocher en priorité les sujets ★ utiles en dissertation/khôlle ; compléter par recherche web pour Les Échos ou un angle manquant.)",
    ]
    for m, items in data.items():
        lignes.append(f"\n[{m.upper()}] ({len(items)} candidats)")
        for it in items:
            star = "★ " if it["score"] >= 4 else "  "
            date_str = it["dt"].strftime("%d/%m %Hh") if it["dt"] else "récent"
            lignes.append(f"{star}[{it['source']} · {date_str}] {it['titre']}")
            if it["desc"]:
                lignes.append(f"    {it['desc']}")
            lignes.append(f"    {it['url']}")
            if it.get("image"):
                lignes.append(f"    Image: {it['image']}")
    return "\n".join(lignes)


if __name__ == "__main__":
    args = sys.argv[1:]
    par_mat = 12
    heures = 48
    mats = []
    i = 0
    while i < len(args):
        if args[i] == "--max" and i + 1 < len(args):
            par_mat = int(args[i + 1]); i += 2
        elif args[i] == "--heures" and i + 1 < len(args):
            heures = int(args[i + 1]); i += 2
        elif args[i] in FEEDS:
            mats.append(args[i]); i += 1
        else:
            i += 1
    print(formater(collecter(mats or None, heures=heures, par_matiere=par_mat)))
