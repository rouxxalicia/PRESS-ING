# Press'ing — consignes pour rédiger l'édition du jour

Tu rédiges **Press'ing**, la revue de presse quotidienne d'Alicia, étudiante en 2e année de prépa ECG (voie ESH), qui prépare les concours BCE et Ecricome. Le site lit des fichiers JSON : tu ne touches **jamais** à `index.html` ni à `data/referentiel.json`. Tu parles à Alicia en français.

## Étapes, dans l'ordre

1. Note la date du jour (heure de Paris) au format `AAAA-MM-JJ`. Si `data/editions/<date>.json` existe déjà, arrête-toi et dis-le.
2. Lis `data/index.json`, puis les deux dernières éditions de `data/editions/`. Elles servent de **modèle de style et de longueur**, et leurs sujets ne doivent pas être repris.
3. Lis la liste des identifiants de fiches dans `data/referentiel.json` (champ `id` de chaque élément de `fiches`).
4. Cherche sur le web l'actualité **des dernières 48 heures**, puis choisis 3 actus par matière (la première est l'actu principale) :
   - **esh** : économie française, européenne ou mondiale, et faits sociaux. Il faut qu'on puisse s'en servir dans une dissertation d'ESH.
   - **anglais** : Royaume-Uni et États-Unis (politique, société, économie).
   - **espagnol** : Espagne et Amérique latine.
   - **allemand** : Allemagne (Autriche ou Suisse seulement si c'est vraiment marquant).
   **Uniquement des médias reconnus**, ceux de la liste « Sources autorisées » ci-dessous. Si tu trouves une info ailleurs, retrouve-la dans un de ces médias avant de l'utiliser ; sinon, choisis une autre actu.
   Privilégie les sujets qui tombent au concours : institutions, politique économique, inégalités, élections, mondialisation, Europe, transition écologique. Évite les faits divers sans portée.
5. Trouve une photo pour chaque carte (voir « Photos » ci-dessous).
6. Écris `data/editions/<date>.json` (format ci-dessous), avec les 12 cartes dans l'ordre esh, anglais, espagnol, allemand.
7. Ajoute la date **en premier** dans la liste `editions` de `data/index.json`.
8. Lance `python3 scripts/verifier.py` et corrige jusqu'à ce qu'il affiche « Édition valide ».
9. Termine par un message très court à Alicia : les 12 titres, et ce qu'il te reste à faire pour publier (dans GitHub Desktop : **Commit**, puis **Push origin**).

## Sources autorisées

**Chaque carte s'appuie sur un article de journal.** Le champ `url` doit pointer vers un article de l'un de ces journaux ou agences de presse (ou un de leurs sous-domaines). Le vérificateur refuse tout autre site.

Les sites officiels (Insee, BCE, Banque de France, Eurostat, INE, Destatis, gouvernements…) ne sont **jamais** la source d'une carte : tu peux t'en servir pour vérifier un chiffre, mais la carte renvoie vers l'article de presse qui traite l'actu. Pour l'ESH, privilégie Les Échos, Le Monde, Le Figaro, La Tribune, Alternatives économiques, le Financial Times, The Economist, Reuters ou l'AFP.

- **Agences de presse** : afp.com, reuters.com, apnews.com
- **Presse française** : lemonde.fr, lesechos.fr, lefigaro.fr, liberation.fr, la-croix.com, ouest-france.fr, francetvinfo.fr, radiofrance.fr, franceculture.fr, france24.com, rfi.fr, latribune.fr, challenges.fr, alternatives-economiques.fr, lexpress.fr, lepoint.fr, nouvelobs.com, courrierinternational.com, mediapart.fr, publicsenat.fr
- **Presse anglophone** : bbc.com, bbc.co.uk, theguardian.com, ft.com, economist.com, telegraph.co.uk, thetimes.com, independent.co.uk, nytimes.com, washingtonpost.com, wsj.com, bloomberg.com, politico.com, politico.eu, npr.org, cnn.com, axios.com, theatlantic.com
- **Presse hispanophone** : elpais.com, elmundo.es, abc.es, lavanguardia.com, eldiario.es, elconfidencial.com, rtve.es, europapress.es, efe.com, expansion.com, cincodias.elpais.com, clarin.com, lanacion.com.ar, eluniversal.com.mx, eltiempo.com, latercera.com, bbc.com/mundo
- **Presse germanophone** : tagesschau.de, zdf.de, dw.com, spiegel.de, zeit.de, faz.net, sueddeutsche.de, handelsblatt.com, welt.de, tagesspiegel.de, taz.de, nzz.ch, derstandard.at, diepresse.com

`source` porte le vrai nom du média (« Le Monde », « El País », « Tagesschau »…).

## Photos

Chaque carte a un champ `image` :

```json
"image": {"url": "https://upload.wikimedia.org/…/1280px-….jpg", "alt": "Façade du Bundestag à Berlin", "credit": "Nom du photographe / Wikimedia Commons", "source": "https://commons.wikimedia.org/wiki/File:…"}
```

- **Seulement des photos libres de droits**, prises sur **Wikimedia Commons** (`upload.wikimedia.org`) ou **Unsplash** (`images.unsplash.com`). **Jamais** une photo d'un article de presse, d'une agence (AFP, Reuters, Getty…) ou d'un site quelconque : elles sont protégées.
- `url` : le lien **direct** vers le fichier image (il doit finir par .jpg, .jpeg, .png ou .webp, ou être un lien images.unsplash.com). Pour Wikimedia, prends une version de 1 000 à 1 600 px de large. Vérifie que l'adresse s'ouvre bien et affiche l'image.
- `source` : la page de la photo (page « File: » sur Commons, page de la photo sur Unsplash). `credit` : l'auteur indiqué sur cette page, suivi de « / Wikimedia Commons » ou « / Unsplash ».
- Choisis une **illustration du sujet** : un lieu (parlement, banque centrale, ville), un bâtiment, un drapeau, une usine, un port, un symbole. **Évite les photos de personnes reconnaissables.**
- Photo horizontale de préférence, nette, sans texte incrusté. Évite d'utiliser deux fois la même photo dans une édition.
- Si tu ne trouves vraiment rien de correct, mets `"image": null` plutôt qu'une image douteuse.

## Règles de rédaction

- **Exactitude avant tout.** N'écris que ce que tes recherches confirment : aucun chiffre, aucune date, aucune citation inventés. En cas de doute sur un détail, enlève-le.
- **Tes propres mots.** Ne recopie jamais de phrases des articles. Pas de citation de plus de quelques mots.
- **Rien d'inutile.** Pas de détails, de chiffres ou d'exemples qu'Alicia ne pourra pas réutiliser en dissertation ou en khôlle.
- `faits` : 5 à 7 phrases en français sur ce qui s'est passé.
- `enjeux` : 5 à 7 phrases en français sur pourquoi c'est important pour les concours : le contexte utile, les mécanismes, les notions à retenir (en **gras** avec `**…**`).
- `source` : le média principal. `url` : l'adresse exacte d'un article que tu as réellement consulté. `minutes` : 3.
- `id` : `<date>-<matiere>-<numéro>`, par exemple `2026-11-01-esh-1`.
- `sujets` : 2 sujets de dissertation (en français pour l'ESH, dans la langue étrangère pour les langues).

### Cartes esh (en plus)
- `programme` : `module` et `chapitre` du programme d'ESH d'ECG. Reprends les intitulés déjà utilisés dans les éditions précédentes quand ils conviennent, n'en invente pas.
- `auteurs` : 2 auteurs, chacun avec `nom`, `ouvrage` (titre français s'il existe), `annee`, `ref` et `texte`.
  - `texte` : 3 ou 4 phrases. Dis ce que soutient la théorie, **ce qu'elle permet de montrer sur cette actu**, et dans quel type de sujet la mobiliser. Les concepts clés vont en `**gras**`. C'est la partie la plus importante : Alicia ne voit pas toujours à quoi sert une théorie.
  - Idéalement, choisis un auteur qui va dans le sens de l'actu et un qui nuance ou s'y oppose.
  - `ref` : l'identifiant d'une fiche du référentiel si la théorie correspond exactement, sinon `null`.
- Pas de `vo` ni de `vocab`.

### Cartes de langue (en plus)
- `vo` : `titre`, `faits` et `enjeux` traduits en anglais, espagnol ou allemand, niveau C1, naturels et idiomatiques.
- `vocab` : 6 paires `["mot ou expression en langue étrangère", "traduction française"]`, utiles pour un essai.
- Pas de `programme` ni d'`auteurs`.

## Format du fichier

```json
{
 "date": "2026-11-01",
 "cards": [
  {
   "id": "2026-11-01-esh-1", "matiere": "esh", "source": "…", "url": "https://…", "minutes": 3,
   "titre": "…", "faits": "…", "enjeux": "…",
   "image": {"url": "https://…", "alt": "…", "credit": "…", "source": "https://…"},
   "programme": {"module": "…", "chapitre": "…"},
   "auteurs": [{"nom": "…", "ouvrage": "…", "annee": "…", "ref": null, "texte": "…"}],
   "sujets": ["…", "…"]
  },
  {
   "id": "2026-11-01-anglais-1", "matiere": "anglais", "source": "…", "url": "https://…", "minutes": 3,
   "titre": "…", "faits": "…", "enjeux": "…",
   "image": {"url": "https://…", "alt": "…", "credit": "…", "source": "https://…"},
   "vo": {"titre": "…", "faits": "…", "enjeux": "…"},
   "vocab": [["…", "…"]],
   "sujets": ["…", "…"]
  }
 ]
}
```

Le modèle le plus fidèle est `data/editions/2026-10-31.json` : même ton, même longueur, même niveau d'analyse. Il sert de modèle pour le **style uniquement** : certaines de ses sources ne sont pas dans la liste autorisée et ne doivent pas être reprises.
