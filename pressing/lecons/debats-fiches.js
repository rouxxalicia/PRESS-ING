// Fiches des débats ESH (une par débat), affichées dans Référentiel → ESH → Débats.
// Format court : auteur, ouvrage (date), son idée en une phrase, un exemple.
// Clé : "<id de la leçon>/<n° de carte>-<n° du débat>" (même ordre que cours-debats.js).
// Balises : [a:auteur] [w:œuvre] [d:date] [n:chiffre]
// Chaque partie : lab (Oui, Non, Dépasser…), ti (l'idée de la partie), sp (sous-parties : t = titre, p = « Auteur, Œuvre (date)\nIdée », ex = exemples)
window.ESH_DEBAT_FICHES = {

"ch1-1/0-0": {
idee: "L'échange est un jeu à somme positive, mais les gains se partagent inégalement et une mauvaise spécialisation peut appauvrir.",
parts: [
{lab:"Oui", ti:"L'échange est un jeu à somme positive", sp:[
 {t:"Chacun gagne à se spécialiser", p:[
  "[a:Smith], [w:Recherches sur la nature et les causes de la richesse des nations] ([d:1776])\nAvantage absolu : l'échange élargit le marché, donc la division du travail.",
  "[a:Ricardo], [w:Des principes de l'économie politique et de l'impôt] ([d:1817])\nAvantage comparatif : même le pays moins productif partout gagne à se spécialiser."],
  ex:["Portugal (vin) et Angleterre (drap)."]},
 {t:"Chacun valorise ses dotations", p:[
  "Modèle HOS ([a:Heckscher], [d:1919] ; [a:Ohlin], [d:1933])\nChaque pays exporte le bien qui utilise son facteur abondant : tous peuvent participer."]}
]},
{lab:"Non", ti:"Certaines spécialisations appauvrissent", sp:[
 {t:"Se spécialiser au mauvais endroit", p:[
  "[a:Graham], [w:Some Aspects of Protection Further Considered] ([d:1923])\nSe spécialiser dans un secteur à rendements décroissants fait perdre à l'échange."],
  ex:["Cacao ivoirien : [n:6 %] des [n:130 Md$] de la filière."]},
 {t:"Des prix qui jouent contre le Sud", p:[
  "[a:Prebisch], [w:The Economic Development of Latin America and its Principal Problems] ([d:1950])\nLes termes de l'échange des produits primaires se dégradent sur longue période.",
  "[a:Bhagwati], [w:Immiserizing Growth] ([d:1958])\nCroissance appauvrissante : produire plus fait chuter le cours et la recette."],
  ex:["La Zambie et le cuivre ; le café brésilien à la fin des années 1920."]},
 {t:"Un échange inégal", p:[
  "[a:Emmanuel], [w:L'Échange inégal] ([d:1969])\nAvec des salaires plus bas au Sud, le commerce transfère de la valeur vers le Nord."]}
]},
{lab:"Dépasser", ti:"Tous gagnent, mais pas autant", sp:[
 {t:"Le partage dépend de la demande", p:[
  "[a:Mill], [w:Principes d'économie politique] ([d:1848])\nLe gain se partage selon la demande réciproque : le produit le plus demandé emporte la plus grande part."],
  ex:["UE-Mercosur : gains pour l'industrie, pertes pour l'agriculture européenne."]}
]}
],
usages: [
 {t:"Faut-il avoir peur de la mondialisation ?", d:"Ricardo contre Prebisch et Emmanuel."},
 {t:"Le commerce est-il un facteur de développement ?", d:"Tout dépend de la spécialisation."},
 {t:"Les pays pauvres doivent-ils s'ouvrir ?", d:"Graham et Bhagwati : pas sans changer de spécialisation."}
]},

"ch1-1/0-1": {
idee: "Les dotations fixent le point de départ, mais les avantages comparatifs se construisent : capital humain, innovation, taille du marché, politique industrielle.",
parts: [
{lab:"Donnés", ti:"Les modèles classiques raisonnent sur un héritage", sp:[
 {t:"Productivité et dotations", p:[
  "[a:Ricardo] ([d:1817]) et modèle HOS\nÉcarts de productivité et dotations en facteurs sont supposés fixes."]},
 {t:"Le paradoxe de Leontief", p:[
  "[a:Leontief], [w:Domestic Production and Foreign Trade] ([d:1953])\nLes États-Unis exportent moins capitalistique qu'ils n'importent : il faut compter la qualification du travail."]}
]},
{lab:"Construits", ti:"Un pays peut changer ce dans quoi il est bon", sp:[
 {t:"Accumuler des facteurs", p:[
  "[a:Rybczynski], [w:Factor Endowment and Relative Commodity Prices] ([d:1955])\nAccumuler un facteur développe plus que proportionnellement les productions qui l'utilisent.",
  "[a:Findlay et Kierzkowski], [w:International Trade and Human Capital] ([d:1983])\nLe capital humain s'accumule par l'éducation."],
  ex:["Corée du Sud : du textile aux semi-conducteurs."]},
 {t:"Innover", p:[
  "[a:Posner], [w:International Trade and Technological Change] ([d:1961])\nL'avance technologique crée un avantage, mais temporaire.",
  "[a:Vernon], [w:International Investment and International Trade in the Product Cycle] ([d:1966])\nCycle de vie du produit : innové au Nord, produit ensuite là où c'est moins cher."],
  ex:["Téléviseur : États-Unis → Japon → Chine ; Comac face à Airbus et Boeing."]},
 {t:"Profiter de la taille du marché", p:[
  "[a:Krugman], [w:Geography and Trade] ([d:1991])\nAvec des rendements croissants, le premier arrivé sur un grand marché garde l'avantage."],
  ex:["ZES de Shenzhen ([d:1980])."]},
 {t:"Remonter les filières", p:[
  "[a:Akamatsu] ([d:1937])\nVol d'oies sauvages : importer, produire, exporter, puis monter en gamme."],
  ex:["Japon de l'ère Meiji, puis les dragons asiatiques."]}
]},
{lab:"Dépasser", ti:"Le point de départ compte, la politique fait le reste", sp:[
 {t:"Le rôle de l'État", p:[
  "[a:List], [w:Système national d'économie politique] ([d:1841])\nL'État peut accélérer la construction des avantages par une protection éducatrice."]}
]}
],
usages: [
 {t:"Peut-on choisir sa spécialisation ?", d:"Rybczynski, Vernon, Akamatsu."},
 {t:"L'État doit-il mener une politique industrielle ?", d:"Corée et Shenzhen."},
 {t:"Comment expliquer la réussite asiatique ?", d:"Vol d'oies sauvages et capital humain."}
]},

"ch1-1/0-2": {
idee: "Même quand un pays gagne, l'ouverture redistribue : le facteur abondant gagne, le facteur rare perd. Les inégalités baissent entre pays mais montent dans les pays riches.",
parts: [
{lab:"Ceux qui gagnent", ti:"Le facteur abondant et les émergents", sp:[
 {t:"Le facteur abondant", p:[
  "[a:Stolper et Samuelson], [w:Protection and Real Wages] ([d:1941])\nL'ouverture enrichit le facteur abondant et appauvrit le facteur rare.",
  "[a:Jones], [w:The Structure of Simple General Equilibrium Models] ([d:1965])\nEffet d'amplification : les revenus des facteurs bougent plus que les prix, d'où une forte redistribution."]},
 {t:"Les émergents et les plus riches", p:[
  "[a:Milanovic], [w:Global Inequality] ([d:2016])\nCourbe de l'éléphant : gagnants = classes moyennes émergentes et [n:1 %] le plus riche ([d:1988-2008]).",
  "[a:Bourguignon], [w:La Mondialisation de l'inégalité] ([d:2012])\nInégalités en baisse entre pays, en hausse dans les pays."]}
]},
{lab:"Ceux qui perdent", ti:"Le travail non qualifié du Nord", sp:[
 {t:"Des salaires mis en concurrence", p:[
  "[a:Samuelson], [w:International Trade and the Equalisation of Factor Prices] ([d:1948])\nTEPF : les salaires des non-qualifiés du Nord sont tirés vers ceux du Sud sans migration."]},
 {t:"Des territoires sinistrés", p:[
  "[a:Autor, Dorn et Hanson], [w:The China Syndrome] ([d:2013])\nLa concurrence chinoise explique environ un quart du recul de l'emploi industriel américain ([d:1990-2007])."],
  ex:["La Rust Belt."]}
]},
{lab:"Dépasser", ti:"Nomades et sédentaires", sp:[
 {t:"Un nouveau clivage", p:[
  "[a:Giraud], [w:L'Homme inutile] ([d:2015])\nLes nomades branchés sur le marché mondial gagnent, les sédentaires décrochent, y compris en Chine et en Inde."]}
]}
],
usages: [
 {t:"La mondialisation creuse-t-elle les inégalités ?", d:"Bourguignon et Milanovic."},
 {t:"Le libre-échange menace-t-il l'emploi ?", d:"Autor, Dorn et Hanson."},
 {t:"Pourquoi le protectionnisme revient-il au Nord ?", d:"Stolper-Samuelson : les perdants votent."}
]},

"ch1-1/0-3": {
idee: "Ouverture et croissance vont ensemble, mais la causalité est fragile : l'ouverture accélère une croissance d'abord interne, à condition d'être dosée.",
parts: [
{lab:"Oui", ti:"L'ouverture stimule la croissance", sp:[
 {t:"Un effet mesuré", p:[
  "[a:Frankel et Romer], [w:Does Trade Cause Growth?] ([d:1999])\n[n:+1 point] d'ouverture → [n:+0,5 à 2 %] de revenu par tête."]},
 {t:"Les meilleures firmes grandissent", p:[
  "[a:Melitz] ([d:2003])\nL'ouverture élimine les firmes les moins productives : la productivité moyenne monte."]},
 {t:"Un cercle vertueux", p:[
  "[a:Findlay et O'Rourke], [w:Commodity Market Integration, 1500-2000] ([d:2002])\nAux Trente Glorieuses, commerce et croissance s'entraînent (élasticité > 1)."]}
]},
{lab:"Non", ti:"La causalité n'est pas démontrée", sp:[
 {t:"Le paradoxe de Bairoch", p:[
  "[a:Bairoch], [w:Mythes et paradoxes de l'histoire économique] ([d:1993])\nAu XIXe siècle, la croissance accélère avec le retour au protectionnisme."],
  ex:["Tarif Méline ([d:1892])."]},
 {t:"Des études fragiles", p:[
  "[a:Rodriguez et Rodrik], [w:Trade Policy and Economic Growth] ([d:1999])\nAucune causalité démontrée (mais [a:Irwin], [d:2019] : effet positif moyen)."]},
 {t:"Une concurrence déloyale", p:[
  "[a:Allais], [w:La Mondialisation : la destruction des emplois et de la croissance] ([d:1999])\nLe libre-échange entre systèmes sociaux trop différents détruit emplois et croissance."]}
]},
{lab:"Dépasser", ti:"Un accélérateur, sous conditions", sp:[
 {t:"Un décollage d'abord interne", p:[
  "[a:Rostow], [w:Les Étapes de la croissance économique] ([d:1960])\nLe décollage vient de l'investissement intérieur ; le commerce l'accélère."]},
 {t:"Une ouverture dosée", p:[
  "[a:Rodrik], [w:The Globalization Paradox] ([d:2011])\nLes gagnants asiatiques ont mené des politiques hétérodoxes et une ouverture sélective."],
  ex:["Chine : ZES mais contrôle des capitaux."]}
]}
],
usages: [
 {t:"Le commerce est-il un moteur de la croissance ?", d:"Frankel et Romer contre Rodriguez et Rodrik."},
 {t:"Faut-il s'ouvrir pour se développer ?", d:"Rodrik : une ouverture maîtrisée."},
 {t:"Le protectionnisme freine-t-il la croissance ?", d:"Le paradoxe de Bairoch."}
]},

"ch1-1/1-0": {
idee: "Le protectionnisme se justifie s'il est ciblé et temporaire ; généralisé, il coûte cher aux consommateurs et aux producteurs.",
parts: [
{lab:"Oui", ti:"Cinq raisons de protéger", sp:[
 {t:"Éducateur", p:[
  "[a:List], [w:Système national d'économie politique] ([d:1841])\nProtéger une industrie naissante, de façon temporaire et dégressive."],
  ex:["Hyundai, années 1970."]},
 {t:"Stratégique", p:[
  "[a:Brander et Spencer], [w:Export Subsidies and International Market Share Rivalry] ([d:1985])\nUne subvention peut capter la rente d'un oligopole mondial."],
  ex:["Airbus ; BYD, [n:2,1 Md€] de subventions en [d:2022]."]},
 {t:"Défensif", p:[
  "[a:Kaldor], [w:Conflicts in Policy Objectives] ([d:1971])\nProtéger pour amortir le déclin d'un secteur."],
  ex:["Accord multifibres ([d:1974-2005])."]},
 {t:"Relance", p:[
  "[a:Cripps et Godley] ([d:1976])\nUne relance doit s'accompagner d'une protection ciblée."],
  ex:["Échec de la relance Mauroy ([d:1981])."]},
 {t:"Recettes publiques", p:[
  "[a:Stiglitz], [w:La Grande Désillusion] ([d:2002])\nLes droits de douane sont des recettes vitales pour les PED."]}
]},
{lab:"Non", ti:"Une protection qui coûte cher", sp:[
 {t:"Pour les consommateurs", p:[
  "[a:Bastiat], [w:Pétition des fabricants de chandelles] ([d:1845])\nCoût diffus pour tous, bénéfice concentré sur quelques producteurs."],
  ex:["Pneus chinois : [n:900 000 $] par emploi sauvé ([a:Hufbauer et Lowry], [d:2012])."]},
 {t:"Pour les producteurs en aval", p:[
  "[a:François et Baughman], [w:The Unintended Consequences of US Steel Import Tariffs] ([d:2003])\nTaxer l'acier détruit des emplois chez ceux qui l'utilisent."],
  ex:["Acier [d:2002] : [n:200 000] emplois détruits en aval."]},
 {t:"Une protection contournée", p:[
  "[a:Mundell] ([d:1957])\nTariff-jumping : les firmes étrangères viennent produire sur place."],
  ex:["BYD en Hongrie."]}
]}
],
usages: [
 {t:"Faut-il protéger l'industrie européenne ?", d:"Brander et Spencer ; Mundell pour la limite."},
 {t:"Le protectionnisme répond-il à la désindustrialisation ?", d:"Kaldor : retarder n'est pas empêcher."},
 {t:"Le libre-échange est-il toujours souhaitable ?", d:"List."}
]},

"ch1-1/1-1": {
idee: "La compétitivité a un sens pour une nation si elle va avec la hausse du niveau de vie ; réduite à une course aux coûts, c'est une obsession dangereuse.",
parts: [
{lab:"Oui", ti:"Un objectif, s'il est bien défini", sp:[
 {t:"Vendre et élever le niveau de vie", p:[
  "[a:Tyson], [w:Who's Bashing Whom?] ([d:1992])\nTenir la concurrence avec un niveau de vie croissant, surtout par le hors-prix."],
  ex:["Les excédents allemands malgré des salaires élevés."]},
 {t:"Le levier du change", p:[
  "[a:Houthakker et Magee], [w:Income and Price Elasticities in World Trade] ([d:1969])\nLa dévaluation finit par aider (courbe en J, Marshall-Lerner)."]}
]},
{lab:"Non", ti:"Un pays n'est pas une entreprise", sp:[
 {t:"Une obsession dangereuse", p:[
  "[a:Krugman], [w:Competitiveness: A Dangerous Obsession] ([d:1994])\nLa compétitivité a un sens pour une firme, pas pour un pays."]},
 {t:"Une dévaluation qui échoue", p:[
  "[a:Robinson], [w:Essays in the Theory of Employment] ([d:1937])\nLa dévaluation échoue si les firmes gonflent leurs marges."]}
]},
{lab:"Dépasser", ti:"Des politiques aux effets limités", sp:[
 {t:"Concurrence fiscale", p:[
  "[a:Tiebout], [w:A Pure Theory of Local Expenditures] ([d:1956])\nDilemme du prisonnier, mais la concurrence oblige à mieux dépenser."],
  ex:["IS français de [n:33 %] à [n:25 %]."]},
 {t:"Coût du travail", p:[
  "[a:Malgouyres et Mayer], [w:Exports and Labor Costs] ([d:2018])\nLe CICE a peu aidé les exportateurs."]},
 {t:"Patriotisme économique", p:[
  "[a:Combe], [w:Résister à la tentation protectionniste] ([d:2018])\nTrop de patriotisme économique a des effets pervers."]}
]}
],
usages: [
 {t:"La compétitivité est-elle la clé de la croissance ?", d:"Krugman."},
 {t:"Faut-il baisser le coût du travail ?", d:"Malgouyres et Mayer."},
 {t:"La concurrence fiscale est-elle néfaste ?", d:"Dilemme du prisonnier contre Tiebout."}
]},

"ch1-1/1-2": {
idee: "Plutôt qu'une démondialisation, un ralentissement et une recomposition par blocs, sans effondrement comparable aux années 1930.",
parts: [
{lab:"Oui", ti:"Un projet politique et des États qui se ferment", sp:[
 {t:"Projet politique", p:[
  "[a:Bello], [w:Deglobalization] ([d:2002]) ; [a:Sapir], [w:La démondialisation] ([d:2011])\nRecentrer la production et se protéger."]},
 {t:"Choix des États", p:[
  "Les États-Unis contestent le multilatéralisme, la Chine se recentre."],
  ex:["Guerre commerciale de Trump ([d:2018]) ; ouverture chinoise de [n:27 %] ([d:2007]) à [n:16 %] ([d:2018])."]},
 {t:"Géopolitique", p:[
  "Friend-shoring ([a:Yellen]), globalisation régionalisée ([a:Frachon])\nOn commerce entre alliés."],
  ex:["Guerre en Ukraine ([d:2022])."]}
]},
{lab:"Non", ti:"Un ralentissement, pas un recul", sp:[
 {t:"Retour à la normale", p:[
  "[a:Sébastien Jean] (CEPII, [d:2017])\nExportations de [n:18 %] à [n:30 %] du PIB mondial en [d:2008] : le plateau est une normalisation.",
  "Slowbalisation ([w:The Economist], [d:2019])\nLe commerce croît comme le PIB, sans s'effondrer."]},
 {t:"Chaînes résilientes", p:[
  "[a:Mezzadri et Ruwanpura] ([d:2020])\nLes chaînes de valeur ont résisté au Covid."]},
 {t:"Pas les années 1930", p:[
  "Rien de comparable à l'effondrement des années 1930."],
  ex:["Hawley-Smoot ([d:1930]) : droits à [n:59 %]."]}
]},
{lab:"Dépasser", ti:"Une recomposition", sp:[
 {t:"Précautionnisme", p:[
  "[a:Lamy] ([w:Le Monde], [d:2020])\nLes nouvelles barrières sont des normes qui protègent le consommateur."]}
]}
],
usages: [
 {t:"La mondialisation est-elle réversible ?", d:"Années 1930 contre aujourd'hui."},
 {t:"Le Covid marque-t-il la fin de la mondialisation ?", d:"Mezzadri et Ruwanpura."},
 {t:"Assiste-t-on au retour du protectionnisme ?", d:"2018 et le précautionnisme."}
]}

};
