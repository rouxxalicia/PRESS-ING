# Press'ing — consignes pour rédiger l'édition du jour

Tu rédiges **Press'ing**, la revue de presse quotidienne d'Alicia, étudiante en 2e année de prépa ECG (voie ESH), qui prépare les concours BCE et Ecricome. Le site lit des fichiers JSON : tu ne touches **jamais** à `index.html`. Dans `data/referentiel.json`, tu peux seulement **ajouter** des fiches : tu ne modifies ni ne supprimes jamais celles qui existent. Tu parles à Alicia en français.

## Étapes, dans l'ordre

1. Note la date du jour (heure de Paris) au format `AAAA-MM-JJ`. Si `data/editions/<date>.json` existe déjà, arrête-toi et dis-le.
2. Lis `data/index.json`, puis les deux dernières éditions de `data/editions/`. Elles servent de **modèle de style et de longueur**, et leurs sujets ne doivent pas être repris.
3. Lis `data/referentiel.json` : la liste des fiches (`id`, `nom`, `auteur`) et une fiche entière, `avantages-comparatifs`, qui sert de modèle.
4. Cherche sur le web l'actualité **des dernières 48 heures**, puis choisis 4 actus par matière (la première est l'actu principale) :
   - **esh** : économie française, européenne ou mondiale, et faits sociaux. Il faut qu'on puisse s'en servir dans une dissertation d'ESH.
   - **anglais** : Royaume-Uni et États-Unis (politique, société, économie).
   - **espagnol** : Espagne et Amérique latine.
   - **allemand** : Allemagne (Autriche ou Suisse seulement si c'est vraiment marquant).
   **Uniquement des médias reconnus**, ceux de la liste « Sources autorisées » ci-dessous. Si tu trouves une info ailleurs, retrouve-la dans un de ces médias avant de l'utiliser ; sinon, choisis une autre actu.
   Privilégie les sujets qui tombent au concours : institutions, politique économique, inégalités, élections, mondialisation, Europe, transition écologique. Évite les faits divers sans portée.
5. Choisis la liste **« À lire »** : 3 articles des *Échos* et 3 articles du *Monde* (voir « À lire » ci-dessous).
6. Trouve une photo pour chaque carte (voir « Photos » ci-dessous).
7. Écris `data/editions/<date>.json` (format ci-dessous), avec les 16 cartes dans l'ordre esh, anglais, espagnol, allemand, puis la liste `a_lire`.
8. Pour chaque auteur des cartes esh dont la théorie n'a pas encore de fiche, **ajoute une fiche** à la fin de la liste `fiches` de `data/referentiel.json` (voir « Fiches du référentiel » ci-dessous), puis mets son `id` dans le `ref` de l'auteur.
9. Ajoute la date **en premier** dans la liste `editions` de `data/index.json`.
10. Lance `python3 scripts/anki.py` : il fabrique les paquets Anki dans `data/anki/`.
11. Lance `python3 scripts/verifier.py` et corrige jusqu'à ce qu'il affiche « Édition valide ». Il ouvre chaque lien d'article : s'il signale un lien cassé, retrouve le vrai article et remplace l'adresse (ne contourne jamais le contrôle avec `--sans-liens`).
12. Termine par un message très court à Alicia : les 16 titres, les 6 articles « À lire », les fiches ajoutées au référentiel, et ce qu'il te reste à faire pour publier (dans GitHub Desktop : **Commit**, puis **Push origin**).

## Sources autorisées

**Chaque carte s'appuie sur un article de journal.** Le champ `url` doit pointer vers un article de l'un de ces journaux ou agences de presse (ou un de leurs sous-domaines). Le vérificateur refuse tout autre site.

Les sites officiels (Insee, BCE, Banque de France, Eurostat, INE, Destatis, gouvernements…) ne sont **jamais** la source d'une carte : tu peux t'en servir pour vérifier un chiffre, mais la carte renvoie vers l'article de presse qui traite l'actu. Pour l'ESH, privilégie Les Échos, Le Monde, Le Figaro, La Tribune, Alternatives économiques, le Financial Times, The Economist, Reuters ou l'AFP.

- **Agences de presse** : afp.com, reuters.com, apnews.com
- **Presse française** : lemonde.fr, lesechos.fr, lefigaro.fr, liberation.fr, la-croix.com, ouest-france.fr, francetvinfo.fr, radiofrance.fr, franceculture.fr, france24.com, rfi.fr, latribune.fr, challenges.fr, alternatives-economiques.fr, lexpress.fr, lepoint.fr, nouvelobs.com, courrierinternational.com, mediapart.fr, publicsenat.fr
- **Presse anglophone** : bbc.com, bbc.co.uk, theguardian.com, ft.com, economist.com, telegraph.co.uk, thetimes.com, independent.co.uk, nytimes.com, washingtonpost.com, wsj.com, bloomberg.com, politico.com, politico.eu, npr.org, cnn.com, axios.com, theatlantic.com
- **Presse hispanophone** : elpais.com, elmundo.es, abc.es, lavanguardia.com, eldiario.es, elconfidencial.com, rtve.es, europapress.es, efe.com, expansion.com, cincodias.elpais.com, clarin.com, lanacion.com.ar, eluniversal.com.mx, eltiempo.com, latercera.com, bbc.com/mundo
- **Presse germanophone** : tagesschau.de, zdf.de, dw.com, spiegel.de, zeit.de, faz.net, sueddeutsche.de, handelsblatt.com, welt.de, tagesspiegel.de, taz.de, nzz.ch, derstandard.at, diepresse.com

`source` porte le vrai nom du média (« Le Monde », « El País », « Tagesschau »…).

## À lire

Sous les actus, le site affiche une petite liste d'articles à lire en entier : **3 des *Échos* (lesechos.fr) et 3 du *Monde* (lemonde.fr)**, publiés dans les **dernières 48 heures**. Ce ne sont pas des cartes : juste un titre, un lien et une phrase.

- Choisis les articles les plus **utiles pour la prépa** : analyses, décryptages, tribunes d'économistes, enquêtes de fond, chiffres clés (croissance, inflation, emploi, budget, dette, commerce, Europe, inégalités, écologie, politique). Évite les brèves, les directs, les vidéos, les faits divers, le sport, la culture people.
- Les articles réservés aux abonnés sont **acceptés** (Alicia est abonnée aux *Échos*).
- Ne reprends pas un article déjà utilisé comme `url` d'une carte de l'édition, et évite les sujets déjà traités par les cartes : la liste doit apporter autre chose.
- `titre` : le vrai titre de l'article, tel qu'il apparaît sur le site (c'est la seule exception à la règle « tes propres mots »).
- `pourquoi` : **une seule phrase** en français qui dit ce que l'article apporte pour une dissertation ou une khôlle (la notion, le débat, le chiffre à retenir). Concepts clés en `**gras**` si besoin.
- `url` : même règle que pour les cartes, **copiée depuis la barre d'adresse** après avoir ouvert l'article ; jamais reconstituée de mémoire.
- `journal` : exactement « Les Échos » ou « Le Monde ».

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
- `source` : le média principal. `minutes` : 3.
- `url` : **ouvre l'article dans le navigateur et copie l'adresse depuis la barre d'adresse.** N'écris **jamais** une adresse de mémoire, ne la reconstitue pas à partir du titre, n'invente pas d'identifiant (un lien inventé tombe sur une page d'erreur). Pas de page de direct, de vidéo ou de tag : un article. Si tu ne retrouves pas l'article exact, choisis une autre actu.
- `id` : `<date>-<matiere>-<numéro>`, par exemple `2026-11-01-esh-1`.
- `sujets` : 2 sujets de dissertation (en français pour l'ESH, dans la langue étrangère pour les langues).

### Cartes esh (en plus)
- `programme` : `module` et `chapitre` du programme d'ESH d'ECG. Reprends les intitulés déjà utilisés dans les éditions précédentes quand ils conviennent, n'en invente pas.
- `auteurs` : 2 auteurs, chacun avec `nom`, `ouvrage` (titre français s'il existe), `annee`, `ref` et `texte`.
  - `texte` : 3 ou 4 phrases. Dis ce que soutient la théorie, **ce qu'elle permet de montrer sur cette actu**, et dans quel type de sujet la mobiliser. Les concepts clés vont en `**gras**`. C'est la partie la plus importante : Alicia ne voit pas toujours à quoi sert une théorie.
  - Idéalement, choisis un auteur qui va dans le sens de l'actu et un qui nuance ou s'y oppose.
  - `ref` : **obligatoire**, l'identifiant de la fiche du référentiel qui correspond à la théorie mobilisée. Si elle n'existe pas encore, tu la crées (étape 8). Ne crée pas de doublon : si une fiche traite déjà la même théorie, utilise-la.
- Pas de `vo` ni de `vocab`.

### Cartes de langue (en plus)
- `vo` : `titre`, `faits` et `enjeux` traduits dans la langue de la carte, naturels et idiomatiques : niveau C1 en anglais et en espagnol, niveau B2 en allemand.
- Allemand : le niveau B2 vaut pour `vo`, `vocab` et `sujets`. Écris des phrases plus courtes, avec un vocabulaire courant et une syntaxe simple. Ne prends pas pour modèle les anciennes éditions, dont l'allemand est en C1.
- `vocab` : 6 paires `["mot ou expression en langue étrangère", "traduction française"]`, utiles pour un essai.
- Pas de `programme` ni d'`auteurs`.

### Cartes Anki (esh, anglais, espagnol ; jamais l'allemand)
- `anki` : 2 à 4 cartes `{"q": "recto", "r": "verso"}` sur les **faits et chiffres citables** de l'article. Aucune carte artificielle : seulement ce qu'Alicia pourra citer en dissertation ou en khôlle. Tout vient de `faits` et `enjeux`, rien d'inventé.
- Langue : français pour l'esh, anglais pour l'anglais, espagnol pour l'espagnol.
- Recto court et précis. Il ne révèle **jamais** la réponse (ni le chiffre, ni la date, ni l'auteur). Ne commence pas par « Quel » ou « Quelle ». Exemples : « Part de X dans Y (pays, date) », « Exemple de … ».
- Verso : le fait en une ligne, puis à la ligne une flèche `→` et **l'argument**, c'est-à-dire ce que ça montre et ce qu'Alicia peut en tirer en dissertation. C'est le plus important de la carte. S'il n'y a vraiment rien à en tirer, n'écris pas de flèche : ne remplis jamais pour remplir. Pas de listes, ni d'étiquettes du type « Fait » ou « Enjeu ».
- Cartes esh : ajoute l'auteur qui soutient ou nuance l'argument, pris dans les `auteurs` de l'article : `A{Ricardo}, O{Des principes de l'économie politique et de l'impôt} (D{1817}) : ce que ça montre.` S'il n'y a pas de lien solide avec un auteur, n'en mets pas.
- Code couleur dans le verso : `C{95 Md$}` pour un chiffre, `D{1950}` pour une date, `A{Prebisch}` pour un auteur, `O{titre}` pour un ouvrage, `B{mot}` pour le gras. Retour à la ligne : `\n`.
- Dans `vocab` des cartes de langue, chaque entrée a 3 éléments : `["mot", "traduction", "courte phrase d'exemple dans la langue, écrite par toi"]`. La phrase d'exemple n'est pas celle de l'article. Si elle n'apporte rien, mets seulement `["mot", "traduction"]`.

## Fiches du référentiel

Une fiche = **une théorie ou une notion** (pas un auteur en général) : « Destruction créatrice », pas « Schumpeter ». Elle doit être aussi précise qu'une fiche PeakNews et se suffire à elle-même pour une dissertation. Le modèle est la fiche `avantages-comparatifs` : même longueur, même niveau.

```json
{
 "id": "destruction-creatrice", "nom": "Destruction créatrice", "categorie": "croissance",
 "type": "Théorie", "annee": "1942", "auteur": "Joseph Schumpeter",
 "accroche": "Une phrase qui résume l'idée.",
 "blocs": [
  {"titre": "D'où ça vient", "type": "texte", "paras": ["…", "…"]},
  {"titre": "Le mécanisme", "type": "etapes", "items": ["…", "…", "…"]},
  {"titre": "Ce que ça permet de montrer", "type": "texte", "paras": ["…"]},
  {"titre": "Les prolongements à connaître", "type": "cartes", "items": [{"t": "…", "d": "…"}]},
  {"titre": "Ce que ça ne dit pas", "type": "texte", "paras": ["…"]},
  {"titre": "Où l'utiliser", "type": "cartes", "items": [{"t": "…", "d": "…"}]},
  {"titre": "Dialogue", "type": "liens", "items": [{"sens": "=", "nom": "…", "idee": "…"}, {"sens": "≠", "nom": "…", "idee": "…"}]}
 ]
}
```

- `id` : en minuscules, sans accents, mots séparés par des tirets.
- `categorie` : l'une de `fondamentaux`, `commerce`, `croissance`, `politiques`, `monnaie`, `societe`.
- `type` : « Théorie », « Notion », « Modèle », « Effet » ou « Loi ».
- Les 7 blocs ci-dessus, dans cet ordre. Les types de bloc possibles : `texte` (`paras`), `cartes` (`items` avec `t` et `d`), `etapes` (`items`, liste de phrases), `liens` (`items` avec `sens`, `nom`, `idee`).
- **« Ce que ça permet de montrer »** est le bloc le plus important : à quoi sert la théorie dans une dissertation, ce qu'elle prouve. Alicia ne voit pas toujours à quoi sert une théorie.
- **« Où l'utiliser »** : 3 exemples d'actualité ou d'histoire économique où la mobiliser.
- **« Dialogue »** : 3 ou 4 auteurs ou notions liés, marqués `=` (va dans le même sens) ou `≠` (va contre ou nuance), avec leur idée en quelques mots.
- Concepts clés en `**gras**`, titres d'ouvrages en `*italique*`, titres en français quand une traduction existe. **Exactitude avant tout** : aucune date, aucun titre, aucun chiffre dont tu n'es pas sûr.

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
   "sujets": ["…", "…"],
   "anki": [{"q": "…", "r": "…"}]
  },
  {
   "id": "2026-11-01-anglais-1", "matiere": "anglais", "source": "…", "url": "https://…", "minutes": 3,
   "titre": "…", "faits": "…", "enjeux": "…",
   "image": {"url": "https://…", "alt": "…", "credit": "…", "source": "https://…"},
   "vo": {"titre": "…", "faits": "…", "enjeux": "…"},
   "vocab": [["…", "…", "…"]],
   "sujets": ["…", "…"],
   "anki": [{"q": "…", "r": "…"}]
  }
 ],
 "a_lire": [
  {"journal": "Les Échos", "titre": "…", "url": "https://www.lesechos.fr/…", "pourquoi": "…"},
  {"journal": "Les Échos", "titre": "…", "url": "https://www.lesechos.fr/…", "pourquoi": "…"},
  {"journal": "Les Échos", "titre": "…", "url": "https://www.lesechos.fr/…", "pourquoi": "…"},
  {"journal": "Le Monde", "titre": "…", "url": "https://www.lemonde.fr/…", "pourquoi": "…"},
  {"journal": "Le Monde", "titre": "…", "url": "https://www.lemonde.fr/…", "pourquoi": "…"},
  {"journal": "Le Monde", "titre": "…", "url": "https://www.lemonde.fr/…", "pourquoi": "…"}
 ]
}
```

Le modèle le plus fidèle est `data/editions/2026-10-31.json` : même ton, même longueur, même niveau d'analyse. Il sert de modèle pour le **style uniquement** : certaines de ses sources ne sont pas dans la liste autorisée et ne doivent pas être reprises.
