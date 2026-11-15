// Fiches détaillées des débats ESH (une par débat), affichées dans Référentiel → ESH → Débats.
// Clé : "<id de la leçon>/<n° de carte>-<n° du débat>" (même ordre que cours-debats.js).
// Balises : [a:auteur] [w:œuvre] [d:date] [n:chiffre]
// Chaque partie : lab (Oui, Non, Dépasser…), ti (l'idée de la partie), sp (sous-parties : t = titre, p = paragraphes, ex = exemples)
window.ESH_DEBAT_FICHES = {

"ch1-1/0-0": {
idee: "L'échange est un jeu à somme positive, mais les gains se partagent inégalement et une mauvaise spécialisation peut appauvrir : le libre-échange profite à tous les pays seulement si chacun maîtrise ce qu'il exporte.",
termes: "« Profiter à tous » a deux sens. Chaque pays peut gagner par rapport à l'autarcie : c'est le gain à l'échange, que démontrent les classiques. Ou bien les gains peuvent être répartis équitablement : c'est ce que contestent leurs critiques. Le vrai enjeu est donc la spécialisation : ce qu'un pays exporte décide de ce qu'il gagne.",
parts: [
{lab:"Oui", ti:"L'échange est un jeu à somme positive", sp:[
 {t:"Chacun gagne à se spécialiser", p:[
  "[a:Smith], [w:Recherches sur la nature et les causes de la richesse des nations] ([d:1776])\nChaque pays produit ce qu'il fait avec moins de travail que les autres (avantage absolu) et achète le reste. L'échange élargit le marché, donc la division du travail, qui est la source de la productivité.",
  "[a:Ricardo], [w:Des principes de l'économie politique et de l'impôt] ([d:1817])\nMême un pays moins productif partout gagne à l'échange s'il se spécialise là où son désavantage est le plus faible. Ce qui compte n'est pas le coût absolu mais le coût d'opportunité : c'est l'avantage comparatif."],
  ex:["Le Portugal produit le vin et le drap avec moins de travail que l'Angleterre, mais son avance est plus forte dans le vin : le Portugal se spécialise dans le vin, l'Angleterre dans le drap, et les deux consomment plus qu'en autarcie."]},
 {t:"Chacun valorise ses dotations", p:[
  "Modèle HOS ([a:Heckscher], [d:1919] ; [a:Ohlin], [d:1933] ; [a:Samuelson])\nChaque pays exporte le bien qui utilise intensément son facteur abondant (travail, capital, terre). Comme tout pays a un facteur relativement abondant, tous peuvent participer à l'échange."],
  ex:["La Chine des années 2000, riche en main-d'œuvre, exporte du textile et de l'assemblage ; l'Allemagne, riche en capital et en travail qualifié, exporte des machines."]}
]},
{lab:"Non", ti:"Certaines spécialisations appauvrissent", sp:[
 {t:"Se spécialiser au mauvais endroit", p:[
  "[a:Graham], [w:Some Aspects of Protection Further Considered] ([d:1923])\nUn pays qui se spécialise dans un secteur à rendements décroissants (l'agriculture) et abandonne un secteur à rendements croissants (l'industrie) voit ses coûts monter à mesure qu'il produit plus : il peut perdre à l'échange."],
  ex:["La Côte d'Ivoire est le premier producteur mondial de cacao mais ne capte qu'environ [n:6 %] des [n:130 Md$] de valeur de la filière : la transformation et la marque restent au Nord."]},
 {t:"Des prix qui jouent contre le Sud", p:[
  "[a:Prebisch], [w:The Economic Development of Latin America and its Principal Problems] ([d:1950])\nLes termes de l'échange des produits primaires se dégradent sur longue période : quand le revenu mondial augmente, la demande de matières premières augmente moins vite que celle de biens industriels, et les gains de productivité du Nord se traduisent en hausses de salaires plutôt qu'en baisses de prix. Le Sud doit exporter toujours plus pour importer autant.",
  "[a:Bhagwati], [w:Immiserizing Growth] ([d:1958])\nCroissance appauvrissante : si un grand exportateur produit davantage d'un bien dont la demande est peu sensible au prix, le cours mondial s'effondre et sa recette baisse. Il produit plus et s'appauvrit."],
  ex:["La Zambie dépend du cuivre : chaque chute des cours fait plonger ses recettes d'exportation.", "Le café brésilien à la fin des années 1920 : la surproduction fait s'effondrer les cours, et le Brésil finit par brûler une partie de ses stocks."]},
 {t:"Un échange inégal", p:[
  "[a:Emmanuel], [w:L'Échange inégal] ([d:1969])\nComme les salaires du Sud sont bien plus bas, une heure de travail du Sud s'échange contre moins d'une heure de travail du Nord. Le commerce transfère de la valeur du Sud vers le Nord, même quand les prix paraissent justes."]}
]},
{lab:"Dépasser", ti:"Tous gagnent, mais pas autant", sp:[
 {t:"Le partage dépend de la demande", p:[
  "[a:Mill], [w:Principes d'économie politique] ([d:1848])\nL'échange profite aux deux pays, mais le gain se partage selon la demande réciproque : le pays dont le produit est le plus demandé obtient les meilleurs termes de l'échange et la plus grande part du gain. La question n'est donc pas « gagner ou perdre », mais « qui gagne combien »."],
  ex:["L'accord UE-Mercosur : les industriels européens y voient des débouchés, les agriculteurs européens une concurrence ; le débat porte sur la répartition des gains, pas sur leur existence."]}
]}
],
usages: [
 {t:"Faut-il avoir peur de la mondialisation ?", d:"Ricardo pour montrer le gain global, Prebisch et Emmanuel pour montrer qui en paie le prix."},
 {t:"Le commerce est-il un facteur de développement ?", d:"Le développement dépend de la spécialisation : cacao ivoirien contre Corée industrielle."},
 {t:"Les pays pauvres doivent-ils s'ouvrir ?", d:"Graham et Bhagwati : s'ouvrir sans changer de spécialisation peut appauvrir."}
]},

"ch1-1/0-1": {
idee: "Les avantages comparatifs ne sont pas un héritage figé : les dotations de départ fixent le point de départ, mais l'accumulation de capital humain, l'innovation, la taille du marché et la politique industrielle les transforment.",
termes: "« Donnés » renvoie aux modèles classiques, statiques : la productivité (Ricardo) ou les dotations en facteurs (HOS) sont un héritage du climat, de la géographie, de l'histoire. « Construits » renvoie aux théories dynamiques : un pays peut changer ce dans quoi il est bon. L'enjeu est politique : si les avantages se construisent, une politique industrielle a un sens.",
parts: [
{lab:"Donnés", ti:"Les modèles classiques raisonnent sur un héritage", sp:[
 {t:"Productivité et dotations", p:[
  "[a:Ricardo] ([d:1817]) suppose des écarts de productivité fixes entre pays ; le modèle HOS suppose des dotations en facteurs données. Le commerce découle alors de la géographie des facteurs : chacun exporte ce que la nature et l'histoire lui ont donné."]},
 {t:"Le paradoxe de Leontief", p:[
  "[a:Leontief], [w:Domestic Production and Foreign Trade] ([d:1953])\nAvec les données de [d:1947], les exportations américaines contiennent relativement plus de travail et moins de capital que les importations, alors que les États-Unis sont le pays le plus riche en capital. Les dotations brutes n'expliquent pas tout : il faut tenir compte de la qualification du travail, qui, elle, s'accumule."]}
]},
{lab:"Construits", ti:"Un pays peut changer ce dans quoi il est bon", sp:[
 {t:"Accumuler des facteurs", p:[
  "[a:Rybczynski], [w:Factor Endowment and Relative Commodity Prices] ([d:1955])\nÀ prix constants, quand la dotation d'un facteur augmente, la production du bien qui l'utilise intensément augmente plus que proportionnellement, et l'autre recule. Accumuler du capital transforme donc la spécialisation.",
  "[a:Findlay et Kierzkowski], [w:International Trade and Human Capital] ([d:1983])\nLe capital humain s'accumule par l'éducation : un pays qui forme sa population se spécialise peu à peu dans les biens qualifiés."],
  ex:["La Corée du Sud passe du textile, dans les années 1960, aux semi-conducteurs (Samsung) en investissant massivement dans l'éducation."]},
 {t:"Innover", p:[
  "[a:Posner], [w:International Trade and Technological Change] ([d:1961])\nUn pays exporte un nouveau produit tant que les autres ne l'ont pas imité : son avance technologique est un avantage, mais temporaire.",
  "[a:Vernon], [w:International Investment and International Trade in the Product Cycle] ([d:1966])\nCycle de vie du produit : le produit naît dans le pays innovant, qui l'exporte ; à maturité, la production se diffuse ; standardisé, il est fabriqué dans les pays à bas coûts, et le pays d'origine finit par l'importer."],
  ex:["Airbus et Boeing face au chinois Comac, qui rattrape son retard avec le C919.", "Le téléviseur : inventé et produit aux États-Unis, puis au Japon, puis en Chine."]},
 {t:"Profiter de la taille du marché", p:[
  "[a:Krugman], [w:Geography and Trade] ([d:1991])\nAvec des rendements croissants, la production se concentre là où le marché est grand, et le premier arrivé garde son avance par effet cumulatif. L'avantage est historique, pas naturel."],
  ex:["La zone économique spéciale de Shenzhen ([d:1980]) : un village de pêcheurs devenu un pôle mondial de l'électronique."]},
 {t:"Remonter les filières", p:[
  "[a:Akamatsu] ([d:1937])\nVol d'oies sauvages : un pays importe un produit, puis le fabrique, puis l'exporte, avant de passer à des biens plus sophistiqués et de laisser les anciens aux pays qui le suivent."],
  ex:["Le Japon de l'ère Meiji passe du textile à l'industrie lourde ; les dragons asiatiques suivent ensuite la même trajectoire derrière lui."]}
]},
{lab:"Dépasser", ti:"Le point de départ compte, la politique fait le reste", sp:[
 {t:"Des avantages construits sous contrainte", p:[
  "Les dotations initiales limitent ce qu'un pays peut faire à court terme : on ne passe pas du cacao aux semi-conducteurs en quelques années. Mais l'État peut accélérer la construction des avantages : protection éducatrice de [a:List] ([d:1841]), politiques industrielles coréennes et chinoises. Les avantages comparatifs deviennent alors un objectif de politique économique, et non plus une donnée."]}
]}
],
usages: [
 {t:"Peut-on choisir sa spécialisation ?", d:"Rybczynski, Vernon et Akamatsu montrent qu'elle évolue ; Leontief montre que les dotations brutes n'expliquent pas tout."},
 {t:"L'État doit-il mener une politique industrielle ?", d:"Si les avantages se construisent, la Corée et Shenzhen montrent ce qu'un État peut faire."},
 {t:"Comment expliquer la réussite des pays asiatiques ?", d:"Vol d'oies sauvages et accumulation de capital humain."}
]},

"ch1-1/0-2": {
idee: "Même quand un pays gagne globalement, l'ouverture redistribue : le facteur abondant et les travailleurs branchés sur le marché mondial gagnent, le facteur rare et les sédentaires perdent. C'est pourquoi les inégalités baissent entre pays mais montent à l'intérieur des pays riches.",
termes: "La question porte sur la répartition à l'intérieur d'un pays, pas entre pays. Il faut distinguer les facteurs (capital, travail qualifié, travail non qualifié), les secteurs (exposés ou abrités) et les territoires (bassins industriels ou métropoles).",
parts: [
{lab:"Ceux qui gagnent", ti:"Le facteur abondant et les émergents", sp:[
 {t:"Le facteur abondant", p:[
  "[a:Stolper et Samuelson], [w:Protection and Real Wages] ([d:1941])\nL'ouverture augmente le prix relatif du bien exporté, donc la rémunération réelle du facteur abondant qui sert à le produire, et baisse celle du facteur rare. Au Nord, le capital et le travail qualifié gagnent ; le travail non qualifié perd.",
  "[a:Jones], [w:The Structure of Simple General Equilibrium Models] ([d:1965])\nEffet d'amplification : les rémunérations des facteurs varient plus fortement que les prix des biens. Une petite variation des prix suffit à redistribuer beaucoup, d'où la nécessité de compenser les perdants."]},
 {t:"Les classes moyennes émergentes et les plus riches", p:[
  "[a:Milanovic], [w:Global Inequality] ([d:2016])\nCourbe de l'éléphant ([d:1988-2008]) : forte hausse des revenus des classes moyennes des pays émergents et du [n:1 %] le plus riche ; stagnation des classes moyennes et populaires des pays riches. Ce profil s'estompe sur [d:2008-2018].",
  "[a:Bourguignon], [w:La Mondialisation de l'inégalité] ([d:2012])\nLes inégalités baissent entre pays grâce au rattrapage des émergents, mais augmentent à l'intérieur de la plupart des pays."]}
]},
{lab:"Ceux qui perdent", ti:"Le travail non qualifié du Nord", sp:[
 {t:"Des salaires mis en concurrence", p:[
  "[a:Samuelson], [w:International Trade and the Equalisation of Factor Prices] ([d:1948])\nThéorème d'égalisation des prix des facteurs : en échangeant des biens, les pays échangent indirectement les facteurs qu'ils contiennent. Les salaires des non-qualifiés du Nord sont tirés vers ceux du Sud sans que personne ne migre."]},
 {t:"Des territoires sinistrés", p:[
  "[a:Autor, Dorn et Hanson], [w:The China Syndrome] ([d:2013])\nLa concurrence des importations chinoises explique environ un quart du recul de l'emploi industriel américain entre [d:1990] et [d:2007]. Les pertes sont concentrées dans certains bassins d'emploi, où chômage et baisse des salaires durent."],
  ex:["La Rust Belt américaine, dont le vote a pesé dans l'élection de Trump en 2016."]}
]},
{lab:"Dépasser", ti:"Nomades et sédentaires", sp:[
 {t:"Un nouveau clivage", p:[
  "[a:Giraud], [w:L'Homme inutile] ([d:2015])\nLe clivage décisif oppose les « nomades », branchés sur les marchés mondiaux, qui captent les gains, aux « sédentaires », cantonnés à des activités locales peu productives, qui décrochent. Ce clivage explique aussi la hausse des inégalités en Chine et en Inde."]},
 {t:"Compenser les perdants", p:[
  "Si le gain global est positif, l'État peut en théorie indemniser les perdants et laisser tout le monde gagnant. En pratique, la compensation est faible : c'est elle, plus que l'ouverture, qui décide si le libre-échange est accepté."],
  ex:["Le Trade Adjustment Assistance américain, créé en 1962, aide les travailleurs touchés par les importations, mais avec des moyens limités."]}
]}
],
usages: [
 {t:"La mondialisation creuse-t-elle les inégalités ?", d:"Bourguignon : moins entre pays, plus dans les pays ; Milanovic pour le chiffrer."},
 {t:"Le libre-échange menace-t-il l'emploi ?", d:"Autor, Dorn et Hanson : un effet réel mais concentré sur certains territoires."},
 {t:"Pourquoi le protectionnisme revient-il dans les pays riches ?", d:"Stolper-Samuelson et la Rust Belt : les perdants votent."}
]},

"ch1-1/0-3": {
idee: "Ouverture et croissance vont ensemble, mais la causalité est fragile : l'ouverture accélère une croissance qui démarre d'abord à l'intérieur, et les pays qui ont réussi ont dosé leur ouverture.",
termes: "Il faut distinguer corrélation et causalité : les pays ouverts croissent-ils parce qu'ils sont ouverts, ou s'ouvrent-ils parce qu'ils croissent ? L'ouverture peut se mesurer par le taux d'ouverture (commerce rapporté au PIB) ou par la politique commerciale (niveau des droits de douane).",
parts: [
{lab:"Oui", ti:"L'ouverture stimule la croissance", sp:[
 {t:"Un effet mesuré", p:[
  "[a:Frankel et Romer], [w:Does Trade Cause Growth?] ([d:1999])\nPour isoler l'effet du commerce, ils utilisent la géographie (taille, distance aux partenaires), qui ne dépend pas de la croissance. Résultat : [n:+1 point] d'ouverture augmente le revenu par tête de [n:0,5 à 2 %]."]},
 {t:"Les meilleures firmes grandissent", p:[
  "[a:Melitz] ([d:2003])\nL'ouverture permet aux firmes les plus productives d'exporter et de grandir, et élimine les moins productives. La productivité moyenne de l'économie augmente par simple réallocation."]},
 {t:"Un cercle vertueux", p:[
  "[a:Findlay et O'Rourke], [w:Commodity Market Integration, 1500-2000] ([d:2002])\nPendant les Trente Glorieuses, le commerce croît plus vite que la production (élasticité supérieure à 1) : croissance et commerce s'entraînent mutuellement."]}
]},
{lab:"Non", ti:"La causalité n'est pas démontrée", sp:[
 {t:"Le paradoxe de Bairoch", p:[
  "[a:Bairoch], [w:Mythes et paradoxes de l'histoire économique] ([d:1993])\nAu XIXe siècle, la croissance européenne ralentit pendant la phase libre-échangiste et accélère après le retour au protectionnisme ; les États-Unis, très protectionnistes, croissent vite."],
  ex:["En France, la croissance repart après le tarif Méline de [d:1892]."]},
 {t:"Des études fragiles", p:[
  "[a:Rodriguez et Rodrik], [w:Trade Policy and Economic Growth] ([d:1999])\nLes études qui relient ouverture et croissance mesurent mal l'ouverture et la confondent avec d'autres facteurs : institutions, stabilité macroéconomique. Aucune causalité n'est démontrée. [a:Irwin] ([d:2019]) trouve toutefois, dans les travaux récents, un effet positif moyen des libéralisations."]},
 {t:"Une concurrence déloyale", p:[
  "[a:Allais], [w:La Mondialisation : la destruction des emplois et de la croissance] ([d:1999])\nLe libre-échange entre pays aux salaires et aux protections sociales très différents détruit emplois et croissance en Europe. Il ne vaut qu'entre économies comparables, d'où son plaidoyer pour un libre-échange régional."]}
]},
{lab:"Dépasser", ti:"Un accélérateur, sous conditions", sp:[
 {t:"Le décollage est d'abord interne", p:[
  "[a:Rostow], [w:Les Étapes de la croissance économique] ([d:1960])\nLe décollage repose sur des facteurs internes : un taux d'investissement qui passe de [n:5 %] à plus de [n:10 %] du revenu et des secteurs moteurs. Le commerce accompagne et accélère, il ne déclenche pas."]},
 {t:"Une ouverture dosée", p:[
  "[a:Rodrik], [w:The Globalization Paradox] ([d:2011])\nLes grands gagnants asiatiques ont ouvert de façon sélective et progressive, avec des politiques industrielles et un contrôle des capitaux. L'ouverture réussit quand l'État la maîtrise."],
  ex:["La Chine s'ouvre par des zones économiques spéciales dès 1980 mais garde le contrôle de ses capitaux et de son taux de change."]}
]}
],
usages: [
 {t:"Le commerce international est-il un moteur de la croissance ?", d:"Frankel et Romer contre Rodriguez et Rodrik ; Rostow pour trancher : un accélérateur."},
 {t:"Faut-il s'ouvrir pour se développer ?", d:"Rodrik : les réussites asiatiques reposent sur une ouverture maîtrisée."},
 {t:"Le protectionnisme freine-t-il la croissance ?", d:"Le paradoxe de Bairoch nuance l'évidence libérale."}
]},

"ch1-1/1-0": {
idee: "Le protectionnisme se justifie quand il est ciblé, temporaire et lié à un objectif précis (industrie naissante, secteur stratégique, transition) ; généralisé, il coûte cher aux consommateurs et aux producteurs qui utilisent les biens protégés.",
termes: "Le protectionnisme regroupe toutes les mesures qui protègent la production nationale de la concurrence étrangère : droits de douane, quotas, normes, subventions. « Se justifier » peut s'entendre économiquement (gain d'efficacité, de croissance) ou politiquement (emploi, souveraineté).",
parts: [
{lab:"Oui", ti:"Cinq raisons de protéger", sp:[
 {t:"Éduquer une industrie naissante", p:[
  "[a:List], [w:Système national d'économie politique] ([d:1841])\nUne industrie naissante ne peut pas affronter tout de suite des concurrents déjà installés. Il faut la protéger le temps qu'elle apprenne, avec une protection temporaire et dégressive, puis revenir au libre-échange."],
  ex:["La Corée protège son automobile dans les années 1970 : Hyundai devient ensuite un exportateur mondial."]},
 {t:"Capter une rente", p:[
  "[a:Brander et Spencer], [w:Export Subsidies and International Market Share Rivalry] ([d:1985])\nSur un marché mondial dominé par quelques firmes, une subvention publique peut dissuader le concurrent étranger d'entrer et transférer la rente vers la firme nationale : c'est la politique commerciale stratégique."],
  ex:["Airbus face à Boeing ; BYD, qui reçoit [n:2,1 Md€] de subventions publiques en [d:2022]."]},
 {t:"Amortir un déclin", p:[
  "[a:Kaldor], [w:Conflicts in Policy Objectives] ([d:1971])\nUne protection défensive étale dans le temps la reconversion des secteurs en déclin et évite des pertes d'emplois brutales."],
  ex:["L'Accord multifibres ([d:1974-2005]) limite par des quotas les importations textiles des pays du Sud."]},
 {t:"Accompagner une relance", p:[
  "[a:Cripps et Godley] ([d:1976])\nDans une économie ouverte, une relance fuit par les importations : elle doit s'accompagner d'une protection ciblée."],
  ex:["La relance Mauroy de [d:1981] creuse le déficit extérieur et mène au tournant de la rigueur en [d:1983]."]},
 {t:"Financer l'État", p:[
  "[a:Stiglitz], [w:La Grande Désillusion] ([d:2002])\nDans les pays en développement, les droits de douane sont une part importante des recettes fiscales : libéraliser trop vite prive l'État de ressources pour l'éducation ou les infrastructures."]}
]},
{lab:"Non", ti:"Une protection qui coûte cher", sp:[
 {t:"Pour les consommateurs", p:[
  "[a:Bastiat], [w:Pétition des fabricants de chandelles] ([d:1845])\nDans cette satire, les fabricants de chandelles demandent qu'on interdise le soleil. Le bénéfice de la protection est concentré sur quelques producteurs, son coût est dispersé sur tous les consommateurs : c'est pourquoi les producteurs obtiennent la protection par le lobbying.",
  "[a:Hufbauer et Lowry] ([d:2012])\nLes droits américains sur les pneus chinois ont coûté aux consommateurs environ [n:900 000 $] par emploi sauvé."]},
 {t:"Pour les producteurs en aval", p:[
  "[a:François et Baughman], [w:The Unintended Consequences of US Steel Import Tariffs] ([d:2003])\nLes droits sur l'acier de [d:2002] renchérissent l'acier pour les industries qui l'utilisent : environ [n:200 000] emplois y sont perdus, plus qu'il n'y en a dans la sidérurgie protégée."]},
 {t:"Une protection contournée", p:[
  "[a:Mundell] ([d:1957])\nCommerce et mobilité des facteurs se substituent : face aux droits de douane, les firmes étrangères viennent produire sur place (tariff-jumping)."],
  ex:["BYD construit une usine en Hongrie pour échapper aux droits européens sur les voitures électriques chinoises."]}
]},
{lab:"Dépasser", ti:"Ciblé, temporaire, crédible", sp:[
 {t:"Les conditions d'un bon protectionnisme", p:[
  "Le débat ne porte plus sur « pour ou contre », mais sur la forme de la protection. Elle se justifie quand elle vise un objectif précis et prend fin une fois l'objectif atteint, comme le voulait [a:List]. Sinon, elle devient une rente permanente pour les secteurs protégés et invite les partenaires à riposter."]}
]}
],
usages: [
 {t:"Faut-il protéger l'industrie européenne ?", d:"Brander et Spencer face à la Chine ; Mundell et BYD en Hongrie pour la limite."},
 {t:"Le protectionnisme est-il une réponse à la désindustrialisation ?", d:"Kaldor et l'Accord multifibres : retarder le déclin n'est pas l'empêcher."},
 {t:"Le libre-échange est-il toujours souhaitable ?", d:"List : le libre-échange est un point d'arrivée, pas un point de départ."}
]},

"ch1-1/1-1": {
idee: "La compétitivité a un sens pour une nation si on la définit comme la capacité à vendre à l'étranger tout en élevant le niveau de vie ; réduite à une course aux coûts, elle devient une obsession dangereuse.",
termes: "La compétitivité-prix repose sur les coûts et le taux de change ; la compétitivité hors-prix sur la qualité, l'innovation, l'image. Le problème est de transposer à une nation une notion pensée pour l'entreprise.",
parts: [
{lab:"Oui", ti:"Un objectif, s'il est bien défini", sp:[
 {t:"Vendre et élever le niveau de vie", p:[
  "[a:Tyson], [w:Who's Bashing Whom?] ([d:1992])\nUne nation est compétitive si elle produit des biens qui résistent à la concurrence internationale tout en augmentant durablement le niveau de vie de sa population. Cela passe surtout par la compétitivité hors-prix."],
  ex:["L'Allemagne dégage d'importants excédents malgré des coûts salariaux élevés, grâce à la qualité de ses machines et de ses voitures."]},
 {t:"Retrouver la compétitivité-prix par le change", p:[
  "[a:Houthakker et Magee], [w:Income and Price Elasticities in World Trade] ([d:1969])\nUne dévaluation améliore la balance commerciale si les volumes réagissent assez aux prix (condition de Marshall-Lerner). Elle la dégrade d'abord, le temps que les volumes s'ajustent, puis l'améliore : c'est la courbe en J."]}
]},
{lab:"Non", ti:"Un pays n'est pas une entreprise", sp:[
 {t:"Une obsession dangereuse", p:[
  "[a:Krugman], [w:Competitiveness: A Dangerous Obsession] ([d:1994])\nUne firme non compétitive disparaît, pas un pays. Le commerce n'est pas un jeu à somme nulle et le niveau de vie dépend surtout de la productivité interne. Penser en termes de compétitivité conduit à de mauvaises politiques : protectionnisme, guerres commerciales."]},
 {t:"Une dévaluation qui peut échouer", p:[
  "[a:Robinson], [w:Essays in the Theory of Employment] ([d:1937])\nSi les exportateurs profitent de la dévaluation pour gonfler leurs marges au lieu de baisser leurs prix en devises, le gain de compétitivité disparaît."]}
]},
{lab:"Dépasser", ti:"Des politiques de compétitivité aux effets limités", sp:[
 {t:"La concurrence fiscale", p:[
  "Chaque pays baisse l'impôt sur les sociétés pour attirer les entreprises : tous perdent des recettes sans en attirer davantage, c'est un dilemme du prisonnier. Pour [a:Tiebout], [w:A Pure Theory of Local Expenditures] ([d:1956]), cette concurrence oblige pourtant les collectivités à mieux dépenser, car les contribuables « votent avec leurs pieds »."],
  ex:["En France, le taux de l'impôt sur les sociétés passe de [n:33 %] à [n:25 %]."]},
 {t:"Baisser le coût du travail", p:[
  "[a:Malgouyres et Mayer], [w:Exports and Labor Costs] ([d:2018])\nLe CICE, qui baissait le coût du travail, a peu aidé les entreprises exportatrices : la compétitivité française souffre surtout d'un problème hors-prix."]},
 {t:"Le patriotisme économique", p:[
  "[a:Combe], [w:Résister à la tentation protectionniste] ([d:2018])\nPoussé trop loin, le patriotisme économique a des effets pervers : il protège des entreprises peu efficaces et invite les partenaires à riposter."]}
]}
],
usages: [
 {t:"La compétitivité est-elle la clé de la croissance ?", d:"Krugman : la productivité interne compte plus que les parts de marché."},
 {t:"Faut-il baisser le coût du travail ?", d:"Malgouyres et Mayer : le CICE a peu aidé les exportateurs."},
 {t:"La concurrence fiscale est-elle néfaste ?", d:"Dilemme du prisonnier contre Tiebout."}
]},

"ch1-1/1-2": {
idee: "Plutôt qu'une démondialisation, on observe un ralentissement et une recomposition : le commerce plafonne en part du PIB mondial et se réorganise par blocs géopolitiques, sans effondrement comparable aux années 1930.",
termes: "La démondialisation peut être un constat (recul du commerce rapporté au PIB, des investissements à l'étranger, des chaînes de valeur) ou un projet politique (se recentrer sur la production nationale). Il faut distinguer recul, ralentissement et recomposition.",
parts: [
{lab:"Oui", ti:"Un projet politique et des États qui se ferment", sp:[
 {t:"Un projet politique", p:[
  "[a:Bello], [w:Deglobalization] ([d:2002]) ; [a:Sapir], [w:La démondialisation] ([d:2011])\nLes pays doivent recentrer leur production sur les besoins intérieurs et se protéger pour retrouver souveraineté et emplois."]},
 {t:"Des États qui se ferment", p:[
  "Les États-Unis contestent le multilatéralisme, et la Chine se recentre sur son marché intérieur."],
  ex:["La guerre commerciale lancée par Trump en [d:2018] (droits sur l'acier, l'aluminium et les produits chinois).", "Le taux d'ouverture de la Chine passe de [n:27 %] en [d:2007] à [n:16 %] en [d:2018]."]},
 {t:"Une mondialisation par blocs", p:[
  "Le friend-shoring défendu par [a:Yellen] consiste à ne commercer qu'avec des pays alliés ; [a:Frachon] parle de globalisation régionalisée. La géopolitique redessine les échanges."],
  ex:["La guerre en Ukraine en [d:2022] et les sanctions contre la Russie."]}
]},
{lab:"Non", ti:"Un ralentissement, pas un recul", sp:[
 {t:"Un retour à la normale", p:[
  "[a:Sébastien Jean] (CEPII, [d:2017])\nLes exportations sont passées de [n:18 %] à [n:30 %] du PIB mondial jusqu'en [d:2008], une hausse exceptionnelle liée à l'entrée de la Chine dans l'OMC. Le plateau actuel est une normalisation.",
  "Slowbalisation ([w:The Economist], [d:2019])\nLe commerce croît désormais au même rythme que le PIB (élasticité tombée à 1) : il ralentit, il ne s'effondre pas."]},
 {t:"Des chaînes de valeur résilientes", p:[
  "[a:Mezzadri et Ruwanpura] ([d:2020])\nLes chaînes de valeur ont résisté au Covid : elles se sont réorganisées plutôt que rompues."]},
 {t:"Rien à voir avec les années 1930", p:[
  "Dans les années 1930, les droits de douane explosent et le commerce mondial s'effondre de plus de moitié en valeur. Rien de comparable aujourd'hui."],
  ex:["Le tarif Hawley-Smoot ([d:1930]) porte les droits américains à [n:59 %] sur les produits taxés."]}
]},
{lab:"Dépasser", ti:"Une recomposition", sp:[
 {t:"Le précautionnisme", p:[
  "[a:Lamy] ([w:Le Monde], [d:2020])\nLes nouvelles barrières ne sont plus des droits de douane mais des normes sanitaires, environnementales ou de sécurité. Elles protègent le consommateur plus que le producteur. La mondialisation ne recule pas, elle change de règles."]}
]}
],
usages: [
 {t:"La mondialisation est-elle réversible ?", d:"Années 1930 contre aujourd'hui : un ralentissement, pas un effondrement."},
 {t:"Le Covid marque-t-il la fin de la mondialisation ?", d:"Mezzadri et Ruwanpura : des chaînes résilientes."},
 {t:"Assiste-t-on au retour du protectionnisme ?", d:"Guerre commerciale de 2018 et précautionnisme de Lamy."}
]}

};
