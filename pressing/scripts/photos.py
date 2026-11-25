"""Récupère la vraie photo d'un article de presse (comme PeakNews) ou cherche en secours sur Wikimedia Commons.

Usage :
  python3 scripts/photos.py --url "https://www.lemonde.fr/..."
  python3 scripts/photos.py "mots-clés en anglais" [--n 8] [--portrait]

Mode prioritaire (--url) :
  Extrait l'image principale de l'article (og:image / twitter:image / JSON-LD),
  vérifie qu'elle est accessible en HTTPS et affiche l'objet "image" prêt à copier.

Mode secours (mots-clés) :
  Cherche sur Wikimedia Commons si l'article n'a pas de photo exploitable.
Internet nécessaire.
"""
import html
import json
import re
import subprocess
import sys
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
API = "https://commons.wikimedia.org/w/api.php"
UA = "IndexPrepa/1.0 (revue de presse etudiante; https://rouxxalicia.github.io/PRESS-ING/)"
BROWSER_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
EXCLURE = re.compile(r"\b(logo|map|carte|karte|mapa|diagram|chart|graph|plan|coat of arms|blason|wappen|escudo|icon|seal|signature|screenshot|poster|affiche)\b", re.I)
BAD_PRESS_IMG = re.compile(r"(?:favicon|default[-_]?og|og[-_]?default|placeholder|sprite|1x1|pixel|blank\.(?:png|gif)|apple-touch-icon|logo[-_.]\w*\.(?:png|svg|jpg))", re.I)


def texte(s, n=160):
    s = html.unescape(re.sub(r"<[^>]+>", " ", s or ""))
    s = re.sub(r"\s+", " ", s).strip()
    return s if len(s) <= n else s[: n - 1] + "…"


def deja_utilisees():
    """Photos des 10 dernières éditions : {nom de fichier: date}."""
    vues = {}
    try:
        index = json.loads((DATA / "index.json").read_text(encoding="utf-8"))
        for d in index.get("editions", [])[:10]:
            p = DATA / "editions" / f"{d}.json"
            if not p.exists():
                continue
            for c in json.loads(p.read_text(encoding="utf-8")).get("cards", []):
                u = (c.get("image") or {}).get("url") or ""
                if u:
                    vues.setdefault(nom_fichier(u), d)
    except Exception:
        pass
    return vues


def nom_fichier(url):
    """Nom du fichier Commons à partir d'une adresse upload.wikimedia.org (miniature ou original)."""
    parts = urllib.parse.unquote(url).split("/")
    if "thumb" in parts:
        i = parts.index("thumb")
        return parts[i + 3] if len(parts) > i + 3 else parts[-1]
    return parts[-1]


def chercher(q, n, portrait):
    params = {
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": q + " filetype:bitmap", "gsrnamespace": "6", "gsrlimit": "40",
        "prop": "imageinfo", "iiprop": "url|size|mime|extmetadata", "iiurlwidth": "1280",
    }
    req = urllib.request.Request(API + "?" + urllib.parse.urlencode(params), headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=25) as r:
        data = json.load(r)
    pages = sorted((data.get("query") or {}).get("pages", {}).values(), key=lambda p: p.get("index", 99))
    res = []
    for p in pages:
        ii = (p.get("imageinfo") or [{}])[0]
        titre = p.get("title", "")
        w, h = ii.get("width", 0), ii.get("height", 0)
        meta = ii.get("extmetadata") or {}
        desc = texte((meta.get("ImageDescription") or {}).get("value"))
        if ii.get("mime") not in ("image/jpeg", "image/png", "image/webp"):
            continue
        if w < 1000 or not ii.get("thumburl"):
            continue
        if not portrait and w < h * 1.15:
            continue
        if EXCLURE.search(titre) or EXCLURE.search(desc):
            continue
        licence = texte((meta.get("LicenseShortName") or {}).get("value"), 40)
        if licence and not re.search(r"CC|Public domain|PD|GFDL|domaine public|FAL", licence, re.I):
            continue
        auteur = texte((meta.get("Artist") or {}).get("value"), 60) or "Auteur inconnu"
        res.append({
            "titre": titre.replace("File:", ""), "desc": desc, "taille": f"{w}×{h}", "licence": licence,
            "image": {
                "url": ii["thumburl"],
                "alt": "",
                "credit": f"{auteur} / Wikimedia Commons",
                "source": ii.get("descriptionurl", ""),
            },
        })
        if len(res) >= n:
            break
    return res


def _meta_content(page_html, attr, val):
    for pat in (
        rf'<meta[^>]+{attr}=["\']{val}["\'][^>]+content=["\']([^"\']+)["\']',
        rf'<meta[^>]+content=["\']([^"\']+)["\'][^>]+{attr}=["\']{val}["\']',
    ):
        m = re.search(pat, page_html, re.I)
        if m:
            return html.unescape(m.group(1).strip())
    return ""


def _verifier_url_image(url):
    r = subprocess.run(
        ["curl", "-sIL", "--max-time", "10", "-A", BROWSER_UA, url],
        capture_output=True, text=True,
    )
    if r.returncode != 0:
        return False
    headers = r.stdout.lower()
    return "content-type: image/" in headers and bool(re.search(r"http/\S+\s+(?:200|206)\b", headers))


def photo_article(article_url):
    """Extrait l'image principale d'un article de presse (og:image / twitter:image / JSON-LD)."""
    r = subprocess.run(
        ["curl", "-sL", "--max-time", "12", "-A", BROWSER_UA, article_url],
        capture_output=True, text=True, errors="replace",
    )
    if r.returncode != 0 or not r.stdout:
        return None, "impossible de télécharger la page de l'article"
    page = r.stdout
    candidates = []
    for attr, val in (
        ("property", "og:image:secure_url"),
        ("property", "og:image"),
        ("name", "twitter:image:src"),
        ("name", "twitter:image"),
    ):
        u = _meta_content(page, attr, val)
        if u:
            candidates.append(u)
    for m in re.finditer(r'"image"\s*:\s*(?:\[\s*)?"(https?://[^"]+)"', page):
        candidates.append(html.unescape(m.group(1)))

    site = _meta_content(page, "property", "og:site_name")
    if not site:
        h = (urllib.parse.urlparse(article_url).hostname or "").lower()
        site = h.removeprefix("www.")

    vues = deja_utilisees()
    for u in candidates:
        u = urllib.parse.urljoin(article_url, u)
        if u.startswith("http://"):
            u = "https://" + u[7:]
        if not u.startswith("https://") or BAD_PRESS_IMG.search(u):
            continue
        if _verifier_url_image(u):
            deja = vues.get(nom_fichier(u))
            return {
                "deja_utilisee": deja,
                "image": {
                    "url": u,
                    "alt": "",
                    "credit": site or "Presse",
                    "source": article_url,
                },
            }, None
    return None, "aucune image d'article exploitable trouvée (protégée ou absente)"


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)
    if args[0] in ("--url", "--article") and len(args) >= 2:
        res, err = photo_article(args[1])
        if err:
            print(f"Pas de photo exploitable sur cet article ({err}).")
            print('Utilise le mode secours : python3 scripts/photos.py "mots-clés en anglais"')
            sys.exit(1)
        if res["deja_utilisee"]:
            print(f"⚠ Photo déjà utilisée le {res['deja_utilisee']}")
        print("Photo de l'article trouvée — copie cet objet dans \"image\" et écris un \"alt\" en français :\n")
        print(json.dumps(res["image"], ensure_ascii=False))
        return
    if args[0].startswith("-"):
        print(__doc__)
        sys.exit(1)
    q = args[0]
    n = int(args[args.index("--n") + 1]) if "--n" in args else 8
    try:
        res = chercher(q, n, "--portrait" in args)
    except Exception as e:
        print(f"Recherche impossible ({e}). Vérifie la connexion internet et réessaie.")
        sys.exit(1)
    if not res:
        print(f"Aucune photo correcte pour « {q} ». Essaie d'autres mots-clés en anglais, plus concrets "
              "(un lieu précis, un objet, une activité), ou plus généraux si c'était trop précis.")
        return
    vues = deja_utilisees()
    print(f"Photos pour « {q} » — choisis celle qui montre vraiment le sujet de l'article.\n")
    for i, r in enumerate(res, 1):
        d = vues.get(nom_fichier(r["image"]["url"]))
        print(f"[{i}] {r['titre']}  ({r['taille']}, {r['licence'] or 'licence ?'})" + (f"  ⚠ DÉJÀ UTILISÉE le {d}" if d else ""))
        if r["desc"]:
            print(f"    {r['desc']}")
        print("    " + json.dumps(r["image"], ensure_ascii=False))
        print()
    print("Copie l'objet de la photo choisie dans le champ \"image\" de la carte et écris un \"alt\" en français "
          "qui décrit ce qu'on voit sur la photo.")


if __name__ == "__main__":
    main()
