// Fiches des débats ESH (une par débat), affichées dans Référentiel → ESH → Débats.
// Clé : "<id de la leçon>/<n° de carte>-<n° du débat>" (même ordre que cours-debats.js).
// Balises : [a:auteur] [w:œuvre] [d:date] [n:chiffre]
// Chaque partie : lab (Oui, Non, Dépasser…), ti (l'idée de la partie), sp (sous-parties : t = titre, p = « Auteur, Œuvre (date)\nIdée », ex = exemples)
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
,
// Les débats suivants sont construits à partir des arguments de cours-debats.js :
// idee = réponse en une phrase · ti = idée de chaque partie · g = sous-partie de chaque argument (dans l'ordre) quand la carte n'en donne pas · usages = trois sujets
"socio-1a/0-0": { idee: "L'individu est façonné par la société, mais il la produit aussi par ses actions et ses interactions : les interdépendances dépassent l'opposition.",
 ti: { "Oui": "La société s'impose à l'individu", "Non": "L'individu produit la société", "Entre les deux": "Des individus interdépendants" },
 usages: [{ t: "Sommes-nous libres de nos choix ?", d: "Durkheim contre Weber et Boudon." }, { t: "Les goûts sont-ils personnels ?", d: "Bourdieu, La Distinction." }, { t: "Peut-on échapper à son milieu ?", d: "Lahire : des dispositions plurielles." }] },
"socio-1a/0-1": { idee: "L'individualisme ne détruit pas le lien social, il en change la nature ; le danger vient d'un défaut d'intégration et de régulation.",
 ti: { "Oui": "Le repli sur soi défait le lien", "Non": "Le lien change de nature", "Non, il change": "Un engagement transformé" },
 usages: [{ t: "La société française se délite-t-elle ?", d: "Durkheim : solidarité organique." }, { t: "L'engagement collectif disparaît-il ?", d: "Ion : engagement post-it." }, { t: "La solitude est-elle un problème social ?", d: "Fondation de France, 2025." }] },
"socio-1a/1-0": { idee: "La sociologie est une science, mais une science compréhensive aux paradigmes multiples, à cause de la complexité de son objet.",
 ti: { "Oui": "Une méthode rigoureuse", "Oui, autrement": "Une science compréhensive", "Pas tout à fait": "Des paradigmes rivaux et des biais", "Oui, mais complexe": "Un objet complexe" },
 usages: [{ t: "Peut-on étudier la société comme une chose ?", d: "Durkheim, Les Règles." }, { t: "Les sciences sociales sont-elles des sciences ?", d: "Weber et Kuhn." }, { t: "La sociologie peut-elle prévoir ?", d: "Comte contre Weber." }] },
"socio-1a/1-1": { idee: "Le sociologue doit séparer jugements de fait et jugements de valeur, sans renoncer à l'utilité sociale de son savoir.",
 ti: { "Oui": "Séparer savoir et valeurs", "Non": "Une sociologie engagée", "Utile sans être militante": "Un savoir utile" },
 usages: [{ t: "La science doit-elle être engagée ?", d: "Weber, Le Savant et le politique." }, { t: "La sociologie excuse-t-elle ?", d: "Bronner et Géhin." }, { t: "À quoi sert la sociologie ?", d: "Durkheim." }] },
"socio-1a/2-0": { idee: "L'école intègre, mais elle reproduit les inégalités par la culture et par les choix des familles ; ce déterminisme n'est pas absolu.",
 ti: { "Oui": "Une école qui intègre", "Non": "Une école qui reproduit", "Nuance": "Un déterminisme nuancé" },
 usages: [{ t: "L'école est-elle méritocratique ?", d: "Bourdieu et Passeron, l'idéologie du don." }, { t: "Faut-il réformer l'orientation ?", d: "Boudon : les points de bifurcation." }, { t: "Le diplôme protège-t-il encore ?", d: "Paradoxe d'Anderson, Peugny." }] },
"socio-1a/3-0": { idee: "La déviance est en grande partie une construction sociale, faite de normes et d'étiquettes, mais elle a aussi des causes structurelles.",
 ti: { "Oui": "Une étiquette posée par les autres", "Oui, mais normale": "Un fait social normal", "Non, structurelle": "Une réponse à l'anomie" },
 usages: [{ t: "Qu'est-ce qu'être normal ?", d: "Becker et Goffman." }, { t: "La délinquance s'explique-t-elle par la société ?", d: "Merton." }, { t: "Faut-il légaliser certaines drogues ?", d: "Marihuana Tax Act, Allemagne 2024." }] },
"socio-1a/3-1": { idee: "Le conflit est un moteur du changement social, mais pas le seul : les idées, la rationalisation et l'évolution lente transforment aussi la société.",
 ti: { "Oui": "Le conflit transforme la société", "Oui, une étape": "Une étape d'un cycle", "Non": "D'autres moteurs", "Pas seul": "Le mécontentement ne suffit pas" },
 usages: [{ t: "Les mouvements sociaux changent-ils la société ?", d: "Touraine, Gilets jaunes." }, { t: "La société évolue-t-elle par ruptures ?", d: "Marx contre Elias." }, { t: "Pourquoi ne se mobilise-t-on pas ?", d: "Olson." }] },
"ch1-2/0-0": { idee: "La firme réduit les coûts de transaction, mais elle est aussi un lieu de conflits, de compromis et de routines.",
 ti: { "Oui": "Une organisation qui économise des coûts", "Non, un conflit": "Actionnaires contre dirigeants", "Non, une coalition": "Un compromis entre groupes", "Non, des routines": "Une organisation qui s'adapte" },
 usages: [{ t: "Pourquoi les entreprises existent-elles ?", d: "Coase." }, { t: "Faut-il gouverner l'entreprise pour l'actionnaire ?", d: "Jensen et Meckling." }, { t: "Externaliser est-il efficace ?", d: "Williamson." }] },
"ch1-2/0-1": { idee: "Les bas salaires expliquent seulement les IDE verticaux ; la plupart des IDE cherchent un marché, des institutions solides et la proximité.",
 ti: { "Oui": "L'IDE vertical suit les bas coûts", "Non": "L'IDE cherche surtout un marché", "Nuance": "On suit l'agglomération" },
 usages: [{ t: "Pourquoi les firmes s'implantent-elles à l'étranger ?", d: "70 % des IDE vont vers d'autres PDEM." }, { t: "L'Afrique peut-elle attirer les IDE ?", d: "Acemoglu et Robinson." }, { t: "Les délocalisations sont-elles inévitables ?", d: "Berger : le coût unitaire." }] },
"ch1-2/0-2": { idee: "Devenir multinationale suppose un avantage spécifique et une forte productivité, mais les modes intermédiaires et les born global ouvrent la voie à plus de firmes.",
 ti: { "Oui": "Des firmes mondiales dès leur création", "Oui, sans IDE": "Des modes intermédiaires", "Non": "Seules les meilleures", "Pas à pas": "Un engagement progressif" },
 usages: [{ t: "Les PME peuvent-elles s'internationaliser ?", d: "Born global, modèle d'Uppsala." }, { t: "Qu'est-ce qu'une FMN ?", d: "Dunning, OLI." }, { t: "La mondialisation profite-t-elle aux grandes firmes ?", d: "Mouhoud." }] },
"ch1-2/1-0": { idee: "Les FMN détruisent des emplois peu qualifiés au Nord, mais l'effet net des délocalisations est faible à côté du progrès technique et de la tertiarisation.",
 ti: { "Oui": "Des emplois détruits", "Non": "D'autres causes, un effet net faible", "Nuance": "Garder l'industrie autrement" },
 usages: [{ t: "La désindustrialisation vient-elle de la mondialisation ?", d: "Demmou : 13 %." }, { t: "Faut-il relocaliser ?", d: "Fontagné." }, { t: "Le libre-échange détruit-il l'emploi ?", d: "Le choc chinois." }] },
"ch1-2/1-1": { idee: "La valeur créée par les FMN va d'abord aux actionnaires et au pays du siège ; les pays d'accueil gagnent selon leur place dans la chaîne.",
 ti: { "Les actionnaires": "Une part salariale en baisse", "Les machines": "Le capital remplace le travail", "Le pays du siège": "Les activités clés restent au siège", "Les PED, selon leur place": "Des IDE ambivalents" },
 usages: [{ t: "Le partage de la valeur ajoutée est-il juste ?", d: "CEPII : part salariale −7,2 points." }, { t: "Les IDE développent-ils le Sud ?", d: "Tigres asiatiques contre Nestlé." }, { t: "La finance gouverne-t-elle les entreprises ?", d: "Gutiérrez et Philippon." }] },
"ch1-2/1-2": { idee: "L'État peut encore orienter les FMN par la politique industrielle et le contrôle des IDE, mais la mobilité des firmes et la capture limitent son pouvoir.",
 ti: { "Oui": "L'État garde des outils", "Non": "Des firmes plus mobiles que l'État", "Nuance": "Le risque de rétorsions" },
 usages: [{ t: "L'État a-t-il encore un rôle économique ?", d: "Cohen et Lorenzi." }, { t: "Faut-il une politique industrielle européenne ?", d: "France 2030, Galileo." }, { t: "La concurrence fiscale est-elle néfaste ?", d: "Tiebout, l'Irlande." }] },
"ch1-2/1-3": { idee: "La firme globale existe dans l'organisation de la production, mais les FMN restent ancrées dans leur pays et se régionalisent.",
 ti: { "Oui": "Une production mondialisée", "Non": "Des firmes ancrées dans leur pays", "Glocale": "Penser global, agir local", "Elle recule": "Des chaînes raccourcies" },
 usages: [{ t: "Les FMN ont-elles une nationalité ?", d: "Berger." }, { t: "Assiste-t-on à une démondialisation ?", d: "CNUCED." }, { t: "Comment se fabrique un iPhone ?", d: "Baldwin." }] },
"ch2-1/0-0": { idee: "Un hégémon facilite la coopération, mais les institutions et une gouvernance polycentrique peuvent la faire durer sans lui.",
 ti: { "Oui": "Sans hégémon, le système s'effondre", "Non": "La coopération survit par intérêt" },
 usages: [{ t: "Le monde a-t-il besoin d'un leader ?", d: "Kindleberger." }, { t: "Le déclin américain menace-t-il la mondialisation ?", d: "Gilpin, Nye." }, { t: "Les institutions internationales sont-elles utiles ?", d: "Keohane." }] },
"ch2-1/0-1": { idee: "Les biens publics mondiaux peuvent être produits, mais difficilement, faute de pouvoir coercitif face aux passagers clandestins.",
 ti: { "Oui": "Institutions et auto-organisation", "Non": "Passagers clandestins et tragédie des communs", "Nuance": "Des biens publics choisis" },
 usages: [{ t: "Le climat est-il un bien public mondial ?", d: "Kindleberger, Kyoto et Paris." }, { t: "Faut-il un gouvernement mondial ?", d: "Ostrom." }, { t: "La santé mondiale peut-elle être gouvernée ?", d: "COVAX." }] },
"ch2-1/0-2": { idee: "La mondialisation contraint la souveraineté, mais les États peuvent la retrouver par la coopération et en hiérarchisant leurs objectifs.",
 ti: { "Oui": "Des États contraints", "Non": "Une souveraineté partagée", "Nuance": "Hiérarchiser les objectifs" },
 usages: [{ t: "La mondialisation affaiblit-elle l'État ?", d: "Rodrik, le trilemme." }, { t: "Peut-on taxer les multinationales ?", d: "Zucman, impôt minimal de 15 %." }, { t: "Le FMI aide-t-il les pays en crise ?", d: "Stiglitz." }] },
"ch2-1/1-0": { idee: "Le GATT et l'OMC ont fait baisser les droits de douane, mais la protection s'est déplacée vers les normes et l'agriculture, au détriment des PED.",
 ti: { "Oui": "Des droits en forte baisse", "Non": "Une protection déplacée", "Nuance": "Une théorie trop statique" },
 usages: [{ t: "L'OMC a-t-elle réussi ?", d: "Droits de 40 % à moins de 5 %." }, { t: "Le commerce mondial est-il équitable ?", d: "Stiglitz et Charlton." }, { t: "Le protectionnisme a-t-il disparu ?", d: "Les barrières non tarifaires." }] },
"ch2-1/1-1": { idee: "L'OMC peut se relancer par des accords plurilatéraux, mais le consensus, la paralysie de l'ORD et la rivalité sino-américaine la bloquent.",
 ti: { "Oui": "Contourner le blocage", "Non": "Une institution bloquée", "Nuance": "Réformer" },
 usages: [{ t: "Le multilatéralisme est-il mort ?", d: "ORD paralysé depuis 2019." }, { t: "Les accords régionaux menacent-ils l'OMC ?", d: "Bhagwati contre Baldwin." }, { t: "Faut-il réformer l'OMC ?", d: "Sally, Wolfensohn." }] },
"ch2-1/1-2": { idee: "La rivalité sino-américaine fragmente l'ordre mondial, mais l'intérêt à coopérer pousse à réformer les institutions plutôt qu'à rompre.",
 ti: { "Oui": "Une rivalité qui fragmente", "Non": "Réformer plutôt que rompre", "Nuance": "Un FMI qui s'adapte à peine" },
 usages: [{ t: "Va-t-on vers une nouvelle guerre froide ?", d: "Allison, le piège de Thucydide." }, { t: "La Chine peut-elle remplacer les États-Unis ?", d: "La BAII." }, { t: "La mondialisation se fragmente-t-elle ?", d: "IRA, MACF." }] },
"ch2-2/0-0": { idee: "Le régionalisme peut servir de tremplin vers le libre-échange mondial, mais il risque aussi de le fragmenter en blocs rivaux.",
 ti: { "Oui": "Un tremplin", "Non": "Une pierre d'achoppement", "Nuance": "L'exemple de l'UE" },
 usages: [{ t: "Le régionalisme menace-t-il le multilatéralisme ?", d: "Baldwin contre Bhagwati." }, { t: "L'UE est-elle un modèle d'intégration ?", d: "De 6 à 27 membres." }, { t: "Le monde se divise-t-il en blocs ?", d: "Krugman, Pisani-Ferry." }] },
"ch2-2/0-1": { idee: "Un accord régional améliore le bien-être si la création de commerce l'emporte sur le détournement ; l'effet est positif mais souvent faible.",
 ti: { "Oui": "Plus de commerce créé que détourné", "Non": "Du commerce détourné", "Ça dépend du solde": "Création contre détournement", "Peu": "Un effet faible", "Difficile à dire": "On signe avec ses bons partenaires" },
 usages: [{ t: "Les unions douanières sont-elles efficaces ?", d: "Viner." }, { t: "Le Mercosur est-il un succès ?", d: "Banque mondiale, 1996." }, { t: "Faut-il multiplier les accords bilatéraux ?", d: "Siroën." }] },
"ch2-2/0-2": { idee: "L'économie explique en partie les accords (chaînes de valeur, OMC bloquée, proximité), mais la géopolitique et la politique pèsent autant.",
 ti: { "Oui": "Des raisons économiques", "Non, la géopolitique": "Contenir un rival", "Non, la politique": "Préparer l'unification", "Non, les normes": "Imposer ses normes" },
 usages: [{ t: "Pourquoi tant d'accords régionaux ?", d: "Baldwin, 2011." }, { t: "La distance compte-t-elle encore ?", d: "Tinbergen, McCallum." }, { t: "Le commerce est-il un outil de puissance ?", d: "ASEAN, Partenariat transpacifique." }] },
"ch2-2/0-3": { idee: "L'intégration régionale enrichit le bloc, mais elle profite surtout aux grands pays et aux FMN, au détriment des membres les plus faibles.",
 ti: { "Oui": "Des gains pour le bloc", "Non": "Une intégration asymétrique", "Nuance": "Des effets ambigus" },
 usages: [{ t: "L'ALENA a-t-il profité au Mexique ?", d: "+240 % d'exportations, mais PIB −5 % en 2009." }, { t: "Le Mercosur est-il équilibré ?", d: "Le Brésil, 75 % du PIB." }, { t: "Le commerce nuit-il à l'environnement ?", d: "Grossman et Krueger." }] },
"im-1/0-0": { idee: "La monnaie est neutre à long terme pour les classiques et Friedman, mais elle agit à court terme sur l'activité, par les taux et la dette.",
 ti: { "Oui": "Un voile sur les échanges", "À long terme": "Neutre seulement à long terme", "Non": "Elle agit sur l'économie réelle", "Non, et nocive": "Elle fausse les prix" },
 g: ["Un voile", "Un voile", "Un voile", "Anticipations rationnelles", "Illusion monétaire", "Taux et investissement", "Déflation par la dette", "Prix visqueux", "Des signaux faussés", "Des signaux faussés"],
 usages: [{ t: "La politique monétaire peut-elle relancer la croissance ?", d: "Keynes contre Friedman." }, { t: "L'inflation est-elle un phénomène monétaire ?", d: "Fisher, MV = PT." }, { t: "La déflation est-elle dangereuse ?", d: "Fisher, 1933." }] },
"im-1/0-1": { idee: "La monnaie facilite les échanges, mais elle est d'abord une institution fondée sur la confiance, la dette et la souveraineté.",
 ti: { "Oui": "Un outil né de l'échange", "Non": "Une institution sociale", "Nuance": "Une libération ambiguë" },
 g: ["Trois fonctions", "Dépasser le troc", "Dépasser le troc", "Dépasser le troc", "La dette d'abord", "Une institution", "Une institution", "Une institution", "Un rapport social", "Liberté et calcul"],
 usages: [{ t: "Qu'est-ce que la monnaie ?", d: "Aglietta et Orléan." }, { t: "Une monnaie sans État est-elle possible ?", d: "Knapp contre Menger." }, { t: "Les cryptomonnaies sont-elles des monnaies ?", d: "Les trois confiances." }] },
"im-1/0-2": { idee: "Les banques créent la monnaie en accordant des crédits ; la banque centrale ne la contrôle qu'indirectement, par ses taux.",
 ti: { "Les banques": "La monnaie naît du crédit", "La banque centrale": "Contrôler la quantité", "Par les taux": "Piloter le prix de la monnaie" },
 g: ["Les crédits font les dépôts", "Les crédits font les dépôts", "Les crédits font les dépôts", "La base monétaire", "Limiter l'émission", "Les taux directeurs"],
 usages: [{ t: "Qui crée la monnaie ?", d: "Withers." }, { t: "La BCE contrôle-t-elle l'inflation ?", d: "Taux de 0 % à 4 %." }, { t: "Faut-il limiter le crédit ?", d: "Ricardo, Bank Charter Act." }] },
"im-1/1-0": { idee: "Une banque centrale indépendante est crédible contre l'inflation et stabilise le système, mais elle pose un problème démocratique et d'aléa moral.",
 ti: { "Oui": "Crédible et protectrice", "Non": "Une institution contestée", "Nuance": "L'autonomie plutôt que l'indépendance" },
 g: ["Crédibilité", "Prêteur en dernier ressort", "Prêteur en dernier ressort", "Free banking", "Free banking", "Des bulles", "Déficit démocratique", "Aléa moral"],
 usages: [{ t: "La BCE est-elle démocratique ?", d: "Blancheton." }, { t: "Faut-il sauver les banques ?", d: "Bagehot, aléa moral." }, { t: "La politique monétaire crée-t-elle des bulles ?", d: "Artus et Virard." }] },
"im-1/1-1": { idee: "Pour les classiques, l'épargne finance l'investissement ; pour Keynes, le crédit permet d'investir et l'épargne suit.",
 ti: { "Oui": "L'épargne d'abord", "Non": "Le crédit d'abord" },
 g: ["Une épargne préalable", "Une épargne préalable", "Le crédit crée l'épargne", "Le rythme de l'investissement", "Économie d'endettement"],
 usages: [{ t: "Faut-il encourager l'épargne ?", d: "Keynes." }, { t: "L'endettement est-il un problème ?", d: "Hicks." }, { t: "Comment financer la transition écologique ?", d: "Le crédit d'abord." }] },
"im-1/1-2": { idee: "Les banques sont irremplaçables pour les PME et plus sûres ; les marchés financent mieux le risque : les deux se complètent.",
 ti: { "Les banques": "Elles connaissent les emprunteurs", "Les marchés": "Ils financent l'innovation", "Limite": "Les deux ont des failles" },
 g: ["Contrôleur délégué", "Contrôleur délégué", "Une banque ennuyeuse", "Les 3D", "Le manque de capital-risque", "Rationnement du crédit", "Risque systémique"],
 usages: [{ t: "La finance sert-elle l'économie réelle ?", d: "Bourguinat." }, { t: "L'Europe manque-t-elle de financement ?", d: "Le capital-risque." }, { t: "Faut-il séparer les banques ?", d: "Krugman." }] },
"ch3/0-0": { idee: "Les ressources limitent la croissance dans un monde fini, mais le progrès technique et les prix repoussent ces limites.",
 ti: { "Oui": "Un monde fini", "Non": "Le progrès repousse les limites", "Nuance": "Des prévisions trop pessimistes" },
 g: ["Rendements décroissants", "Rendements décroissants", "Un monde fini", "Un monde fini", "Un monde fini", "La productivité", "La substitution", "Le prix de la rareté", "Des modèles trop pessimistes"],
 usages: [{ t: "La croissance peut-elle être infinie ?", d: "Meadows." }, { t: "Faut-il décroître ?", d: "Ehrlich, Cohen." }, { t: "Le progrès technique sauvera-t-il la planète ?", d: "Solow." }] },
"ch3/0-1": { idee: "Pour la durabilité faible, le capital naturel se remplace ; pour la durabilité forte, il est irremplaçable et le découplage reste insuffisant.",
 ti: { "Oui": "La durabilité faible", "Non": "La durabilité forte", "Nuance": "Effet rebond et décroissance sélective" },
 g: ["Transmettre un stock de capital", "Transmettre un stock de capital", "Courbe de Kuznets environnementale", "Courbe de Kuznets environnementale", "Une dégradation irréversible", "Décroissance", "Décroissance", "Décroissance", "Effet rebond", "Décroissance sélective"],
 usages: [{ t: "La croissance verte est-elle possible ?", d: "Parrique." }, { t: "Le développement durable est-il un oxymore ?", d: "Latouche contre Solow." }, { t: "La technologie suffit-elle ?", d: "Jevons, l'effet rebond." }] },
"ch3/0-2": { idee: "Agir tout de suite coûte moins cher que l'inaction, même si le rythme dépend du taux d'actualisation choisi.",
 ti: { "Oui": "Agir coûte moins cher", "Progressivement": "Une action graduelle", "Nuance": "Un consensus aussi politique" },
 g: ["Le coût de l'inaction", "Un constat scientifique", "Un constat scientifique", "La tragédie de l'horizon", "Le taux d'actualisation", "Le rôle des États"],
 usages: [{ t: "Faut-il sacrifier la croissance au climat ?", d: "Stern." }, { t: "Comment arbitrer entre générations ?", d: "Nordhaus, le taux d'actualisation." }, { t: "La finance prend-elle en compte le climat ?", d: "Carney." }] },
"ch3/1-0": { idee: "Donner un prix au carbone est l'outil le plus efficace, à condition de compenser les ménages modestes.",
 ti: { "Oui": "Un prix pour internaliser", "Non": "D'autres outils", "Limite": "Des limites sociales" },
 g: ["Taxer", "Un marché de quotas", "Taxer", "Taxer", "Négocier", "Nudges", "Les communs", "Une taxe injuste", "Les failles des quotas"],
 usages: [{ t: "La taxe carbone est-elle juste ?", d: "Gilets jaunes." }, { t: "Le marché peut-il protéger l'environnement ?", d: "Dales, Coase." }, { t: "Comment changer les comportements ?", d: "Thaler et Sunstein." }] },
"ch3/1-1": { idee: "La coopération climatique se heurte au passager clandestin, mais des clubs qui taxent les non-membres peuvent la forcer.",
 ti: { "Oui": "Forcer la coopération", "Non": "Le passager clandestin", "Nuance": "Des communs mieux gérés qu'on ne croit" },
 g: ["Clubs climatiques", "Clubs climatiques", "Gouvernance polycentrique", "Passager clandestin", "Passager clandestin", "Passager clandestin", "Sans sanction", "Un mythe", "Chacun son rythme"],
 usages: [{ t: "Le climat peut-il être gouverné mondialement ?", d: "Nordhaus." }, { t: "L'accord de Paris est-il un succès ?", d: "Un accord sans sanction." }, { t: "Faut-il taxer les importations polluantes ?", d: "Le MACF." }] },
"ch3/1-2": { idee: "Le Sud doit participer pour éviter fuites de carbone et havres de pollution, mais pas au même rythme : le Nord porte une dette écologique.",
 ti: { "Oui, sinon dumping": "Éviter les havres de pollution", "Oui": "Éviter les fuites de carbone", "Non": "Une responsabilité différenciée", "Nuance": "Chacun hiérarchise" },
 g: ["Havres de pollution", "Fuites de carbone", "Justice climatique", "Justice climatique", "Des émissions inégales", "Développement durable"],
 usages: [{ t: "Le développement est-il compatible avec l'écologie ?", d: "Brundtland." }, { t: "Qui doit payer pour le climat ?", d: "Les 10 % les plus émetteurs." }, { t: "Le commerce déplace-t-il la pollution ?", d: "Summers, maquiladoras." }] }

};

// Idées reformulées (une phrase claire) pour les arguments trop elliptiques des cartes : clé du débat → { n° de l'argument : idée }
// Une idée avec un retour à la ligne (\n) remplace toute la ligne « auteur » + idée.
window.ESH_DEBAT_R = {
"socio-1a/0-0": { 6: "L'individu n'est pas un « idiot culturel » : il produit l'ordre social par ses pratiques quotidiennes.", 7: "Chacun joue son rôle avec une marge : le rôle joué n'est jamais exactement le rôle prescrit.", 10: "Chacun porte des dispositions multiples, parfois contradictoires, acquises dans plusieurs milieux." },
"socio-1a/0-1": { 0: "L'individu démocratique se replie sur sa vie privée et laisse place à un « despotisme doux ».", 2: "Le suicide augmente quand l'intégration (suicide égoïste) ou la régulation (suicide anomique) faiblit.", 3: "La division du travail devient pathologique quand elle n'est plus régulée (anomique) ou qu'elle est imposée (contrainte).", 6: "Dans les campagnes en déclin, la « bande de potes » reste un lieu d'intégration.", 7: "L'engagement devient « post-it » : ponctuel, révocable, centré sur une cause." },
"socio-1a/1-0": { 0: "La sociologie doit dégager des lois, comme les sciences de la nature, pour prévoir et agir.", 4: "Une science mûre partage un paradigme ; la sociologie en a plusieurs qui se concurrencent." },
"socio-1a/1-1": { 0: "Le savant doit séparer jugements de fait et jugements de valeur : c'est la neutralité axiologique.", 1: "Le militantisme confond l'arène savante et l'arène politique, au détriment de la recherche.", 4: "La sociologie dévoile les mécanismes de domination : elle est par nature critique." },
"socio-1a/2-0": { 0: "L'école socialise méthodiquement les enfants et leur transmet une morale commune.", 4: "À chaque point de bifurcation, les familles font des choix rationnels selon leur position : les écarts s'accumulent.", 7: "Le capital culturel ne se transmet pas automatiquement : certains héritiers échouent." },
"socio-1a/3-0": { 0: "Est déviant celui à qui l'on a posé l'étiquette ; les règles sont créées par des entrepreneurs de morale." },
"socio-1a/3-1": { 0: "La lutte des classes transforme les rapports de production et fait changer la société.", 1: "Un mouvement social réunit une identité, un adversaire et un enjeu commun (totalité).", 4: "Les sociétés évoluent par différenciation de leurs fonctions, sans rupture.", 5: "Le processus de civilisation change la société lentement, par l'autocontrainte des individus." },
"ch1-2/0-0": { 3: "Les actionnaires possèdent la firme mais les dirigeants la contrôlent.", 5: "La firme est une coalition de groupes qui cherchent un compromis satisfaisant, pas l'optimum.", 6: "La firme fonctionne par routines ; survit celle qui sait s'adapter." },
"ch1-2/0-1": { 0: "IDE vertical : les activités peu capitalistiques (textile, assemblage) partent vers les bas salaires.", 1: "La décomposition de la chaîne de valeur envoie l'assemblage là où les coûts sont bas.", 3: "Ce qui compte est le coût unitaire du travail : le salaire rapporté à la productivité.", 4: "[n:70 %] des IDE des pays développés vont vers d'autres pays développés : on cherche d'abord un marché.", 5: "Les FMN fuient les pays aux institutions extractives (corruption, droits de propriété fragiles).", 6: "Modèle de gravité : les échanges suivent la taille des marchés et la proximité.", 7: "Dans un oligopole, les firmes imitent le leader quand il s'implante à l'étranger." },
"ch1-2/0-2": { 1: "Licence, franchise, sous-traitance ou alliance permettent de s'internationaliser sans IDE.", 3: "Il faut réunir trois avantages : propriété (O), localisation (L) et internalisation (I).", 4: "Seules les firmes les plus productives exportent, et seules les meilleures investissent à l'étranger." },
"ch1-2/1-0": { 4: "La désindustrialisation est une étape normale : la demande se tourne vers les services et la productivité industrielle progresse vite." },
"ch1-2/1-1": { 0: "Les stock-options alignent les dirigeants sur l'actionnaire, qui comprime la masse salariale." },
"ch1-2/1-2": { 0: "Des défaillances de marché justifient une politique industrielle européenne.", 4: "Les FMN « votent avec leurs pieds » : elles s'installent là où l'impôt est le plus bas.", 5: "Les régulateurs finissent capturés par les firmes qu'ils doivent contrôler.", 6: "Rapport [a:Carayon] ([d:2003])\nContrôler les IDE expose aux rétorsions des autres pays." },
"ch1-2/1-3": { 0: "La firme globale répartit sa production dans le monde et vend une offre standardisée.", 1: "Second dégroupement : les TIC permettent de découper la production, on échange des tâches.", 4: "Le management reste marqué par la culture nationale, ce qui fait échouer certaines fusions.", 5: "Les FMN s'organisent de plus en plus par grandes régions (régiocentrisme)." },
"ch2-1/0-0": { 0: "L'économie mondiale n'est stable que si une puissance dominante fournit les biens publics (monnaie, crédit, marché ouvert).", 4: "Les institutions survivent au déclin de l'hégémon, car les États ont intérêt à coopérer.", 6: "L'État cosmopolite retrouve du pouvoir en coopérant avec les autres États." },
"ch2-1/0-1": { 0: "Les institutions réduisent l'incertitude et rendent la coopération possible.", 1: "Des communautés savent gérer un bien commun sans État ni marché.", 3: "Sans gouvernement mondial, chacun laisse les autres payer : c'est le passager clandestin.", 5: "Une ressource en accès libre est surexploitée jusqu'à disparaître.", 7: "Un bien public mondial doit être public dans sa consommation, sa décision et le partage de ses bénéfices." },
"ch2-1/0-2": { 2: "Le FMI impose les mêmes remèdes à tous les pays (« one size fits all »).", 4: "La souveraineté se retrouve en coopérant.", 5: "Un libre-échange qui compense les perdants concilie mondialisation, État et démocratie." },
"ch2-1/1-0": { 2: "L'ORD, « joyau de la couronne » selon [a:Lamy], fait respecter les règles par des sanctions autorisées.", 4: "Les règles de l'OMC servent les pays riches, au détriment des PED.", 7: "La théorie ricardienne ignore les effets dynamiques de l'ouverture (chômage, désindustrialisation)." },
"ch2-1/1-1": { 1: "Les accords régionaux complètent l'OMC en allant plus loin.", 3: "Les États-Unis rejettent l'OMC, et la Chine en profite sans en respecter l'esprit.", 4: "L'ORD est paralysé depuis [d:2019] : les États-Unis bloquent la nomination des juges d'appel." },
"ch2-1/1-2": { 0: "Une puissance montante face à une puissance établie mène souvent à la guerre : c'est le piège de Thucydide.", 4: "Des États relancent la coopération au lieu de rompre." },
"ch2-2/0-0": { 0: "L'article XXIV du GATT autorise les accords régionaux, vus comme un tremplin vers le libre-échange.", 1: "L'ouverture régionale s'étend par contagion : les pays exclus demandent à entrer.", 2: "Les accords régionaux vont plus loin que l'OMC (clauses OMC+) : c'est l'intégration profonde.", 3: "L'accord régional est un optimum de second rang et un laboratoire pour le multilatéral.", 4: "Des pays proches peuvent produire ensemble des biens publics régionaux.", 5: "Les accords régionaux sont des pierres d'achoppement : ils détournent du multilatéral.", 6: "La multiplication des accords crée un « bol de spaghetti » de règles d'origine.", 7: "Le monde se divise en blocs rivaux qui se protègent : dilemme du prisonnier.", 8: "La régionalisation suit désormais une logique de puissance, entre alliés.", 9: "Pas de dérive systématique : l'UE s'est élargie tout en baissant ses droits extérieurs." },
"ch2-2/0-1": { 2: "Un tarif extérieur commun bien fixé rend l'union bénéfique pour tous, membres et pays tiers.", 4: "Trop de préférences entre voisins crée un bloc « supernaturel » qui réduit le bien-être.", 6: "Une union douanière est bénéfique si la création de commerce l'emporte sur le détournement.", 7: "L'effet propre des accords est positif mais faible.", 8: "On signe avec des partenaires qui commercent déjà beaucoup : l'effet de l'accord est difficile à isoler." },
"ch2-2/0-2": { 0: "On négocie des règles communes pour pouvoir produire à l'étranger.", 2: "Le commerce entre deux pays augmente avec leur taille et diminue avec la distance.", 3: "Les frontières comptent : on échange bien plus à l'intérieur d'un pays qu'avec l'étranger.", 4: "La distance compte davantage dans les chaînes de valeur.", 5: "Les accords servent à contenir un rival : le communisme, puis la Chine.", 6: "L'intégration économique prépare l'unification politique." },
"ch2-2/0-3": { 2: "Uni, le bloc pèse plus dans les négociations.", 4: "En bilatéral, le grand pays impose ses règles au petit.", 6: "L'intégration profonde sert surtout les FMN, qui peuvent attaquer les États." },
"im-1/0-0": { 0: "La monnaie n'est qu'un intermédiaire : l'offre crée sa propre demande.", 1: "MV = PT : plus de monnaie ne crée que de l'inflation.", 2: "La monnaie est « l'huile » des rouages : elle facilite les échanges sans les changer.", 3: "Avec des anticipations rationnelles, la monnaie est neutre même à court terme.", 6: "La baisse des prix alourdit les dettes réelles, ce qui fait encore baisser les prix.", 7: "Prix et salaires s'ajustent lentement : la monnaie agit sur l'activité à court terme.", 8: "Un crédit trop bon marché pousse à des investissements non rentables, puis à la crise.", 9: "Une monnaie créée sans richesse en face donne de « faux droits » et nourrit l'inflation." },
"im-1/0-1": { 0: "La monnaie a trois fonctions : unité de compte, intermédiaire des échanges, réserve de valeur.", 1: "La monnaie lève la double coïncidence des besoins du troc.", 2: "La monnaie naît spontanément du marché, pas de l'État.", 5: "La monnaie est une institution, signe de souveraineté.", 6: "La monnaie repose sur trois confiances emboîtées : méthodique, hiérarchique, éthique.", 7: "La monnaie vaut parce que l'État l'impose et l'accepte en paiement des impôts.", 8: "L'argent est un rapport social : on avance de l'argent pour en récupérer plus (A → M → A').", 9: "L'argent libère l'individu mais réduit tout au calcul." },
"im-1/0-2": { 1: "Diviseur de crédit : les banques créent la monnaie, la banque centrale n'en fixe que le prix.", 2: "Loi du reflux : la monnaie émise en trop revient à la banque, pas d'excès durable.", 3: "Multiplicateur : la banque centrale fixe la base monétaire, qui limite le crédit.", 4: "Il faut limiter l'émission de billets pour éviter l'inflation." },
"im-1/1-0": { 0: "Un gouvernement est tenté de relancer par l'inflation ; une banque centrale indépendante est plus crédible.", 1: "La banque centrale doit prêter sans limite aux banques solvables en cas de panique.", 2: "La garantie des dépôts arrête les paniques bancaires.", 4: "Il faut laisser des monnaies privées se concurrencer.", 5: "Les politiques monétaires accommodantes créent des bulles plus que de la croissance.", 7: "Aléa moral : les banques « too big to fail » prennent trop de risques, sûres d'être sauvées." },
"im-1/1-1": { 0: "Sans épargne préalable, le crédit fixe des taux trop bas et mène à la crise.", 1: "Une monnaie créée sans épargne donne de faux droits.", 2: "Le crédit finance l'investissement ; l'épargne se forme ensuite.", 4: "Dans une économie d'endettement, les entreprises se financent par le crédit bancaire." },
"im-1/1-2": { 0: "La banque surveille les emprunteurs pour le compte des déposants : c'est un contrôleur délégué.", 1: "Les banques sont indispensables aux PME, qui n'ont pas accès aux marchés.", 3: "Déréglementation, désintermédiation, décloisonnement (les 3D) : les marchés allouent le capital plus souplement.", 4: "L'Europe manque de capital-risque pour financer l'innovation.", 5: "Face à l'information imparfaite, les banques rationnent le crédit." },
"ch3/0-0": { 0: "La population croît plus vite que les subsistances : c'est la trappe malthusienne.", 1: "Les rendements décroissants de la terre mènent à l'état stationnaire.", 2: "L'impact environnemental = population × richesse × technologie.", 4: "Le modèle de consommation occidental ne peut pas être étendu à toute la planète.", 5: "Les gains de productivité agricole ont démenti Malthus.", 6: "Le progrès technique trouve des substituts aux ressources rares." },
"ch3/0-1": { 0: "Il suffit de transmettre un stock global de capital constant : c'est la durabilité faible.", 1: "Réinvestir la rente des ressources épuisables maintient le capital total.", 2: "Courbe de Kuznets environnementale : la pollution augmente puis baisse quand le revenu progresse.", 3: "Mieux vaut le progrès que la sanctuarisation de la nature.", 4: "L'économie dégrade irréversiblement l'énergie et la matière (entropie).", 5: "Le développement durable est un oxymore : il faut décroître.", 6: "Le découplage n'est ni total, ni global, ni permanent.", 8: "Effet rebond : les gains d'efficacité font consommer davantage.", 9: "Il faut une décroissance sélective, entre un plancher social et un plafond écologique." },
"ch3/0-2": { 1: "GIEC : réchauffement de [n:+1,1 °C], d'origine humaine.", 2: "Nous sommes entrés dans l'anthropocène : l'homme est devenu une force géologique.", 3: "Tragédie de l'horizon : les dégâts arriveront après l'horizon des décideurs, d'où le risque d'actifs échoués." },
"ch3/1-0": { 0: "Une taxe égale au dommage marginal internalise la pollution et peut offrir un double dividende.", 1: "Un marché de quotas fixe la quantité de pollution et laisse le marché fixer le prix.", 2: "Il faut une taxe carbone mondiale et progressive.", 4: "Si les droits de propriété sont clairs, pollueurs et victimes peuvent négocier sans l'État.", 5: "On peut orienter les comportements sans prix, par des nudges.", 6: "Les communautés peuvent gérer elles-mêmes les ressources.", 7: "La taxe carbone est régressive : elle pèse plus sur les ménages modestes." },
"ch3/1-1": { 2: "La gouvernance du climat peut être polycentrique, à plusieurs échelles.", 3: "Chacun a intérêt à laisser les autres réduire leurs émissions : c'est le passager clandestin.", 4: "[a:Hardin], [w:La tragédie des communs] ([d:1968])\nUne ressource en accès libre est surexploitée.", 5: "Le climat est un bien public mondial que personne ne finance.", 6: "L'accord de Paris ([d:2015]) ne prévoit aucune sanction.", 7: "La tragédie des communs est un mythe : les communs étaient régulés.", 8: "Chaque pays avance à son rythme." },
"ch3/1-2": { 1: "Sans effort du Sud, les émissions fuient vers lui : d'où le MACF.", 3: "Exiger le même effort serait un prétexte pour bloquer le développement du Sud.", 5: "Brundtland ([d:1987]), Rio ([d:1992]) : trois piliers que chaque pays hiérarchise." }
};
