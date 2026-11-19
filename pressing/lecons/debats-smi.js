// Débats ESH du chapitre 3 (1) : SMI, balance des paiements et taux de change (2A).
// Faits à partir des auteurs et ouvrages de la leçon (data/cours/2A-05-smi-change.json), 18 nov. 2026.
// Même format que cours-debats.js (cartes + arguments) et debats-fiches.js (fiches rédigées).
(function(){
if(window.ESH_LESSONS && !window.ESH_LESSONS.some(l=>l.id==="smi-1")){
  window.ESH_LESSONS.push({id:"smi-1", short:"Ch. 3 (1) · intermédiaire", title:"SMI, balance des paiements et taux de change", vmaps:[], map:""});
}
window.ESH_DEBATS = window.ESH_DEBATS || {};
window.ESH_DEBATS["smi-1"] = [
{title:"Le SMI et le dollar", sub:"qui organise les monnaies ?", debates:[
 {q:"Un SMI stable a-t-il besoin d'une monnaie dominante ?", ideas:[
  ["Oui","y","[a:Aglietta] ([d:1990]) : l'étalon-or était en fait un étalon-sterling","Une monnaie au centre"],
  ["Oui","y","[a:Keynes], [w:Traité de la monnaie] ([d:1930]) : Londres « chef d'orchestre » du SMI","Une monnaie au centre"],
  ["Oui","y","[a:Kindleberger], [w:La Grande Crise mondiale, 1929-1939] ([d:1973]) : l'échec de l'entre-deux-guerres faute d'hégémon","Sans hégémon, le chaos"],
  ["Oui","y","[a:Bourguinat], [w:Les vertiges de la finance internationale] ([d:1987]) : le dollar, soleil des monnaies satellites","Une monnaie au centre"],
  ["Non","n","[a:Triffin], [w:L'or et la crise du dollar] ([d:1960]) : une monnaie nationale ne peut être à la fois abondante et sûre","Une fragilité interne"],
  ["Non","n","[a:Rueff] : le « déficit sans pleurs » des États-Unis {e:fin de la convertibilité, 15 août 1971}","Une fragilité interne"],
  ["Non","n","Plan [a:Keynes] ([d:1944]) : le bancor, monnaie neutre","Une monnaie neutre"],
  ["Nuance","m","[a:Aglietta et Coudert], [w:Le dollar et le système monétaire international] ([d:2014]) : la coopération plutôt que la domination","Coopérer"]
 ]},
 {q:"Le privilège exorbitant du dollar est-il menacé ?", ideas:[
  ["Oui","y","[a:Eichengreen], [w:Un privilège exorbitant] ([d:2011]) : fin de Bretton Woods II, système multipolaire","Montée de rivaux"],
  ["Oui","y","Conseil d'analyse économique ([d:2011]) : la Chine à [n:25 %] du PIB mondial en 2050","Montée de rivaux"],
  ["Oui","y","[a:Zhou Xiaochuan] ([d:2009]) : remplacer le dollar par les DTS","Volonté de s'en libérer"],
  ["Non","n","[a:Wallerstein], [w:Capitalisme et économie-monde] ([d:1980]) : la hiérarchie monétaire change plus lentement que l'économique","Une inertie forte"],
  ["Non","n","[a:Summers] ([d:2004]) : l'équilibre de la terreur financière","Une inertie forte"],
  ["Non","n","[a:Eichengreen] : l'euro, monnaie sans État","Pas de rival crédible"],
  ["Nuance","m","[a:Aglietta] : un semi-étalon-dollar fondé sur l'usage","Un dollar qui s'use"]
 ]},
 {q:"Les déséquilibres des balances courantes sont-ils un problème ?", ideas:[
  ["Non","n","[a:Hume], « De la balance du commerce » ([d:1752]) : ajustement automatique prix-espèces","Ils se corrigent"],
  ["Non","n","[a:Dooley, Folkerts-Landau et Garber] ([d:2003]) : Bretton Woods II, un échange stable","Ils se financent"],
  ["Non","n","[a:Eichengreen] ([d:2011]) : les États-Unis s'endettent dans leur monnaie","Ils se financent"],
  ["Oui","y","[a:Alexander] ([d:1952]) : le déficit révèle un excès d'absorption","Un déséquilibre interne"],
  ["Oui","y","[a:Daniel], [w:Ricardo, reviens !] ([d:2012]) : déficits jumeaux","Un déséquilibre interne"],
  ["Oui","y","[a:Artus], [w:Discipliner la finance] ([d:2019]) : l'épargne du Sud finance la consommation américaine","Mauvaise allocation"],
  ["Oui","y","[a:Palley] ([d:2006]) : un système fondé sur l'endettement des ménages américains","Risque de crise"],
  ["Nuance","m","Trésor-Éco ([d:2017]) : excédent allemand et déséquilibres de la zone euro","Selon leur cause"]
 ]}
]},
{title:"Changes et crises", sub:"fixe, flottant ou commun ?", debates:[
 {q:"Vaut-il mieux des changes fixes ou flottants ?", ideas:[
  ["Fixes","y","[a:Mundell] ([d:1960]) : triangle d'incompatibilité","Un ancrage crédible"],
  ["Fixes","y","[a:Calvo et Reinhart], [w:Fear of Floating] ([d:2002]) : la peur du flottement","Un ancrage crédible"],
  ["Flottants","n","[a:Friedman], « The Case for Flexible Exchange Rates » ([d:1953])","Un ajustement continu"],
  ["Flottants","n","[a:Obstfeld et Rogoff], « The Mirage of Fixed Exchange Rates » ([d:1995]) : les ancrages durent environ cinq ans","Des ancrages fragiles"],
  ["Nuance","m","[a:Rey] ([d:2013]) : du trilemme au dilemme","Le cycle financier mondial"],
  ["Nuance","m","[a:Frankel] ([d:1999]) : aucun régime ne convient à tous","Selon le pays"],
  ["Nuance","m","[a:Ghosh, Ostry et Qureshi] ([d:2014]) : le flottement administré","Selon le pays"]
 ]},
 {q:"Une monnaie faible est-elle un atout ?", ideas:[
  ["Oui","y","[a:Rodrik], [w:The Real Exchange Rate and Economic Growth] ([d:2008]) : subvention implicite à l'industrie","Doper les exportations"],
  ["Oui","y","[a:Freund et Pierola], « Export Surges » ([d:2012])","Doper les exportations"],
  ["Oui","y","[a:Keynes], [w:Les Conséquences économiques de M. Churchill] ([d:1925]) : la monnaie surévaluée détruit l'industrie","Le coût d'une monnaie forte"],
  ["Non","n","Condition de Marshall-Lerner et courbe en J ([a:Plihon], [d:2017])","Un effet incertain"],
  ["Non","n","[a:Cassel] ([d:1916]) : la parité de pouvoir d'achat, l'inflation importée efface le gain","Un effet incertain"],
  ["Non","n","[a:Eichengreen et Hausmann] ([d:1999]) : le péché originel","Une dette qui gonfle"],
  ["Non","n","[a:Mantega] ([d:2010]) : la guerre des monnaies","Un jeu non coopératif"],
  ["Nuance","m","[a:Williamson] ([d:1983]) : le taux de change d'équilibre fondamental","Juger par rapport à l'équilibre"]
 ]},
 {q:"Les crises de change viennent-elles des fondamentaux ?", ideas:[
  ["Oui","y","[a:Krugman] ([d:1979]) : crise de 1re génération","Une politique incohérente"],
  ["Oui","y","[a:Krugman] ([d:1999]) : crise de 3e génération, bilans en devises","Des bilans fragiles"],
  ["Non","n","[a:Obstfeld] ([d:1994]) : crise de 2e génération, autoréalisatrice {e:mercredi noir, 1992}","Des anticipations"],
  ["Non","n","[a:Dornbusch] ([d:1976]) : la surréaction du change","Des marchés qui surréagissent"],
  ["Non","n","[a:Blanchard et Watson] ([d:1982]) : les bulles rationnelles","Des marchés qui surréagissent"],
  ["Non","n","[a:Meese et Rogoff] ([d:1983]) : le change suit une marche aléatoire","Des marchés qui surréagissent"],
  ["Nuance","m","[a:Minsky] ([d:1986]) ; [a:Ostry et al.] ([d:2016]) : contagion et contrôles de capitaux","Fragilité financière"]
 ]},
 {q:"La zone euro est-elle une zone monétaire optimale ?", ideas:[
  ["Oui","y","[a:McKinnon] ([d:1963]) : des économies très ouvertes entre elles","Des économies intégrées"],
  ["Oui","y","[a:Kenen] ([d:1969]) : des économies diversifiées","Des économies intégrées"],
  ["Non","n","[a:Mundell] ([d:1961]) : la faible mobilité du travail","Des chocs asymétriques"],
  ["Non","n","[a:Ingram et Johnson] ([d:1969]) : il manque des transferts budgétaires","Pas de budget commun"],
  ["Non","n","[a:Eichengreen] ([d:2011]) : une monnaie sans État","Pas de budget commun"],
  ["Nuance","m","Critères endogènes : la monnaie unique rapproche les économies","Se construire"]
 ]}
]}
];

window.ESH_DEBAT_FICHES = window.ESH_DEBAT_FICHES || {};
Object.assign(window.ESH_DEBAT_FICHES, {

"smi-1/0-0": {
idee: "Tous les SMI stables ont tourné autour d'une monnaie dominante, mais cette domination est fragile, car une monnaie nationale ne peut pas servir le monde et son pays à la fois : la stabilité demande au fond de la coopération.",
termes: "Un SMI est l'ensemble des règles et des institutions qui organisent les échanges entre monnaies ([a:Solomon]). Une monnaie dominante sert d'unité de compte, de moyen de paiement et de réserve à l'échelle mondiale. La question est de savoir si l'ordre monétaire vient d'une puissance qui l'impose ou de règles partagées.",
parts: [
{lab:"Oui", ti:"L'histoire du SMI est celle de monnaies-clés", sp:[
 {t:"Une monnaie au centre", p:[
  "[a:Aglietta], « Intégration financière et régime monétaire sous l'étalon-or » ([d:1990])\nLe système du XIXe siècle était moins un étalon-or qu'un étalon-sterling : la livre et la place de Londres organisaient les paiements mondiaux.",
  "[a:Keynes], [w:Traité de la monnaie] ([d:1930])\nLa Banque d'Angleterre était le « chef d'orchestre » du SMI : en relevant ou baissant son taux, elle attirait ou renvoyait l'or et donnait sa cohérence à l'ensemble.",
  "[a:Bourguinat], [w:Les vertiges de la finance internationale] ([d:1987])\nAprès 1944, le dollar devient le soleil autour duquel tournent les monnaies satellites : Bretton Woods traduit le rapport de force d'après-guerre."],
  ex:["À Bretton Woods ([d:1944]), le plan White l'emporte sur le plan Keynes : les monnaies sont fixées au dollar, seul convertible en or à [n:35 $] l'once."]},
 {t:"Sans hégémon, le chaos", p:[
  "[a:Kindleberger], [w:La Grande Crise mondiale, 1929-1939] ([d:1973])\nUn SMI stable exige un hégémon qui en assume le coût : prêter en dernier ressort, garder ses marchés ouverts. Dans l'entre-deux-guerres, la Grande-Bretagne ne le pouvait plus et les États-Unis ne le voulaient pas : le système de Gênes s'effondre."],
  ex:["Dans les années 1930, les dévaluations en chaîne et le repli sur des blocs monétaires (sterling, or, mark) accompagnent l'effondrement du commerce mondial."]}
]},
{lab:"Non", ti:"La domination porte sa propre crise", sp:[
 {t:"Le dilemme de Triffin", p:[
  "[a:Triffin], [w:L'or et la crise du dollar] ([d:1960])\nPour fournir des dollars au monde, les États-Unis doivent être en déficit ; mais plus ils le sont, moins le dollar inspire confiance. Une monnaie nationale ne peut être durablement à la fois abondante et sûre.",
  "[a:Rueff], [w:Le péché monétaire de l'Occident] ([d:1971])\nLe rôle du dollar permet aux États-Unis un « déficit sans pleurs » : ils financent leurs déficits en créant la monnaie que les autres gardent en réserve."],
  ex:["Le 15 août 1971, Nixon suspend la convertibilité du dollar en or ; les accords de la Jamaïque ([d:1976]) entérinent le flottement."]},
 {t:"Une monnaie neutre", p:[
  "Plan [a:Keynes] ([d:1944])\nKeynes proposait le bancor, une monnaie internationale qu'aucun pays n'émettrait, avec des pénalités pour les pays en excédent comme pour ceux en déficit : l'ordre viendrait de règles, pas d'une puissance."]}
]},
{lab:"Dépasser", ti:"La stabilité vient de la coopération", sp:[
 {t:"Coopérer plutôt que dominer", p:[
  "[a:Aglietta et Coudert], [w:Le dollar et le système monétaire international] ([d:2014])\nL'entre-deux-guerres a échoué parce que chacun a fait passer ses intérêts avant la stabilité commune. Ils proposent un « Bretton Woods III » à plusieurs monnaies, avec plus de régulation financière.",
  "[a:Mishra et Rajan], [w:Rules of the Monetary Game] ([d:2016])\nLes décisions des grandes banques centrales ont des effets sur les autres pays : il faut des règles du jeu communes."],
  ex:["Les accords du Plaza ([d:1985]) : les grandes banques centrales s'entendent pour faire baisser un dollar jugé trop fort."]}
]}
],
usages: [
 {t:"Le SMI est-il le reflet des rapports de puissance ?", d:"Bourguinat, Kindleberger, le plan White contre le plan Keynes."},
 {t:"La coopération monétaire internationale est-elle possible ?", d:"Aglietta et Coudert, le Plaza, Mishra et Rajan."},
 {t:"La fin de Bretton Woods : une crise inévitable ?", d:"Triffin et Rueff, le 15 août 1971."}
]},

"smi-1/0-1": {
idee: "Le dollar perd du terrain lentement face à la montée de la Chine et aux efforts de dédollarisation, mais aucun rival n'offre ses atouts : sa domination s'use plus qu'elle ne s'effondre.",
termes: "Le « privilège exorbitant » ([a:Giscard d'Estaing], années 1960) désigne l'avantage des États-Unis à s'endetter dans leur propre monnaie, que le monde entier accepte. Il faut distinguer les usages du dollar : réserves des banques centrales, facturation du commerce, dette émise en dollars.",
parts: [
{lab:"Oui", ti:"Un monde qui devient multipolaire", sp:[
 {t:"Le poids des rivaux", p:[
  "[a:Eichengreen], [w:Un privilège exorbitant] ([d:2011])\nBretton Woods II touche à sa fin : la Chine diversifie ses réserves et l'on va vers un système à plusieurs monnaies (dollar, euro, yuan).",
  "Conseil d'analyse économique, [w:Réformer le système monétaire international] ([d:2011])\nLa Chine pourrait peser environ [n:25 %] du PIB mondial en 2050 contre [n:20 %] pour les États-Unis : la hiérarchie monétaire devrait suivre."]},
 {t:"Se libérer du dollar", p:[
  "[a:Zhou Xiaochuan], gouverneur de la banque centrale chinoise ([d:2009])\nAprès la crise de 2008, il propose de faire des DTS du FMI la monnaie de réserve, pour ne plus dépendre des seuls États-Unis."],
  ex:["Le gel des réserves russes en dollars et en euros ([d:2022]) pousse plusieurs pays à acheter de l'or et à commercer dans leurs monnaies.", "Les BRICS discutent de paiements en monnaies nationales pour contourner le dollar."]}
]},
{lab:"Non", ti:"Une domination difficile à remplacer", sp:[
 {t:"L'inertie des monnaies", p:[
  "[a:Wallerstein], [w:Capitalisme et économie-monde] ([d:1980])\nLa hiérarchie monétaire change plus lentement que la hiérarchie économique : une monnaie reste dominante longtemps après le déclin de son pays.",
  "[a:Summers] ([d:2004])\nÉquilibre de la terreur financière : si la Chine vendait massivement ses dollars, leur valeur chuterait et elle perdrait sur ses propres réserves. Les détenteurs sont prisonniers du dollar."],
  ex:["La livre a gardé un rôle international jusqu'après 1945, alors que les États-Unis dépassaient le Royaume-Uni depuis la fin du XIXe siècle."]},
 {t:"Pas de rival crédible", p:[
  "[a:Eichengreen] ([d:2011])\nL'euro est une « monnaie sans État » : sans union budgétaire ni grande dette commune, il n'offre pas l'actif sûr et abondant qu'offrent les bons du Trésor américain. Le yuan, lui, n'est pas librement convertible."]}
]},
{lab:"Dépasser", ti:"Un dollar qui s'use sans tomber", sp:[
 {t:"Un semi-étalon-dollar", p:[
  "[a:Aglietta]\nLe SMI actuel est un « semi-étalon-dollar » : la place du dollar ne repose plus sur des règles mais sur des usages partagés. Elle peut donc s'éroder peu à peu, au gré de la confiance dans la politique américaine, sans rupture brutale."],
  ex:["Le dollar représente encore près de [n:60 %] des réserves de change mondiales, contre plus de [n:70 %] vers 2000."]}
]}
],
usages: [
 {t:"Le dollar est-il encore la monnaie du monde ?", d:"Wallerstein et Summers contre Eichengreen et la dédollarisation."},
 {t:"L'euro peut-il rivaliser avec le dollar ?", d:"La monnaie sans État : argument pour une dette commune européenne."},
 {t:"La puissance monétaire est-elle un attribut de la puissance politique ?", d:"Privilège exorbitant, gel des réserves russes."}
]},

"smi-1/0-2": {
idee: "Un déficit courant n'est pas grave en soi s'il finance de l'investissement et s'il trouve preneur, mais les déséquilibres mondiaux persistants révèlent des déséquilibres internes et préparent des crises.",
termes: "Le solde courant mesure les échanges de biens, de services et de revenus avec le reste du monde. Il est égal à l'écart entre l'épargne et l'investissement du pays : un déficit signifie que le pays investit ou consomme plus qu'il n'épargne, et qu'il emprunte au reste du monde.",
parts: [
{lab:"Non", ti:"Ils se corrigent ou se financent", sp:[
 {t:"Un ajustement automatique", p:[
  "[a:Hume], « De la balance du commerce » ([d:1752])\nSous l'étalon-or, un pays en déficit perd de l'or, ses prix baissent, il redevient compétitif et sa balance se rééquilibre : c'est le mécanisme prix-espèces."]},
 {t:"Un échange qui arrange tout le monde", p:[
  "[a:Dooley, Folkerts-Landau et Garber], « An Essay on the Revived Bretton Woods System » ([d:2003])\nLes émergents d'Asie gardent leur monnaie sous-évaluée pour exporter et placent leurs excédents en bons du Trésor américain : c'est un échange stable, un « Bretton Woods II ».",
  "[a:Eichengreen], [w:Un privilège exorbitant] ([d:2011])\nComme les États-Unis s'endettent dans leur propre monnaie, leur déficit est soutenable bien plus longtemps que celui d'un autre pays."]}
]},
{lab:"Oui", ti:"Ils révèlent et préparent des crises", sp:[
 {t:"Le reflet d'un déséquilibre interne", p:[
  "[a:Alexander], « Effects of a Devaluation on a Trade Balance » ([d:1952])\nApproche par l'absorption : un pays est en déficit quand il consomme et investit plus qu'il ne produit. Le problème n'est pas d'abord la compétitivité, mais l'excès de dépense intérieure.",
  "[a:Daniel], [w:Ricardo, reviens ! Ils sont devenus keynésiens] ([d:2012])\nLe déficit extérieur est le symptôme d'un manque d'épargne : souvent, il accompagne un déficit public (déficits jumeaux)."],
  ex:["Les États-Unis cumulent depuis longtemps déficit public et déficit courant."]},
 {t:"Une épargne mal utilisée", p:[
  "[a:Artus], [w:Discipliner la finance] ([d:2019])\nL'épargne des émergents finance la consommation américaine au lieu de leur propre investissement : le capital va des pays pauvres vers le pays riche.",
  "[a:Palley], « The Fallacy of the Revised Bretton Woods Hypothesis » ([d:2006])\nLe système n'est ni coopératif ni soutenable : il repose sur l'endettement croissant des ménages américains."],
  ex:["L'afflux d'épargne asiatique fait baisser les taux américains dans les années 2000 et nourrit la bulle immobilière qui éclate en 2007."]}
]},
{lab:"Dépasser", ti:"Tout dépend de leur cause", sp:[
 {t:"Les excédents aussi déséquilibrent", p:[
  "Trésor-Éco, « Comment expliquer le niveau élevé de l'excédent courant allemand ? » ([d:2017])\nL'excédent allemand vient de la modération des coûts salariaux et de l'externalisation vers l'Europe centrale. Dans une union monétaire, l'excédent des uns est le déficit des autres : l'ajustement pèse alors sur les pays du Sud."],
  ex:["Dans les années 2010, l'Allemagne dégage un excédent courant autour de [n:8 %] de son PIB, pendant que l'Europe du Sud doit réduire ses déficits par l'austérité."]}
]}
],
usages: [
 {t:"Faut-il s'inquiéter du déficit extérieur de la France ?", d:"Alexander et Daniel : regarder l'épargne et le déficit public."},
 {t:"Les déséquilibres mondiaux sont-ils soutenables ?", d:"Bretton Woods II contre Palley, la crise de 2007."},
 {t:"L'Allemagne est-elle un modèle pour la zone euro ?", d:"Trésor-Éco 2017, l'excédent des uns est le déficit des autres."}
]},

"smi-1/1-0": {
idee: "Aucun régime n'est bon partout : le change fixe apporte la crédibilité mais oblige à renoncer à la politique monétaire ou à la libre circulation des capitaux ; le flottement rend l'autonomie mais expose à la volatilité.",
termes: "En change fixe, la banque centrale défend une parité ; en change flottant, le marché fixe le cours. Entre les deux existent de nombreux régimes intermédiaires (bandes de fluctuation, flottement administré). Le choix dépend de la taille du pays, de son ouverture et de sa dette en devises.",
parts: [
{lab:"Fixes", ti:"Un ancrage qui rassure", sp:[
 {t:"Importer la crédibilité", p:[
  "[a:Mundell], « The Monetary Dynamics of International Adjustment… » ([d:1960])\nTriangle d'incompatibilité : on ne peut avoir à la fois un change fixe, une politique monétaire autonome et la libre circulation des capitaux. Un pays qui choisit la parité renonce à sa politique monétaire, mais gagne la stabilité et la crédibilité de la monnaie d'ancrage.",
  "[a:Calvo et Reinhart], « Fear of Floating » ([d:2002])\nBeaucoup de pays officiellement en change flottant interviennent pour stabiliser leur monnaie : ils craignent les effets d'une chute du change sur leur inflation et leur dette."],
  ex:["Le Danemark arrime la couronne à l'euro depuis des décennies et suit les décisions de la BCE."]}
]},
{lab:"Flottants", ti:"Un ajustement continu", sp:[
 {t:"Retrouver l'autonomie", p:[
  "[a:Friedman], « The Case for Flexible Exchange Rates » ([d:1953])\nLes changes flottants s'ajustent en continu aux fondamentaux, comme un prix. Ils évitent de faire baisser les prix et les salaires pour corriger un déséquilibre, et rendent son autonomie à la politique monétaire."]},
 {t:"Des ancrages fragiles", p:[
  "[a:Obstfeld et Rogoff], « The Mirage of Fixed Exchange Rates » ([d:1995])\nAvec des capitaux mobiles, les ancrages fixes durent en moyenne environ cinq ans : tôt ou tard, la spéculation teste la parité."],
  ex:["L'Argentine arrime le peso au dollar en 1991 ; en 2001-2002, le régime s'effondre dans une crise profonde.", "En janvier 2015, la Banque nationale suisse abandonne d'un coup le cours plancher de [n:1,20] franc pour un euro."]}
]},
{lab:"Dépasser", ti:"Chaque pays son régime", sp:[
 {t:"Du trilemme au dilemme", p:[
  "[a:Rey], « Dilemma not Trilemma » ([d:2013])\nAvec des capitaux libres, même un change flottant ne protège pas du cycle financier mondial piloté par la Fed : le vrai choix est entre contrôler les capitaux et subir ce cycle."]},
 {t:"Un arbitrage selon les pays", p:[
  "[a:Frankel], « No Single Currency Regime Is Right for All Countries or at All Times » ([d:1999])\nAucun régime ne convient à tous les pays ni à toutes les époques.",
  "[a:Ghosh, Ostry et Qureshi] ([d:2014])\nLe flottement administré, avec des interventions ciblées et des contrôles de capitaux, protège mieux des crises que les régimes purs."],
  ex:["La Chine laisse le yuan fluctuer dans une bande autour d'un cours de référence fixé chaque jour, et contrôle les capitaux."]}
]}
],
usages: [
 {t:"La politique monétaire est-elle encore autonome dans la mondialisation ?", d:"Triangle de Mundell, dilemme de Rey."},
 {t:"Faut-il contrôler les mouvements de capitaux ?", d:"Rey, Ghosh et Ostry, l'exemple chinois."},
 {t:"La stabilité des changes est-elle souhaitable ?", d:"Friedman contre Calvo et Reinhart, la Suisse en 2015."}
]},

"smi-1/1-1": {
idee: "Une monnaie faible aide les exportations et l'industrie à court terme, mais son effet est incertain, il fait payer les importations et la dette en devises, et il peut déclencher une guerre des monnaies.",
termes: "Une monnaie est faible (ou sous-évaluée) quand son cours est inférieur à celui qui équilibrerait durablement l'économie. Il faut distinguer la dépréciation (décidée par le marché) de la dévaluation (décidée par l'État en change fixe), et regarder le change réel, qui tient compte des écarts d'inflation.",
parts: [
{lab:"Oui", ti:"Un coup de pouce à l'industrie", sp:[
 {t:"Doper les exportations", p:[
  "[a:Rodrik], « The Real Exchange Rate and Economic Growth » ([d:2008])\nUne monnaie sous-évaluée agit comme une subvention cachée à l'industrie exportatrice, où se trouvent les gains de productivité : elle favorise la croissance des pays en développement.",
  "[a:Freund et Pierola], « Export Surges » ([d:2012])\nLes poussées d'exportations des pays en développement suivent souvent une forte dépréciation."],
  ex:["La Chine des années 2000 garde le yuan bas pour soutenir ses exportations : selon l'approche FEER, il serait sous-évalué d'environ [n:35 %] en 2010 (Aflouk et al.)."]},
 {t:"Le coût d'une monnaie forte", p:[
  "[a:Keynes], [w:Les Conséquences économiques de M. Churchill] ([d:1925])\nRevenir à la parité-or d'avant-guerre impose une déflation qui sacrifie l'industrie et l'emploi au prestige de la livre."],
  ex:["En 1925, Churchill rétablit la livre à sa parité d'avant-guerre : chômage et désindustrialisation, un « déplorable succès » pour Asselain."]}
]},
{lab:"Non", ti:"Un gain incertain et coûteux", sp:[
 {t:"Un effet qui n'est pas automatique", p:[
  "Condition de Marshall-Lerner\nUne dépréciation n'améliore la balance commerciale que si les volumes réagissent assez aux prix (somme des élasticités-prix supérieure à 1).",
  "[a:Plihon], [w:Les taux de change] ([d:2017])\nCourbe en J : juste après une dépréciation, les importations coûtent plus cher alors que les volumes n'ont pas encore changé, et le solde se dégrade avant de s'améliorer.",
  "[a:Cassel] ([d:1916])\nParité de pouvoir d'achat : à long terme, le change suit l'inflation. Si la baisse de la monnaie fait monter les prix intérieurs, le gain de compétitivité disparaît."]},
 {t:"Une dette qui gonfle", p:[
  "[a:Eichengreen et Hausmann], « Exchange Rates and Financial Fragility » ([d:1999])\nPéché originel : les pays qui empruntent en dollars voient leur dette exploser quand leur monnaie baisse."],
  ex:["La chute de la livre turque en 2018 alourdit la dette en devises des entreprises turques."]},
 {t:"Un jeu non coopératif", p:[
  "[a:Mantega], ministre brésilien des Finances ([d:2010])\nLes États-Unis et la Chine mènent une « guerre des monnaies » : si chacun déprécie, personne ne gagne et les émergents paient."]}
]},
{lab:"Dépasser", ti:"Ni trop faible ni trop forte", sp:[
 {t:"Le change d'équilibre", p:[
  "[a:Williamson], [w:The Exchange Rate System] ([d:1983])\nLe taux de change d'équilibre fondamental (FEER) est celui qui assure à la fois le plein emploi et une balance courante soutenable : le bon change n'est ni faible ni fort, mais proche de cet équilibre."]}
]}
],
usages: [
 {t:"La dévaluation est-elle une bonne politique ?", d:"Rodrik contre Marshall-Lerner, la courbe en J et la PPA."},
 {t:"L'euro fort pénalise-t-il l'industrie française ?", d:"Keynes et Churchill 1925, le FEER de Williamson."},
 {t:"La guerre des monnaies est-elle une guerre commerciale ?", d:"Mantega, le yuan sous-évalué."}
]},

"smi-1/1-2": {
idee: "Les crises de change sanctionnent souvent des politiques incohérentes ou des bilans fragiles, mais les anticipations et la spéculation peuvent faire tomber une monnaie saine : le marché des changes amplifie les fragilités plus qu'il ne les mesure.",
termes: "Une crise de change est une chute brutale d'une monnaie ou l'abandon forcé d'une parité. Les fondamentaux désignent la situation réelle de l'économie : inflation, déficits, dette, réserves. La question est de savoir si les marchés jugent ces fondamentaux ou se jugent entre eux.",
parts: [
{lab:"Oui", ti:"Les marchés sanctionnent des fragilités réelles", sp:[
 {t:"Une politique incohérente", p:[
  "[a:Krugman], « A Model of Balance-of-Payments Crises » ([d:1979])\nCrise de 1re génération : un pays qui finance ses déficits en créant de la monnaie tout en défendant une parité épuise ses réserves. La spéculation ne fait qu'avancer une dévaluation inévitable."],
  ex:["Le Mexique et l'Argentine dans les années 1980."]},
 {t:"Des bilans en devises", p:[
  "[a:Krugman], « Balance Sheets, the Transfer Problem, and Financial Crises » ([d:1999])\nCrise de 3e génération : quand banques et entreprises sont endettées en devises, la chute de la monnaie gonfle leurs dettes et la crise de change devient crise bancaire."],
  ex:["La crise asiatique de 1997 part de la Thaïlande, dont les banques avaient emprunté en dollars à court terme."]}
]},
{lab:"Non", ti:"Les anticipations font la crise", sp:[
 {t:"Une crise autoréalisatrice", p:[
  "[a:Obstfeld], « The Logic of Currency Crises » ([d:1994])\nCrise de 2e génération : même avec des fondamentaux sains, une attaque réussit si les marchés pensent que le gouvernement préférera abandonner la parité plutôt que de monter ses taux au prix du chômage."],
  ex:["Le mercredi noir (16 septembre 1992) : la livre sort du SME après les attaques de spéculateurs comme George Soros."]},
 {t:"Un marché qui surréagit", p:[
  "[a:Dornbusch], « Expectations and Exchange Rate Dynamics » ([d:1976])\nLes marchés financiers s'ajustent plus vite que les prix des biens : après un choc monétaire, le change dépasse son nouvel équilibre avant d'y revenir.",
  "[a:Blanchard et Watson] ([d:1982])\nUne bulle peut être rationnelle : chacun suit le mouvement tant qu'il pense que les autres le suivront.",
  "[a:Meese et Rogoff] ([d:1983])\nAucun modèle fondé sur les fondamentaux ne prévoit le change à un an mieux qu'une marche au hasard."]}
]},
{lab:"Dépasser", ti:"La finance amplifie les fragilités", sp:[
 {t:"Contagion et contrôles", p:[
  "[a:Minsky], [w:Stabiliser une économie instable] ([d:1986])\nL'instabilité financière vient de l'intérieur du système : une crise de change se propage par les banques et touche des pays voisins.",
  "[a:Ostry et al.], « Neoliberalism: Oversold? » ([d:2016])\nLes économistes du FMI reconnaissent que les flux de capitaux augmentent le risque de crises coûteuses : les contrôles de capitaux redeviennent un outil légitime.",
  "[a:Tobin] ([d:1972])\nUne petite taxe sur les opérations de change découragerait la spéculation de court terme."],
  ex:["En 1998, la Malaisie impose des contrôles de capitaux pendant la crise asiatique."]}
]}
],
usages: [
 {t:"Les marchés financiers sont-ils efficients ?", d:"Dornbusch, Meese et Rogoff, les bulles rationnelles."},
 {t:"Faut-il réguler la finance internationale ?", d:"Ostry, Tobin, la Malaisie en 1998."},
 {t:"Les pays émergents sont-ils condamnés aux crises ?", d:"Les trois générations de crises, la Thaïlande en 1997."}
]},

"smi-1/1-3": {
idee: "La zone euro réunit des économies très intégrées, mais elle ne remplit pas les critères qui permettent de se passer du change : sans mobilité du travail ni budget commun, les chocs asymétriques pèsent sur les pays les plus fragiles.",
termes: "Une zone monétaire optimale ([a:Mundell], [d:1961]) est un ensemble de pays qui gagnent plus à partager une monnaie (moins de coûts de change, plus de commerce) qu'ils ne perdent en renonçant au taux de change face aux chocs asymétriques, c'est-à-dire aux chocs qui ne touchent qu'une partie de la zone.",
parts: [
{lab:"Oui", ti:"Des économies très liées", sp:[
 {t:"Ouverture et diversification", p:[
  "[a:McKinnon], « Optimum Currency Areas » ([d:1963])\nPlus des économies commercent entre elles, plus elles gagnent à une monnaie commune et moins le change leur sert.",
  "[a:Kenen] ([d:1969])\nUne économie diversifiée subit moins de chocs propres et peut renoncer plus facilement à son change."],
  ex:["Plus de la moitié du commerce des pays de la zone euro se fait avec d'autres pays de l'UE.", "La Croatie rejoint l'euro en 2023 : petite économie très ouverte sur la zone."]}
]},
{lab:"Non", ti:"Il manque les amortisseurs", sp:[
 {t:"Une faible mobilité du travail", p:[
  "[a:Mundell], « A Theory of Optimum Currency Areas » ([d:1961])\nSans change, un pays frappé par un choc doit s'ajuster par la mobilité des travailleurs ou par la baisse des salaires. Or, en Europe, la langue et les institutions limitent la mobilité du travail."]},
 {t:"Pas de budget commun", p:[
  "[a:Ingram et Johnson] ([d:1969])\nUne union monétaire suppose des transferts budgétaires vers les régions touchées par un choc, comme entre États américains.",
  "[a:Eichengreen] ([d:2011])\nL'euro est une « monnaie sans État » : sans union budgétaire, chaque pays affronte seul les crises."],
  ex:["Crise des dettes souveraines de 2010-2012 : la Grèce, qui ne peut pas dévaluer, s'ajuste par une austérité très lourde."]}
]},
{lab:"Dépasser", ti:"Une zone qui se construit", sp:[
 {t:"Des critères qui se créent", p:[
  "La monnaie unique fait elle-même progresser l'intégration commerciale et la convergence des cycles : les critères de la zone optimale peuvent se construire après coup. Encore faut-il des outils communs."],
  ex:["Le plan de relance européen de 2020 (NextGenerationEU) repose pour la première fois sur une grande dette commune.", "L'engagement de la BCE à faire « tout ce qu'il faudra » (Draghi, 2012) calme la crise de l'euro."]}
]}
],
usages: [
 {t:"L'euro a-t-il été un succès ?", d:"McKinnon contre Mundell, la crise grecque."},
 {t:"Faut-il une union budgétaire européenne ?", d:"Ingram et Johnson, Eichengreen, NextGenerationEU."},
 {t:"Une monnaie unique sans État est-elle viable ?", d:"La monnaie sans État, Draghi en 2012."}
]}

});

// Liens avec les autres débats et mots-clés pour les actus
if (window.ESH_DEBAT_LIENS) window.ESH_DEBAT_LIENS.push(
  { a: "smi-1/0-0", b: "ch2-1/0-0", lien: "C'est la même thèse de Kindleberger appliquée à la monnaie : sans hégémon qui prête en dernier ressort, le SMI de l'entre-deux-guerres s'effondre comme la coopération commerciale.", sujet: "La gouvernance mondiale est-elle possible sans puissance dominante ?" },
  { a: "smi-1/0-0", b: "smi-1/0-1", lien: "Si un SMI stable a besoin d'une monnaie dominante, la remise en cause du dollar menace la stabilité du système tout entier : c'est l'enjeu d'un passage ordonné à un SMI multipolaire.", sujet: "Vers un système monétaire international multipolaire ?" },
  { a: "smi-1/0-1", b: "ch2-1/1-2", lien: "La dédollarisation (gel des réserves russes, BRICS) est un instrument de la rivalité entre puissances : la monnaie devient une arme géopolitique.", sujet: "La monnaie est-elle un instrument de puissance ?" },
  { a: "smi-1/0-1", b: "smi-1/1-3", lien: "L'euro ne rivalise pas avec le dollar faute d'État et de dette commune : renforcer la zone euro, c'est aussi renforcer le rôle international de l'euro.", sujet: "L'euro peut-il devenir une monnaie internationale de premier plan ?" },
  { a: "smi-1/0-2", b: "im-1/1-1", lien: "Le solde courant est l'écart entre épargne et investissement : un pays qui investit plus qu'il n'épargne emprunte au reste du monde.", sujet: "L'épargne est-elle une condition de la croissance ?" },
  { a: "smi-1/0-2", b: "ch1-1/1-1", lien: "Un déficit commercial est souvent lu comme un manque de compétitivité ; l'approche par l'absorption (Alexander) montre qu'il traduit d'abord un excès de dépense intérieure.", sujet: "Le déficit commercial est-il le signe d'un déclin ?" },
  { a: "smi-1/1-0", b: "ch2-1/0-2", lien: "Le triangle de Mundell est un trilemme de souveraineté : avec des capitaux libres, un pays doit choisir entre stabilité du change et politique monétaire propre.", sujet: "La mondialisation financière réduit-elle les marges de manœuvre des États ?" },
  { a: "smi-1/1-0", b: "im-1/1-0", lien: "Choisir un change fixe, c'est renoncer à sa politique monétaire, donc en partie à sa banque centrale : le régime de change décide de ce qu'une banque centrale peut faire.", sujet: "La politique monétaire est-elle efficace en économie ouverte ?" },
  { a: "smi-1/1-1", b: "ch1-1/1-1", lien: "Déprécier sa monnaie est un moyen de gagner en compétitivité-prix, mais de court terme : la compétitivité hors-prix (qualité, innovation) dure plus longtemps.", sujet: "La compétitivité d'un pays dépend-elle de sa monnaie ?" },
  { a: "smi-1/1-1", b: "ch1-1/1-0", lien: "La sous-évaluation d'une monnaie agit comme un droit de douane sur toutes les importations et une subvention à toutes les exportations : c'est un protectionnisme monétaire.", sujet: "La guerre des monnaies est-elle une forme de protectionnisme ?" },
  { a: "smi-1/1-2", b: "im-1/1-2", lien: "Les crises de 3e génération naissent de l'endettement en devises des banques et des entreprises : le mode de financement de l'économie décide de sa fragilité face au change.", sujet: "La finance rend-elle les économies plus fragiles ?" },
  { a: "smi-1/1-3", b: "ch2-2/0-3", lien: "La zone euro est le cas extrême d'intégration régionale : sans change ni budget commun, les gains se répartissent mal entre le cœur et la périphérie.", sujet: "La zone euro profite-t-elle à tous ses membres ?" },
  { a: "smi-1/1-3", b: "im-1/1-0", lien: "Une BCE indépendante mène une seule politique pour des pays aux cycles différents : c'est le coût d'une zone qui n'est pas optimale.", sujet: "Une politique monétaire unique est-elle adaptée à la zone euro ?" }
);
if (window.ESH_DEBAT_KW) Object.assign(window.ESH_DEBAT_KW, {
  "smi-1/0-0": ["système monétaire international", "dollar", "fmi", "coopération monétaire", "bretton woods", "monnaie de réserve"],
  "smi-1/0-1": ["dollar", "dédollarisation", "yuan", "réserves de change", "brics", "dts", "or", "bons du trésor"],
  "smi-1/0-2": ["déficit courant", "excédent", "balance des paiements", "déficit commercial", "excédent commercial", "épargne", "position extérieure"],
  "smi-1/1-0": ["taux de change", "ancrage", "parité", "flottement", "contrôle des capitaux", "change fixe"],
  "smi-1/1-1": ["dépréciation", "dévaluation", "euro fort", "dollar fort", "yen", "yuan", "guerre des monnaies", "taux de change"],
  "smi-1/1-2": ["crise de change", "chute de la monnaie", "spéculation", "fuite des capitaux", "pays émergents", "dette en dollars", "fmi"],
  "smi-1/1-3": ["zone euro", "bce", "union budgétaire", "dette commune", "eurobonds", "élargissement", "pacte de stabilité"]
});
})();
