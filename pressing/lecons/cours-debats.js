// Cartes de débats ESH (dissertation), faites à partir des leçons intermédiaires du Drive (1er nov. 2026).
// Plusieurs débats par carte. Chaque argument : [réponse qu'il donne, type, texte]
// type : "y" = oui (colonne de gauche) · "n" = non · "m" = nuance (colonne de droite)
// Balises : [a:auteur] [w:œuvre] [d:date] [n:chiffre] {e:exemple}
(function(){
if(window.ESH_LESSONS && !window.ESH_LESSONS.some(l=>l.id==="ch3")){
  window.ESH_LESSONS.push({id:"ch3", short:"Ch. 3 · intermédiaire", title:"Environnement et soutenabilité de la croissance", vmaps:[], map:""});
}
window.ESH_DEBATS = {

"socio-1a": [
{title:"Individu et société", sub:"qui détermine qui ?", debates:[
 {q:"L'individu est-il le produit de la société ?", ideas:[
  ["Oui","y","[a:Durkheim], [w:Les Règles de la méthode sociologique] ([d:1895]) : les faits sociaux sont extérieurs et contraignants {e:la langue}","Contrainte sociale"],
  ["Oui","y","[a:Durkheim], [w:Le Suicide] ([d:1897]) : même l'acte le plus intime dépend de l'intégration et de la régulation","Contrainte sociale"],
  ["Oui","y","[a:Bourdieu], [w:Le Sens pratique] ([d:1980]) : l'habitus, social incorporé, oriente goûts et pratiques","Social incorporé"],
  ["Oui","y","[a:Bourdieu], [w:La Distinction] ([d:1979]) : les goûts correspondent aux positions sociales","Social incorporé"],
  ["Non","n","[a:Weber], [w:Économie et société] ([d:1921-1922]) : la société est le produit des actions individuelles dotées de sens","Acteurs rationnels"],
  ["Non","n","[a:Boudon], [w:Effets pervers et ordre social] ([d:1977]) : les phénomènes sociaux sont l'agrégation d'actions rationnelles","Acteurs rationnels"],
  ["Non","n","[a:Garfinkel], [w:Recherches en ethnométhodologie] ([d:1967]) : l'individu n'est pas un « idiot culturel » {e:Agnès}","Ordre produit au quotidien"],
  ["Non","n","[a:Goffman], [w:La Mise en scène de la vie quotidienne] ([d:1956]) : rôle prescrit ≠ rôle joué","Ordre produit au quotidien"],
  ["Entre les deux","m","[a:Elias], [w:La Société de cour] ([d:1969]) : configurations, jeu d'échecs, autonomie relative","Interdépendances"],
  ["Entre les deux","m","[a:Simmel], [w:Sociologie] ([d:1908]) : la société = actions réciproques ; cercles multiples → individualité","Interdépendances"],
  ["Entre les deux","m","[a:Lahire], [w:L'Homme pluriel] ([d:1998]) : dispositions multiples et contradictoires","Déterminisme pluriel"]
 ]},
 {q:"L'individualisme menace-t-il la cohésion sociale ?", ideas:[
  ["Oui","y","[a:Tocqueville], [w:De la démocratie en Amérique] ([d:1835-1840]) : repli sur la sphère privée, despotisme doux","Repli sur soi"],
  ["Oui","y","Fondation de France ([d:2025]) : {e:[n:12 %] isolés, [n:24 %] se sentent seuls}","Repli sur soi"],
  ["Oui","y","[a:Durkheim], [w:Le Suicide] ([d:1897]) : suicide égoïste et anomique","Défaut d'intégration"],
  ["Oui","y","[a:Durkheim] : division du travail anomique ou contrainte {e:Fourmies, [d:1891]}","Défaut d'intégration"],
  ["Non","n","[a:Durkheim], [w:De la division du travail social] ([d:1893]) : le lien change de nature, solidarité organique","Nouvelle solidarité"],
  ["Non","n","[a:Durkheim], [w:Les Formes élémentaires de la vie religieuse] ([d:1912]) : culte de l'individu ; [a:Gérôme Truc], [w:Sidérations] ([d:2016]) {e:« Je suis Charlie »}","Nouvelle solidarité"],
  ["Non","n","[a:Coquard], [w:Ceux qui restent] ([d:2019]) : la « bande de potes » intègre","Solidarités de proximité"],
  ["Non, il change","m","[a:Ion], [w:La Fin des militants ?] ([d:1997]) : engagement « post-it »","Engagement transformé"],
  ["Non, il change","m","[a:Tocqueville] : les corps intermédiaires préservent la liberté","Engagement transformé"]
 ]}
]},
{title:"La sociologie comme science", sub:"méthode et neutralité", debates:[
 {q:"La sociologie est-elle une science ?", ideas:[
  ["Oui","y","[a:Comte], [w:Cours de philosophie positive] ([d:1830-1842]) : des lois pour prévoir et agir","Projet positiviste"],
  ["Oui","y","[a:Durkheim], [w:Les Règles de la méthode sociologique] ([d:1895]) : prénotions, indicateurs, variations concomitantes","Une méthode"],
  ["Oui","y","[a:Boudon] : variables-tests, relations apparentes, réelles, cachées","Une méthode"],
  ["Oui, autrement","y","[a:Weber], [w:Essais sur la théorie de la science] ([d:1922]) : comprendre pour expliquer, idéaux-types, causalité probabiliste","Science compréhensive"],
  ["Pas tout à fait","n","[a:Kuhn], [w:La Structure des révolutions scientifiques] ([d:1962]) : pas de paradigme commun {e:Bourdieu / Boudon sur l'école}","Paradigmes rivaux"],
  ["Pas tout à fait","n","[a:Schwartz] : paradoxe de l'observateur, aucune donnée pure","Biais d'enquête"],
  ["Oui, mais complexe","m","La pluralité des paradigmes reflète la complexité de l'objet, pas une immaturité","Objet complexe"]
 ]},
 {q:"Le sociologue doit-il rester neutre ?", ideas:[
  ["Oui","y","[a:Weber], [w:Le Savant et le politique] ([d:1919]) : neutralité axiologique","Séparer savoir et valeurs"],
  ["Oui","y","[a:Heinich], [w:Ce que le militantisme fait à la recherche] ([d:2021]) : confusion des arènes","Séparer savoir et valeurs"],
  ["Oui","y","[a:Bronner & Géhin], [w:Le Danger sociologique] ([d:2017]) : « culture de l'excuse », biais d'intentionnalité","Risque idéologique"],
  ["Non","n","[a:Touraine], [w:La Voix et le Regard] ([d:1978]) : intervention sociologique, sociologie engagée","Sociologie engagée"],
  ["Non","n","[a:Bourdieu] : sociologie du dévoilement {e:grèves de [d:1995]}","Sociologie engagée"],
  ["Utile sans être militante","m","[a:Durkheim] : la sociologie ne vaudrait « pas une heure de peine » sans utilité pratique","Utilité sociale"]
 ]}
]},
{title:"École et inégalités", sub:"reproduction ou choix rationnels ?", debates:[
 {q:"L'école réduit-elle les inégalités ?", ideas:[
  ["Oui","y","[a:Durkheim], [w:Éducation et sociologie] ([d:1922]) : socialisation méthodique, morale commune {e:lois Ferry}","Intégration républicaine"],
  ["Non","n","[a:Bourdieu & Passeron], [w:La Reproduction] ([d:1970]) : culture de classe, idéologie du don, violence symbolique","Reproduction"],
  ["Non","n","[a:Bourdieu & Passeron], [w:Les Héritiers] ([d:1964]) {e:CPGE : [n:54 %] enfants de cadres, [n:6,4 %] d'ouvriers}","Reproduction"],
  ["Non","n","{e:PISA [d:2025] : [n:100] points d'écart en France contre [n:85] dans l'OCDE}","Reproduction"],
  ["Non","n","[a:Boudon], [w:L'Inégalité des chances] ([d:1973]) : choix rationnels aux points de bifurcation","Choix des familles"],
  ["Non","n","Paradoxe d'Anderson ([d:1961]) : plus de diplômes, pas plus de position ; [a:Peugny], [w:Le Déclassement] ([d:2009])","Effets pervers"],
  ["Nuance","m","[a:Lahire], [w:La Culture des individus] ([d:2004]) : pas de « miracle social », une disposition précise","Déterminisme nuancé"],
  ["Nuance","m","[a:Henri-Panabière], [w:Des « héritiers » en échec scolaire] ([d:2010]) : le capital ne se transmet pas seul","Déterminisme nuancé"]
 ]}
]},
{title:"Normes, déviance et conflit", sub:"comment change la société ?", debates:[
 {q:"La déviance est-elle une construction sociale ?", ideas:[
  ["Oui","y","[a:Becker], [w:Outsiders] ([d:1963]) : étiquetage, entrepreneurs de morale {e:Marihuana Tax Act, [d:1937]}","Étiquetage"],
  ["Oui","y","{e:Allemagne : cannabis légal le 1er avril [d:2024]}","Étiquetage"],
  ["Oui","y","[a:Goffman], [w:Stigmate] ([d:1963]) : le regard des « normaux » fait le stigmate ; [w:Asiles] ([d:1961])","Interactions"],
  ["Oui, mais normale","m","[a:Durkheim] : le crime est normal, seul un taux anormal est pathologique","Fait social normal"],
  ["Non, structurelle","n","[a:Merton], « Structure sociale et anomie » ([d:1938]) : innovation quand les moyens légitimes manquent {e:Kerviel}","Anomie"]
 ]},
 {q:"Le conflit est-il le moteur du changement social ?", ideas:[
  ["Oui","y","[a:Marx], [w:Contribution à la critique de l'économie politique] ([d:1859]) : lutte des classes {e:nuit du 4 août}","Lutte des classes"],
  ["Oui","y","[a:Touraine], [w:Production de la société] ([d:1973]) : identité, opposition, totalité {e:retraites [d:2023], Gilets jaunes [d:2018]}","Mouvements sociaux"],
  ["Oui, une étape","m","[a:Park] : compétition → conflit → accommodation → assimilation {e:émeute de Chicago, [d:1919]}","Cycle"],
  ["Non","n","[a:Weber] : la rationalisation et les idées changent la société {e:éthique protestante}","Idées et rationalisation"],
  ["Non","n","[a:Parsons], [w:Societies] ([d:1966]) : différenciation fonctionnelle","Évolution"],
  ["Non","n","[a:Elias] : processus de civilisation, autocontrainte","Évolution"],
  ["Pas seul","m","[a:Oberschall] ([d:1973]) ; [a:Olson] ([d:1965]) : le mécontentement ne suffit pas, ressources et passager clandestin","Conditions de l'action"]
 ]}
]}
],


"ch1-1": [
{title:"Le libre-échange", sub:"qui y gagne ?", debates:[
 {q:"Le libre-échange profite-t-il à tous les pays ?", ideas:[
  ["Oui","y","[a:Smith], [w:Recherches sur la nature et les causes de la richesse des nations] ([d:1776]) : l'échange est un jeu à somme positive (avantage absolu, division du travail élargie)"],
  ["Oui","y","[a:Ricardo], [w:Des principes de l'économie politique et de l'impôt] ([d:1817]) : avantage comparatif, même le pays moins productif partout gagne {e:Portugal / Angleterre}"],
  ["Oui","y","Modèle HOS : chacun exporte le bien qui utilise son facteur abondant, tous participent"],
  ["Oui, mais inégal","m","[a:Mill], [w:Principes d'économie politique] ([d:1848]) : gain mutuel mais inégal, selon la demande réciproque {e:UE-Mercosur}"],
  ["Non","n","[a:Graham], [w:Some Aspects of Protection Further Considered] ([d:1923]) : se spécialiser dans un secteur à rendements décroissants fait perdre {e:cacao ivoirien : 6 % des 130 Md$}"],
  ["Non","n","[a:Prebisch], [w:The Economic Development of Latin America and its Principal Problems] ([d:1950]) : les termes de l'échange des produits primaires se dégradent {e:Zambie et le cuivre}"],
  ["Non","n","[a:Bhagwati], [w:Immiserizing Growth] ([d:1958]) : croissance appauvrissante {e:café brésilien, fin des années 1920}"],
  ["Non","n","[a:Emmanuel], [w:L'Échange inégal] ([d:1969]) : salaires bas au Sud, le Nord capte la plus-value"]
 ]},
 {q:"Les avantages comparatifs sont-ils donnés ou construits ?", ideas:[
  ["Construits","y","[a:Findlay et Kierzkowski], [w:International Trade and Human Capital] ([d:1983]) : le capital humain {e:Corée du Sud : textile → semi-conducteurs}"],
  ["Construits","y","[a:Rybczynski], [w:Factor Endowment and Relative Commodity Prices] ([d:1955]) : accumuler un facteur développe plus que proportionnellement ses productions"],
  ["Construits","y","[a:Posner], [w:International Trade and Technological Change] ([d:1961]) : l'avance technologique, qui se rattrape {e:Airbus-Boeing face à Comac}"],
  ["Construits","y","[a:Vernon], [w:International Investment and International Trade in the Product Cycle] ([d:1966]) : cycle de vie du produit {e:téléviseur : É-U → Japon → Chine}"],
  ["Construits","y","[a:Krugman], [w:Geography and Trade] ([d:1991]) : taille du marché, agglomération, premier arrivé {e:ZES de Shenzhen}"],
  ["Construits","y","[a:Akamatsu] ([d:1937]) : vol d'oies sauvages, remontée de filière {e:Japon de l'ère Meiji}"],
  ["Donnés","n","[a:Ricardo] (productivité) et HOS (dotations en facteurs) : des avantages hérités"],
  ["Limite de HOS","m","[a:Leontief], [w:Domestic Production and Foreign Trade] ([d:1953]) : les É-U exportent moins capitalistique qu'ils n'importent"]
 ]},
 {q:"Qui gagne et qui perd à l'intérieur d'un pays ?", ideas:[
  ["Le capital gagne","y","[a:Jones], [w:The Structure of Simple General Equilibrium Models] ([d:1965]) : effet d'amplification, d'où la redistribution"],
  ["Les pays pauvres gagnent","y","[a:Bourguignon], [w:La Mondialisation de l'inégalité] ([d:2012]) : inégalités ↓ entre pays, ↑ dans les pays"],
  ["Émergents et plus riches gagnent","y","[a:Milanovic], [w:Global Inequality] ([d:2016]) : courbe de l'éléphant, disparue sur [d:2008-2018]"],
  ["Le non-qualifié du Nord perd","n","[a:Stolper et Samuelson], [w:Protection and Real Wages] ([d:1941]) : le facteur rare perd"],
  ["Les salaires du Nord baissent","n","[a:Samuelson], [w:International Trade and the Equalisation of Factor Prices] ([d:1948]) : TEPF, travailleurs mis en concurrence sans bouger"],
  ["Les ouvriers américains perdent","n","[a:Autor, Dorn et Hanson], [w:The China Syndrome] ([d:2013]) : [n:1/4] des emplois industriels détruits ([d:1990-2007])"],
  ["Les sédentaires perdent","m","[a:Giraud], [w:L'Homme inutile] ([d:2015]) : nomades contre sédentaires, explique les inégalités en Chine et en Inde"]
 ]},
 {q:"L'ouverture cause-t-elle la croissance ?", ideas:[
  ["Oui","y","[a:Frankel et Romer], [w:Does Trade Cause Growth?] ([d:1999]) : +[n:1 point] d'ouverture → +[n:0,5 à 2 %] de revenu par tête"],
  ["Oui","y","[a:Melitz] ([d:2003]) : le commerce élimine les firmes les moins productives"],
  ["Oui","y","[a:Findlay et O'Rourke], [w:Commodity Market Integration, 1500-2000] ([d:2002]) : cercle vertueux des Trente Glorieuses (élasticité > 1)"],
  ["Non","n","[a:Bairoch], [w:Mythes et paradoxes de l'histoire économique] ([d:1993]) : la croissance remonte après le tarif Méline ([d:1892])"],
  ["Non prouvé","n","[a:Rodriguez et Rodrik], [w:Trade Policy and Economic Growth] ([d:1999]) : pas de causalité démontrée (mais [a:Irwin], [d:2019] : effet positif moyen)"],
  ["Non","n","[a:Allais], [w:La Mondialisation : la destruction des emplois et de la croissance] ([d:1999]) : concurrence déloyale entre systèmes sociaux"],
  ["Un accélérateur","m","[a:Rostow], [w:Les Étapes de la croissance économique] ([d:1960]) : le décollage est d'abord interne"],
  ["Ça dépend","m","[a:Rodrik], [w:The Globalization Paradox] ([d:2011]) : les gagnants asiatiques ont mené des politiques hétérodoxes"]
 ]}
]},
{title:"Protéger, rivaliser", sub:"ou démondialiser ?", debates:[
 {q:"Le protectionnisme peut-il se justifier ?", ideas:[
  ["Oui","y","[a:List], [w:Système national d'économie politique] ([d:1841]) : éducateur, temporaire et dégressif {e:Hyundai, années 1970}"],
  ["Oui","y","[a:Brander et Spencer], [w:Export Subsidies and International Market Share Rivalry] ([d:1985]) : stratégique {e:Airbus ; BYD, 2,1 Md€ de subventions en 2022}"],
  ["Oui","y","[a:Kaldor], [w:Conflicts in Policy Objectives] ([d:1971]) : défensif, pour amortir le déclin {e:Accord multifibres 1974-2005}"],
  ["Oui","y","[a:Cripps et Godley] ([d:1976]) : une relance doit s'accompagner d'une protection ciblée {e:échec du plan Mauroy, 1981}"],
  ["Oui","y","[a:Stiglitz], [w:La Grande Désillusion] ([d:2002]) : les recettes douanières sont vitales pour les PED"],
  ["Non","n","[a:Bastiat], [w:Pétition des fabricants de chandelles] ([d:1845]) : coût diffus, bénéfice concentré"],
  ["Non","n","[a:Hufbauer et Lowry] ([d:2012]) : {e:pneus chinois : 900 000 $ par emploi sauvé}"],
  ["Non","n","[a:François et Baughman], [w:The Unintended Consequences of US Steel Import Tariffs] ([d:2003]) : {e:acier 2002 : 200 000 emplois détruits en aval}"],
  ["Non","n","[a:Mundell] ([d:1957]) : contourné par le tariff-jumping {e:BYD en Hongrie}"]
 ]},
 {q:"La compétitivité est-elle un objectif pour une nation ?", ideas:[
  ["Oui","y","[a:Tyson], [w:Who's Bashing Whom?] ([d:1992]) : compétitivité = tenir la concurrence avec un niveau de vie croissant, surtout hors-prix"],
  ["Oui","y","[a:Houthakker et Magee], [w:Income and Price Elasticities in World Trade] ([d:1969]) : la dévaluation finit par aider (courbe en J, Marshall-Lerner)"],
  ["Non","n","[a:Krugman], [w:Competitiveness: A Dangerous Obsession] ([d:1994]) : a un sens pour une firme, pas pour un pays"],
  ["Nuance","m","[a:Robinson], [w:Essays in the Theory of Employment] ([d:1937]) : la dévaluation échoue si les firmes gonflent leurs marges"],
  ["Nuance","m","Concurrence fiscale = dilemme du prisonnier {e:IS de 33 à 25 %} ; mais [a:Tiebout], [w:A Pure Theory of Local Expenditures] ([d:1956]) : elle oblige à mieux dépenser"],
  ["Nuance","m","[a:Malgouyres et Mayer], [w:Exports and Labor Costs] ([d:2018]) : le CICE a peu aidé les exportateurs"],
  ["Nuance","m","[a:Combe], [w:Résister à la tentation protectionniste] ([d:2018]) : trop de patriotisme économique a des effets pervers"]
 ]},
 {q:"Assiste-t-on à une démondialisation ?", ideas:[
  ["Oui","y","[a:Bello], [w:Deglobalization] ([d:2002]) ; [a:Sapir], [w:La démondialisation] ([d:2011]) : recentrer et protéger"],
  ["Oui","y","Les É-U contestent le multilatéralisme {e:guerre commerciale de Trump, 2018}"],
  ["Oui","y","Friend-shoring ([a:Yellen]), globalisation régionalisée ([a:Frachon]) {e:guerre en Ukraine, 2022}"],
  ["Oui","y","La Chine se recentre {e:taux d'ouverture : 27 % en 2007, 16 % en 2018}"],
  ["Non","n","[a:Sébastien Jean] (CEPII, [d:2017]) : simple retour à la normale (exportations : [n:18 %] → [n:30 %] du PIB mondial en [d:2008])"],
  ["Non","n","Slowbalisation ([w:The Economist], [d:2019]) : élasticité tombée à 1, pas d'effondrement"],
  ["Non","n","[a:Mezzadri et Ruwanpura] ([d:2020]) : chaînes de valeur résilientes au Covid"],
  ["Non","n","Rien à voir avec les années 1930 {e:Hawley-Smoot, droits à 59 %}"],
  ["Une reconfiguration","m","[a:Lamy] ([w:Le Monde], [d:2020]) : « précautionnisme », les normes deviennent des barrières"]
 ]}
]}
],

"ch1-2": [
{title:"Pourquoi des FMN ?", sub:"théories de la firme et de l'IDE", debates:[
 {q:"La firme est-elle un nœud de contrats efficace ?", ideas:[
  ["Oui","y","[a:Coase], [w:The Nature of the Firm] ([d:1937]) : la firme internalise quand le marché coûte plus cher {e:agent d'entretien en CDI}"],
  ["Oui","y","[a:Williamson], [w:Markets and Hierarchies] ([d:1975]) : actifs spécifiques, opportunisme, risque de hold-up → internaliser"],
  ["Oui","y","[a:Alchian et Demsetz], [w:Production, Information Costs, and Economic Organization] ([d:1972]) : un propriétaire surveille la production en équipe"],
  ["Non, un conflit","n","[a:Berle et Means], [w:L'entreprise moderne et la propriété privée] ([d:1932]) : la propriété est séparée du contrôle"],
  ["Non, un conflit","n","[a:Jensen et Meckling], [w:Theory of the Firm] ([d:1976]) : coûts d'agence → stock-options et valeur actionnariale"],
  ["Non, une coalition","m","[a:Cyert et March], [w:A Behavioral Theory of the Firm] ([d:1963]) : compromis satisfaisant, pas optimum"],
  ["Non, des routines","m","[a:Nelson et Winter], [w:An Evolutionary Theory of Economic Change] ([d:1982]) : survit la firme qui s'adapte {e:Zodiac}"]
 ]},
 {q:"Les bas salaires expliquent-ils les IDE ?", ideas:[
  ["Oui","y","Les activités peu capitalistiques partent vers les bas salaires (textile, assemblage) : IDE vertical"],
  ["Oui","y","[a:Defever et Mucchielli], [w:Décomposition internationale de la chaîne de valeur] ([d:2005]) : l'assemblage suit les bas coûts {e:Peugeot 208 assemblée en Slovaquie et au Maroc}"],
  ["Oui","y","[a:Sinn], [w:L'économie du bazar] ([d:2005]) : on sous-traite les composants et on garde la VA rentable {e:Allemagne → Europe de l'Est}"],
  ["Non","n","[a:Berger], [w:Made in Monde] ([d:2006]) : on raisonne en coût unitaire du travail {e:VA d'un ouvrier américain : 28 fois celle d'un chinois}"],
  ["Non","n","[n:70 %] des IDE des PDEM vont vers d'autres PDEM : on cherche un marché {e:Yaris « assemblée à Valenciennes »}"],
  ["Non","n","[a:Acemoglu et Robinson], [w:Why Nations Fail] ([d:2012]) : les FMN fuient les institutions extractives {e:Afrique : 6 % des IDE}"],
  ["Non","n","[a:Tinbergen], [w:Shaping the World Economy] ([d:1962]) : gravité, taille et proximité comptent {e:É-U / Canada}"],
  ["Non","n","[a:Knickerbocker], [w:Oligopolistic Reaction and Multinational Enterprise] ([d:1973]) : on imite le leader {e:constructeurs japonais aux É-U}"],
  ["Nuance","m","[a:Krugman] ([d:1991]) : on suit l'agglomération {e:Silicon Valley} ; mais plus de concurrence locale ([a:Mayer et Mucchielli], [d:1999])"]
 ]},
 {q:"Toute firme peut-elle devenir multinationale ?", ideas:[
  ["Oui","y","Born Global : des start-up internationales dès leur création {e:Devialet}"],
  ["Oui, sans IDE","y","Modes intermédiaires : licence, franchise, sous-traitance, alliance {e:Yoplait, McDonald's, Pfizer-BioNTech}"],
  ["Non","n","[a:Hymer] ([d:1968]) et [a:Kindleberger], [w:American Business Abroad] ([d:1969]) : il faut un avantage spécifique pour compenser le handicap d'être étranger {e:GAFAM en Europe}"],
  ["Non","n","[a:Dunning], [w:International Production and the Multinational Enterprise] ([d:1981]) : il faut réunir O + L + I"],
  ["Non","n","[a:Helpman, Melitz et Yeaple], [w:Export versus FDI with Heterogeneous Firms] ([d:2004]) : seules les plus productives {e:70 % des FMN n'ont qu'une filiale}"],
  ["Non","n","[a:Mouhoud] : les [n:100] premières FMN = [n:0,1 %] des FMN mais [n:60 %] de leur VA"],
  ["Pas à pas","m","[a:Johanson et Vahlne] (modèle d'Uppsala, [d:1977]) : engagement progressif selon la distance psychique"]
 ]}
]},
{title:"FMN, territoires et emplois", sub:"qui y gagne ?", debates:[
 {q:"Les FMN détruisent-elles les emplois du Nord ?", ideas:[
  ["Oui","y","[a:Arthuis] ([d:1993]) : les importations ont un contenu en emplois détruits"],
  ["Oui","y","[a:Acemoglu, Autor, Dorn et Hanson] ([d:2016]) : le choc chinois détruit [n:2 millions] d'emplois aux É-U, par les liens entre secteurs"],
  ["Oui","y","HOS et TEPF : les non-qualifiés perdent (chômage ou salaires plus bas)"],
  ["Non","n","[a:Demmou], [w:La désindustrialisation en France] ([d:2010]) : concurrence étrangère = [n:13 %] des pertes d'emplois industriels"],
  ["Non","n","[a:Rowthorn et Ramaswamy], [w:Deindustrialization: Causes and Implications] ([d:1997]) : étape normale du développement"],
  ["Non","n","[a:Barlet, Blanchet et Crusson] (INSEE, [d:2010]) : [n:36 000] emplois perdus par an contre [n:40 000] créés"],
  ["Non","n","[a:Fontagné et Lorenzi] ([d:2005]) : délocalisations = [n:7 %] des destructions d'emplois"],
  ["Nuance","m","[a:Fontagné], [w:Pas d'industrie, pas d'avenir ?] : on peut garder l'activité industrielle en délocalisant la production"]
 ]},
 {q:"Qui capte la valeur créée par les FMN ?", ideas:[
  ["Les actionnaires","y","[a:Jensen et Meckling] ([d:1976]) : stock-options → masse salariale comprimée"],
  ["Les actionnaires","y","[a:Gutiérrez et Philippon], [w:Ownership, Concentration and Investment] ([d:2018]) : investisseurs institutionnels de [n:10 %] à [n:85 %] des actions américaines"],
  ["Les actionnaires","y","CEPII ([d:2019]) : part salariale −[n:7,2 points] aux É-U, à [n:70 %] par le comportement des firmes"],
  ["Les machines","m","[a:Karabarbounis et Neiman], [w:The Global Decline of the Labor Share] ([d:2013]) : l'investissement devient moins cher que le travail"],
  ["Le pays du siège","m","R&D d'exploration et marketing restent au siège {e:L'Oréal : R&D d'adaptation seulement en Chine}"],
  ["Les PED, selon leur place","m","IDE ambivalents : insertion dans les chaînes {e:Tigres asiatiques} mais concurrence locale {e:Nestlé et le manioc}"]
 ]},
 {q:"L'État peut-il encore orienter les FMN ?", ideas:[
  ["Oui","y","[a:Cohen et Lorenzi], [w:Politiques industrielles pour l'Europe] ([d:2000]) : 5 raisons d'intervenir {e:Galileo, France 2030}"],
  ["Oui","y","[a:Aghion et Howitt], [w:Appropriate Growth Policy] ([d:2005]) : une politique adaptée au niveau de développement"],
  ["Oui","y","[a:Keynes], [w:De l'autosuffisance nationale] ([d:1933]) : les propriétaires lointains justifient le contrôle des IDE {e:CFIUS, décret Montebourg 2014}"],
  ["Oui","y","[a:Moretti], [w:The New Geography of Jobs] ([d:2012]) : un emploi qualifié en crée 4 à 5, d'où les zones d'activité"],
  ["Non","n","[a:Tiebout], [w:A Pure Theory of Local Expenditures] ([d:1956]) : les FMN votent avec leurs pieds {e:Irlande, IS à 12,5 %}"],
  ["Non","n","[a:Stigler], [w:The Theory of Economic Regulation] ([d:1971]) : capture réglementaire {e:BlackRock et la Fed, 2020}"],
  ["Nuance","m","Rapport [a:Carayon] ([d:2003]) : contrôler les IDE expose aux rétorsions"]
 ]},
 {q:"La firme globale est-elle une réalité ?", ideas:[
  ["Oui","y","[a:Porter], [w:Competition in Global Industries] ([d:1986]) : production répartie, offre standardisée {e:Apple}"],
  ["Oui","y","[a:Baldwin], [w:Global Supply Chains] ([d:2012]) : second dégroupement, commerce de tâches"],
  ["Oui","y","[n:80 %] du commerce mondial organisé par les FMN {e:l'iPhone}"],
  ["Non","n","[a:Berger], [w:Made in Monde] ([d:2006]) : les FMN restent ancrées dans leur pays d'origine"],
  ["Non","n","[a:d'Iribarne], [w:La Logique de l'honneur] ([d:1989]) : le management reste national {e:échec de Daimler-Chrysler}"],
  ["Glocale","m","[a:Perlmutter] ([d:1969]) : vers le régiocentrisme {e:« think global, act local » (Sony)}"],
  ["Elle recule","m","CNUCED : relocalisation, régionalisation, chaînes raccourcies"]
 ]}
]}
],

"ch2-1": [
{title:"La gouvernance mondiale", sub:"qui produit les biens publics mondiaux ?", debates:[
 {q:"La coopération internationale a-t-elle besoin d'un hégémon ?", ideas:[
  ["Oui","y","[a:Kindleberger], [w:La Grande Crise mondiale, 1929-1939] ([d:1973]) : stabilité hégémonique {e:1929 : personne n'assume le rôle}"],
  ["Oui","y","[a:Gilpin], [w:War and Change in World Politics] ([d:1981]) : l'ordre reflète la puissance, il entre en crise quand l'hégémon décline"],
  ["Oui","y","[a:Krasner], [w:International Regimes] ([d:1983]) : un régime n'est respecté que s'il sert la puissance {e:les É-U paralysent l'OMC face à la Chine}"],
  ["Oui","y","[a:Nye] ([d:2017]) : piège de Kindleberger, sans hégémon le système s'effondre"],
  ["Non","n","[a:Keohane], [w:After Hegemony] ([d:1984]) : les institutions survivent par intérêt {e:plus de 600 différends à l'ORD depuis 1995}"],
  ["Non","n","[a:Ostrom], [w:La Gouvernance des biens communs] ([d:1990]) : gouvernance polycentrique sans gouvernement mondial"],
  ["Non","n","[a:Beck], [w:Pouvoir et contre-pouvoir à l'ère de la mondialisation] ([d:2003]) : l'État cosmopolite coopère {e:impôt minimal mondial de 15 %, 2021}"]
 ]},
 {q:"Les biens publics mondiaux peuvent-ils être produits ?", ideas:[
  ["Oui","y","[a:North], [w:Institutions, Institutional Change and Economic Performance] ([d:1990]) : les institutions réduisent l'incertitude {e:cadre stable depuis 1947 → chaînes de valeur}"],
  ["Oui","y","[a:Ostrom] ([d:1990]) : les communautés s'auto-organisent"],
  ["Oui","y","{e:OMC 2022 : accord sur les subventions à la pêche}"],
  ["Non","n","[a:Kindleberger], [w:International Public Goods without International Government] ([d:1986]) : chacun est passager clandestin {e:Kyoto, Paris}"],
  ["Non","n","[a:Olson], [w:Logique de l'action collective] ([d:1965]) : plus le groupe est grand, moins il se mobilise"],
  ["Non","n","[a:Hardin], [w:La Tragédie des communs] ([d:1968]) : la ressource libre est détruite"],
  ["Non","n","Sans pouvoir coercitif, les intérêts nationaux l'emportent {e:COVAX : les pays riches préemptent les vaccins}"],
  ["Nuance","m","[a:Kaul et Mendoza], [w:Providing Global Public Goods] ([d:2003]) : 3 caractères publics {e:l'accord de Paris les remplit mal}"],
  ["Nuance","m","[a:Hugon], [w:Politiques et management public] ([d:2003]) : des constructions historiques, choisies par les puissants"]
 ]},
 {q:"La mondialisation menace-t-elle la souveraineté des États ?", ideas:[
  ["Oui","y","[a:Rodrik], [w:The Globalization Paradox] ([d:2011]) : trilemme hypermondialisation / État-nation / démocratie"],
  ["Oui","y","[a:Zucman], [w:La richesse cachée des nations] ([d:2013]) : [n:55 %] des profits étrangers des FMN américaines dans 6 territoires"],
  ["Oui","y","[a:Stiglitz], [w:La Grande Désillusion] ([d:2002]) : le FMI impose « one size fits all » {e:crise asiatique, 1997}"],
  ["Oui","y","[a:Aglietta] (CEPII, [d:2009]) : règles de Bâle capturées par le lobby bancaire"],
  ["Non","n","[a:Beck] ([d:2003]) : la souveraineté s'exerce par la coopération {e:impôt minimal de 15 %, OCDE 2021}"],
  ["Non","n","[a:Masch] ([d:2011]) : un libre-échange compensé résout le trilemme"],
  ["Nuance","m","[a:Rodrik], [w:How to Save Globalization from its Cheerleaders] ([d:2007]) : hiérarchiser avec des sauvegardes sociales et environnementales"]
 ]}
]},
{title:"Du GATT à l'OMC", sub:"réussite ou blocage ?", debates:[
 {q:"Le GATT et l'OMC ont-ils réussi à libéraliser les échanges ?", ideas:[
  ["Oui","y","Droits sur les produits manufacturés de [n:40 %] à moins de [n:5 %] ; commerce ×[n:40] de [d:1950] à [d:2010]"],
  ["Oui","y","Uruguay Round ([d:1986-1994]) : agriculture, textile, services, ADPIC, création de l'OMC"],
  ["Oui","y","L'ORD, « joyau de la couronne » ([a:Lamy]) {e:Airbus/Boeing : 7,5 Md$ puis 4 Md$ de rétorsions}"],
  ["Non","n","[a:Rose] ([d:2004]) : l'appartenance au GATT/OMC n'accélère pas les échanges"],
  ["Non","n","[a:Stiglitz et Charlton], [w:Pour un commerce mondial plus juste] ([d:2005]) : les règles vont contre les PED"],
  ["Non","n","Barrières non tarifaires = droit de [n:40 %] (CEPII, [d:2018]) {e:bœuf aux hormones}"],
  ["Non","n","Agriculture protégée ([n:17 %] contre [n:3 %] pour l'industrie) {e:initiative coton}"],
  ["Nuance","m","[a:Allais], [w:Le libre-échange, réalités et mythologies] ([d:1993]) : la théorie ricardienne est trop statique"]
 ]},
 {q:"L'OMC peut-elle sortir de sa crise ?", ideas:[
  ["Oui","y","Plurilatéralisme ([a:Sébastien Jean], CEPII, [d:2020]) {e:accord sur la pêche, 2022}"],
  ["Oui","y","[a:Baldwin] ([d:2006]) : les accords régionaux la complètent"],
  ["Non","n","Consensus à [n:166] membres = droit de veto pour chacun"],
  ["Non","n","[a:Sébastien Jean], [w:L'Économie mondiale 2020] ([d:2019]) : rejet américain, Chine passager clandestin"],
  ["Non","n","ORD paralysé depuis [d:2019]"],
  ["Non","n","[a:Bhagwati] : le bol de spaghetti des accords régionaux la fragmente"],
  ["Non","n","Zones grises et managed trade ([a:Krugman]) ; politique stratégique ([a:Brander et Spencer], [d:1985]) {e:Airbus face à Boeing}"],
  ["Nuance","m","[a:Sally] ([d:2004]) : donner plus de poids aux grands pays commerçants"],
  ["Nuance","m","[a:Wolfensohn] : le dumping social à l'OIT, le dumping monétaire au FMI"]
 ]},
 {q:"Le monde va-t-il vers la confrontation entre puissances ?", ideas:[
  ["Oui","y","[a:Allison], [w:Vers la guerre] ([d:2019]) : piège de Thucydide entre Washington et Pékin"],
  ["Oui","y","Offensive tarifaire de Trump contre la Chine ([d:2018])"],
  ["Oui","y","Institutions concurrentes {e:BAII chinoise, 2014} et fragmentation verte {e:IRA, MACF}"],
  ["Non","n","[a:Keohane] ([d:1984]) : les États gardent les institutions par intérêt"],
  ["Non","n","Des acteurs réforment au lieu de rompre {e:TPP à 11 relancé par le Japon, 2018}"],
  ["Nuance","m","Réforme des quotes-parts du FMI ([d:2016]) : plus de poids à la Chine, veto américain maintenu"]
 ]}
]}
],

"ch2-2": [
{title:"Régionalisme et multilatéralisme", sub:"étape ou obstacle ?", debates:[
 {q:"Le régionalisme est-il une étape vers le libre-échange mondial ?", ideas:[
  ["Oui","y","Article XXIV du GATT : un tremplin {e:l'UE parle d'une seule voix à l'OMC}"],
  ["Oui","y","[a:Baldwin], [w:A Domino Theory of Regionalism] ([d:1993]) : l'ouverture s'étend par contagion {e:Acte unique → EEE (1992) → adhésions de 1995}"],
  ["Oui","y","[a:Lawrence], [w:Regionalism, Multilateralism and Deeper Integration] ([d:1996]) : intégration profonde, clauses OMC+ {e:UE-Nouvelle-Zélande, 2024}"],
  ["Oui","y","[a:Krugman et Obstfeld], [w:Économie internationale] ([d:2012]) : optimum de second rang, laboratoire"],
  ["Oui","y","[a:Siroën], [w:La régionalisation est-elle une hérésie économique ?] ([d:1999]) : biens publics entre pays proches {e:marché européen du CO2, 2005}"],
  ["Non","n","[a:Bhagwati], [w:Regionalism and Multilateralism: An Overview] ([d:1993]) : pierres d'achoppement {e:libéralisation compétitive de Zoellick, 2003}"],
  ["Non","n","[a:Bhagwati], [w:Éloge du libre-échange] ([d:2005]) : bol de spaghetti des règles d'origine"],
  ["Non","n","[a:Krugman], [w:The Move to Free Trade Zones] ([d:1991]) : blocs rivaux, dilemme du prisonnier"],
  ["Non","n","[a:Pisani-Ferry], [w:Les nouvelles règles du jeu] ([d:2024]) : régionalisation entre alliés {e:IRA, 2022}"],
  ["Nuance","m","Pas de dérive systématique {e:UE de 6 à 27 en baissant ses droits extérieurs}"]
 ]},
 {q:"Les accords régionaux améliorent-ils le bien-être ?", ideas:[
  ["Oui","y","{e:CEE : 46,5 Md d'ECU de commerce créé contre 1,2 Md détourné (Balassa, 1970)}"],
  ["Oui","y","[a:Krugman] ([d:1991]) : entre partenaires naturels, peu de détournement {e:Canada-États-Unis, 1989}"],
  ["Oui","y","[a:Kemp et Wan], [w:An Elementary Proposition Concerning the Formation of Customs Unions] ([d:1976]) : un TEC bien fixé enrichit tout le monde"],
  ["Non","n","{e:Mercosur : effets nets négatifs (Banque mondiale, 1996)}"],
  ["Non","n","[a:Frankel], [w:Regional Trading Blocs in the World Economic System] ([d:1997]) : trop de préférences, bloc « supernaturel »"],
  ["Non","n","[a:Bickerdike], [w:The Theory of Incipient Taxes] ([d:1906]) : tarif optimal, l'union gagne aux dépens des tiers"],
  ["Ça dépend du solde","m","[a:Viner], [w:The Customs Union Issue] ([d:1950]) : création contre détournement de commerce"],
  ["Peu","m","[a:Siroën], [w:Les accords commerciaux régionaux] ([d:2015]) : effet propre positif mais faible"],
  ["Difficile à dire","m","[a:Baier et Bergstrand] ([d:2004]) : on signe avec ses bons partenaires"]
 ]},
 {q:"L'économie explique-t-elle la multiplication des accords ?", ideas:[
  ["Oui","y","[a:Baldwin], [w:21st Century Regionalism] ([d:2011]) : on négocie pour produire à l'étranger {e:RCEP, 2022}"],
  ["Oui","y","OCDE : OMC paralysée, enjeu tarifaire épuisé, peur d'être marginalisé"],
  ["Oui","y","[a:Tinbergen], [w:Shaping the World Economy] ([d:1962]) : gravité {e:É-U-Canada > É-U-Allemagne}"],
  ["Oui","y","[a:McCallum], [w:National Borders Matter] ([d:1995]) : effet frontière {e:provinces canadiennes : 20 fois plus d'échanges}"],
  ["Oui","y","[a:Sébastien Jean], [w:Une brève histoire de la mondialisation] ([d:2016]) : la distance compte davantage"],
  ["Non, la géopolitique","n","Contenir le communisme {e:ASEAN, 1967}, puis la Chine {e:Partenariat transpacifique}"],
  ["Non, la politique","n","L'intégration prépare l'unification {e:Zollverein, 1834}"],
  ["Non, les normes","n","Le Nord impose ses normes sociales par des accords Nord-Sud {e:ACEUM, 2020}"]
 ]},
 {q:"L'intégration régionale profite-t-elle à tous ses membres ?", ideas:[
  ["Oui","y","Intégration régionale et mondiale vont ensemble {e:UE : importations extérieures plus rapides depuis 1990}"],
  ["Oui","y","{e:Mexique : exportations vers les É-U +240 % (1993-2003)}"],
  ["Oui","y","Le bloc pèse plus uni {e:accord UE-Mercosur, janvier 2026}"],
  ["Non","n","{e:Mexique : PME et paysans ruinés, PIB −5 % en 2009}"],
  ["Non","n","[a:Bhagwati] : en bilatéral, le grand impose ses règles {e:É-U-Maroc 2004, ADPIC-plus}"],
  ["Non","n","{e:le Brésil pèse 75 % du PIB du Mercosur}"],
  ["Nuance","m","[a:Krugman] : l'intégration profonde sert les FMN {e:Philip Morris contre l'Australie}"],
  ["Nuance","m","[a:Grossman et Krueger] ([d:1991]) : effets environnementaux ambigus (échelle, composition, technique)"],
  ["Nuance","m","{e:ZLECAf (2018) : intégration surtout sur le papier}"]
 ]}
]}
],

"im-1": [
{title:"La monnaie", sub:"neutre ou active ?", debates:[
 {q:"La monnaie est-elle neutre ?", ideas:[
  ["Oui","y","[a:Say], [w:Traité d'économie politique] ([d:1803]) : l'offre crée sa propre demande"],
  ["Oui","y","[a:Fisher], [w:Le pouvoir d'achat de la monnaie] ([d:1911]) : MV = PT, la monnaie ne crée que de l'inflation"],
  ["Oui","y","[a:Hume], [w:De la monnaie] ([d:1752]) : « l'huile » des rouages"],
  ["Oui","y","[a:Muth] ([d:1961]), nouvelle école classique : neutre même à court terme"],
  ["À long terme","m","[a:Friedman], [w:The Role of Monetary Policy] ([d:1968]) : illusion monétaire puis retour au taux naturel {e:stagflation des années 1970}"],
  ["Non","n","[a:Keynes], [w:Théorie générale de l'emploi, de l'intérêt et de la monnaie] ([d:1936]) : préférence pour la liquidité → taux → investissement"],
  ["Non","n","[a:Fisher], [w:The Debt-Deflation Theory of Great Depressions] ([d:1933]) : déflation par la dette {e:É-U 1933 : prix −25 %, chômage 24,9 %}"],
  ["Non","n","Nouvelle économie keynésienne : prix et salaires visqueux"],
  ["Non, et nocive","n","[a:Hayek], [w:Prix et production] ([d:1931]) : malinvestissements"],
  ["Non, et nocive","n","[a:Rueff], [w:Le Péché monétaire de l'Occident] ([d:1971]) : faux droits"]
 ]},
 {q:"La monnaie est-elle d'abord un outil des échanges ?", ideas:[
  ["Oui","y","[a:Aristote], [w:Éthique à Nicomaque] : 3 fonctions"],
  ["Oui","y","[a:Jevons], [w:La monnaie et le mécanisme de l'échange] ([d:1875]) : lève la double coïncidence des besoins"],
  ["Oui","y","[a:Menger], [w:De l'origine de la monnaie] ([d:1892]) : naît du marché, pas de l'État"],
  ["Oui","y","[a:Radford] ([d:1945]) : {e:cigarettes des camps de prisonniers}"],
  ["Non","n","[a:Graeber], [w:Dette : 5 000 ans d'histoire] ([d:2011]) : la dette précède le troc"],
  ["Non","n","[a:Aglietta et Orléan], [w:La Violence de la monnaie] ([d:1982]) : une institution, signe de souveraineté {e:euro, Maastricht 1992}"],
  ["Non","n","[a:Aglietta et Orléan], [w:La monnaie souveraine] ([d:1998]) : 3 confiances emboîtées {e:Allemagne, 1923}"],
  ["Non","n","[a:Knapp], [w:Théorie étatique de la monnaie] ([d:1905]) : vaut parce que l'État l'impose"],
  ["Non","n","[a:Marx], [w:Le Capital] ([d:1867]) : rapport social, A → M → A'"],
  ["Nuance","m","[a:Simmel], [w:Philosophie de l'argent] ([d:1900]) : libère mais réduit tout au calcul"]
 ]},
 {q:"Qui contrôle la création monétaire ?", ideas:[
  ["Les banques","y","[a:Withers], [w:The Meaning of Money] ([d:1909]) : les crédits font les dépôts"],
  ["Les banques","y","Diviseur de crédit : la banque centrale ne contrôle que le prix"],
  ["Les banques","y","Banking School, [a:Tooke], [w:An Inquiry into the Currency Principle] ([d:1844]) : loi du reflux"],
  ["La banque centrale","n","Multiplicateur : la banque centrale fixe la base monétaire"],
  ["La banque centrale","n","[a:Ricardo], [w:Le haut prix des lingots] ([d:1810]) : limiter l'émission {e:Bank Charter Act, 1844}"],
  ["Par les taux","m","La banque centrale pilote le prix de la monnaie {e:BCE : 0 % → 4 % → 2,50 % (sept. 2026)}"]
 ]}
]},
{title:"Banques et financement", sub:"qui encadre, qui finance ?", debates:[
 {q:"Faut-il une banque centrale indépendante ?", ideas:[
  ["Oui","y","[a:Kydland et Prescott], [w:Rules Rather than Discretion] ([d:1977]) : incohérence temporelle {e:Alesina et Summers, 1993}"],
  ["Oui","y","[a:Bagehot], [w:Lombard Street] ([d:1873]) : prêteur en dernier ressort {e:Draghi, juillet 2012}"],
  ["Oui","y","[a:Diamond et Dybvig], [w:Bank Runs, Deposit Insurance, and Liquidity] ([d:1983]) : la garantie arrête la panique {e:SVB, mars 2023}"],
  ["Non","n","[a:Selgin], [w:The Theory of Free Banking] ([d:1988]) : sans sauvetage, les banques s'autodisciplinent {e:Écosse 1716-1845}"],
  ["Non","n","[a:Hayek], [w:Pour une vraie concurrence des monnaies] ([d:1976]) : concurrence des monnaies privées"],
  ["Non","n","[a:Artus et Virard], [w:La folie des banques centrales] ([d:2016]) : des bulles plus que de la croissance"],
  ["Nuance","m","[a:Blancheton] : autonomie plutôt qu'indépendance (déficit démocratique, policy mix)"],
  ["Nuance","m","Aléa moral : banques « too big to fail »"]
 ]},
 {q:"Faut-il épargner avant d'investir ?", ideas:[
  ["Oui","y","[a:Hayek], [w:Prix et production] ([d:1931]) : sinon taux trop bas et crise"],
  ["Oui","y","[a:Rueff] ([d:1971]) : la monnaie sans richesse crée de faux droits"],
  ["Non","n","[a:Keynes] ([d:1936]) : le crédit crée l'épargne a posteriori"],
  ["Non","n","[a:Harrod] ([d:1939]) et [a:Domar] ([d:1946]) : l'investissement doit progresser au bon rythme"],
  ["Non","n","[a:Hicks], [w:The Crisis in Keynesian Economics] ([d:1974]) : économie d'endettement {e:France des années 1970 : 80 % de crédit}"]
 ]},
 {q:"Vaut-il mieux se financer par les banques ou par les marchés ?", ideas:[
  ["Les banques","y","[a:Diamond], [w:Financial Intermediation and Delegated Monitoring] ([d:1984]) : contrôleur délégué"],
  ["Les banques","y","Indispensables aux PME {e:dette des entreprises françaises : 2/3 de crédit}"],
  ["Les banques","y","[a:Krugman], [w:Making Banking Boring] ([d:2009]) : une banque séparée et « ennuyeuse » est plus sûre"],
  ["Les marchés","n","[a:Bourguinat], [w:Les Vertiges de la finance internationale] ([d:1987]) : les 3D allouent le capital plus souplement"],
  ["Les marchés","n","L'Europe manque de capital-risque {e:actifs bancaires : 300 % du PIB dans l'UE, 85 % aux É-U}"],
  ["Limite","m","[a:Stiglitz et Weiss], [w:Credit Rationing in Markets with Imperfect Information] ([d:1981]) : les banques rationnent le crédit"],
  ["Limite","m","Titrisation → risque systémique {e:subprimes 2007-2008} ; Bâle III pousse vers le shadow banking"]
 ]}
]}
],

"ch3": [
{title:"Croissance et nature", sub:"soutenabilité faible ou forte ?", debates:[
 {q:"La croissance est-elle limitée par les ressources ?", ideas:[
  ["Oui","y","[a:Malthus], [w:Essai sur le principe de population] ([d:1798]) : trappe malthusienne"],
  ["Oui","y","[a:Ricardo], [w:Des principes de l'économie politique et de l'impôt] ([d:1817]) : état stationnaire"],
  ["Oui","y","[a:Ehrlich], [w:La Bombe P] ([d:1968]) : I = P × A × T"],
  ["Oui","y","[a:Meadows et al.], [w:Halte à la croissance ?] ([d:1972]) : croissance infinie impossible dans un monde fini"],
  ["Oui","y","[a:Cohen], [w:La Prospérité du vice] ([d:2009]) : modèle occidental impossible à généraliser"],
  ["Non","n","Gains de productivité agricole {e:loi Pisani, 1960}"],
  ["Non","n","[a:Solow] ([d:1991]) : le progrès technique trouve des substituts"],
  ["Non","n","[a:Hotelling], [w:The Economics of Exhaustible Resources] ([d:1931]) : le prix de la ressource rare monte au rythme du taux d'intérêt"],
  ["Nuance","m","Meadows sous-estime le progrès technique et la transition démographique"]
 ]},
 {q:"Le capital naturel est-il substituable ?", ideas:[
  ["Oui","y","[a:Solow], [w:Sustainability: An Economist's Perspective] ([d:1991]) : transmettre un stock global de capital"],
  ["Oui","y","[a:Hartwick] ([d:1977]) : réinvestir la rente {e:fonds souverain norvégien}"],
  ["Oui","y","[a:Grossman et Krueger], [w:Economic Growth and the Environment] ([d:1995]) : courbe de Kuznets environnementale {e:smog de Londres 1952 → Clean Air Act}"],
  ["Oui","y","[a:Brunel], [w:Le Développement durable] ([d:2004]) : le progrès plutôt que la sanctuarisation"],
  ["Non","n","[a:Georgescu-Roegen], [w:La Décroissance] ([d:1979]) : entropie, dégradation irréversible"],
  ["Non","n","[a:Latouche], [w:La Décroissance] ([d:2019]) : le développement durable est un oxymore"],
  ["Non","n","[a:Parrique], [w:Ralentir ou périr] ([d:2023]) : découplage ni total, ni global, ni permanent"],
  ["Non","n","[a:Daly] : au-delà d'un seuil, la croissance est « anti-économique »"],
  ["Nuance","m","[a:Jevons], [w:The Coal Question] ([d:1865]) : effet rebond {e:voitures plus sobres mais SUV}"],
  ["Nuance","m","[a:Raworth], [w:La Théorie du donut] ([d:2017]) ; [a:Gollier], [w:Le Climat après la fin du mois] ([d:2019]) : décroissance sélective"]
 ]},
 {q:"Faut-il agir tout de suite contre le réchauffement ?", ideas:[
  ["Oui","y","[a:Stern], [w:L'Économie du changement climatique] ([d:2006]) : inaction = [n:5 à 20 %] du PIB mondial, action = [n:1 %]"],
  ["Oui","y","GIEC : [n:+1,1 °C], cause humaine"],
  ["Oui","y","[a:Crutzen], [w:Geology of Mankind] ([d:2002]) : l'anthropocène {e:mer d'Aral}"],
  ["Oui","y","[a:Carney] (Lloyd's, [d:2015]) : tragédie de l'horizon, actifs échoués"],
  ["Progressivement","m","[a:Nordhaus], [w:Le Casino climatique] ([d:2013]) : avec un taux d'actualisation plus élevé, une action graduelle suffit"],
  ["Nuance","m","Le résumé du GIEC est validé par les États, scénarios pessimistes mis en avant"]
 ]}
]},
{title:"Politiques climatiques", sub:"quels outils, quelle coopération ?", debates:[
 {q:"Faut-il donner un prix au carbone ?", ideas:[
  ["Oui","y","[a:Pigou], [w:L'Économie du bien-être] ([d:1920]) : taxe = dommage marginal, double dividende {e:Suède, taxe carbone 1991}"],
  ["Oui","y","[a:Dales], [w:Pollution, Property and Prices] ([d:1968]) : marché de quotas {e:EU ETS : sous 10 €, puis plus de 100 € en 2023}"],
  ["Oui","y","[a:Nordhaus] ([d:2013]) : taxe carbone mondiale progressive"],
  ["Oui","y","[a:Gollier] : environ [n:50 €] la tonne, avec des compensations pour les modestes"],
  ["Non","n","[a:Coase], [w:Le problème du coût social] ([d:1960]) : négociation privée si les droits sont clairs"],
  ["Non","n","[a:Thaler et Sunstein], [w:Nudge] ([d:2008]) : orienter sans prix {e:facture comparée à celle du voisin}"],
  ["Non","n","[a:Ostrom] ([d:1990]) : gestion par les communautés {e:huertas de Valence}"],
  ["Limite","m","La taxe carbone est régressive {e:Gilets jaunes, 2018}"],
  ["Limite","m","Quotas : allocation initiale, volatilité, droit de polluer"]
 ]},
 {q:"La coopération climatique internationale peut-elle réussir ?", ideas:[
  ["Oui","y","[a:Nordhaus], [w:Climate Clubs] ([d:2015]) : un club qui taxe les non-membres force la coopération"],
  ["Oui","y","MACF européen définitif depuis [d:2026] contre les fuites de carbone"],
  ["Oui","y","[a:Ostrom] : gouvernance polycentrique"],
  ["Non","n","[a:Olson], [w:La Logique de l'action collective] ([d:1965]) : passager clandestin"],
  ["Non","n","[a:Hardin], [w:La tragédie des communs] ([d:1968]) {e:morue de Terre-Neuve, moratoire 1992}"],
  ["Non","n","[a:Kindleberger] ([d:1986]) : bien public mondial sans financeur {e:Kyoto non ratifié par les É-U}"],
  ["Non","n","Accord de Paris ([d:2015]) sans sanction"],
  ["Nuance","m","[a:Locher] ([d:2018]) : la tragédie des communs est un mythe"],
  ["Nuance","m","Chacun son rythme {e:Chine : neutralité en 2060} {e:IRA : 369 Md$ de subventions}"]
 ]},
 {q:"Le Sud doit-il faire le même effort que le Nord ?", ideas:[
  ["Oui, sinon dumping","y","[a:Summers] (mémo, [d:1991]) : déplacer la pollution vers le Sud serait « logique » → havres de pollution {e:maquiladoras}"],
  ["Oui","y","Sinon fuites de carbone, d'où le MACF"],
  ["Non","n","Justice climatique : le Nord a pollué pour se développer (dette écologique)"],
  ["Non","n","[a:Brunel], [w:Le Développement durable] ([d:2004]) : prétexte pour bloquer le Sud"],
  ["Non","n","{e:les 10 % les plus émetteurs = près de la moitié des émissions}"],
  ["Nuance","m","Brundtland ([d:1987]), Rio ([d:1992]) : 3 piliers, chaque pays hiérarchise {e:Norvège}"]
 ]}
]}
]

};

/* Sous-parties : regroupe les arguments sous une idée courte (ordre = ordre des arguments du débat) */
var DB_G={"Le libre-échange profite-t-il à tous les pays ?": ["Gains mutuels", "Gains mutuels", "Gains mutuels", "Partage inégal", "Mauvaises spécialisations", "Mauvaises spécialisations", "Mauvaises spécialisations", "Échange inégal"], "Les avantages comparatifs sont-ils donnés ou construits ?": ["Accumuler des facteurs", "Accumuler des facteurs", "Avance technologique", "Avance technologique", "Taille du marché", "Remontée de filière", "Avantages hérités", "Paradoxe de Leontief"], "L'ouverture cause-t-elle la croissance ?": ["Effet mesuré", "Sélection des firmes", "Cercle vertueux", "Contre-exemple historique", "Causalité non prouvée", "Concurrence déloyale", "", ""], "Le protectionnisme peut-il se justifier ?": ["Éducateur", "Stratégique", "Défensif", "Relance", "Recettes publiques", "Coût pour les consommateurs", "Coût pour les consommateurs", "Coût pour les producteurs", "Contournement"], "La compétitivité est-elle un objectif pour une nation ?": ["Définition", "Dévaluation", "Sens pour une firme", "Dévaluation limitée", "Fiscalité", "Fiscalité", "Patriotisme économique"], "Assiste-t-on à une démondialisation ?": ["Projet politique", "Choix des États", "Géopolitique", "Choix des États", "Retour à la normale", "Retour à la normale", "Chaînes résilientes", "Pas les années 1930", ""], "La firme est-elle un nœud de contrats efficace ?": ["Coûts de transaction", "Coûts de transaction", "Surveillance", "Propriété et contrôle", "Propriété et contrôle", "", ""], "Les bas salaires expliquent-ils les IDE ?": ["IDE vertical", "IDE vertical", "IDE vertical", "Coût unitaire", "Accès au marché", "Institutions", "Gravité", "Imitation", "Agglomération"], "Toute firme peut-elle devenir multinationale ?": ["Born Global", "", "Avantage nécessaire", "Avantage nécessaire", "Firmes les plus productives", "Firmes les plus productives", ""], "Les FMN détruisent-elles les emplois du Nord ?": ["Contenu en emplois", "Propagation", "Non-qualifiés", "Autres causes", "Autres causes", "Effet net faible", "Effet net faible", "Activité industrielle"], "L'État peut-il encore orienter les FMN ?": ["Politique industrielle", "Politique industrielle", "Contrôle des IDE", "Zones d'activité", "Mobilité des firmes", "Capture réglementaire", "Risque de rétorsions"], "La firme globale est-elle une réalité ?": ["Stratégie mondiale", "Chaînes de valeur", "Chaînes de valeur", "Ancrage national", "Cultures nationales", "", ""], "La coopération internationale a-t-elle besoin d'un hégémon ?": ["Stabilité hégémonique", "Réalisme", "Réalisme", "Stabilité hégémonique", "Intérêt à coopérer", "Gouvernance polycentrique", "Coopération des États"], "Les biens publics mondiaux peuvent-ils être produits ?": ["Cadre institutionnel", "Auto-organisation", "Accord concret", "Passager clandestin", "Passager clandestin", "Tragédie des communs", "Pas de coercition", "Critères exigeants", "Construction historique"], "La mondialisation menace-t-elle la souveraineté des États ?": ["Trilemme", "Fiscalité", "Règles imposées", "Capture", "Coopération", "Libre-échange compensé", "Hiérarchiser les objectifs"], "Le GATT et l'OMC ont-ils réussi à libéraliser les échanges ?": ["Baisse des droits", "Élargissement", "Règlement des différends", "Effet discuté", "Contre les PED", "Protection déplacée", "Protection déplacée", "Théorie trop statique"], "L'OMC peut-elle sortir de sa crise ?": ["Plurilatéralisme", "Accords régionaux", "Consensus", "Rejet américain et chinois", "ORD paralysé", "Fragmentation", "Contournement", "Réformes", "Réformes"], "Le monde va-t-il vers la confrontation entre puissances ?": ["Rivalité sino-américaine", "Rivalité sino-américaine", "Institutions concurrentes", "Intérêt à coopérer", "Réformer plutôt que rompre", "FMI"], "Le régionalisme est-il une étape vers le libre-échange mondial ?": ["Cadre du GATT", "Contagion", "Intégration profonde", "Second rang", "Biens publics", "Substitut à l'OMC", "Bol de spaghetti", "Blocs rivaux", "Logique de puissance", "Exemple de l'UE"], "Les accords régionaux améliorent-ils le bien-être ?": ["Création de commerce", "Partenaires naturels", "Tarif extérieur bien fixé", "Détournement", "Bloc supernaturel", "Tarif optimal", "", "", ""], "L'économie explique-t-elle la multiplication des accords ?": ["Chaînes de valeur", "OMC bloquée", "Proximité", "Proximité", "Proximité", "", "", ""], "L'intégration régionale profite-t-elle à tous ses membres ?": ["Ouverture maintenue", "Gains d'exportation", "Poids collectif", "Dépendance", "Asymétrie", "Asymétrie", "Profit des FMN", "Environnement", "Sur le papier"]};
Object.values(window.ESH_DEBATS).forEach(function(l){l.forEach(function(m){m.debates.forEach(function(d){var g=DB_G[d.q];if(g)d.ideas.forEach(function(i,k){if(g[k])i[3]=g[k];});});});});
})();
