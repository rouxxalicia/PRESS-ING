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
  ex:["La Côte d'Ivoire est le premier producteur mondial de cacao mais ne capte qu'environ [n:6 %] des [n:130 Md$] de valeur de la filière : la transformation et la marque restent au Nord.", "La Guinée, premier producteur mondial de bauxite, cherche [n:1,9 Md$] pour un port en eaux profondes afin d'exporter plus de minerai, tout en disant vouloir se diversifier au-delà des mines (La Tribune, 18 nov. 2026)."]},
 {t:"Des prix qui jouent contre le Sud", p:[
  "[a:Prebisch], [w:The Economic Development of Latin America and its Principal Problems] ([d:1950])\nLes termes de l'échange des produits primaires se dégradent sur longue période : quand le revenu mondial augmente, la demande de matières premières augmente moins vite que celle de biens industriels, et les gains de productivité du Nord se traduisent en hausses de salaires plutôt qu'en baisses de prix. Le Sud doit exporter toujours plus pour importer autant.",
  "[a:Bhagwati], [w:Immiserizing Growth] ([d:1958])\nCroissance appauvrissante : si un grand exportateur produit davantage d'un bien dont la demande est peu sensible au prix, le cours mondial s'effondre et sa recette baisse. Il produit plus et s'appauvrit."],
  ex:["La Zambie dépend du cuivre : chaque chute des cours fait plonger ses recettes d'exportation.", "Le café brésilien à la fin des années 1920 : la surproduction fait s'effondrer les cours, et le Brésil finit par brûler une partie de ses stocks."]},
 {t:"Un échange inégal", p:[
  "[a:Emmanuel], [w:L'Échange inégal] ([d:1969])\nComme les salaires du Sud sont bien plus bas, une heure de travail du Sud s'échange contre moins d'une heure de travail du Nord. Le commerce transfère de la valeur du Sud vers le Nord, même quand les prix paraissent justes."],
  ex:["Selon Josep Borrell, [n:70 %] des ressources minières de l'Amérique latine sont encore exportées brutes, sans être raffinées sur place, alors que le continent détient plus de la moitié des réserves mondiales de lithium (El País, 3 nov. 2026)."]}
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
  ex:["Le Japon de l'ère Meiji passe du textile à l'industrie lourde ; les dragons asiatiques suivent ensuite la même trajectoire derrière lui.", "La Chine garde sur son sol la « masse noire » des batteries usagées, riche en lithium, cobalt et nickel, pour contrôler aussi le recyclage ; l'UE et les États-Unis limitent à leur tour l'export de ces déchets (Courrier international, 16 nov. 2026)."]}
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
  ex:["La Rust Belt américaine, dont le vote a pesé dans l'élection de Trump en 2016.", "En Argentine, l'ouverture commerciale de Milei fait chuter la production textile de [n:34 %] en trois ans : plus de [n:1 000] PME fermées et [n:25 000] emplois détruits, surtout dans la province de Buenos Aires et le nord du pays (Clarín, 11 nov. 2026).", "La liquidation de Fibre Excellence à Saint-Gaudens, dernier producteur français de pâte à papier, face aux usines géantes sud-américaines et scandinaves : [n:300] licenciements et plus de [n:2 000] emplois indirects fragilisés en Occitanie (Le Figaro, 12 nov. 2026)."]}
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
  "[a:Allais], [w:La Mondialisation : la destruction des emplois et de la croissance] ([d:1999])\nLe libre-échange entre pays aux salaires et aux protections sociales très différents détruit emplois et croissance en Europe. Il ne vaut qu'entre économies comparables, d'où son plaidoyer pour un libre-échange régional."],
  ex:["Pékin subventionne ses capacités industrielles plutôt que les revenus des ménages : les surcapacités chinoises sont déversées sur les marchés occidentaux, selon Jean Pisani-Ferry (Le Monde, 8 nov. 2026)."]}
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
  ex:["La Corée protège son automobile dans les années 1970 : Hyundai devient ensuite un exportateur mondial.", "Le patron de Solvay demande à l'UE des prix garantis ou un prix plancher pour les terres rares : sans protection contre la concurrence subventionnée chinoise, l'usine de séparation de La Rochelle risque de ne pas être rentable (La Tribune, 17 nov. 2026)."]},
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
  "[a:Stiglitz], [w:La Grande Désillusion] ([d:2002])\nDans les pays en développement, les droits de douane sont une part importante des recettes fiscales : libéraliser trop vite prive l'État de ressources pour l'éducation ou les infrastructures."],
  ex:["Le Mexique relève ses droits de douane de [n:5 %] à [n:50 %] sur plus de [n:500] produits venus de pays sans accord commercial, mais les recettes ([n:143 Md] de pesos sur neuf mois) restent très en dessous de l'objectif de [n:188 Md] (El País, 3 nov. 2026)."]}
]},
{lab:"Non", ti:"Une protection qui coûte cher", sp:[
 {t:"Pour les consommateurs", p:[
  "[a:Bastiat], [w:Pétition des fabricants de chandelles] ([d:1845])\nDans cette satire, les fabricants de chandelles demandent qu'on interdise le soleil. Le bénéfice de la protection est concentré sur quelques producteurs, son coût est dispersé sur tous les consommateurs : c'est pourquoi les producteurs obtiennent la protection par le lobbying.",
  "[a:Hufbauer et Lowry] ([d:2012])\nLes droits américains sur les pneus chinois ont coûté aux consommateurs environ [n:900 000 $] par emploi sauvé."],
  ex:["Selon l'institut Bruegel, les droits de douane européens sur les voitures électriques chinoises renchérissent les véhicules pour les ménages sans suffire à rendre les constructeurs européens compétitifs (Die Welt, 29 oct. 2026)."]},
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
  ex:["L'Allemagne dégage d'importants excédents malgré des coûts salariaux élevés, grâce à la qualité de ses machines et de ses voitures.", "La France décroche : PIB en recul de [n:0,1 %] au 3e trimestre 2026 à cause de la chute des exportations ([n:−1,7 %]), et PIB par habitant désormais sous la moyenne de l'UE (Insee, Le Monde, oct.-nov. 2026)."]},
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
  ex:["En France, le taux de l'impôt sur les sociétés passe de [n:33 %] à [n:25 %].", "La Grèce taxe à [n:5 %] les plus-values des gérants de fonds (contre [n:15 %] avant) et propose un impôt forfaitaire de [n:100 000 €] par an aux nouveaux résidents fortunés (Le Monde, 16 nov. 2026) ; l'Italie riposte par une exit tax de [n:26 %] sur les plus-values latentes de ceux qui partent (Le Monde, 6 nov. 2026)."]},
 {t:"Baisser le coût du travail", p:[
  "[a:Malgouyres et Mayer], [w:Exports and Labor Costs] ([d:2018])\nLe CICE, qui baissait le coût du travail, a peu aidé les entreprises exportatrices : la compétitivité française souffre surtout d'un problème hors-prix."],
  ex:["Plus de [n:70 Md€] par an d'allègements fiscaux et sociaux depuis le CICE (2014), pour des gains de productivité quasi nuls et un déficit commercial manufacturier record (Alternatives économiques, 9 nov. 2026) ; à l'inverse, l'Institut de l'entreprise juge que « la politique de l'offre n'a pas eu lieu » : [n:509 Md€] orientés vers les ménages contre [n:213 Md€] vers les entreprises entre 2018 et 2025 (Le Figaro, 20 nov. 2026)."]},
 {t:"Le patriotisme économique", p:[
  "[a:Combe], [w:Résister à la tentation protectionniste] ([d:2018])\nPoussé trop loin, le patriotisme économique a des effets pervers : il protège des entreprises peu efficaces et invite les partenaires à riposter."],
  ex:["Au salon du Made in France, plus de [n:1 000] exposants défendent la production locale en intégrant coûts logistiques, délais et qualité (Le Figaro, 15 nov. 2026) ; le ministre Serge Papin veut que les hausses de prix alimentaires aillent aux agriculteurs et PME françaises : « les cocos de Paimpol ne doivent plus financer le Cola d'Atlanta » (Le Figaro, 19 nov. 2026)."]}
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
  ex:["La guerre commerciale lancée par Trump en [d:2018] (droits sur l'acier, l'aluminium et les produits chinois).", "Le taux d'ouverture de la Chine passe de [n:27 %] en [d:2007] à [n:16 %] en [d:2018].", "La fin de la franchise douanière pour les colis de moins de [n:150 €] fait chuter de [n:28 %] la fréquentation de Shein et Temu en France au 3e trimestre 2026 (Le Figaro, 7 nov. 2026)."]},
 {t:"Une mondialisation par blocs", p:[
  "Le friend-shoring défendu par [a:Yellen] consiste à ne commercer qu'avec des pays alliés ; [a:Frachon] parle de globalisation régionalisée. La géopolitique redessine les échanges."],
  ex:["La guerre en Ukraine en [d:2022] et les sanctions contre la Russie."]}
]},
{lab:"Non", ti:"Un ralentissement, pas un recul", sp:[
 {t:"Un retour à la normale", p:[
  "[a:Sébastien Jean] (CEPII, [d:2017])\nLes exportations sont passées de [n:18 %] à [n:30 %] du PIB mondial jusqu'en [d:2008], une hausse exceptionnelle liée à l'entrée de la Chine dans l'OMC. Le plateau actuel est une normalisation.",
  "Slowbalisation ([w:The Economist], [d:2019])\nLe commerce croît désormais au même rythme que le PIB (élasticité tombée à 1) : il ralentit, il ne s'effondre pas."],
  ex:["Vingt-cinq ans après son entrée à l'OMC, la Chine termine 2026 avec un excédent commercial manufacturier proche de [n:1 000 Md$] : le commerce mondial ne recule pas, il se déséquilibre (La Croix, 12 nov. 2026)."]},
 {t:"Des chaînes de valeur résilientes", p:[
  "[a:Mezzadri et Ruwanpura] ([d:2020])\nLes chaînes de valeur ont résisté au Covid : elles se sont réorganisées plutôt que rompues."],
  ex:["Face aux droits de douane américains, Lula cherche de nouveaux débouchés plutôt que de « supplier » Washington : les échanges du Brésil avec l'Indonésie ([n:+15 %]) et le Vietnam ([n:+19 %]) bondissent (Clarín, 15 nov. 2026)."]},
 {t:"Rien à voir avec les années 1930", p:[
  "Dans les années 1930, les droits de douane explosent et le commerce mondial s'effondre de plus de moitié en valeur. Rien de comparable aujourd'hui."],
  ex:["Le tarif Hawley-Smoot ([d:1930]) porte les droits américains à [n:59 %] sur les produits taxés."]}
]},
{lab:"Dépasser", ti:"Une recomposition", sp:[
 {t:"Le précautionnisme", p:[
  "[a:Lamy] ([w:Le Monde], [d:2020])\nLes nouvelles barrières ne sont plus des droits de douane mais des normes sanitaires, environnementales ou de sécurité. Elles protègent le consommateur plus que le producteur. La mondialisation ne recule pas, elle change de règles."],
  ex:["Une commission parlementaire juge le Royaume-Uni « dangereusement » dépendant de la Chine pour ses minéraux critiques, ce qui menace sa défense, l'IA et ses objectifs climatiques (The Guardian, 5 nov. 2026)."]}
]}
],
usages: [
 {t:"La mondialisation est-elle réversible ?", d:"Années 1930 contre aujourd'hui : un ralentissement, pas un effondrement."},
 {t:"Le Covid marque-t-il la fin de la mondialisation ?", d:"Mezzadri et Ruwanpura : des chaînes résilientes."},
 {t:"Assiste-t-on au retour du protectionnisme ?", d:"Guerre commerciale de 2018 et précautionnisme de Lamy."}
]}
};

// ===== Fiches détaillées (remplacent les fiches construites à partir des cartes) =====
Object.assign(window.ESH_DEBAT_FICHES, {

"ch1-2/0-0": {
idee: "La firme existe parce qu'elle coordonne certaines activités à moindre coût que le marché, mais elle n'est pas qu'un nœud de contrats efficace : c'est aussi un lieu de conflits, de compromis et de routines.",
termes: "Voir la firme comme un « nœud de contrats », c'est la réduire à un ensemble d'accords entre salariés, actionnaires, dirigeants et fournisseurs. « Efficace » suppose qu'elle existe parce qu'elle coordonne mieux que le marché. Les critiques y voient au contraire un lieu de pouvoir, de négociation et d'apprentissage.",
parts: [
{lab:"Oui", ti:"La firme coordonne mieux que le marché", sp:[
 {t:"Économiser des coûts de transaction", p:[
  "[a:Coase], [w:The Nature of the Firm] ([d:1937])\nRecourir au marché coûte cher : il faut chercher un partenaire, négocier, rédiger et faire respecter chaque contrat. La firme existe quand la coordination par la hiérarchie coûte moins cher, et elle grandit jusqu'à ce que les deux coûts s'égalisent.",
  "[a:Williamson], [w:Markets and Hierarchies] ([d:1975])\nQuand un investissement ne sert qu'à une relation précise (actif spécifique), le partenaire peut en profiter pour renégocier à son avantage : c'est le risque de hold-up. Avec la rationalité limitée et l'opportunisme, mieux vaut alors intégrer l'activité dans la firme."],
  ex:["Une entreprise qui a besoin d'entretien chaque jour embauche un agent en CDI plutôt que de renégocier chaque intervention.", "General Motors rachète en [d:1926] son fournisseur de carrosseries Fisher Body, dont il dépendait entièrement."]},
 {t:"Surveiller le travail en équipe", p:[
  "[a:Alchian et Demsetz], [w:Production, Information Costs, and Economic Organization] ([d:1972])\nDans une production en équipe, la contribution de chacun est difficile à mesurer, ce qui pousse à tirer au flanc. Un propriétaire qui touche le profit a intérêt à surveiller l'équipe : c'est ce qui justifie la firme capitaliste."]}
]},
{lab:"Non, un conflit", ti:"Actionnaires contre dirigeants", sp:[
 {t:"Propriété et contrôle séparés", p:[
  "[a:Berle et Means], [w:L'entreprise moderne et la propriété privée] ([d:1932])\nDans les grandes sociétés par actions, l'actionnariat est dispersé : les dirigeants contrôlent la firme sans la posséder. Ils peuvent poursuivre leurs propres objectifs, la taille ou le prestige, plutôt que le profit.",
  "[a:Jensen et Meckling], [w:Theory of the Firm] ([d:1976])\nL'actionnaire ne peut pas observer tout ce que fait le dirigeant : c'est la relation d'agence. Pour réduire ces coûts d'agence, on aligne le dirigeant sur l'actionnaire par des stock-options, d'où la gouvernance par la valeur actionnariale."],
  ex:["Dans les années 1980-1990, les grandes firmes américaines adoptent la « création de valeur pour l'actionnaire » comme objectif.", "Le directoire d'Evonik et la fondation RAG refusent l'OPA de BASF à [n:11,2 Md€], malgré une prime de [n:39 %] sur le cours de Bourse, pour préserver l'indépendance de l'entreprise (FAZ, 1er nov. 2026)."]}
]},
{lab:"Dépasser", ti:"Une organisation qui négocie et apprend", sp:[
 {t:"Une coalition", p:[
  "[a:Cyert et March], [w:A Behavioral Theory of the Firm] ([d:1963])\nLa firme est une coalition de groupes aux objectifs différents (dirigeants, salariés, actionnaires). Faute d'information complète, elle ne cherche pas l'optimum mais un compromis satisfaisant pour chacun."]},
 {t:"Des routines", p:[
  "[a:Nelson et Winter], [w:An Evolutionary Theory of Economic Change] ([d:1982])\nLa firme fonctionne grâce à des routines, des savoir-faire collectifs difficiles à copier. Comme dans la sélection naturelle, survivent celles qui savent les faire évoluer."],
  ex:["Zodiac passe des ballons dirigeables aux bateaux pneumatiques, puis à l'équipement aéronautique."]}
]}
],
usages: [
 {t:"Pourquoi les entreprises existent-elles ?", d:"Coase : le coût du marché."},
 {t:"Faut-il gouverner l'entreprise pour l'actionnaire ?", d:"Berle et Means, Jensen et Meckling."},
 {t:"Externaliser est-il toujours efficace ?", d:"Williamson : le risque de hold-up."}
]},

"ch1-2/0-1": {
idee: "Les bas salaires expliquent les IDE verticaux, mais la plupart des IDE cherchent un marché : ils vont vers des pays riches, proches, aux institutions solides.",
termes: "Un IDE donne à une firme au moins [n:10 %] du capital d'une entreprise étrangère, donc une influence durable. L'IDE vertical découpe la production pour profiter des écarts de coûts ; l'IDE horizontal reproduit la production à l'étranger pour être au plus près d'un marché.",
parts: [
{lab:"Oui", ti:"Les IDE verticaux suivent les bas coûts", sp:[
 {t:"Découper la chaîne de valeur", p:[
  "IDE vertical\nLes activités qui demandent beaucoup de travail peu qualifié (textile, assemblage) sont installées là où les salaires sont bas ; la conception et la commercialisation restent au Nord.",
  "[a:Defever et Mucchielli], [w:Décomposition internationale de la chaîne de valeur] ([d:2005])\nLa firme choisit un pays pour chaque étape de sa chaîne de valeur : l'assemblage, étape la plus intensive en main-d'œuvre, va là où le coût est le plus bas.",
  "[a:Sinn], [w:L'économie du bazar] ([d:2005])\nL'Allemagne fait produire ses composants en Europe de l'Est et ne garde que l'assemblage final et les étapes les plus rentables : ses exportations contiennent de moins en moins de production allemande."],
  ex:["La Peugeot 208 est assemblée en Slovaquie et au Maroc.", "Les constructeurs allemands sous-traitent leurs pièces en Pologne, en Tchéquie et en Hongrie."]}
]},
{lab:"Non", ti:"La plupart des IDE cherchent un marché", sp:[
 {t:"Le coût unitaire", p:[
  "[a:Berger], [w:Made in Monde] ([d:2006])\nLes firmes ne regardent pas le salaire seul mais le coût unitaire du travail, c'est-à-dire le salaire rapporté à la productivité. Un salaire bas avec une faible productivité ne rend pas la production moins chère."],
  ex:["La valeur ajoutée d'un ouvrier américain est environ [n:28] fois celle d'un ouvrier chinois."]},
 {t:"L'accès au marché", p:[
  "IDE horizontal\n[n:70 %] des IDE des pays développés vont vers d'autres pays développés. Les firmes veulent produire près de leurs clients, éviter les droits de douane et s'adapter à la demande locale."],
  ex:["Toyota assemble la Yaris à Valenciennes pour le marché européen.", "Sous la menace de droits de douane américains de [n:50 %] sur les voitures canadiennes, Stellantis renonce à produire la Jeep Compass en Ontario et la relocalise dans l'Illinois (Les Échos, 13 nov. 2026)."]},
 {t:"Les institutions", p:[
  "[a:Acemoglu et Robinson], [w:Why Nations Fail] ([d:2012])\nLes FMN évitent les pays aux institutions extractives, où une élite capte les richesses et où les droits de propriété sont incertains : le risque d'expropriation y compte plus que le salaire."],
  ex:["L'Afrique ne reçoit qu'environ [n:6 %] des IDE mondiaux."]},
 {t:"La gravité", p:[
  "[a:Tinbergen], [w:Shaping the World Economy] ([d:1962])\nLes échanges entre deux pays augmentent avec leur taille économique et diminuent avec la distance : les IDE suivent aussi cette logique de gravité."],
  ex:["Le Canada est l'un des premiers partenaires des États-Unis."]},
 {t:"L'imitation", p:[
  "[a:Knickerbocker], [w:Oligopolistic Reaction and Multinational Enterprise] ([d:1973])\nDans un oligopole, quand le leader s'implante dans un pays, ses concurrents le suivent pour ne pas lui laisser le marché."],
  ex:["Dans les années 1980, les constructeurs japonais s'installent les uns après les autres aux États-Unis."]}
]},
{lab:"Dépasser", ti:"Suivre l'agglomération", sp:[
 {t:"Là où sont déjà les autres", p:[
  "[a:Krugman], [w:Geography and Trade] ([d:1991])\nLes firmes s'installent là où sont déjà leurs fournisseurs, une main-d'œuvre qualifiée et les idées : l'agglomération attire les IDE. Mais [a:Mayer et Mucchielli] ([d:1999]) montrent qu'une concurrence locale trop forte peut aussi repousser."],
  ex:["La Silicon Valley."]}
]}
],
usages: [
 {t:"Pourquoi les firmes s'implantent-elles à l'étranger ?", d:"70 % des IDE vont vers d'autres pays riches."},
 {t:"L'Afrique peut-elle attirer les IDE ?", d:"Acemoglu et Robinson : les institutions d'abord."},
 {t:"Les délocalisations sont-elles inévitables ?", d:"Berger : le coût unitaire, pas le salaire."}
]},

"ch1-2/0-2": {
idee: "Devenir multinationale suppose un avantage spécifique et une productivité élevée, mais les modes intermédiaires et le numérique permettent à plus de firmes de s'internationaliser.",
termes: "Une FMN contrôle au moins une filiale à l'étranger. La question est de savoir si l'internationalisation est réservée aux grandes firmes ou si les barrières à l'entrée ont baissé.",
parts: [
{lab:"Non", ti:"Il faut un avantage et une forte productivité", sp:[
 {t:"Compenser le handicap d'être étranger", p:[
  "[a:Hymer] ([d:1968]) et [a:Kindleberger], [w:American Business Abroad] ([d:1969])\nUne firme étrangère connaît mal le marché, la langue, les réseaux. Elle ne s'implante que si elle a un avantage spécifique (technologie, marque, organisation) qui compense ce handicap.",
  "[a:Dunning], [w:International Production and the Multinational Enterprise] ([d:1981])\nParadigme OLI : il faut un avantage propre à la firme (O), un avantage du pays d'accueil (L) et un intérêt à garder l'activité en interne plutôt que de céder une licence (I). Les trois sont nécessaires."],
  ex:["Les GAFAM s'imposent en Europe grâce à leur avance technologique."]},
 {t:"Seules les plus productives", p:[
  "[a:Helpman, Melitz et Yeaple], [w:Export versus FDI with Heterogeneous Firms] ([d:2004])\nLes firmes les moins productives ne vendent que sur leur marché, les plus productives exportent, et seules les meilleures peuvent payer le coût fixe d'une filiale à l'étranger.",
  "[a:Mouhoud]\nLes [n:100] premières FMN représentent [n:0,1 %] des FMN mais [n:60 %] de leur valeur ajoutée : l'internationalisation est très concentrée."],
  ex:["[n:70 %] des FMN n'ont qu'une seule filiale à l'étranger."]}
]},
{lab:"Oui", ti:"L'internationalisation s'est ouverte", sp:[
 {t:"Des firmes mondiales dès leur naissance", p:[
  "Born global\nGrâce au numérique, des start-up visent le marché mondial dès leur création, sans passer par une longue phase nationale."],
  ex:["Devialet, start-up française d'enceintes haut de gamme."]},
 {t:"S'internationaliser sans IDE", p:[
  "Modes intermédiaires\nLicence, franchise, sous-traitance ou alliance permettent d'être présent à l'étranger sans y investir ni y contrôler une filiale."],
  ex:["Yoplait (licence), McDonald's (franchise), Pfizer-BioNTech (alliance)."]}
]},
{lab:"Dépasser", ti:"Pas à pas", sp:[
 {t:"Un engagement progressif", p:[
  "[a:Johanson et Vahlne], modèle d'Uppsala ([d:1977])\nLes firmes s'internationalisent par étapes : export, puis filiale commerciale, puis production. Elles commencent par les pays proches culturellement (faible distance psychique), puis s'éloignent."]}
]}
],
usages: [
 {t:"Les PME peuvent-elles s'internationaliser ?", d:"Born global, modèle d'Uppsala."},
 {t:"Qu'est-ce qu'une FMN ?", d:"Dunning, le paradigme OLI."},
 {t:"La mondialisation profite-t-elle aux grandes firmes ?", d:"Mouhoud : 100 FMN, 60 % de la valeur ajoutée."}
]},

"ch1-2/1-0": {
idee: "Les FMN détruisent des emplois peu qualifiés au Nord, surtout dans certains territoires, mais l'effet net des délocalisations est faible à côté du progrès technique et de la tertiarisation.",
termes: "Une délocalisation consiste à fermer une production au Nord pour la transférer à l'étranger et réimporter. Il faut distinguer l'effet brut (emplois détruits) et l'effet net (en tenant compte des emplois créés), et l'emploi industriel de l'emploi total.",
parts: [
{lab:"Oui", ti:"Des emplois détruits", sp:[
 {t:"Des importations qui remplacent des emplois", p:[
  "[a:Arthuis] (rapport au Sénat, [d:1993])\nLes produits importés des pays à bas salaires contiennent des emplois qui ne sont plus créés en France : les délocalisations menacent l'emploi industriel."]},
 {t:"Un choc qui se propage", p:[
  "[a:Acemoglu, Autor, Dorn et Hanson] ([d:2016])\nLe choc des importations chinoises détruit environ [n:2 millions] d'emplois aux États-Unis : les pertes se propagent des secteurs concurrencés à leurs fournisseurs et aux commerces locaux."],
  ex:["La crise des constructeurs se transmet aux sous-traitants : les équipementiers français et allemands estiment que plus de [n:80 000] emplois sont menacés d'ici 2028 (Le Monde, 7 nov. 2026) ; Schaeffler supprime [n:3 460] postes et ferme quatre usines en Allemagne (Der Spiegel, 4 nov. 2026)."]},
 {t:"Les non-qualifiés perdent", p:[
  "Modèle HOS et théorème d'égalisation des prix des facteurs\nLe Nord se spécialise dans les biens qualifiés : les non-qualifiés perdent, soit par le chômage quand les salaires sont rigides (Europe), soit par des salaires plus bas (États-Unis)."]}
]},
{lab:"Non", ti:"D'autres causes, un effet net faible", sp:[
 {t:"La désindustrialisation a d'autres causes", p:[
  "[a:Demmou], [w:La désindustrialisation en France] ([d:2010])\nLa concurrence étrangère n'explique qu'environ [n:13 %] des pertes d'emplois industriels ; l'essentiel vient des gains de productivité et de l'externalisation de services.",
  "[a:Rowthorn et Ramaswamy], [w:Deindustrialization: Causes and Implications] ([d:1997])\nLa désindustrialisation est une étape normale du développement : la productivité industrielle progresse vite et la demande se tourne vers les services."],
  ex:["Volkswagen ([n:5,8 Md€] de pertes au 3e trimestre 2026) et Mercedes, qui menace de fermer des usines en Allemagne, souffrent surtout de l'effondrement de leurs ventes en Chine face à BYD, d'une électrification lente et du coût de l'énergie (Die Welt, Le Figaro, nov. 2026)."]},
 {t:"Un solde presque nul", p:[
  "[a:Barlet, Blanchet et Crusson] (INSEE, [d:2010])\nLes délocalisations détruisent environ [n:36 000] emplois par an, mais les implantations étrangères et les exportations en créent autour de [n:40 000].",
  "[a:Fontagné et Lorenzi] ([d:2005])\nLes délocalisations ne représentent qu'environ [n:7 %] des destructions d'emplois."]}
]},
{lab:"Dépasser", ti:"Garder l'industrie autrement", sp:[
 {t:"Délocaliser la fabrication, pas l'activité", p:[
  "[a:Fontagné], [w:Pas d'industrie, pas d'avenir ?]\nUn pays peut garder l'activité industrielle (conception, R&D, services liés) tout en délocalisant la fabrication : l'industrie ne se résume plus aux usines."],
  ex:["« Designed by Apple in California, assembled in China »."]}
]}
],
usages: [
 {t:"La désindustrialisation vient-elle de la mondialisation ?", d:"Demmou : 13 % seulement."},
 {t:"Faut-il relocaliser ?", d:"Fontagné : garder l'activité plutôt que les usines."},
 {t:"Le libre-échange détruit-il l'emploi ?", d:"Le choc chinois, 2 millions d'emplois."}
]},

"ch1-2/1-1": {
idee: "La valeur créée par les FMN va d'abord aux actionnaires et au pays du siège ; les pays d'accueil n'en gagnent qu'une part, qui dépend de leur place dans la chaîne de valeur.",
termes: "Il s'agit du partage de la valeur ajoutée entre salaires et profits, entre pays du siège et pays d'accueil, entre la FMN et ses sous-traitants.",
parts: [
{lab:"Les actionnaires", ti:"Une part salariale en baisse", sp:[
 {t:"Gouverner pour l'actionnaire", p:[
  "[a:Jensen et Meckling], [w:Theory of the Firm] ([d:1976])\nLes stock-options alignent les dirigeants sur l'actionnaire : la priorité devient la rentabilité, ce qui pousse à comprimer la masse salariale.",
  "[a:Gutiérrez et Philippon], [w:Ownership, Concentration and Investment] ([d:2018])\nAux États-Unis, la part des actions détenue par les investisseurs institutionnels passe de [n:10 %] à [n:85 %] : les firmes distribuent davantage et investissent moins."],
  ex:["Les neuf plus grandes majors pétrolières dégagent plus de [n:95 Md$] de profits au 3e trimestre 2026 grâce à la guerre avec l'Iran, reversés en dividendes et rachats d'actions, pendant que les factures des ménages montent (The Guardian, 3 nov. 2026)."]},
 {t:"Une part salariale qui recule", p:[
  "CEPII ([d:2019])\nLa part des salaires dans la valeur ajoutée baisse de [n:7,2 points] aux États-Unis, et environ [n:70 %] de cette baisse vient du comportement des firmes elles-mêmes (concentration, marges)."],
  ex:["Contre-exemple français : la part des salaires dans la valeur ajoutée atteint [n:68 %], au-dessus de la moyenne européenne, et le taux de marge des entreprises tombe sous [n:31 %], au plus bas depuis 2019 (Insee, Le Monde, 9 nov. 2026)."]}
]},
{lab:"Les machines", ti:"Le capital remplace le travail", sp:[
 {t:"Un capital moins cher", p:[
  "[a:Karabarbounis et Neiman], [w:The Global Decline of the Labor Share] ([d:2013])\nLa part du travail baisse partout depuis les années 1980 parce que les biens d'investissement deviennent moins chers : les firmes remplacent le travail par le capital."],
  ex:["L'IA a fait disparaître environ [n:100 000] offres d'emploi en 2026, surtout en RH, comptabilité, informatique et vente : pas de licenciements massifs, mais moins d'embauches (Coface, Le Monde, 17 nov. 2026)."]}
]},
{lab:"Le pays du siège", ti:"Les activités clés restent au siège", sp:[
 {t:"Garder ce qui rapporte", p:[
  "Les FMN gardent au siège la recherche fondamentale, le marketing et la marque, qui captent l'essentiel de la valeur ; les filiales font surtout de la production et de la recherche d'adaptation."],
  ex:["L'Oréal ne fait en Chine que de la recherche d'adaptation aux consommateurs locaux."]}
]},
{lab:"Les PED, selon leur place", ti:"Des IDE ambivalents", sp:[
 {t:"Monter en gamme ou être évincé", p:[
  "Les IDE apportent capitaux, technologie et accès aux chaînes de valeur, ce qui peut lancer le développement. Mais ils peuvent aussi concurrencer et évincer les producteurs locaux."],
  ex:["Les Tigres asiatiques ont monté en gamme grâce aux FMN.", "Nestlé face aux producteurs locaux de manioc."]}
]}
],
usages: [
 {t:"Le partage de la valeur ajoutée est-il juste ?", d:"CEPII : part salariale −7,2 points."},
 {t:"Les IDE développent-ils le Sud ?", d:"Tigres asiatiques contre manioc."},
 {t:"La finance gouverne-t-elle les entreprises ?", d:"Gutiérrez et Philippon."}
]},

"ch1-2/1-2": {
idee: "L'État peut encore orienter les FMN par la politique industrielle, l'attractivité et le contrôle des IDE, mais la mobilité des firmes et la capture réglementaire limitent son pouvoir.",
termes: "Orienter, c'est influencer où les FMN s'installent, ce qu'elles produisent et qui les possède. Le débat porte sur le rapport de force entre États, attachés à un territoire, et firmes mobiles.",
parts: [
{lab:"Oui", ti:"L'État garde des outils", sp:[
 {t:"La politique industrielle", p:[
  "[a:Cohen et Lorenzi], [w:Politiques industrielles pour l'Europe] ([d:2000])\nPlusieurs défaillances de marché (externalités, rendements croissants, coordination) justifient que l'État soutienne certaines filières.",
  "[a:Aghion et Howitt], [w:Appropriate Growth Policy] ([d:2005])\nLa bonne politique dépend du niveau de développement : loin de la frontière technologique, aider l'imitation ; près de la frontière, financer la recherche et favoriser la concurrence."],
  ex:["Le programme Galileo ; le plan France 2030 ([n:54 Md€]).", "Pour les six EPR2, l'État négocie avec Bruxelles un contrat pour différence qui garantit à EDF un prix pendant [n:40] ans (Renseignement économique, 23 oct. 2026) et envisage de mobiliser l'épargne du Livret A (Alternatives économiques, 10 nov. 2026)."]},
 {t:"Le contrôle des IDE", p:[
  "[a:Keynes], [w:De l'autosuffisance nationale] ([d:1933])\nUn propriétaire lointain ne rend de comptes à personne sur place : l'État a donc des raisons de contrôler qui possède les entreprises stratégiques."],
  ex:["Le CFIUS aux États-Unis ; le décret Montebourg de [d:2014] après l'affaire Alstom.", "L'Allemagne rachète [n:50 %] de KNDS, à parité avec l'État français, pour garder un pouvoir de décision sur les programmes d'armement ; l'introduction en Bourse est abandonnée (Le Monde, 6 nov. 2026)."]},
 {t:"Attirer les emplois qualifiés", p:[
  "[a:Moretti], [w:The New Geography of Jobs] ([d:2012])\nUn emploi qualifié dans l'innovation crée [n:4 à 5] emplois locaux dans les services : l'État a intérêt à attirer les FMN innovantes par des zones d'activité."]}
]},
{lab:"Non", ti:"Des firmes plus mobiles que l'État", sp:[
 {t:"Les FMN votent avec leurs pieds", p:[
  "[a:Tiebout], [w:A Pure Theory of Local Expenditures] ([d:1956])\nLes agents mobiles choisissent le territoire qui leur offre le meilleur rapport impôts-services. Les FMN font jouer la concurrence entre États."],
  ex:["L'Irlande attire les sièges européens avec un impôt sur les sociétés à [n:12,5 %].", "Stellantis vend son usine canadienne de Brampton et part produire aux États-Unis ; Ottawa répond par un avis de défaut et menace de récupérer des centaines de millions de dollars de subventions (Les Échos, 13 nov. 2026)."]},
 {t:"La capture réglementaire", p:[
  "[a:Stigler], [w:The Theory of Economic Regulation] ([d:1971])\nLes régulateurs finissent par servir les intérêts des firmes qu'ils doivent contrôler, car elles sont mieux informées et mieux organisées."],
  ex:["En [d:2020], la Fed confie à BlackRock la gestion de ses achats d'obligations."]}
]},
{lab:"Dépasser", ti:"Le risque de rétorsions", sp:[
 {t:"Contrôler a un prix", p:[
  "Rapport [a:Carayon] ([d:2003])\nContrôler les IDE protège les secteurs stratégiques, mais expose aux rétorsions : les FMN nationales risquent d'être traitées de la même façon à l'étranger."]}
]}
],
usages: [
 {t:"L'État a-t-il encore un rôle économique ?", d:"Cohen et Lorenzi, Aghion et Howitt."},
 {t:"Faut-il une politique industrielle européenne ?", d:"Galileo, France 2030."},
 {t:"La concurrence fiscale est-elle néfaste ?", d:"Tiebout, l'Irlande."}
]},

"ch1-2/1-3": {
idee: "La firme globale existe dans l'organisation de la production, mais les FMN restent ancrées dans leur pays d'origine et se régionalisent.",
termes: "Une firme globale n'aurait plus de nationalité : production répartie dans le monde, offre standardisée, management mondial. La question est de savoir si les FMN réelles correspondent à ce modèle.",
parts: [
{lab:"Oui", ti:"Une production mondialisée", sp:[
 {t:"Une stratégie mondiale", p:[
  "[a:Porter], [w:Competition in Global Industries] ([d:1986])\nLa firme globale installe chaque activité là où elle est la plus efficace et vend une offre standardisée dans le monde entier."],
  ex:["Apple vend le même iPhone partout.", "Une panne de Microsoft (Outlook, Teams) paralyse pendant plus de [n:18] heures entreprises, administrations et universités dans le monde entier, les 12 et 13 novembre 2026 (Le Figaro, 13 nov. 2026)."]},
 {t:"Les chaînes de valeur mondiales", p:[
  "[a:Baldwin], [w:Global Supply Chains] ([d:2012])\nDepuis les années 1990, le second dégroupement : les technologies de l'information permettent de découper la production entre pays. On n'échange plus seulement des biens, mais des tâches.",
  "CNUCED\nEnviron [n:80 %] du commerce mondial est organisé par les FMN, à l'intérieur de leurs chaînes de valeur."],
  ex:["L'iPhone est conçu en Californie, avec des composants coréens, japonais et taïwanais, et assemblé en Chine."]}
]},
{lab:"Non", ti:"Des firmes ancrées dans leur pays", sp:[
 {t:"Un ancrage national", p:[
  "[a:Berger], [w:Made in Monde] ([d:2006])\nLes FMN gardent leur siège, leur recherche, leurs actionnaires et leur culture dans leur pays d'origine : elles restent nationales."],
  ex:["Le gouvernement de Rhénanie-du-Nord-Westphalie salue le refus d'Evonik d'être racheté par BASF, malgré les garanties promises sur l'emploi et les sites allemands (FAZ, 1er nov. 2026)."]},
 {t:"Des cultures nationales", p:[
  "[a:d'Iribarne], [w:La Logique de l'honneur] ([d:1989])\nChaque pays a sa culture du travail (l'honneur du métier en France, le contrat aux États-Unis, le consensus aux Pays-Bas). Le management reste national."],
  ex:["L'échec de la fusion Daimler-Chrysler ([d:1998-2007])."]}
]},
{lab:"Dépasser", ti:"Glocale et régionalisée", sp:[
 {t:"Penser global, agir local", p:[
  "[a:Perlmutter] ([d:1969])\nLes FMN passent d'une stratégie centrée sur le pays d'origine à une organisation par grandes régions (régiocentrisme), en adaptant l'offre aux marchés locaux."],
  ex:["« Think global, act local » (Sony)."]},
 {t:"Des chaînes qui se raccourcissent", p:[
  "CNUCED\nDepuis les années 2010, relocalisations, régionalisation et raccourcissement des chaînes de valeur éloignent encore du modèle de la firme globale."],
  ex:["Stellantis rapatrie aux États-Unis la production de la Jeep Compass prévue au Canada pour échapper aux droits de douane américains (Les Échos, 13 nov. 2026)."]}
]}
],
usages: [
 {t:"Les FMN ont-elles une nationalité ?", d:"Berger, d'Iribarne."},
 {t:"Assiste-t-on à une démondialisation ?", d:"CNUCED : des chaînes raccourcies."},
 {t:"Comment se fabrique un iPhone ?", d:"Baldwin, le commerce de tâches."}
]},

"ch2-1/0-0": {
idee: "Un hégémon facilite la coopération en fournissant les biens publics mondiaux, mais les institutions qu'il a créées peuvent lui survivre, car les États ont intérêt à coopérer.",
termes: "Un hégémon est une puissance capable de fixer les règles et de les faire respecter. La coopération internationale désigne les règles et institutions communes (FMI, OMC, accords climatiques). La question oppose réalistes et libéraux en relations internationales.",
parts: [
{lab:"Oui", ti:"Sans hégémon, le système s'effondre", sp:[
 {t:"La stabilité hégémonique", p:[
  "[a:Kindleberger], [w:La Grande Crise mondiale, 1929-1939] ([d:1973])\nL'économie mondiale n'est stable que si une puissance garde son marché ouvert, prête aux pays en difficulté et joue le prêteur en dernier ressort. En [d:1929], le Royaume-Uni ne peut plus jouer ce rôle et les États-Unis ne le veulent pas encore.",
  "[a:Nye] ([d:2017])\nLe « piège de Kindleberger » : si les États-Unis se retirent et que la Chine refuse de fournir les biens publics mondiaux, le système peut s'effondrer comme dans les années 1930."]},
 {t:"Le réalisme", p:[
  "[a:Gilpin], [w:War and Change in World Politics] ([d:1981])\nL'ordre international reflète la répartition de la puissance. Quand l'hégémon décline, l'ordre entre en crise, souvent jusqu'à la guerre.",
  "[a:Krasner], [w:International Regimes] ([d:1983])\nUn régime international n'est respecté que tant qu'il sert les intérêts des puissants."],
  ex:["Les États-Unis paralysent l'OMC dès qu'elle les gêne face à la Chine.", "Trump menace de doubler les droits de douane sur les produits mexicains si le Mexique ne bloque pas les caravanes de migrants : l'arme commerciale sert un objectif non commercial (El País, 13 nov. 2026)."]}
]},
{lab:"Non", ti:"La coopération survit par intérêt", sp:[
 {t:"Des institutions utiles", p:[
  "[a:Keohane], [w:After Hegemony] ([d:1984])\nLes institutions créées par l'hégémon survivent à son déclin, car elles réduisent l'incertitude et les coûts de négociation entre États : chacun a intérêt à les garder."],
  ex:["Plus de [n:600] différends portés devant l'ORD depuis [d:1995]."]},
 {t:"Une gouvernance polycentrique", p:[
  "[a:Ostrom], [w:La Gouvernance des biens communs] ([d:1990])\nLa coopération peut s'organiser à plusieurs niveaux, sans autorité centrale ni gouvernement mondial."],
  ex:["Lula, invité au sommet de l'ASEAN à Manille, plaide pour diversifier les partenaires commerciaux face aux droits de douane américains (Clarín, 15 nov. 2026)."]},
 {t:"Des États qui coopèrent", p:[
  "[a:Beck], [w:Pouvoir et contre-pouvoir à l'ère de la mondialisation] ([d:2003])\nL'État retrouve du pouvoir en coopérant avec les autres : c'est l'État cosmopolite."],
  ex:["L'impôt minimal mondial de [n:15 %] sur les multinationales, adopté à l'OCDE en [d:2021]."]}
]}
],
usages: [
 {t:"Le monde a-t-il besoin d'un leader ?", d:"Kindleberger contre Keohane."},
 {t:"Le déclin américain menace-t-il la mondialisation ?", d:"Gilpin, Nye."},
 {t:"Les institutions internationales sont-elles utiles ?", d:"Keohane, l'ORD."}
]},

"ch2-1/0-1": {
idee: "Les biens publics mondiaux peuvent être produits grâce aux institutions et à l'auto-organisation, mais difficilement, faute de pouvoir coercitif face aux passagers clandestins.",
termes: "Un bien public est non rival (ma consommation ne réduit pas la tienne) et non excluable (on ne peut empêcher personne d'en profiter). Il est mondial quand ses effets touchent tous les pays : climat, stabilité financière, santé.",
parts: [
{lab:"Oui", ti:"Institutions et auto-organisation", sp:[
 {t:"Un cadre institutionnel", p:[
  "[a:North], [w:Institutions, Institutional Change and Economic Performance] ([d:1990])\nLes institutions, règles formelles et informelles, réduisent l'incertitude et rendent la coopération possible."],
  ex:["Le cadre stable du commerce depuis [d:1947] a permis l'essor des chaînes de valeur."]},
 {t:"L'auto-organisation", p:[
  "[a:Ostrom], [w:La Gouvernance des biens communs] ([d:1990])\nDes communautés savent gérer une ressource commune sans État ni marché, grâce à des règles qu'elles se donnent et font respecter."]},
 {t:"Des accords concrets", p:[
  "Des accords ciblés montrent que la coopération reste possible."],
  ex:["En [d:2022], l'OMC conclut un accord sur les subventions à la pêche."]}
]},
{lab:"Non", ti:"Passagers clandestins et tragédie des communs", sp:[
 {t:"Le passager clandestin", p:[
  "[a:Kindleberger], [w:International Public Goods without International Government] ([d:1986])\nSans gouvernement mondial, chaque État compte sur les autres pour payer : le bien public est sous-produit.",
  "[a:Olson], [w:Logique de l'action collective] ([d:1965])\nPlus un groupe est grand, plus chacun a intérêt à ne pas contribuer, car sa part du bénéfice est faible et son absence passe inaperçue."],
  ex:["Les États-Unis ne ratifient pas Kyoto et sortent de l'accord de Paris.", "À l'ouverture de la COP31 à Antalya, Friedrich Merz et les représentants de la nouvelle majorité américaine boycottent le sommet, et les pays du Sud rappellent que les [n:100 Md$] par an promis pour l'adaptation n'ont toujours pas été versés en entier (Alternatives économiques, 9 nov. 2026)."]},
 {t:"La tragédie des communs", p:[
  "[a:Hardin], [w:La Tragédie des communs] ([d:1968])\nUne ressource en accès libre est surexploitée jusqu'à disparaître, car chacun a intérêt à en prendre le plus possible."]},
 {t:"Pas de coercition", p:[
  "Sans pouvoir de sanction, les intérêts nationaux l'emportent sur l'intérêt commun."],
  ex:["Pendant le Covid, les pays riches préemptent les vaccins au détriment de COVAX.", "Faute de sanctions, de nombreuses délégations de la COP31 réclament des sanctions commerciales contre les États qui ne tiennent pas leurs engagements (Alternatives économiques, 9 nov. 2026)."]}
]},
{lab:"Dépasser", ti:"Des biens publics choisis", sp:[
 {t:"Des critères exigeants", p:[
  "[a:Kaul et Mendoza], [w:Providing Global Public Goods] ([d:2003])\nUn bien public mondial doit être public dans sa consommation, dans la décision et dans la répartition de ses bénéfices."],
  ex:["L'accord de Paris remplit mal ces trois conditions."]},
 {t:"Une construction historique", p:[
  "[a:Hugon], [w:Politiques et management public] ([d:2003])\nLes biens publics mondiaux ne sont pas donnés par nature : ce sont des constructions historiques, choisies surtout par les puissants."]}
]}
],
usages: [
 {t:"Le climat est-il un bien public mondial ?", d:"Kindleberger, Kyoto et Paris."},
 {t:"Faut-il un gouvernement mondial ?", d:"Ostrom : non, une gouvernance polycentrique."},
 {t:"La santé mondiale peut-elle être gouvernée ?", d:"COVAX."}
]},

"ch2-1/0-2": {
idee: "La mondialisation contraint la souveraineté des États, mais ceux-ci peuvent la retrouver en coopérant et en mettant la mondialisation au service de leurs objectifs.",
termes: "La souveraineté est la capacité d'un État à décider seul de ses politiques (fiscalité, monnaie, normes). La mondialisation la limite par la mobilité des capitaux, les règles internationales et la concurrence entre territoires.",
parts: [
{lab:"Oui", ti:"Des États contraints", sp:[
 {t:"Le trilemme", p:[
  "[a:Rodrik], [w:The Globalization Paradox] ([d:2011])\nOn ne peut pas avoir à la fois l'hypermondialisation, la souveraineté nationale et la démocratie : il faut renoncer à l'une des trois."],
  ex:["Réélu, Lula fait voter par le Sénat un plan de [n:50] à [n:60 Md] de réaux d'économies pour rassurer les marchés, après la chute de la Bourse et du réal au lendemain de l'élection (El País, 29 oct. et 14 nov. 2026)."]},
 {t:"La fiscalité contournée", p:[
  "[a:Zucman], [w:La richesse cachée des nations] ([d:2013])\nLes FMN déplacent leurs profits vers les paradis fiscaux : les États perdent une partie de leur pouvoir de taxer."],
  ex:["[n:55 %] des profits réalisés à l'étranger par les FMN américaines sont déclarés dans six territoires à faible fiscalité.", "L'Italie instaure une exit tax de [n:26 %] ([n:33 %] sur les cryptoactifs) sur les plus-values latentes des contribuables fortunés qui quittent le pays, pour freiner l'évasion fiscale (Le Monde, 6 nov. 2026)."]},
 {t:"Des règles imposées", p:[
  "[a:Stiglitz], [w:La Grande Désillusion] ([d:2002])\nLe FMI impose les mêmes remèdes à tous les pays (austérité, libéralisation) : « one size fits all ».",
  "[a:Aglietta] (CEPII, [d:2009])\nLes règles prudentielles de Bâle ont été largement écrites sous l'influence du lobby bancaire."],
  ex:["La crise asiatique de [d:1997], aggravée par les plans du FMI.", "La BCE refuse d'activer son bouclier anti-fragmentation (TPI) pour la France, réservé aux pays qui respectent le Pacte de stabilité, alors que l'écart de taux avec l'Allemagne s'élargit de plus de [n:80] points de base (Les Échos, 11 nov. 2026)."]}
]},
{lab:"Non", ti:"Une souveraineté partagée", sp:[
 {t:"Coopérer pour retrouver du pouvoir", p:[
  "[a:Beck], [w:Pouvoir et contre-pouvoir à l'ère de la mondialisation] ([d:2003])\nCe qu'un État ne peut plus faire seul, il peut le faire avec les autres : la souveraineté s'exerce par la coopération."],
  ex:["L'impôt minimal de [n:15 %] sur les multinationales (OCDE, [d:2021])."]},
 {t:"Compenser les perdants", p:[
  "[a:Masch] ([d:2011])\nUn libre-échange qui compense les perdants permet de concilier ouverture, État et démocratie."]}
]},
{lab:"Dépasser", ti:"Hiérarchiser les objectifs", sp:[
 {t:"La mondialisation au service des États", p:[
  "[a:Rodrik], [w:How to Save Globalization from its Cheerleaders] ([d:2007])\nIl faut mettre la mondialisation au service des objectifs nationaux, avec des clauses de sauvegarde sociales et environnementales."]}
]}
],
usages: [
 {t:"La mondialisation affaiblit-elle l'État ?", d:"Rodrik, le trilemme."},
 {t:"Peut-on taxer les multinationales ?", d:"Zucman, l'impôt minimal de 15 %."},
 {t:"Le FMI aide-t-il les pays en crise ?", d:"Stiglitz, la crise asiatique."}
]},

"ch2-1/1-0": {
idee: "Le GATT puis l'OMC ont fait chuter les droits de douane et multiplié le commerce, mais la protection s'est déplacée vers les normes et l'agriculture, souvent au détriment des PED.",
termes: "Le GATT ([d:1947]) organise des cycles de négociation pour baisser les droits de douane ; l'OMC ([d:1995]) le remplace et ajoute un tribunal, l'ORD. Réussir à libéraliser, c'est baisser les obstacles aux échanges et faire respecter les règles.",
parts: [
{lab:"Oui", ti:"Des droits en forte baisse", sp:[
 {t:"Une baisse massive des droits", p:[
  "Huit cycles du GATT\nLes droits de douane sur les produits manufacturés passent d'environ [n:40 %] à moins de [n:5 %], et le commerce mondial est multiplié par [n:40] entre [d:1950] et [d:2010]."]},
 {t:"Un champ élargi", p:[
  "Uruguay Round ([d:1986-1994])\nLe cycle étend les règles à l'agriculture, au textile, aux services et à la propriété intellectuelle (ADPIC), et crée l'OMC."]},
 {t:"Un tribunal qui fonctionne", p:[
  "L'ORD, « joyau de la couronne » selon [a:Lamy]\nL'OMC tranche les différends et autorise des sanctions quand un pays ne respecte pas les règles."],
  ex:["Dans le conflit Airbus-Boeing, l'OMC autorise [n:7,5 Md$] de rétorsions américaines, puis [n:4 Md$] de rétorsions européennes."]}
]},
{lab:"Non", ti:"Une libéralisation inégale", sp:[
 {t:"Un effet discuté", p:[
  "[a:Rose] ([d:2004])\nÊtre membre du GATT ou de l'OMC n'augmente pas de façon nette le commerce d'un pays."]},
 {t:"Des règles contre les PED", p:[
  "[a:Stiglitz et Charlton], [w:Pour un commerce mondial plus juste] ([d:2005])\nLes règles servent surtout les pays riches : propriété intellectuelle protégée, agriculture du Nord subventionnée."]},
 {t:"Une protection déplacée", p:[
  "CEPII ([d:2018])\nLes barrières non tarifaires (normes, réglementations) équivalent en moyenne à un droit de douane de [n:40 %]. L'agriculture reste protégée à [n:17 %], contre [n:3 %] pour l'industrie."],
  ex:["Le conflit du bœuf aux hormones entre l'UE et les États-Unis.", "L'initiative coton : quatre pays africains dénoncent les subventions américaines au coton.", "Après le Brexit, les contrôles sanitaires font attendre jusqu'à [n:9] heures les camions de produits frais à Calais : un coût de plus de [n:3 Md£] par an selon l'agroalimentaire britannique, alors qu'aucun droit de douane n'a été rétabli (The Guardian, 4 et 15 nov. 2026)."]}
]},
{lab:"Dépasser", ti:"Une théorie trop statique", sp:[
 {t:"Les limites du modèle ricardien", p:[
  "[a:Allais], [w:Le libre-échange, réalités et mythologies] ([d:1993])\nLa libéralisation repose sur une théorie ricardienne trop statique, qui ignore le chômage et les désindustrialisations qu'elle peut provoquer."]}
]}
],
usages: [
 {t:"L'OMC a-t-elle réussi ?", d:"Des droits de 40 % à moins de 5 %."},
 {t:"Le commerce mondial est-il équitable ?", d:"Stiglitz et Charlton, l'initiative coton."},
 {t:"Le protectionnisme a-t-il disparu ?", d:"Les barrières non tarifaires."}
]},

"ch2-1/1-1": {
idee: "L'OMC peut se relancer par des accords entre pays volontaires, mais la règle du consensus, la paralysie de l'ORD et la rivalité sino-américaine la bloquent.",
termes: "La crise de l'OMC : le cycle de Doha, lancé en [d:2001], n'a jamais abouti, et l'organe d'appel de l'ORD ne fonctionne plus depuis [d:2019].",
parts: [
{lab:"Oui", ti:"Contourner le blocage", sp:[
 {t:"Le plurilatéralisme", p:[
  "[a:Sébastien Jean] (CEPII, [d:2020])\nDes accords entre pays volontaires, sans attendre l'unanimité, permettent d'avancer sur des sujets précis."],
  ex:["L'accord sur les subventions à la pêche ([d:2022])."]},
 {t:"Les accords régionaux en relais", p:[
  "[a:Baldwin] ([d:2006])\nLes accords régionaux complètent l'OMC en allant plus loin ; leurs règles peuvent ensuite être étendues au niveau multilatéral."]}
]},
{lab:"Non", ti:"Une institution bloquée", sp:[
 {t:"Le consensus", p:[
  "Règle du consensus\nAvec [n:166] membres, chaque pays dispose de fait d'un droit de veto."]},
 {t:"Le rejet des grandes puissances", p:[
  "[a:Sébastien Jean], [w:L'Économie mondiale 2020] ([d:2019])\nLes États-Unis rejettent l'OMC, et la Chine en profite comme passager clandestin, en gardant subventions et statut de pays en développement.",
  "ORD paralysé\nDepuis [d:2019], les États-Unis bloquent la nomination des juges d'appel : l'OMC ne peut plus trancher les différends."],
  ex:["Biden avait gardé presque tous les droits de douane de Trump en y ajoutant les subventions de l'IRA ; après la défaite républicaine aux midterms, les Européens espèrent une réactivation des règles de l'OMC (Alternatives économiques, 8 nov. 2026)."]},
 {t:"Fragmentation et contournement", p:[
  "[a:Bhagwati]\nLa multiplication des accords régionaux crée un « bol de spaghetti » de règles qui fragmente le commerce mondial.",
  "[a:Krugman] ; [a:Brander et Spencer] ([d:1985])\nZones grises, commerce administré (managed trade) et politique commerciale stratégique contournent les règles."],
  ex:["Airbus et Boeing, subventionnés des deux côtés de l'Atlantique.", "La Chine accumule un excédent proche de [n:1 000 Md$] ; l'UE et les États-Unis répondent par des barrières et des procédures anti-subventions, et l'OMC ne peut arbitrer faute d'organe d'appel (La Croix, 12 nov. 2026)."]}
]},
{lab:"Dépasser", ti:"Réformer", sp:[
 {t:"Des pistes de réforme", p:[
  "[a:Sally] ([d:2004])\nIl faudrait donner plus de poids aux grands pays commerçants pour sortir du blocage.",
  "[a:Wolfensohn]\nIl faudrait confier le dumping social à l'OIT et le dumping monétaire au FMI, pour recentrer l'OMC sur le commerce."]}
]}
],
usages: [
 {t:"Le multilatéralisme est-il mort ?", d:"L'ORD paralysé depuis 2019."},
 {t:"Les accords régionaux menacent-ils l'OMC ?", d:"Bhagwati contre Baldwin."},
 {t:"Faut-il réformer l'OMC ?", d:"Sally, Wolfensohn."}
]},

"ch2-1/1-2": {
idee: "La rivalité sino-américaine fragmente l'ordre mondial, mais l'intérêt à coopérer pousse les États à réformer les institutions plutôt qu'à rompre.",
termes: "La confrontation désigne une rivalité ouverte (commerciale, technologique, militaire) entre grandes puissances, par opposition à une coopération dans des institutions communes.",
parts: [
{lab:"Oui", ti:"Une rivalité qui fragmente", sp:[
 {t:"Le piège de Thucydide", p:[
  "[a:Allison], [w:Vers la guerre] ([d:2019])\nQuand une puissance montante défie une puissance établie, l'histoire montre que la guerre est fréquente : c'est le risque entre Washington et Pékin."],
  ex:["L'offensive tarifaire de Trump contre la Chine en [d:2018].", "La Chine domine le raffinage des terres rares et restreint ses exportations, indispensables aux voitures électriques, aux éoliennes et à la défense (La Tribune, 17 nov. 2026)."]},
 {t:"Des institutions concurrentes", p:[
  "La Chine crée ses propres institutions, et les politiques climatiques se fragmentent."],
  ex:["La Banque asiatique d'investissement pour les infrastructures (BAII), créée en [d:2014].", "L'IRA américain et le mécanisme d'ajustement carbone européen (MACF)."]}
]},
{lab:"Non", ti:"Réformer plutôt que rompre", sp:[
 {t:"L'intérêt à coopérer", p:[
  "[a:Keohane], [w:After Hegemony] ([d:1984])\nLes États gardent les institutions communes parce qu'elles leur sont utiles, même quand ils sont rivaux."]},
 {t:"Des relances", p:[
  "Des États relancent la coopération au lieu de rompre."],
  ex:["Le Japon relance en [d:2018] le Partenariat transpacifique à 11, après le retrait américain.", "Londres et Bruxelles finalisent un accord pour supprimer presque tous les contrôles sanitaires sur l'alimentation entre la Grande-Bretagne et l'UE, en vigueur en 2028 (The Guardian, 4 nov. 2026)."]}
]},
{lab:"Dépasser", ti:"Un FMI qui s'adapte à peine", sp:[
 {t:"Une réforme limitée", p:[
  "Réforme des quotes-parts du FMI ([d:2016])\nLa Chine gagne du poids dans le FMI, mais les États-Unis gardent leur droit de veto : les institutions s'adaptent lentement au nouveau rapport de force."]}
]}
],
usages: [
 {t:"Va-t-on vers une nouvelle guerre froide ?", d:"Allison, le piège de Thucydide."},
 {t:"La Chine peut-elle remplacer les États-Unis ?", d:"La BAII, le FMI."},
 {t:"La mondialisation se fragmente-t-elle ?", d:"IRA, MACF."}
]}

});

Object.assign(window.ESH_DEBAT_FICHES, {

"ch2-2/0-0": {
idee: "Le régionalisme peut servir de tremplin vers le libre-échange mondial par contagion et intégration profonde, mais il risque aussi de fragmenter le commerce en blocs rivaux.",
termes: "Le régionalisme désigne les accords commerciaux entre un petit nombre de pays (zone de libre-échange, union douanière, marché commun). Selon l'expression de Bhagwati, il peut être une pierre de construction (building block) ou une pierre d'achoppement (stumbling block) du multilatéralisme.",
parts: [
{lab:"Oui", ti:"Un tremplin", sp:[
 {t:"Un cadre prévu par le GATT", p:[
  "Article XXIV du GATT\nLes accords régionaux sont autorisés s'ils couvrent l'essentiel des échanges et n'augmentent pas la protection envers les pays tiers : ils sont pensés comme une étape vers le libre-échange."],
  ex:["L'UE négocie d'une seule voix à l'OMC, par son commissaire au commerce."]},
 {t:"La contagion", p:[
  "[a:Baldwin], [w:A Domino Theory of Regionalism] ([d:1993])\nUn accord régional pénalise les pays exclus, qui demandent à y entrer : l'ouverture s'étend de proche en proche, comme des dominos."],
  ex:["L'Acte unique ([d:1986]) entraîne l'Espace économique européen ([d:1992]), puis l'adhésion de l'Autriche, de la Finlande et de la Suède ([d:1995])."]},
 {t:"Aller plus loin que l'OMC", p:[
  "[a:Lawrence], [w:Regionalism, Multilateralism and Deeper Integration] ([d:1996])\nLes accords régionaux harmonisent normes, concurrence et investissement : c'est l'intégration profonde, avec des clauses « OMC+ ».",
  "[a:Krugman et Obstfeld], [w:Économie internationale] ([d:2012])\nL'accord régional est un optimum de second rang et un laboratoire de règles qui pourront ensuite être étendues à tous."],
  ex:["L'accord UE-Nouvelle-Zélande ([d:2024]), avec des engagements climatiques et sociaux contraignants."]},
 {t:"Produire des biens publics régionaux", p:[
  "[a:Siroën], [w:La régionalisation est-elle une hérésie économique ?] ([d:1999])\nDes pays proches, qui partagent des préférences, peuvent produire ensemble des biens publics impossibles à négocier à l'échelle mondiale."],
  ex:["Le marché européen du carbone ([d:2005])."]}
]},
{lab:"Non", ti:"Une pierre d'achoppement", sp:[
 {t:"Un substitut à l'OMC", p:[
  "[a:Bhagwati], [w:Regionalism and Multilateralism: An Overview] ([d:1993])\nLes accords régionaux détournent les efforts de négociation et créent des intérêts acquis contre l'ouverture multilatérale."],
  ex:["La « libéralisation compétitive » de Zoellick ([d:2003]) : négocier avec les pays volontaires plutôt qu'à l'OMC."]},
 {t:"Le bol de spaghetti", p:[
  "[a:Bhagwati], [w:Éloge du libre-échange] ([d:2005])\nChaque accord a ses propres règles d'origine : leur enchevêtrement complique les échanges et favorise les grands pays."]},
 {t:"Des blocs rivaux", p:[
  "[a:Krugman], [w:The Move to Free Trade Zones] ([d:1991])\nUn monde divisé en quelques grands blocs incite chacun à relever ses droits envers les autres : c'est un dilemme du prisonnier qui réduit le bien-être mondial.",
  "[a:Pisani-Ferry], [w:Les nouvelles règles du jeu] ([d:2024])\nLa régionalisation suit désormais une logique de puissance : on commerce entre alliés."],
  ex:["L'IRA américain ([d:2022]) réserve ses subventions aux produits fabriqués en Amérique du Nord."]}
]},
{lab:"Dépasser", ti:"L'exemple de l'UE", sp:[
 {t:"Pas de dérive systématique", p:[
  "Le régionalisme n'est pas forcément fermé : tout dépend de la politique commerciale du bloc envers l'extérieur."],
  ex:["L'UE passe de 6 à 27 membres tout en baissant ses droits de douane extérieurs."]}
]}
],
usages: [
 {t:"Le régionalisme menace-t-il le multilatéralisme ?", d:"Baldwin contre Bhagwati."},
 {t:"L'UE est-elle un modèle d'intégration ?", d:"Contagion, de 6 à 27."},
 {t:"Le monde se divise-t-il en blocs ?", d:"Krugman, Pisani-Ferry."}
]},

"ch2-2/0-1": {
idee: "Un accord régional améliore le bien-être si la création de commerce l'emporte sur le détournement ; en pratique, l'effet est positif mais souvent faible.",
termes: "Depuis Viner, on distingue la création de commerce (une production nationale coûteuse est remplacée par les importations moins chères du partenaire) et le détournement de commerce (des importations du reste du monde, moins chères, sont remplacées par celles du partenaire, plus chères).",
parts: [
{lab:"Oui", ti:"Plus de commerce créé que détourné", sp:[
 {t:"La création l'emporte", p:[
  "[a:Balassa] ([d:1970])\nPour la CEE, la création de commerce dépasse très largement le détournement."],
  ex:["Environ [n:46,5 Md] de commerce créé contre [n:1,2 Md] détourné.", "Le Brexit en négatif : sortir du marché unique a recréé des certificats sanitaires et des files d'attente de plusieurs heures à Calais, d'où l'accord de 2026 pour les supprimer (The Guardian, 4 et 15 nov. 2026)."]},
 {t:"Des partenaires naturels", p:[
  "[a:Krugman] ([d:1991])\nEntre pays proches qui commercent déjà beaucoup, un accord détourne peu de commerce : il officialise des échanges existants."],
  ex:["L'accord Canada-États-Unis ([d:1989])."]},
 {t:"Un tarif extérieur bien fixé", p:[
  "[a:Kemp et Wan], [w:An Elementary Proposition Concerning the Formation of Customs Unions] ([d:1976])\nSi le tarif extérieur commun est fixé pour ne pas réduire les échanges avec le reste du monde, l'union enrichit ses membres sans appauvrir les autres."]}
]},
{lab:"Non", ti:"Du commerce détourné", sp:[
 {t:"Le détournement l'emporte", p:[
  "Banque mondiale ([d:1996])\nLe Mercosur a surtout détourné du commerce vers des partenaires moins efficaces : l'effet net est négatif."]},
 {t:"Trop de préférences", p:[
  "[a:Frankel], [w:Regional Trading Blocs in the World Economic System] ([d:1997])\nAu-delà d'un certain niveau, les préférences régionales créent un bloc « supernaturel » qui réduit le bien-être."]},
 {t:"Gagner aux dépens des tiers", p:[
  "[a:Bickerdike], [w:The Theory of Incipient Taxes] ([d:1906])\nUn grand bloc peut fixer un tarif optimal : il améliore ses termes de l'échange, mais au détriment des pays tiers."]}
]},
{lab:"Dépasser", ti:"Un effet qui dépend du solde", sp:[
 {t:"Création contre détournement", p:[
  "[a:Viner], [w:The Customs Union Issue] ([d:1950])\nUne union douanière n'est bénéfique que si la création de commerce l'emporte sur le détournement : il faut juger au cas par cas."]},
 {t:"Un effet faible et difficile à isoler", p:[
  "[a:Siroën], [w:Les accords commerciaux régionaux] ([d:2015])\nL'effet propre des accords est positif mais faible.",
  "[a:Baier et Bergstrand] ([d:2004])\nLes pays signent avec des partenaires avec qui ils commercent déjà beaucoup : il est difficile de séparer l'effet de l'accord de ce qui existait avant."]}
]}
],
usages: [
 {t:"Les unions douanières sont-elles efficaces ?", d:"Viner."},
 {t:"Le Mercosur est-il un succès ?", d:"Banque mondiale, 1996."},
 {t:"Faut-il multiplier les accords bilatéraux ?", d:"Siroën : un effet faible."}
]},

"ch2-2/0-2": {
idee: "L'économie explique une partie des accords (chaînes de valeur, blocage de l'OMC, proximité), mais la géopolitique, la construction politique et la diffusion des normes pèsent autant.",
termes: "On compte plus de [n:350] accords commerciaux régionaux en vigueur. Il s'agit de savoir s'ils répondent d'abord à des gains économiques ou à des objectifs politiques.",
parts: [
{lab:"Oui", ti:"Des raisons économiques", sp:[
 {t:"Sécuriser les chaînes de valeur", p:[
  "[a:Baldwin], [w:21st Century Regionalism] ([d:2011])\nLes accords d'aujourd'hui servent moins à baisser des droits qu'à protéger les investissements, les services et la propriété intellectuelle : on négocie pour pouvoir produire à l'étranger."],
  ex:["Le RCEP ([d:2022]), entre quinze pays d'Asie-Pacifique.", "Josep Borrell propose à l'Amérique latine de s'intégrer autour du lithium, de l'électricité et de l'agriculture, sur le modèle de la CECA de 1951 (El País, 3 nov. 2026)."]},
 {t:"Une OMC bloquée", p:[
  "OCDE\nL'OMC est paralysée, les droits de douane sont déjà bas, et chaque pays craint d'être marginalisé s'il reste en dehors des accords."]},
 {t:"La proximité compte", p:[
  "[a:Tinbergen], [w:Shaping the World Economy] ([d:1962])\nLe commerce augmente avec la taille des pays et diminue avec la distance : les accords suivent la géographie.",
  "[a:McCallum], [w:National Borders Matter] ([d:1995])\nLes frontières freinent les échanges : les provinces canadiennes commercent environ [n:20] fois plus entre elles qu'avec des États américains comparables.",
  "[a:Sébastien Jean], [w:Une brève histoire de la mondialisation] ([d:2016])\nAvec les chaînes de valeur, la distance compte davantage, car les délais et la coordination coûtent cher."],
  ex:["Les États-Unis échangent plus avec le Canada qu'avec l'Allemagne."]}
]},
{lab:"Non", ti:"Des raisons politiques", sp:[
 {t:"Contenir un rival", p:[
  "Les accords servent à arrimer des alliés et à contenir une puissance rivale."],
  ex:["L'ASEAN ([d:1967]) contre le communisme ; le Partenariat transpacifique face à la Chine."]},
 {t:"Préparer l'unification", p:[
  "L'intégration économique peut préparer une union politique."],
  ex:["Le Zollverein ([d:1834]) prépare l'unité allemande."]},
 {t:"Imposer ses normes", p:[
  "Par les accords Nord-Sud, les pays riches diffusent leurs normes sociales et environnementales."],
  ex:["L'ACEUM ([d:2020]) impose qu'une partie des voitures soit fabriquée par des ouvriers payés au moins [n:16 $] de l'heure."]}
]}
],
usages: [
 {t:"Pourquoi tant d'accords régionaux ?", d:"Baldwin, 2011."},
 {t:"La distance compte-t-elle encore ?", d:"Tinbergen, McCallum."},
 {t:"Le commerce est-il un outil de puissance ?", d:"ASEAN, Partenariat transpacifique."}
]},

"ch2-2/0-3": {
idee: "L'intégration régionale enrichit le bloc dans son ensemble, mais elle profite surtout aux grands pays et aux FMN, au détriment des membres et des acteurs les plus faibles.",
termes: "Profiter à tous ses membres pose la question de la répartition des gains entre pays de tailles et de niveaux de développement différents, et à l'intérieur de chaque pays.",
parts: [
{lab:"Oui", ti:"Des gains pour le bloc", sp:[
 {t:"Une ouverture maintenue", p:[
  "Intégration régionale et ouverture mondiale vont ensemble : l'accord ne ferme pas le bloc."],
  ex:["Depuis 1990, les importations de l'UE venues de l'extérieur augmentent plus vite que ses échanges internes."]},
 {t:"Des exportations dopées", p:[
  "L'accès au grand marché voisin dope les exportations du petit pays."],
  ex:["Les exportations du Mexique vers les États-Unis augmentent de [n:240 %] entre [d:1993] et [d:2003]."]},
 {t:"Peser plus à plusieurs", p:[
  "Uni, le bloc pèse davantage dans les négociations commerciales qu'aucun de ses membres seul."],
  ex:["L'accord UE-Mercosur."]}
]},
{lab:"Non", ti:"Une intégration asymétrique", sp:[
 {t:"La dépendance", p:[
  "Le petit pays devient dépendant de son grand voisin et de ses cycles."],
  ex:["Au Mexique, PME et paysans sont ruinés par la concurrence américaine, et le PIB chute de [n:5 %] en [d:2009] avec la crise aux États-Unis."]},
 {t:"Le grand impose ses règles", p:[
  "[a:Bhagwati]\nDans un accord bilatéral, le grand pays impose ses règles au petit, notamment sur la propriété intellectuelle."],
  ex:["L'accord États-Unis-Maroc ([d:2004]) contient des clauses « ADPIC-plus » sur les médicaments.", "Le Brésil pèse [n:75 %] du PIB du Mercosur.", "Malgré l'ACEUM, Washington menace d'imposer [n:50 %] de droits de douane sur les voitures canadiennes, et Stellantis déplace une production du Canada vers les États-Unis (Les Échos, 13 nov. 2026)."]}
]},
{lab:"Dépasser", ti:"Des effets ambigus", sp:[
 {t:"Au profit des FMN", p:[
  "[a:Krugman]\nL'intégration profonde sert surtout les FMN, qui obtiennent des protections pour leurs investissements et peuvent attaquer les États."],
  ex:["Philip Morris attaque l'Australie à cause du paquet de cigarettes neutre."]},
 {t:"L'environnement", p:[
  "[a:Grossman et Krueger] ([d:1991])\nL'ouverture a trois effets sur l'environnement : plus de production pollue (effet d'échelle), la spécialisation change ce qu'on produit (effet de composition), et les techniques propres se diffusent (effet technique)."]},
 {t:"Des accords sur le papier", p:[
  "Certains accords restent surtout des déclarations."],
  ex:["La Zone de libre-échange continentale africaine (ZLECAf, [d:2018]) avance lentement."]}
]}
],
usages: [
 {t:"L'ALENA a-t-il profité au Mexique ?", d:"+240 % d'exportations, mais une forte dépendance."},
 {t:"Le Mercosur est-il équilibré ?", d:"Le Brésil, 75 % du PIB."},
 {t:"Le commerce nuit-il à l'environnement ?", d:"Grossman et Krueger."}
]},

"im-1/0-0": {
idee: "La monnaie est neutre à long terme pour les classiques et pour Friedman, mais elle agit à court terme sur l'activité, par le taux d'intérêt et par la dette.",
termes: "La monnaie est neutre si une variation de sa quantité ne change que les prix, sans effet sur la production ou l'emploi. C'est la dichotomie classique entre sphère monétaire et sphère réelle.",
parts: [
{lab:"Oui", ti:"Un voile sur les échanges", sp:[
 {t:"Un simple intermédiaire", p:[
  "[a:Say], [w:Traité d'économie politique] ([d:1803])\nLes produits s'échangent contre des produits, la monnaie n'est qu'un intermédiaire : l'offre crée sa propre demande et il ne peut pas y avoir de crise générale de surproduction.",
  "[a:Hume], [w:De la monnaie] ([d:1752])\nLa monnaie n'est pas une richesse en soi : elle est « l'huile » qui facilite le mouvement des rouages."]},
 {t:"La théorie quantitative", p:[
  "[a:Fisher], [w:Le pouvoir d'achat de la monnaie] ([d:1911])\nMV = PT : si la vitesse de circulation (V) et le volume des transactions (T) sont stables, plus de monnaie (M) ne fait qu'augmenter les prix (P)."]},
 {t:"Neutre même à court terme", p:[
  "[a:Muth] ([d:1961]) et la nouvelle école classique\nAvec des anticipations rationnelles, les agents prévoient les effets de la politique monétaire : une hausse de la masse monétaire anticipée ne change rien, même à court terme."]}
]},
{lab:"Non", ti:"Elle agit sur l'économie réelle", sp:[
 {t:"Le taux d'intérêt", p:[
  "[a:Keynes], [w:Théorie générale de l'emploi, de l'intérêt et de la monnaie] ([d:1936])\nLa monnaie est désirée pour elle-même (préférence pour la liquidité). La quantité de monnaie fixe le taux d'intérêt, qui détermine l'investissement, donc la production et l'emploi."],
  ex:["Avec des taux de crédit immobilier autour de [n:3,5 %], les réservations de logements neufs chutent de plus de [n:25 %] sur un an, au plus bas depuis près de trente ans (Le Monde, 12 nov. 2026)."]},
 {t:"La déflation par la dette", p:[
  "[a:Fisher], [w:The Debt-Deflation Theory of Great Depressions] ([d:1933])\nDes agents surendettés vendent pour rembourser, les prix baissent, ce qui alourdit le poids réel de leurs dettes : la crise s'auto-entretient."],
  ex:["Aux États-Unis en [d:1933], les prix ont baissé de [n:25 %] et le chômage atteint [n:24,9 %]."]},
 {t:"Des prix visqueux", p:[
  "Nouvelle économie keynésienne\nPrix et salaires s'ajustent lentement (contrats, coûts de changement des prix) : à court terme, la monnaie agit sur la production."]}
]},
{lab:"Non, et nocive", ti:"Elle fausse les signaux", sp:[
 {t:"Les malinvestissements", p:[
  "[a:Hayek], [w:Prix et production] ([d:1931])\nUn crédit trop abondant fait baisser le taux d'intérêt sous son niveau naturel : les entreprises lancent des investissements non rentables, et la crise vient les purger."]},
 {t:"Les faux droits", p:[
  "[a:Rueff], [w:Le Péché monétaire de l'Occident] ([d:1971])\nUne monnaie créée sans richesse en face donne de « faux droits » sur la production et nourrit l'inflation mondiale."]}
]},
{lab:"Dépasser", ti:"Neutre seulement à long terme", sp:[
 {t:"L'illusion monétaire", p:[
  "[a:Friedman], [w:The Role of Monetary Policy] ([d:1968])\nÀ court terme, une relance monétaire trompe les salariés (illusion monétaire) et fait baisser le chômage. À long terme, ils corrigent leurs anticipations : le chômage revient à son taux naturel, avec plus d'inflation."],
  ex:["La stagflation des années 1970 : inflation et chômage montent ensemble.", "Le salaire de base du privé augmente de [n:1,9 %] mais les prix de [n:3,1 %] : le pouvoir d'achat recule de [n:1,1 %] sur un an (Dares, Le Monde, 6 nov. 2026)."]}
]}
],
usages: [
 {t:"La politique monétaire peut-elle relancer la croissance ?", d:"Keynes contre Friedman."},
 {t:"L'inflation est-elle un phénomène monétaire ?", d:"Fisher, MV = PT."},
 {t:"La déflation est-elle dangereuse ?", d:"Fisher, 1933."}
]},

"im-1/0-1": {
idee: "La monnaie facilite les échanges, mais elle est d'abord une institution sociale, fondée sur la dette, la confiance et la souveraineté.",
termes: "Deux visions s'opposent : la monnaie serait née du troc pour faciliter les échanges (vision instrumentale), ou bien elle serait une institution qui fonde le lien social et l'autorité politique (vision institutionnaliste).",
parts: [
{lab:"Oui", ti:"Un outil né de l'échange", sp:[
 {t:"Trois fonctions", p:[
  "[a:Aristote], [w:Éthique à Nicomaque]\nLa monnaie sert d'unité de compte, d'intermédiaire des échanges et de réserve de valeur."]},
 {t:"Dépasser le troc", p:[
  "[a:Jevons], [w:La monnaie et le mécanisme de l'échange] ([d:1875])\nLe troc exige que chacun veuille exactement ce que l'autre propose (double coïncidence des besoins) : la monnaie lève cette contrainte.",
  "[a:Menger], [w:De l'origine de la monnaie] ([d:1892])\nLa monnaie naît spontanément du marché : le bien le plus facilement échangeable finit par être accepté par tous, sans intervention de l'État."],
  ex:["Dans les camps de prisonniers de la Seconde Guerre mondiale, les cigarettes deviennent une monnaie ([a:Radford], [d:1945])."]}
]},
{lab:"Non", ti:"Une institution sociale", sp:[
 {t:"La dette d'abord", p:[
  "[a:Graeber], [w:Dette : 5 000 ans d'histoire] ([d:2011])\nAucune société de troc n'a été observée : la dette et le crédit précèdent la monnaie."]},
 {t:"Une institution fondée sur la confiance", p:[
  "[a:Aglietta et Orléan], [w:La Violence de la monnaie] ([d:1982])\nLa monnaie est une institution qui canalise la rivalité entre individus ; elle est un signe de souveraineté.",
  "[a:Aglietta et Orléan], [w:La monnaie souveraine] ([d:1998])\nElle repose sur trois confiances emboîtées : méthodique (l'habitude), hiérarchique (un garant, la banque centrale) et éthique (les valeurs de la société)."],
  ex:["L'euro, décidé à Maastricht en [d:1992].", "L'hyperinflation allemande de [d:1923] : la confiance s'effondre, la monnaie aussi."]},
 {t:"Une création de l'État", p:[
  "[a:Knapp], [w:Théorie étatique de la monnaie] ([d:1905])\nLa monnaie vaut parce que l'État l'impose et l'accepte en paiement des impôts."],
  ex:["La BCE prépare un euro numérique public pour 2028, pour que l'Europe ne dépende plus de Visa, Mastercard ou des stablecoins en dollars ; elle veut plafonner sa détention à [n:3 000 €] pour éviter une fuite des dépôts bancaires (El País, 2 nov. 2026)."]},
 {t:"Un rapport social", p:[
  "[a:Marx], [w:Le Capital] ([d:1867])\nL'argent devient capital quand on l'avance pour en récupérer davantage (A → M → A') : il exprime un rapport d'exploitation."]}
]},
{lab:"Dépasser", ti:"Une libération ambiguë", sp:[
 {t:"Liberté et calcul", p:[
  "[a:Simmel], [w:Philosophie de l'argent] ([d:1900])\nL'argent libère l'individu des liens de dépendance personnelle, mais il réduit toutes les relations à du calcul."]}
]}
],
usages: [
 {t:"Qu'est-ce que la monnaie ?", d:"Aglietta et Orléan."},
 {t:"Une monnaie sans État est-elle possible ?", d:"Knapp contre Menger."},
 {t:"Les cryptomonnaies sont-elles des monnaies ?", d:"Les trois confiances."}
]},

"im-1/0-2": {
idee: "Ce sont les banques qui créent la monnaie en accordant des crédits ; la banque centrale ne la contrôle qu'indirectement, en fixant le prix de sa propre monnaie.",
termes: "L'essentiel de la monnaie est scripturale, créée par les banques quand elles accordent un crédit. La banque centrale émet la monnaie centrale (billets, réserves des banques).",
parts: [
{lab:"Les banques", ti:"La monnaie naît du crédit", sp:[
 {t:"Les crédits font les dépôts", p:[
  "[a:Withers], [w:The Meaning of Money] ([d:1909])\nUne banque ne prête pas l'argent des déposants : en accordant un crédit, elle crée le dépôt de l'emprunteur.",
  "Diviseur de crédit\nLes banques accordent d'abord les crédits, puis se procurent la monnaie centrale nécessaire. La banque centrale ne peut pas refuser : elle ne contrôle que son prix.",
  "Banking School, [a:Tooke], [w:An Inquiry into the Currency Principle] ([d:1844])\nLoi du reflux : la monnaie émise en trop revient à la banque quand les crédits sont remboursés, il n'y a pas d'excès durable."],
  ex:["En Argentine, quand les banques réclament plus de liquidités et que le taux interbancaire monte à près de [n:32 %], la banque centrale doit injecter des fonds : elle suit la demande des banques (Clarín, 16 nov. 2026)."]}
]},
{lab:"La banque centrale", ti:"Contrôler la quantité", sp:[
 {t:"Le multiplicateur", p:[
  "Multiplicateur de crédit\nLa banque centrale fixe la base monétaire, et la masse monétaire en est un multiple : en limitant la base, elle limite le crédit."]},
 {t:"Limiter l'émission", p:[
  "[a:Ricardo], [w:Le haut prix des lingots] ([d:1810])\nCurrency School : l'émission de billets doit être strictement limitée par l'or, sinon c'est l'inflation."],
  ex:["Le Bank Charter Act ([d:1844]) limite l'émission de la Banque d'Angleterre."]}
]},
{lab:"Dépasser", ti:"Piloter le prix de la monnaie", sp:[
 {t:"Les taux directeurs", p:[
  "La banque centrale ne fixe pas la quantité de monnaie : elle agit sur le coût du crédit par ses taux directeurs, et donc sur la demande de crédit."],
  ex:["La BCE remonte ses taux de [n:0 %] à [n:4 %] en [d:2022-2023] pour lutter contre l'inflation.", "Face à une inflation de [n:4 %] en zone euro, tirée par l'énergie, la BCE a relevé son taux de dépôt à [n:2,5 %] et prépare une troisième hausse en décembre 2026 (Der Spiegel, 5 nov. 2026)."]}
]}
],
usages: [
 {t:"Qui crée la monnaie ?", d:"Withers."},
 {t:"La BCE contrôle-t-elle l'inflation ?", d:"Les taux de 0 % à 4 %."},
 {t:"Faut-il limiter le crédit ?", d:"Ricardo, le Bank Charter Act."}
]},

"im-1/1-0": {
idee: "Une banque centrale indépendante est plus crédible contre l'inflation et peut stabiliser le système en cas de panique, mais elle pose un problème démocratique et crée un aléa moral.",
termes: "Une banque centrale est indépendante quand elle décide de sa politique sans instruction du gouvernement (Banque de France depuis [d:1993], BCE depuis [d:1998]). Son rôle dépasse la monnaie : elle est aussi prêteur en dernier ressort.",
parts: [
{lab:"Oui", ti:"Crédible et protectrice", sp:[
 {t:"La crédibilité", p:[
  "[a:Kydland et Prescott], [w:Rules Rather than Discretion] ([d:1977])\nUn gouvernement promet la stabilité des prix, puis est tenté de relancer par l'inflation, surtout avant les élections : c'est l'incohérence temporelle. Une banque centrale indépendante est plus crédible."],
  ex:["[a:Alesina et Summers] ([d:1993]) : plus la banque centrale est indépendante, plus l'inflation est basse, sans perte de croissance."]},
 {t:"Le prêteur en dernier ressort", p:[
  "[a:Bagehot], [w:Lombard Street] ([d:1873])\nEn cas de panique, la banque centrale doit prêter largement aux banques solvables, à un taux pénalisant et contre de bonnes garanties.",
  "[a:Diamond et Dybvig], [w:Bank Runs, Deposit Insurance, and Liquidity] ([d:1983])\nUne panique bancaire peut être auto-réalisatrice : chacun retire son argent parce qu'il craint que les autres le fassent. La garantie des dépôts l'arrête."],
  ex:["Draghi en juillet [d:2012] : « whatever it takes ».", "La faillite de SVB en mars [d:2023] : les autorités garantissent tous les dépôts."]}
]},
{lab:"Non", ti:"Une institution contestée", sp:[
 {t:"Le free banking", p:[
  "[a:Selgin], [w:The Theory of Free Banking] ([d:1988])\nSans banque centrale pour les sauver, les banques se surveillent entre elles et prennent moins de risques.",
  "[a:Hayek], [w:Pour une vraie concurrence des monnaies] ([d:1976])\nIl faut laisser des monnaies privées se concurrencer : la meilleure s'imposera."],
  ex:["L'Écosse connaît un système bancaire libre et stable de [d:1716] à [d:1845]."]},
 {t:"Des bulles", p:[
  "[a:Artus et Virard], [w:La folie des banques centrales] ([d:2016])\nLes politiques monétaires très accommodantes nourrissent des bulles sur les actifs plus que la croissance."]}
]},
{lab:"Dépasser", ti:"L'autonomie plutôt que l'indépendance", sp:[
 {t:"Le déficit démocratique", p:[
  "[a:Blancheton]\nUne indépendance totale pose un problème démocratique et empêche de coordonner politique monétaire et budgétaire (policy mix) : mieux vaut une autonomie encadrée."],
  ex:["La succession de Christine Lagarde se joue entre gouvernements : le Sud soutient Pablo Hernández de Cos, le Nord le « faucon » Klaas Knot (El País, 4 nov. 2026)."]},
 {t:"L'aléa moral", p:[
  "Les banques trop grandes pour faire faillite (« too big to fail ») prennent trop de risques, sûres d'être sauvées par la banque centrale."],
  ex:["La BCE refuse de soutenir la dette française par son TPI : l'écart de taux reflète selon elle les choix budgétaires de la France, et l'aide est réservée aux pays qui respectent le Pacte de stabilité (Les Échos, 11 nov. 2026)."]}
]}
],
usages: [
 {t:"La BCE est-elle démocratique ?", d:"Blancheton."},
 {t:"Faut-il sauver les banques ?", d:"Bagehot contre l'aléa moral."},
 {t:"La politique monétaire crée-t-elle des bulles ?", d:"Artus et Virard."}
]},

"im-1/1-1": {
idee: "Pour les classiques, l'épargne doit précéder l'investissement ; pour Keynes, le crédit permet d'investir et l'épargne se forme ensuite, grâce au revenu créé.",
termes: "Dans la vision classique, l'épargne préalable finance l'investissement et le taux d'intérêt équilibre les deux. Dans la vision keynésienne, l'investissement est financé par le crédit et l'épargne s'ajuste après coup.",
parts: [
{lab:"Oui", ti:"L'épargne d'abord", sp:[
 {t:"Sinon, la crise", p:[
  "[a:Hayek], [w:Prix et production] ([d:1931])\nSi le crédit finance plus d'investissement que l'épargne disponible, le taux d'intérêt est trop bas : les entreprises investissent trop, et la crise finit par corriger ces erreurs.",
  "[a:Rueff], [w:Le Péché monétaire de l'Occident] ([d:1971])\nUne monnaie créée sans épargne en face donne de faux droits sur la production et alimente l'inflation."],
  ex:["L'État veut mobiliser une partie des plus de [n:570 Md€] du Livret A et du LDDS pour financer les EPR2 et la défense : l'épargne des ménages finance l'investissement de long terme (Alternatives économiques, 10 nov. 2026)."]}
]},
{lab:"Non", ti:"Le crédit d'abord", sp:[
 {t:"Le crédit crée l'épargne", p:[
  "[a:Keynes], [w:Théorie générale de l'emploi, de l'intérêt et de la monnaie] ([d:1936])\nL'investissement est financé par le crédit. Il crée du revenu (effet multiplicateur), et c'est dans ce revenu que se forme ensuite l'épargne."],
  ex:["En France, les ménages épargnent plus de [n:17 %] de leur revenu par précaution pendant que l'investissement recule trois trimestres de suite : l'épargne abondante ne se transforme pas en investissement (Insee, oct. 2026)."]},
 {t:"Le bon rythme", p:[
  "[a:Harrod] ([d:1939]) et [a:Domar] ([d:1946])\nPour une croissance équilibrée, l'investissement doit progresser exactement au bon rythme : sinon l'économie s'écarte de l'équilibre (croissance sur le fil du rasoir)."]},
 {t:"L'économie d'endettement", p:[
  "[a:Hicks], [w:The Crisis in Keynesian Economics] ([d:1974])\nDans une économie d'endettement, les entreprises se financent par le crédit bancaire, et les banques par la banque centrale, plutôt que par les marchés financiers."],
  ex:["Dans la France des années 1970, environ [n:80 %] du financement externe des entreprises passe par le crédit."]}
]}
],
usages: [
 {t:"Faut-il encourager l'épargne ?", d:"Keynes : le crédit d'abord."},
 {t:"L'endettement est-il un problème ?", d:"Hicks, Hayek."},
 {t:"Comment financer la transition écologique ?", d:"Par le crédit plus que par l'épargne."}
]},

"im-1/1-2": {
idee: "Les banques restent irremplaçables pour les PME et plus sûres, les marchés financent mieux l'innovation risquée : les deux se complètent, mais chacun a ses failles.",
termes: "La finance intermédiée passe par les banques (crédit) ; la finance directe passe par les marchés (actions, obligations). Le débat porte sur l'efficacité et la stabilité de chacune.",
parts: [
{lab:"Les banques", ti:"Elles connaissent les emprunteurs", sp:[
 {t:"Le contrôleur délégué", p:[
  "[a:Diamond], [w:Financial Intermediation and Delegated Monitoring] ([d:1984])\nLes prêteurs connaissent mal les emprunteurs (asymétrie d'information). La banque surveille pour le compte de tous les déposants, à moindre coût."],
  ex:["Environ deux tiers de la dette des entreprises françaises sont des crédits bancaires : les PME n'ont pas accès aux marchés."]},
 {t:"Une banque ennuyeuse", p:[
  "[a:Krugman], [w:Making Banking Boring] ([d:2009])\nUne banque séparée des activités de marché, centrée sur le crédit, est plus sûre pour l'économie."]}
]},
{lab:"Les marchés", ti:"Ils financent l'innovation", sp:[
 {t:"Les 3D", p:[
  "[a:Bourguinat], [w:Les Vertiges de la finance internationale] ([d:1987])\nDéréglementation, désintermédiation et décloisonnement (les 3D) ont permis aux marchés d'allouer le capital plus souplement et à moindre coût."],
  ex:["Anthropic lève au moins [n:79,4 Md$] lors de la plus grosse introduction en Bourse de l'histoire (Le Figaro, 19 nov. 2026)."]},
 {t:"Le retard européen", p:[
  "L'Europe dépend trop des banques et manque de capital-risque pour financer les jeunes entreprises innovantes."],
  ex:["Les actifs bancaires représentent environ [n:300 %] du PIB dans l'UE, contre [n:85 %] aux États-Unis.", "Le Parlement européen rejette à [n:14] voix près la directive sur l'investissement de détail (RIS), pilier de l'Union des marchés de capitaux censé orienter l'épargne vers l'investissement productif (Les Échos, 14 nov. 2026)."]}
]},
{lab:"Limite", ti:"Les deux ont des failles", sp:[
 {t:"Le rationnement du crédit", p:[
  "[a:Stiglitz et Weiss], [w:Credit Rationing in Markets with Imperfect Information] ([d:1981])\nUne hausse du taux attirerait surtout les emprunteurs les plus risqués : les banques préfèrent rationner le crédit, et les projets innovants peuvent en être privés."],
  ex:["Depuis le 20 novembre 2026, tout découvert autorisé, même de moins de [n:200 €], est traité comme un crédit : la banque doit d'abord vérifier la solvabilité du client (Libération, 19 nov. 2026)."]},
 {t:"Le risque systémique", p:[
  "Avec la titrisation, les banques revendent leurs crédits et surveillent moins les emprunteurs. Les règles de Bâle III poussent une partie de l'activité vers la finance de l'ombre (shadow banking)."],
  ex:["La crise des subprimes ([d:2007-2008])."]}
]}
],
usages: [
 {t:"La finance sert-elle l'économie réelle ?", d:"Bourguinat, Stiglitz et Weiss."},
 {t:"L'Europe manque-t-elle de financement ?", d:"Le capital-risque."},
 {t:"Faut-il séparer les banques ?", d:"Krugman."}
]}

});

Object.assign(window.ESH_DEBAT_FICHES, {

"socio-1a/0-0": {
idee: "L'individu est façonné par la société qui le précède, mais il la produit aussi par ses actions et ses interactions : la sociologie dépasse cette opposition en pensant des individus interdépendants.",
termes: "Le débat oppose le holisme, pour qui la société précède et explique l'individu, à l'individualisme méthodologique, pour qui les phénomènes sociaux s'expliquent à partir des actions individuelles.",
parts: [
{lab:"Oui", ti:"La société s'impose à l'individu", sp:[
 {t:"La contrainte sociale", p:[
  "[a:Durkheim], [w:Les Règles de la méthode sociologique] ([d:1895])\nLes faits sociaux sont des manières d'agir, de penser et de sentir extérieures à l'individu et qui s'imposent à lui. Il faut les traiter comme des choses.",
  "[a:Durkheim], [w:Le Suicide] ([d:1897])\nMême l'acte le plus intime dépend de la société : le taux de suicide varie selon l'intégration et la régulation des groupes (plus élevé chez les protestants que chez les catholiques, chez les célibataires que chez les mariés)."],
  ex:["La langue : on ne l'invente pas, on l'apprend, et on doit en respecter les règles pour être compris."]},
 {t:"Le social incorporé", p:[
  "[a:Bourdieu], [w:Le Sens pratique] ([d:1980])\nL'habitus est un ensemble de dispositions durables acquises par la socialisation : il oriente nos goûts et nos pratiques sans que nous en ayons conscience.",
  "[a:Bourdieu], [w:La Distinction] ([d:1979])\nLes goûts en musique, en cuisine ou en sport correspondent aux positions sociales : ce qui paraît le plus personnel est socialement déterminé."]}
]},
{lab:"Non", ti:"L'individu produit la société", sp:[
 {t:"Des acteurs rationnels", p:[
  "[a:Weber], [w:Économie et société] ([d:1921-1922])\nLa sociologie doit comprendre le sens que les individus donnent à leurs actions : la société est le produit de ces actions.",
  "[a:Boudon], [w:Effets pervers et ordre social] ([d:1977])\nLes phénomènes sociaux résultent de l'agrégation d'actions individuelles rationnelles, avec souvent des effets que personne n'a voulus."],
  ex:["Chacun poursuit ses études pour se distinguer : au total, les diplômes perdent de leur valeur."]},
 {t:"Un ordre produit au quotidien", p:[
  "[a:Garfinkel], [w:Recherches en ethnométhodologie] ([d:1967])\nL'individu n'est pas un « idiot culturel » qui applique des règles : il produit l'ordre social par ses pratiques quotidiennes.",
  "[a:Goffman], [w:La Mise en scène de la vie quotidienne] ([d:1956])\nLes interactions fonctionnent comme un théâtre : chacun joue son rôle avec une marge, le rôle joué n'est jamais exactement le rôle prescrit."],
  ex:["Agnès, étudiée par Garfinkel, apprend à « faire » le genre féminin au quotidien."]}
]},
{lab:"Dépasser", ti:"Des individus interdépendants", sp:[
 {t:"Les interdépendances", p:[
  "[a:Elias], [w:La Société de cour] ([d:1969])\nLa société est faite de configurations, des réseaux d'interdépendances comparables à une partie d'échecs : même le roi dépend de sa cour. Chacun a une autonomie relative.",
  "[a:Simmel], [w:Sociologie] ([d:1908])\nLa société est faite d'actions réciproques. Comme chacun appartient à plusieurs cercles sociaux, leur croisement fait son individualité."]},
 {t:"Un déterminisme pluriel", p:[
  "[a:Lahire], [w:L'Homme pluriel] ([d:1998])\nChacun porte des dispositions multiples, parfois contradictoires, acquises dans plusieurs milieux, et activées selon les situations."]}
]}
],
usages: [
 {t:"Sommes-nous libres de nos choix ?", d:"Durkheim et Bourdieu contre Weber et Boudon."},
 {t:"Les goûts sont-ils personnels ?", d:"Bourdieu, La Distinction."},
 {t:"Peut-on échapper à son milieu social ?", d:"Lahire : des dispositions plurielles."}
]},

"socio-1a/0-1": {
idee: "L'individualisme ne détruit pas le lien social, il en change la nature ; la cohésion n'est menacée que lorsque l'intégration et la régulation font défaut.",
termes: "L'individualisme valorise l'autonomie de l'individu, ce qui ne veut pas dire égoïsme. La cohésion sociale désigne la force des liens qui unissent les membres d'une société, par l'intégration et la régulation.",
parts: [
{lab:"Oui", ti:"Le repli sur soi défait le lien", sp:[
 {t:"Le repli sur la vie privée", p:[
  "[a:Tocqueville], [w:De la démocratie en Amérique] ([d:1835-1840])\nL'égalité des conditions pousse chacun à se replier sur sa famille et ses amis, en abandonnant la chose publique. Cela ouvre la voie à un « despotisme doux », un État tutélaire qui décide à la place de citoyens passifs."],
  ex:["Fondation de France ([d:2025]) : [n:12 %] des Français sont isolés et [n:24 %] se sentent seuls."]},
 {t:"Un défaut d'intégration et de régulation", p:[
  "[a:Durkheim], [w:Le Suicide] ([d:1897])\nLe suicide augmente quand l'intégration est trop faible (suicide égoïste) ou quand la régulation des désirs fait défaut (suicide anomique).",
  "[a:Durkheim], [w:De la division du travail social] ([d:1893])\nLa division du travail devient pathologique quand elle n'est plus régulée (anomique) ou quand elle est imposée par la force et les inégalités (contrainte)."],
  ex:["La fusillade de Fourmies, le 1er mai [d:1891]."]}
]},
{lab:"Non", ti:"Le lien change de nature", sp:[
 {t:"Une nouvelle solidarité", p:[
  "[a:Durkheim], [w:De la division du travail social] ([d:1893])\nOn passe d'une solidarité mécanique, fondée sur la ressemblance, à une solidarité organique, fondée sur la complémentarité des fonctions : le lien change de nature, il ne disparaît pas.",
  "[a:Durkheim], [w:Les Formes élémentaires de la vie religieuse] ([d:1912])\nLe culte de l'individu devient une valeur partagée qui unit la société. [a:Gérôme Truc], [w:Sidérations] ([d:2016]), le montre dans les réactions aux attentats."],
  ex:["« Je suis Charlie » ([d:2015]) : une solidarité fondée sur des valeurs individualistes communes."]},
 {t:"Des solidarités de proximité", p:[
  "[a:Coquard], [w:Ceux qui restent] ([d:2019])\nDans les campagnes en déclin, la « bande de potes » reste un lieu fort d'intégration pour les jeunes."]}
]},
{lab:"Dépasser", ti:"Un engagement transformé", sp:[
 {t:"De l'engagement timbre au post-it", p:[
  "[a:Ion], [w:La Fin des militants ?] ([d:1997])\nL'engagement « timbre », durable et fidèle à une organisation, recule au profit d'un engagement « post-it » : ponctuel, révocable, centré sur une cause.",
  "[a:Tocqueville]\nLes associations et les corps intermédiaires protègent contre le repli : elles apprennent aux individus à agir ensemble."]}
]}
],
usages: [
 {t:"La société française se délite-t-elle ?", d:"Durkheim : la solidarité organique."},
 {t:"L'engagement collectif disparaît-il ?", d:"Ion : l'engagement post-it."},
 {t:"La solitude est-elle un problème social ?", d:"Fondation de France, 2025."}
]},

"socio-1a/1-0": {
idee: "La sociologie est une science, mais une science qui cherche à comprendre autant qu'à expliquer, avec plusieurs paradigmes rivaux, à cause de la complexité de son objet.",
termes: "Une science suppose une méthode rigoureuse, des résultats vérifiables et, selon certains, des lois. La question est de savoir si la sociologie peut atteindre ces critères alors que son objet, la société, est fait d'êtres qui donnent un sens à leurs actions.",
parts: [
{lab:"Oui", ti:"Une méthode rigoureuse", sp:[
 {t:"Le projet positiviste", p:[
  "[a:Comte], [w:Cours de philosophie positive] ([d:1830-1842])\nLa sociologie doit, comme les sciences de la nature, dégager des lois : « savoir pour prévoir, prévoir pour pouvoir »."]},
 {t:"Une méthode", p:[
  "[a:Durkheim], [w:Les Règles de la méthode sociologique] ([d:1895])\nIl faut rompre avec les prénotions, définir son objet par des indicateurs observables, et comparer les variations de deux phénomènes pour établir des liens (variations concomitantes).",
  "[a:Boudon]\nEn introduisant une troisième variable (variable-test), on distingue les relations réelles des relations apparentes ou cachées."]}
]},
{lab:"Oui, autrement", ti:"Une science compréhensive", sp:[
 {t:"Comprendre pour expliquer", p:[
  "[a:Weber], [w:Essais sur la théorie de la science] ([d:1922])\nLa sociologie doit comprendre le sens que les acteurs donnent à leurs actions pour les expliquer. Elle construit des idéaux-types et établit des causalités probables, non des lois."]}
]},
{lab:"Pas tout à fait", ti:"Des paradigmes rivaux et des biais", sp:[
 {t:"Pas de paradigme commun", p:[
  "[a:Kuhn], [w:La Structure des révolutions scientifiques] ([d:1962])\nUne science mûre partage un paradigme. La sociologie en a plusieurs, qui expliquent les mêmes faits de façon opposée."],
  ex:["Sur l'école, Bourdieu explique les inégalités par la reproduction, Boudon par les choix rationnels des familles."]},
 {t:"Le biais de l'enquête", p:[
  "[a:Schwartz]\nParadoxe de l'observateur : la présence du sociologue modifie ce qu'il observe. Aucune donnée n'est pure."]}
]},
{lab:"Dépasser", ti:"Un objet complexe", sp:[
 {t:"Une pluralité qui a du sens", p:[
  "La pluralité des paradigmes ne prouve pas que la sociologie soit immature : elle reflète la complexité d'un objet fait d'individus qui pensent et réagissent à ce qu'on dit d'eux."]}
]}
],
usages: [
 {t:"Peut-on étudier la société comme une chose ?", d:"Durkheim, Les Règles."},
 {t:"Les sciences sociales sont-elles des sciences ?", d:"Weber, Kuhn."},
 {t:"La sociologie peut-elle prévoir ?", d:"Comte contre Weber."}
]},

"socio-1a/1-1": {
idee: "Le sociologue doit séparer jugements de fait et jugements de valeur, sans renoncer pour autant à l'utilité sociale de son savoir.",
termes: "La neutralité axiologique consiste à ne pas laisser ses valeurs orienter les résultats. Le débat oppose cette exigence à une sociologie engagée, qui veut éclairer et transformer la société.",
parts: [
{lab:"Oui", ti:"Séparer savoir et valeurs", sp:[
 {t:"La neutralité axiologique", p:[
  "[a:Weber], [w:Le Savant et le politique] ([d:1919])\nLe savant doit distinguer jugements de fait et jugements de valeur. Il peut choisir son objet selon ses valeurs, mais ses résultats ne doivent pas en dépendre, et il ne doit pas faire de politique en chaire.",
  "[a:Heinich], [w:Ce que le militantisme fait à la recherche] ([d:2021])\nLe militantisme confond l'arène savante et l'arène politique, au détriment de la rigueur."]},
 {t:"Le risque idéologique", p:[
  "[a:Bronner et Géhin], [w:Le Danger sociologique] ([d:2017])\nUne sociologie trop déterministe nourrit une « culture de l'excuse » et voit des intentions de domination derrière tous les phénomènes (biais d'intentionnalité)."]}
]},
{lab:"Non", ti:"Une sociologie engagée", sp:[
 {t:"S'engager aux côtés des acteurs", p:[
  "[a:Touraine], [w:La Voix et le Regard] ([d:1978])\nPar l'intervention sociologique, le chercheur aide les acteurs d'un mouvement social à comprendre le sens de leur action.",
  "[a:Bourdieu]\nLa sociologie dévoile les mécanismes de domination : elle est par nature critique, « un sport de combat »."],
  ex:["Bourdieu soutient les cheminots en grève, gare de Lyon, en décembre [d:1995]."]}
]},
{lab:"Dépasser", ti:"Un savoir utile sans être militant", sp:[
 {t:"L'utilité sociale", p:[
  "[a:Durkheim], [w:De la division du travail social] ([d:1893])\nLa sociologie ne vaudrait « pas une heure de peine » si elle n'avait qu'un intérêt spéculatif : elle doit éclairer l'action, sans renoncer à la rigueur."]}
]}
],
usages: [
 {t:"La science doit-elle être engagée ?", d:"Weber, Le Savant et le politique."},
 {t:"La sociologie excuse-t-elle ?", d:"Bronner et Géhin."},
 {t:"À quoi sert la sociologie ?", d:"Durkheim : pas une heure de peine."}
]},

"socio-1a/2-0": {
idee: "L'école intègre et transmet une culture commune, mais elle reproduit les inégalités sociales par la culture qu'elle valorise et par les choix des familles ; ce déterminisme n'est pourtant pas absolu.",
termes: "Réduire les inégalités, c'est faire que la réussite scolaire dépende moins de l'origine sociale. L'école républicaine promet l'égalité des chances ; la sociologie mesure ce qu'il en est.",
parts: [
{lab:"Oui", ti:"Une école qui intègre", sp:[
 {t:"L'intégration républicaine", p:[
  "[a:Durkheim], [w:Éducation et sociologie] ([d:1922])\nL'éducation est une socialisation méthodique de la jeune génération : l'école transmet une morale commune et intègre tous les enfants à la nation."],
  ex:["Les lois Ferry ([d:1881-1882]) : école gratuite, obligatoire et laïque."]}
]},
{lab:"Non", ti:"Une école qui reproduit", sp:[
 {t:"La reproduction", p:[
  "[a:Bourdieu et Passeron], [w:La Reproduction] ([d:1970])\nL'école valorise la culture des classes favorisées (capital culturel) et présente la réussite comme un don personnel. Cette violence symbolique rend la reproduction légitime.",
  "[a:Bourdieu et Passeron], [w:Les Héritiers] ([d:1964])\nLes enfants des classes favorisées, qui « héritent » de la culture scolaire, sont surreprésentés dans l'enseignement supérieur."],
  ex:["En CPGE, [n:54 %] des élèves sont enfants de cadres, [n:6,4 %] enfants d'ouvriers.", "PISA : un écart de [n:100] points entre élèves favorisés et défavorisés en France, contre [n:85] dans l'OCDE.", "En Colombie, il faut en moyenne [n:11] générations pour qu'un enfant pauvre atteigne le revenu moyen (OCDE), ce que montre le documentaire « El juego de la vida », tiré d'une enquête sur [n:10 000] familles (BBC Mundo, 14 nov. 2026)."]},
 {t:"Les choix des familles", p:[
  "[a:Boudon], [w:L'Inégalité des chances] ([d:1973])\nÀ chaque palier d'orientation, les familles comparent coûts, bénéfices et risques selon leur position sociale. Les écarts s'accumulent d'un palier à l'autre."]},
 {t:"Des effets pervers", p:[
  "Paradoxe d'Anderson ([d:1961]) ; [a:Peugny], [w:Le Déclassement] ([d:2009])\nÊtre plus diplômé que ses parents ne garantit pas une meilleure position : quand tout le monde est plus diplômé, les diplômes valent moins, et certains enfants connaissent un déclassement."],
  ex:["En Espagne, [n:37,6 %] des actifs occupés sont surqualifiés pour leur poste, record de l'UE : le nombre de diplômés du supérieur a bondi de [n:119 %] depuis 2002, bien plus vite que la montée en gamme des emplois (El País, 29 oct. 2026)."]}
]},
{lab:"Dépasser", ti:"Un déterminisme nuancé", sp:[
 {t:"Ni miracle ni fatalité", p:[
  "[a:Lahire], [w:La Culture des individus] ([d:2004])\nLes réussites improbables ne sont pas des « miracles » : elles s'expliquent par des dispositions précises transmises dans la famille.",
  "[a:Henri-Panabière], [w:Des « héritiers » en échec scolaire] ([d:2010])\nLe capital culturel ne se transmet pas tout seul : il faut du temps et des conditions pour qu'il passe des parents aux enfants."],
  ex:["L'association Les Déterminés de Moussa Camara a accompagné plus de [n:4 000] créateurs d'entreprise issus des banlieues et des campagnes isolées, qui partagent le même manque de réseau et de financement (RFI, 13 nov. 2026)."]}
]}
],
usages: [
 {t:"L'école est-elle méritocratique ?", d:"Bourdieu et Passeron, l'idéologie du don."},
 {t:"Faut-il réformer l'orientation ?", d:"Boudon : les paliers d'orientation."},
 {t:"Le diplôme protège-t-il encore ?", d:"Paradoxe d'Anderson, Peugny."}
]},

"socio-1a/3-0": {
idee: "La déviance est en grande partie une construction sociale, faite de normes et d'étiquettes posées par d'autres, mais elle a aussi des causes structurelles.",
termes: "La déviance est la transgression d'une norme sociale, qui entraîne une sanction ; la délinquance est la transgression d'une loi. Le débat porte sur ce qui fait qu'un acte est déviant : l'acte lui-même ou la réaction des autres.",
parts: [
{lab:"Oui", ti:"Une étiquette posée par les autres", sp:[
 {t:"L'étiquetage", p:[
  "[a:Becker], [w:Outsiders] ([d:1963])\nLe déviant est celui à qui l'étiquette a été appliquée avec succès. Les normes sont créées par des entrepreneurs de morale, et l'étiquetage engage dans une carrière déviante."],
  ex:["Le Marihuana Tax Act ([d:1937]) fait du cannabis une drogue illégale aux États-Unis.", "L'Allemagne légalise partiellement le cannabis le 1er avril [d:2024] : le même acte cesse d'être délinquant."]},
 {t:"Les interactions", p:[
  "[a:Goffman], [w:Stigmate] ([d:1963])\nUn stigmate n'existe que dans le regard des « normaux » : c'est la relation qui disqualifie. Dans [w:Asiles] ([d:1961]), il montre comment l'institution totale façonne le malade."]}
]},
{lab:"Oui, mais normale", ti:"Un fait social normal", sp:[
 {t:"Le crime est normal", p:[
  "[a:Durkheim], [w:Les Règles de la méthode sociologique] ([d:1895])\nLe crime existe dans toutes les sociétés : il est normal et renforce même la conscience collective en rappelant les règles. Seul un taux anormal est pathologique."]}
]},
{lab:"Non, structurelle", ti:"Une réponse à l'anomie", sp:[
 {t:"L'innovation", p:[
  "[a:Merton], « Structure sociale et anomie » ([d:1938])\nQuand la société valorise la réussite sans donner à tous les moyens légitimes d'y parvenir, certains gardent le but mais prennent des moyens illégitimes : c'est l'innovation."],
  ex:["Jérôme Kerviel à la Société générale ([d:2008])."]}
]}
],
usages: [
 {t:"Qu'est-ce qu'être normal ?", d:"Becker, Goffman."},
 {t:"La délinquance s'explique-t-elle par la société ?", d:"Merton."},
 {t:"Faut-il légaliser certaines drogues ?", d:"Marihuana Tax Act, Allemagne 2024."}
]},

"socio-1a/3-1": {
idee: "Le conflit est un moteur du changement social, mais pas le seul : les idées, la rationalisation et l'évolution lente transforment aussi la société, et le mécontentement ne suffit pas à mobiliser.",
termes: "Le changement social est une transformation durable de l'organisation d'une société. Le conflit désigne l'opposition entre groupes aux intérêts divergents.",
parts: [
{lab:"Oui", ti:"Le conflit transforme la société", sp:[
 {t:"La lutte des classes", p:[
  "[a:Marx], [w:Contribution à la critique de l'économie politique] ([d:1859])\nQuand les rapports de production freinent les forces productives, la lutte des classes s'intensifie et aboutit à une révolution : le conflit est le moteur de l'histoire."],
  ex:["La nuit du 4 août 1789 : l'abolition des privilèges."]},
 {t:"Les mouvements sociaux", p:[
  "[a:Touraine], [w:Production de la société] ([d:1973])\nUn mouvement social réunit une identité, un adversaire et un enjeu commun (principe de totalité) : il fait évoluer la société."],
  ex:["Les Gilets jaunes ([d:2018]) ; le mouvement contre la réforme des retraites ([d:2023]).", "Après la mobilisation des lycéens et des étudiants, le gouvernement ouvre une concertation pour réformer Parcoursup sans le supprimer : publication des critères de classement, plus d'orientation dès la seconde (AFP, 24 oct. 2026)."]}
]},
{lab:"Oui, une étape", ti:"Une étape d'un cycle", sp:[
 {t:"Le cycle des relations", p:[
  "[a:Park] (École de Chicago)\nLes relations entre groupes passent par la compétition, le conflit, l'accommodation, puis l'assimilation : le conflit est une étape, pas une fin."],
  ex:["L'émeute raciale de Chicago en [d:1919]."]}
]},
{lab:"Non", ti:"D'autres moteurs", sp:[
 {t:"Les idées et la rationalisation", p:[
  "[a:Weber], [w:L'Éthique protestante et l'Esprit du capitalisme] ([d:1904-1905])\nLes idées religieuses ont favorisé l'essor du capitalisme, et la rationalisation transforme la société sans conflit ouvert."]},
 {t:"Une évolution lente", p:[
  "[a:Parsons], [w:Societies] ([d:1966])\nLes sociétés évoluent par différenciation de leurs fonctions, sans rupture.",
  "[a:Elias], [w:Sur le processus de civilisation] ([d:1939])\nLa société change lentement, à mesure que les individus apprennent à se contrôler eux-mêmes (autocontrainte)."]}
]},
{lab:"Pas seul", ti:"Le mécontentement ne suffit pas", sp:[
 {t:"Les conditions de l'action", p:[
  "[a:Olson], [w:Logique de l'action collective] ([d:1965])\nChacun a intérêt à laisser les autres se mobiliser à sa place : c'est le passager clandestin. Il faut des incitations pour que l'action collective ait lieu.",
  "[a:Oberschall] ([d:1973])\nUn groupe ne se mobilise que s'il dispose de ressources : organisation, réseaux, leaders."]}
]}
],
usages: [
 {t:"Les mouvements sociaux changent-ils la société ?", d:"Touraine, les Gilets jaunes."},
 {t:"La société évolue-t-elle par ruptures ?", d:"Marx contre Elias."},
 {t:"Pourquoi ne se mobilise-t-on pas ?", d:"Olson."}
]},

"ch3/0-0": {
idee: "Dans un monde fini, les ressources limitent la croissance, mais le progrès technique, la substitution et les prix repoussent ces limites, sans les supprimer.",
termes: "La croissance est l'augmentation durable du PIB. Les ressources sont épuisables (pétrole, métaux) ou renouvelables (sols, eau, forêts), et l'environnement a une capacité limitée d'absorption des pollutions.",
parts: [
{lab:"Oui", ti:"Un monde fini", sp:[
 {t:"Les rendements décroissants", p:[
  "[a:Malthus], [w:Essai sur le principe de population] ([d:1798])\nLa population augmente plus vite que les subsistances : la croissance finit toujours par buter sur la famine, c'est la trappe malthusienne.",
  "[a:Ricardo], [w:Des principes de l'économie politique et de l'impôt] ([d:1817])\nIl faut cultiver des terres de moins en moins fertiles : la rente augmente, les profits baissent et l'économie tend vers l'état stationnaire."]},
 {t:"Les limites de la planète", p:[
  "[a:Ehrlich], [w:La Bombe P] ([d:1968])\nL'impact environnemental dépend de la population, de la richesse et de la technologie : I = P × A × T.",
  "[a:Meadows et al.], [w:Halte à la croissance ?] ([d:1972])\nPour le Club de Rome, une croissance exponentielle est impossible dans un monde fini : sans changement, elle mène à l'effondrement au XXIe siècle.",
  "[a:Cohen], [w:La Prospérité du vice] ([d:2009])\nLe mode de vie occidental ne peut pas être étendu à toute la planète : il faudrait plusieurs Terres."]}
]},
{lab:"Non", ti:"Le progrès repousse les limites", sp:[
 {t:"La productivité", p:[
  "Les gains de productivité agricole ont démenti Malthus : la production a augmenté bien plus vite que la population."],
  ex:["Les lois Pisani ([d:1960-1962]) modernisent l'agriculture française."]},
 {t:"La substitution", p:[
  "[a:Solow] ([d:1991])\nLe progrès technique permet de remplacer les ressources rares par d'autres ou par du capital."],
  ex:["Le recyclage des batteries produit une « masse noire » riche en lithium, cobalt et nickel, qui permet de récupérer des métaux critiques (Courrier international, 16 nov. 2026)."]},
 {t:"Le prix de la rareté", p:[
  "[a:Hotelling], [w:The Economics of Exhaustible Resources] ([d:1931])\nLe prix d'une ressource épuisable augmente au rythme du taux d'intérêt : la rareté se traduit par des prix croissants, qui poussent à économiser et à trouver des substituts."],
  ex:["Selon l'AIE, la crise du détroit d'Ormuz est la pire menace pour la sécurité énergétique de l'histoire, et elle pousse les pays à investir dans les énergies décarbonées produites sur place (Le Monde, 19 nov. 2026)."]}
]},
{lab:"Dépasser", ti:"Des prévisions trop pessimistes", sp:[
 {t:"Ce que Meadows sous-estime", p:[
  "Les modèles du Club de Rome sous-estiment le progrès technique et la transition démographique : la fécondité baisse avec le développement. Les limites existent, mais elles sont moins mécaniques que prévu."]}
]}
],
usages: [
 {t:"La croissance peut-elle être infinie ?", d:"Meadows contre Solow."},
 {t:"Faut-il décroître ?", d:"Ehrlich, Cohen."},
 {t:"Le progrès technique sauvera-t-il la planète ?", d:"Solow, Hotelling."}
]},

"ch3/0-1": {
idee: "Pour la durabilité faible, le capital naturel peut être remplacé par d'autres formes de capital ; pour la durabilité forte, une partie est irremplaçable, et le découplage reste insuffisant.",
termes: "La durabilité faible suppose que les capitaux sont substituables : il suffit de transmettre un stock total constant. La durabilité forte considère qu'une partie du capital naturel (climat, biodiversité) est critique et doit être préservée en tant que telle.",
parts: [
{lab:"Oui", ti:"La durabilité faible", sp:[
 {t:"Transmettre un stock de capital", p:[
  "[a:Solow], [w:Sustainability: An Economist's Perspective] ([d:1991])\nCe qui compte est de transmettre aux générations futures un stock global de capital, naturel, physique et humain, qui leur permette au moins le même bien-être.",
  "[a:Hartwick] ([d:1977])\nIl suffit de réinvestir la rente tirée des ressources épuisables pour maintenir le capital total."],
  ex:["Le fonds souverain norvégien place les revenus du pétrole pour les générations futures."]},
 {t:"La courbe de Kuznets environnementale", p:[
  "[a:Grossman et Krueger], [w:Economic Growth and the Environment] ([d:1995])\nLa pollution augmente avec le revenu, puis diminue au-delà d'un certain niveau de richesse, grâce aux technologies propres et à la demande d'environnement.",
  "[a:Brunel], [w:Le Développement durable] ([d:2004])\nLe progrès protège mieux la nature que sa sanctuarisation, et le Sud a d'abord besoin de se développer."],
  ex:["Le smog de Londres ([d:1952]) entraîne le Clean Air Act de [d:1956]."]}
]},
{lab:"Non", ti:"La durabilité forte", sp:[
 {t:"Une dégradation irréversible", p:[
  "[a:Georgescu-Roegen], [w:La Décroissance] ([d:1979])\nToute activité économique dégrade de façon irréversible l'énergie et la matière (loi de l'entropie) : la croissance infinie est physiquement impossible."],
  ex:["Au Brésil, des Awá isolés sortent de la forêt sous la pression des bûcherons illégaux en Amazonie (BBC Mundo, 20 nov. 2026)."]},
 {t:"La décroissance", p:[
  "[a:Latouche], [w:La Décroissance] ([d:2019])\nLe développement durable est un oxymore : on ne peut pas croître indéfiniment en préservant la nature.",
  "[a:Parrique], [w:Ralentir ou périr] ([d:2023])\nLe découplage entre croissance et émissions n'est ni total, ni global, ni permanent : il ne suffit pas.",
  "[a:Daly]\nAu-delà d'un certain seuil, la croissance devient « anti-économique » : elle coûte plus qu'elle ne rapporte."]}
]},
{lab:"Dépasser", ti:"Effet rebond et décroissance sélective", sp:[
 {t:"L'effet rebond", p:[
  "[a:Jevons], [w:The Coal Question] ([d:1865])\nQuand une technique devient plus efficace, on l'utilise davantage : les gains d'efficacité sont mangés par la hausse de la consommation."],
  ex:["Les moteurs consomment moins, mais les voitures deviennent des SUV.", "En Espagne, les centres de données attirés par l'électricité solaire bon marché consomment aussi la nuit : sans règle, il faudrait faire tourner des centrales à gaz, d'où [n:+14 %] d'émissions de CO2 du secteur électrique et [n:2 Md€] de plus par an sur les factures d'ici 2030 (El País, 3 nov. 2026)."]},
 {t:"Trier les activités", p:[
  "[a:Raworth], [w:La Théorie du donut] ([d:2017])\nL'économie doit rester entre un plancher social et un plafond écologique : il faut faire décroître certaines activités, pas toutes.",
  "[a:Gollier], [w:Le Climat après la fin du mois] ([d:2019])\nUn prix du carbone permet de trier les activités selon leur coût pour le climat."]}
]}
],
usages: [
 {t:"La croissance verte est-elle possible ?", d:"Parrique : un découplage insuffisant."},
 {t:"Le développement durable est-il un oxymore ?", d:"Latouche contre Solow."},
 {t:"La technologie suffit-elle ?", d:"Jevons, l'effet rebond."}
]},

"ch3/0-2": {
idee: "Agir tout de suite contre le réchauffement coûte bien moins cher que l'inaction ; seul le rythme fait débat, selon le poids donné aux générations futures.",
termes: "Le réchauffement climatique est causé par les émissions humaines de gaz à effet de serre. Le débat porte moins sur le constat que sur le rythme de l'action, qui dépend du taux d'actualisation : le poids donné au bien-être futur.",
parts: [
{lab:"Oui", ti:"Agir coûte moins cher qu'attendre", sp:[
 {t:"Le coût de l'inaction", p:[
  "[a:Stern], [w:L'Économie du changement climatique] ([d:2006])\nNe rien faire coûterait de [n:5 à 20 %] du PIB mondial chaque année ; agir n'en coûte qu'environ [n:1 %]. Avec un taux d'actualisation faible, il faut agir tout de suite."]},
 {t:"Un constat scientifique", p:[
  "GIEC\nLe réchauffement atteint déjà [n:+1,1 °C], et son origine humaine est certaine.",
  "[a:Crutzen], [w:Geology of Mankind] ([d:2002])\nL'homme est devenu une force géologique : nous sommes entrés dans l'anthropocène."],
  ex:["L'assèchement de la mer d'Aral.", "La COP31 s'ouvre alors que 2026 s'annonce comme une nouvelle année record de température et que le dépassement de [n:1,5 °C] paraît imminent (Le Monde, 17 nov. 2026)."]},
 {t:"La tragédie de l'horizon", p:[
  "[a:Carney] (discours à la Lloyd's, [d:2015])\nLes dégâts du climat arriveront au-delà de l'horizon des décideurs, d'où leur inaction. Mais les réserves fossiles risquent de devenir des actifs échoués, impossibles à exploiter."]}
]},
{lab:"Progressivement", ti:"Une action graduelle", sp:[
 {t:"Le taux d'actualisation", p:[
  "[a:Nordhaus], [w:Le Casino climatique] ([d:2013])\nAvec un taux d'actualisation plus élevé que celui de Stern, le futur pèse moins : une action progressive, avec une taxe carbone croissante, est préférable."]}
]},
{lab:"Dépasser", ti:"Un consensus aussi politique", sp:[
 {t:"Le rôle des États", p:[
  "Le résumé du GIEC pour les décideurs est validé ligne à ligne par les États, et les scénarios les plus pessimistes y sont mis en avant : le consensus est aussi le fruit d'une négociation."]}
]}
],
usages: [
 {t:"Faut-il sacrifier la croissance au climat ?", d:"Stern : agir coûte moins cher."},
 {t:"Comment arbitrer entre générations ?", d:"Nordhaus, le taux d'actualisation."},
 {t:"La finance prend-elle en compte le climat ?", d:"Carney, les actifs échoués."}
]},

"ch3/1-0": {
idee: "Donner un prix au carbone est l'outil le plus efficace pour réduire les émissions, à condition de compenser les ménages modestes et de le compléter par d'autres outils.",
termes: "La pollution est une externalité négative : son coût est supporté par d'autres que le pollueur. Donner un prix au carbone, par une taxe ou un marché de quotas, fait payer ce coût au pollueur.",
parts: [
{lab:"Oui", ti:"Un prix pour internaliser", sp:[
 {t:"La taxe", p:[
  "[a:Pigou], [w:L'Économie du bien-être] ([d:1920])\nUne taxe égale au dommage marginal fait payer au pollueur le coût qu'il impose aux autres. Ses recettes peuvent servir à baisser d'autres impôts : c'est le double dividende.",
  "[a:Nordhaus] ([d:2013])\nLa meilleure solution est une taxe carbone mondiale et progressive.",
  "[a:Gollier]\nUn prix d'environ [n:50 €] la tonne, avec des compensations pour les ménages modestes."],
  ex:["La Suède taxe le carbone depuis [d:1991]."]},
 {t:"Le marché de quotas", p:[
  "[a:Dales], [w:Pollution, Property and Prices] ([d:1968])\nL'État fixe la quantité totale de pollution autorisée et distribue des quotas que les entreprises s'échangent : le marché fixe le prix."],
  ex:["Sur le marché européen du carbone, la tonne passe de moins de [n:10 €] à plus de [n:100 €] en [d:2023]."]}
]},
{lab:"Non", ti:"D'autres outils", sp:[
 {t:"Négocier", p:[
  "[a:Coase], [w:Le problème du coût social] ([d:1960])\nSi les droits de propriété sont clairement définis, pollueurs et victimes peuvent négocier entre eux sans intervention de l'État."],
  ex:["L'accord franco-allemand sur le CO2 maintient la fin des voitures thermiques neuves en 2035 mais assouplit les pénalités des constructeurs : une norme négociée avec l'industrie plutôt qu'un prix (Le Monde, 7 nov. 2026)."]},
 {t:"Les nudges", p:[
  "[a:Thaler et Sunstein], [w:Nudge] ([d:2008])\nOn peut orienter les comportements sans les taxer, par de petites incitations."],
  ex:["Une facture d'énergie qui compare sa consommation à celle des voisins."]},
 {t:"Les communs", p:[
  "[a:Ostrom], [w:La Gouvernance des biens communs] ([d:1990])\nLes communautés peuvent gérer elles-mêmes une ressource, par des règles qu'elles se donnent."],
  ex:["Les huertas de Valence, dont l'irrigation est gérée par un tribunal des eaux depuis le Moyen Âge."]}
]},
{lab:"Dépasser", ti:"Des limites sociales", sp:[
 {t:"Une taxe injuste", p:[
  "La taxe carbone est régressive : elle pèse davantage sur les ménages modestes, qui dépensent une plus grande part de leur revenu en énergie."],
  ex:["Les Gilets jaunes ([d:2018]) naissent d'une hausse des taxes sur les carburants."]},
 {t:"Les failles des quotas", p:[
  "L'allocation gratuite des premiers quotas, la volatilité des prix et l'idée d'un « droit de polluer » affaiblissent le marché du carbone."]}
]}
],
usages: [
 {t:"La taxe carbone est-elle juste ?", d:"Les Gilets jaunes, les compensations."},
 {t:"Le marché peut-il protéger l'environnement ?", d:"Dales, Coase."},
 {t:"Comment changer les comportements ?", d:"Thaler et Sunstein."}
]},

"ch3/1-1": {
idee: "La coopération climatique se heurte au passager clandestin, mais des clubs qui taxent les non-membres et une gouvernance à plusieurs niveaux peuvent la rendre possible.",
termes: "Le climat est un bien public mondial : chacun profite des efforts des autres sans payer. La coopération repose sur des accords internationaux (Kyoto, Paris) sans gouvernement mondial pour les faire respecter.",
parts: [
{lab:"Oui", ti:"Forcer la coopération", sp:[
 {t:"Les clubs climatiques", p:[
  "[a:Nordhaus], [w:Climate Clubs] ([d:2015])\nLes pays qui s'engagent forment un club et taxent les importations des pays qui ne font pas d'effort : rester dehors devient coûteux."],
  ex:["Le mécanisme d'ajustement carbone aux frontières de l'UE (MACF), définitif depuis [d:2026], contre les fuites de carbone."]},
 {t:"Une gouvernance polycentrique", p:[
  "[a:Ostrom]\nLa coopération peut aussi venir d'en bas : villes, régions, entreprises agissent sans attendre un accord mondial."]}
]},
{lab:"Non", ti:"Le passager clandestin", sp:[
 {t:"Chacun attend les autres", p:[
  "[a:Olson], [w:La Logique de l'action collective] ([d:1965])\nChaque pays a intérêt à laisser les autres réduire leurs émissions : plus le groupe est grand, plus la coopération est difficile.",
  "[a:Hardin], [w:La tragédie des communs] ([d:1968])\nUne ressource en accès libre est surexploitée jusqu'à disparaître.",
  "[a:Kindleberger] ([d:1986])\nLe climat est un bien public mondial que personne n'a intérêt à financer seul."],
  ex:["L'effondrement de la morue de Terre-Neuve, qui impose un moratoire en [d:1992].", "Les États-Unis ne ratifient pas Kyoto.", "COP31 : boycott de Friedrich Merz et des représentants américains, [n:100 Md$] annuels promis au Sud toujours pas versés en entier (Alternatives économiques, 9 nov. 2026)."]},
 {t:"Un accord sans sanction", p:[
  "L'accord de Paris ([d:2015]) repose sur des engagements volontaires, sans aucune sanction."],
  ex:["Le projet de décision de la COP31 appelle à une « transition hors des énergies fossiles », contestée par les pays producteurs ; faute de sanctions, des délégations demandent des sanctions commerciales contre les États défaillants (Le Monde, 17 nov. ; Alternatives économiques, 9 nov. 2026)."]}
]},
{lab:"Dépasser", ti:"Des communs mieux gérés qu'on ne croit", sp:[
 {t:"Un mythe", p:[
  "[a:Locher] ([d:2018])\nLa tragédie des communs est en partie un mythe : historiquement, les communs étaient régulés par les communautés."]},
 {t:"Chacun son rythme", p:[
  "Chaque pays avance selon ses intérêts et son niveau de développement."],
  ex:["La Chine vise la neutralité carbone en [d:2060] ; l'IRA américain prévoit [n:369 Md$] de subventions vertes."]}
]}
],
usages: [
 {t:"Le climat peut-il être gouverné mondialement ?", d:"Nordhaus, Ostrom."},
 {t:"L'accord de Paris est-il un succès ?", d:"Un accord sans sanction."},
 {t:"Faut-il taxer les importations polluantes ?", d:"Le MACF."}
]},

"ch3/1-2": {
idee: "Le Sud doit participer pour éviter les fuites de carbone et les havres de pollution, mais pas au même rythme que le Nord, qui porte une responsabilité historique.",
termes: "Le Nord a émis l'essentiel des gaz à effet de serre accumulés depuis la révolution industrielle ; le Sud émet aujourd'hui de plus en plus. Depuis Rio ([d:1992]), on parle de responsabilités communes mais différenciées.",
parts: [
{lab:"Oui", ti:"Sinon, la pollution se déplace", sp:[
 {t:"Les havres de pollution", p:[
  "[a:Summers] (mémo de la Banque mondiale, [d:1991])\nIl serait « économiquement logique » de déplacer les industries polluantes vers les pays pauvres, où le coût de la pollution est jugé plus faible. Sans effort du Sud, il devient un havre de pollution."],
  ex:["Les maquiladoras, usines installées au nord du Mexique."]},
 {t:"Les fuites de carbone", p:[
  "Si seul le Nord fait des efforts, la production polluante part vers le Sud et les émissions ne baissent pas : d'où le mécanisme d'ajustement carbone européen (MACF)."]}
]},
{lab:"Non", ti:"Une responsabilité différenciée", sp:[
 {t:"La justice climatique", p:[
  "Le Nord s'est développé en polluant : il a une dette écologique envers le Sud et doit faire l'effort principal.",
  "[a:Brunel], [w:Le Développement durable] ([d:2004])\nExiger du Sud le même effort serait un prétexte pour bloquer son développement."],
  ex:["À la COP31, les pays émergents dénoncent l'hypocrisie des pays riches, qui n'ont pas versé en entier les [n:100 Md$] par an promis pour l'adaptation (Alternatives économiques, 9 nov. 2026)."]},
 {t:"Des émissions inégales", p:[
  "Les émissions dépendent surtout du niveau de vie : ce sont les plus riches, partout, qui émettent le plus."],
  ex:["Les [n:10 %] les plus émetteurs du monde produisent près de la moitié des émissions."]}
]},
{lab:"Dépasser", ti:"Chacun hiérarchise", sp:[
 {t:"Le développement durable", p:[
  "Rapport Brundtland ([d:1987]), sommet de Rio ([d:1992])\nLe développement durable repose sur trois piliers, économique, social et environnemental, que chaque pays hiérarchise selon sa situation."],
  ex:["La Norvège exporte du pétrole mais place ses revenus dans un fonds souverain et électrifie ses voitures."]}
]}
],
usages: [
 {t:"Le développement est-il compatible avec l'écologie ?", d:"Brundtland."},
 {t:"Qui doit payer pour le climat ?", d:"Les 10 % les plus émetteurs, la dette écologique."},
 {t:"Le commerce déplace-t-il la pollution ?", d:"Summers, les maquiladoras."}
]}

});
