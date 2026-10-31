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
   Privilégie les sujets qui tombent au concours : institutions, politique économique, inégalités, élections, mondialisation, Europe, transition écologique. Évite les faits divers sans portée.
5. Écris `data/editions/<date>.json` (format ci-dessous), avec les 12 cartes dans l'ordre esh, anglais, espagnol, allemand.
6. Ajoute la date **en premier** dans la liste `editions` de `data/index.json`.
7. Lance `python3 scripts/verifier.py` et corrige jusqu'à ce qu'il affiche « Édition valide ».
8. Termine par un message très court à Alicia : les 12 titres, et ce qu'il te reste à faire pour publier (dans GitHub Desktop : **Commit**, puis **Push origin**).

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
   "programme": {"module": "…", "chapitre": "…"},
   "auteurs": [{"nom": "…", "ouvrage": "…", "annee": "…", "ref": null, "texte": "…"}],
   "sujets": ["…", "…"]
  },
  {
   "id": "2026-11-01-anglais-1", "matiere": "anglais", "source": "…", "url": "https://…", "minutes": 3,
   "titre": "…", "faits": "…", "enjeux": "…",
   "vo": {"titre": "…", "faits": "…", "enjeux": "…"},
   "vocab": [["…", "…"]],
   "sujets": ["…", "…"]
  }
 ]
}
```

Le modèle le plus fidèle est `data/editions/2026-10-31.json` : même ton, même longueur, même niveau d'analyse.
