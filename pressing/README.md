# Press'ing avec Antigravity (gratuit)

L'agent d'Antigravity rédige l'édition du jour en suivant `CONSIGNES.md`, puis tu la publies en deux clics. Le site est hébergé gratuitement sur GitHub Pages.

## Mise en place (une seule fois, environ 20 minutes)

### 1. Mettre le site sur GitHub
1. Crée un compte sur **github.com**.
2. Bouton **+** en haut à droite → **New repository**. Nom : `pressing`. Laisse **Public** (obligatoire pour GitHub Pages gratuit) → **Create repository**.
3. Clique **uploading an existing file** et glisse **tout le contenu** du dossier décompressé (pas le dossier lui-même) → **Commit changes**.
   - Sur Mac, le fichier caché `.nojekyll` apparaît avec **Cmd + Maj + .** dans le Finder.
4. **Settings → Pages** → Source : **Deploy from a branch**, Branch : **main**, dossier **/ (root)** → **Save**. Après une minute, l'adresse de ton site s'affiche en haut de la page.

### 2. Récupérer le projet sur ton ordinateur
1. Installe **GitHub Desktop** (desktop.github.com) et connecte-toi avec ton compte GitHub.
2. **File → Clone repository** → choisis `pressing` → **Clone**. Le dossier est maintenant sur ton ordinateur (par défaut dans Documents/GitHub/pressing).

### 3. Installer Antigravity
1. Télécharge **Google Antigravity** sur antigravity.google et connecte-toi avec ton compte Google.
2. **Open Folder** → choisis le dossier `pressing` cloné à l'étape 2.

## Chaque matin (2 minutes de ton temps)

1. Ouvre Antigravity sur le dossier `pressing`.
2. Dans le panneau de l'agent, choisis le meilleur modèle disponible (Claude Sonnet ou Gemini Pro de préférence, évite Flash), puis écris :

   > Lis CONSIGNES.md et fais l'édition du jour.

3. Laisse-le travailler. Accepte quand il demande à faire des recherches ou à lancer `python3 scripts/verifier.py`.
   - La première fois, ton Mac peut proposer d'installer les « outils de ligne de commande » pour Python : accepte.
4. Quand il a fini, ouvre **GitHub Desktop** : écris un résumé (par exemple « Édition du 1er novembre ») → **Commit to main** → **Push origin**.
5. Le site est à jour une minute plus tard.

## Si quelque chose cloche
- **Le vérificateur signale des problèmes** : demande à l'agent « corrige les problèmes du vérificateur ».
- **Une actu te paraît fausse** : demande-lui de vérifier la source, ou de remplacer la carte par une autre actu.
- **Le quota gratuit est épuisé** : attends la réinitialisation de la semaine, ou fais une édition plus courte (« 2 actus par matière »). Le vérificateur demande 3 cartes par matière : dans ce cas, ignore son message sur le nombre de cartes.

## À savoir
- Le site est public : toute personne qui a le lien peut le lire. Il n'est référencé nulle part, mais ne donne le lien qu'aux personnes voulues.
- Favoris et articles lus restent sur chaque appareil.
- Ne modifie pas `index.html` ni `data/referentiel.json` sans savoir ce que tu fais.
