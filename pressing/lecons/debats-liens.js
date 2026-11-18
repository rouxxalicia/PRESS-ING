// Liens entre débats ESH + mots-clés pour retrouver les actus liées.
// ESH_DEBAT_LIENS : chaque paire est affichée sur les deux fiches. a, b = "<leçon>/<carte>-<débat>" ; lien = ce qui relie les deux débats ; sujet = un sujet de dissertation où les croiser.
// ESH_DEBAT_KW : mots-clés (sans majuscules) cherchés dans les actus ESH des éditions.
window.ESH_DEBAT_LIENS = [
  // Sociologie
  { a: "socio-1a/0-0", b: "socio-1a/0-1", lien: "Si l'individu est produit par la société, l'individualisme est lui aussi un produit social : chez Durkheim, la société moderne fabrique des individus autonomes, tenus ensemble par la solidarité organique.", sujet: "La société moderne est-elle une société d'individus ?" },
  { a: "socio-1a/0-0", b: "socio-1a/2-0", lien: "L'école est une instance de socialisation : elle façonne les individus et peut transmettre l'avantage de l'habitus familial (Bourdieu). Le débat sur l'école est un cas concret du débat sur la socialisation.", sujet: "L'école fabrique-t-elle des individus égaux ?" },
  { a: "socio-1a/1-0", b: "socio-1a/1-1", lien: "La sociologie se veut science en rompant avec les prénotions (Durkheim) et en pratiquant la neutralité axiologique (Weber) : la neutralité est une condition de la scientificité.", sujet: "La sociologie peut-elle être objective ?" },
  { a: "socio-1a/1-1", b: "socio-1a/2-0", lien: "Les travaux sur l'école (Bourdieu et Passeron) montrent qu'un résultat scientifique peut devenir une arme politique : dévoiler la reproduction, c'est déjà prendre position.", sujet: "La sociologie est-elle un sport de combat ?" },
  { a: "socio-1a/3-0", b: "socio-1a/3-1", lien: "Les normes changent quand des groupes les contestent ou en imposent de nouvelles (entrepreneurs de morale chez Becker) : la déviance d'hier peut devenir la norme de demain.", sujet: "Les normes sociales peuvent-elles changer ?" },
  { a: "socio-1a/0-1", b: "socio-1a/3-1", lien: "La cohésion ne suppose pas l'absence de conflit : pour Simmel et Coser, le conflit peut intégrer les groupes en créant des règles et des liens.", sujet: "Le conflit menace-t-il la cohésion sociale ?" },
  { a: "socio-1a/0-1", b: "ch1-1/0-2", lien: "Les perdants de l'ouverture (ouvriers, territoires désindustrialisés) se sentent exclus : la fracture sociale et le vote populiste relient la mondialisation à la cohésion (Rodrik).", sujet: "La mondialisation fragilise-t-elle la cohésion sociale ?" },

  // Mondialisation commerciale
  { a: "ch1-1/0-0", b: "ch1-1/0-2", lien: "Un pays peut gagner à l'échange alors qu'une partie de ses habitants y perd : les gains globaux n'empêchent pas des perdants à l'intérieur (Stolper-Samuelson).", sujet: "Le libre-échange est-il facteur d'inégalités ?" },
  { a: "ch1-1/0-0", b: "ch2-2/0-3", lien: "Même question à l'échelle d'une zone : les gains de l'intégration se concentrent dans le cœur industriel, au détriment de la périphérie (Krugman, nouvelle géographie économique).", sujet: "L'ouverture des économies profite-t-elle à tous ?" },
  { a: "ch1-1/0-1", b: "ch1-1/1-1", lien: "Si les avantages se construisent, la compétitivité devient un objectif de politique publique (formation, R&D, politique industrielle) au lieu d'être un don de la nature.", sujet: "L'État peut-il créer la compétitivité d'une nation ?" },
  { a: "ch1-1/0-1", b: "ch1-2/0-2", lien: "Les avantages propres à la firme (le O de l'OLI de Dunning : technologie, marque) sont l'équivalent, côté entreprise, des avantages comparatifs construits côté pays.", sujet: "Les avantages compétitifs sont-ils le fait des nations ou des firmes ?" },
  { a: "ch1-1/0-2", b: "ch1-2/1-0", lien: "Les perdants de l'ouverture sont souvent les salariés peu qualifiés des industries délocalisées : c'est le même mécanisme, vu cette fois depuis les FMN.", sujet: "La mondialisation est-elle responsable de la désindustrialisation ?" },
  { a: "ch1-1/0-3", b: "ch2-1/1-0", lien: "La baisse des droits de douane obtenue au GATT puis à l'OMC accompagne la croissance des Trente Glorieuses et des émergents : réussite de la libéralisation et croissance par l'ouverture vont ensemble.", sujet: "Le commerce international est-il un moteur de la croissance ?" },
  { a: "ch1-1/1-0", b: "ch2-2/0-0", lien: "Un accord régional libéralise à l'intérieur mais protège face au reste du monde : le détournement de commerce (Viner) est une forme de protectionnisme.", sujet: "Protectionnisme et libre-échange s'opposent-ils ?" },
  { a: "ch1-1/1-0", b: "ch3/1-0", lien: "Le mécanisme d'ajustement carbone aux frontières de l'UE taxe les importations polluantes : un protectionnisme justifié par l'environnement, pour éviter les fuites de carbone.", sujet: "Le commerce international est-il compatible avec la transition écologique ?" },
  { a: "ch1-1/1-0", b: "ch1-2/1-2", lien: "Droits de douane et subventions (IRA américain) servent aussi à attirer et orienter les FMN : protéger, c'est faire revenir les usines sur son territoire.", sujet: "Quel rôle pour l'État dans la mondialisation ?" },
  { a: "ch1-1/1-1", b: "ch1-2/1-1", lien: "Une nation compétitive est celle qui garde les étapes les plus rentables des chaînes de valeur (conception, marque) : la courbe du sourire relie compétitivité et partage de la valeur.", sujet: "Que gagne un pays à s'insérer dans les chaînes de valeur mondiales ?" },
  { a: "ch1-1/1-2", b: "ch2-1/1-2", lien: "Le commerce se fragmente en suivant les rivalités entre puissances (Chine–États-Unis, friend-shoring) : la démondialisation est d'abord géopolitique.", sujet: "La mondialisation est-elle réversible ?" },
  { a: "ch1-1/1-2", b: "ch1-2/1-3", lien: "Si les firmes raccourcissent leurs chaînes et relocalisent, la firme globale recule : c'est un indicateur concret de démondialisation (ou de simple réorganisation).", sujet: "Assiste-t-on à la fin de la mondialisation ?" },

  // FMN
  { a: "ch1-2/0-0", b: "ch1-2/0-2", lien: "Les coûts de transaction (Coase, Williamson) expliquent pourquoi une firme produit elle-même à l'étranger plutôt que de passer contrat : c'est le I (internalisation) de l'OLI.", sujet: "Pourquoi les entreprises deviennent-elles multinationales ?" },
  { a: "ch1-2/0-1", b: "ch1-1/0-1", lien: "Si seuls les bas salaires comptaient, les avantages seraient donnés ; or la plupart des IDE vont du Nord vers le Nord, ce qui montre le poids des avantages construits (marché, qualification).", sujet: "Le coût du travail détermine-t-il la place d'un pays dans la mondialisation ?" },
  { a: "ch1-2/0-1", b: "ch1-2/1-0", lien: "Si les IDE cherchent surtout les bas salaires, ils menacent l'emploi industriel du Nord ; s'ils cherchent des marchés, l'effet est plutôt une recomposition des emplois.", sujet: "Les délocalisations sont-elles une menace pour l'emploi ?" },
  { a: "ch1-2/1-1", b: "ch2-1/0-2", lien: "Prix de transfert et paradis fiscaux : capter la valeur, c'est aussi priver les États de recettes, d'où l'impôt minimum mondial de l'OCDE.", sujet: "Les firmes multinationales sont-elles plus puissantes que les États ?" },
  { a: "ch1-2/1-2", b: "ch2-1/0-2", lien: "C'est le même rapport de force vu des États : réussir à orienter les FMN (fiscalité, normes, aides) est la preuve que la souveraineté résiste.", sujet: "L'État est-il impuissant face à la mondialisation ?" },
  { a: "ch1-2/1-3", b: "ch2-1/0-2", lien: "Une firme vraiment globale, sans attache nationale, échapperait aux États ; si elle garde une nationalité (siège, R&D, soutien de son État), la souveraineté garde prise sur elle.", sujet: "Les firmes multinationales ont-elles encore une nationalité ?" },

  // Gouvernance
  { a: "ch2-1/0-0", b: "ch2-1/1-2", lien: "Pour Kindleberger, l'ordre mondial tient grâce à un hégémon ; quand il recule face à un rival, l'instabilité revient (piège de Thucydide).", sujet: "La gouvernance mondiale est-elle possible sans puissance dominante ?" },
  { a: "ch2-1/0-0", b: "ch3/1-1", lien: "Le climat est le cas type d'une coopération sans hégémon : l'accord de Paris repose sur des engagements volontaires, sans gendarme pour les faire respecter.", sujet: "La coopération internationale est-elle possible sans contrainte ?" },
  { a: "ch2-1/0-1", b: "ch3/1-1", lien: "Le climat stable est un bien public mondial : chacun a intérêt à laisser les autres payer (passager clandestin), d'où l'idée de clubs climatiques (Nordhaus).", sujet: "Comment produire des biens publics mondiaux ?" },
  { a: "ch2-1/0-1", b: "ch3/0-2", lien: "Agir vite contre le réchauffement, c'est payer aujourd'hui un bien public dont profiteront surtout les générations futures (Stern) : le problème du BPM se double d'un problème de temps.", sujet: "Faut-il privilégier le long terme en politique économique ?" },
  { a: "ch2-1/1-0", b: "ch2-2/0-0", lien: "Le blocage du cycle de Doha explique la course aux accords régionaux : quand le multilatéral ne libéralise plus, les pays passent par les accords régionaux.", sujet: "Le multilatéralisme commercial est-il dépassé ?" },
  { a: "ch2-1/1-1", b: "ch2-1/1-2", lien: "L'Organe d'appel de l'OMC est paralysé par les États-Unis, qui accusent la Chine de contourner les règles : la crise de l'OMC est un effet de la rivalité entre puissances.", sujet: "Les règles du commerce mondial peuvent-elles survivre aux rivalités de puissance ?" },
  { a: "ch2-1/1-1", b: "ch2-2/0-2", lien: "Si l'OMC est paralysée, les accords régionaux et bilatéraux prennent le relais pour fixer les règles (normes, investissement, numérique).", sujet: "Le régionalisme remplace-t-il le multilatéralisme ?" },

  // Régionalisme
  { a: "ch2-2/0-1", b: "ch1-1/0-0", lien: "Un accord régional n'améliore le bien-être que si la création de commerce l'emporte sur le détournement (Viner) : le libre-échange partiel n'est pas toujours un gain.", sujet: "Le libre-échange améliore-t-il toujours le bien-être ?" },
  { a: "ch2-2/0-2", b: "ch2-1/1-2", lien: "Les accords servent aussi à former des blocs et à sécuriser des alliances (UE, RCEP autour de la Chine) : leurs causes sont autant géopolitiques qu'économiques.", sujet: "Les accords commerciaux sont-ils des instruments de puissance ?" },
  { a: "ch2-2/0-3", b: "im-1/1-0", lien: "Dans la zone euro, une BCE indépendante mène une seule politique pour des pays très différents : sans zone monétaire optimale (Mundell), les gains de l'intégration se répartissent mal.", sujet: "La zone euro profite-t-elle à tous ses membres ?" },

  // Monnaie
  { a: "im-1/0-0", b: "im-1/1-0", lien: "Si la monnaie est neutre à long terme, on peut confier la politique monétaire à une banque centrale indépendante chargée seulement de l'inflation ; si elle ne l'est pas, ce choix devient politique.", sujet: "La politique monétaire est-elle efficace ?" },
  { a: "im-1/0-0", b: "im-1/0-1", lien: "La neutralité suppose que la monnaie n'est qu'un voile sur les échanges ; chez Keynes, c'est aussi une réserve de valeur que l'on garde par précaution, ce qui pèse sur l'activité.", sujet: "La monnaie n'est-elle qu'un instrument des échanges ?" },
  { a: "im-1/0-2", b: "im-1/1-2", lien: "Les banques créent de la monnaie en accordant des crédits : se financer par les banques, c'est faire créer de la monnaie, alors que les marchés mobilisent une épargne qui existe déjà.", sujet: "Qui finance l'économie ?" },
  { a: "im-1/0-2", b: "im-1/1-0", lien: "La banque centrale fixe le taux directeur, mais ce sont les banques qui créent la monnaie : son contrôle est indirect, et son indépendance pose la question de qui décide.", sujet: "La banque centrale maîtrise-t-elle la création monétaire ?" },
  { a: "im-1/1-1", b: "im-1/0-2", lien: "Si les crédits font les dépôts, l'investissement n'a pas besoin d'une épargne préalable : le crédit bancaire finance l'innovation (Schumpeter) et l'épargne suit (Keynes).", sujet: "Le crédit est-il le moteur de la croissance ?" },
  { a: "im-1/1-1", b: "im-1/1-2", lien: "L'épargne arrive à l'investissement de deux façons : transformée par les banques ou placée directement sur les marchés. Choisir le canal, c'est choisir qui porte le risque.", sujet: "Le système financier est-il au service de l'investissement ?" },

  // Environnement
  { a: "ch3/0-0", b: "ch3/0-1", lien: "La croissance n'est limitée par les ressources que si le capital naturel est peu substituable : c'est l'opposition entre durabilité faible (Solow) et durabilité forte.", sujet: "La croissance peut-elle être durable ?" },
  { a: "ch3/0-0", b: "ch3/1-2", lien: "Si les ressources limitent la croissance mondiale, il faut décider qui y renonce : le Sud revendique le droit de rattraper le niveau de vie du Nord.", sujet: "Peut-on concilier développement et environnement ?" },
  { a: "ch3/0-1", b: "ch3/1-0", lien: "Donner un prix au carbone suppose qu'on peut arbitrer entre nature et autres biens, donc qu'ils sont en partie substituables (durabilité faible) ; la durabilité forte préfère des normes et des interdictions.", sujet: "Le marché peut-il protéger l'environnement ?" },
  { a: "ch3/0-2", b: "ch3/1-0", lien: "Le bon prix du carbone dépend du taux d'actualisation : avec un taux faible, agir tôt justifie un prix élevé dès maintenant (Stern) ; avec un taux plus élevé, une hausse progressive (Nordhaus).", sujet: "Quel instrument pour la politique climatique ?" },
  { a: "ch3/1-1", b: "ch3/1-2", lien: "La coopération bute sur le partage de l'effort : le principe des responsabilités communes mais différenciées oppose Nord et Sud à chaque COP.", sujet: "Le climat est-il un enjeu de justice entre pays ?" }
];

window.ESH_DEBAT_KW = {
  "socio-1a/0-0": ["socialisation", "individu", "déterminisme", "famille", "habitus", "éducation"],
  "socio-1a/0-1": ["individualisme", "cohésion", "lien social", "solitude", "solidarité", "isolement", "fracture"],
  "socio-1a/1-0": ["sociologie", "sociologue", "enquête", "statistique"],
  "socio-1a/1-1": ["sociologue", "neutralité", "militant", "expertise"],
  "socio-1a/2-0": ["école", "éducation", "élèves", "inégalités scolaires", "pisa", "parcoursup", "enseignement", "méritocratie"],
  "socio-1a/3-0": ["délinquance", "déviance", "drogue", "norme", "sanction", "prison", "violence"],
  "socio-1a/3-1": ["grève", "syndicat", "manifestation", "mobilisation", "conflit social", "contestation"],
  "ch1-1/0-0": ["libre-échange", "accord commercial", "exportations", "importations", "commerce mondial", "ouverture commerciale"],
  "ch1-1/0-1": ["spécialisation", "compétitivité", "avantage comparatif", "innovation", "filière", "industrie"],
  "ch1-1/0-2": ["inégalités", "désindustrialisation", "emplois industriels", "salaires", "perdants", "territoires"],
  "ch1-1/0-3": ["croissance", "ouverture", "exportations", "émergents", "pib"],
  "ch1-1/1-0": ["protectionnisme", "droits de douane", "tarifs", "surtaxe", "antidumping", "guerre commerciale", "quota"],
  "ch1-1/1-1": ["compétitivité", "coût du travail", "productivité", "balance commerciale", "déficit commercial", "politique industrielle"],
  "ch1-1/1-2": ["démondialisation", "relocalisation", "fragmentation", "chaînes d'approvisionnement", "souveraineté", "friend-shoring", "découplage"],
  "ch1-2/0-0": ["sous-traitance", "fusion", "acquisition", "intégration verticale", "contrat"],
  "ch1-2/0-1": ["délocalisation", "ide", "investissement étranger", "coût du travail", "bas salaires", "usine"],
  "ch1-2/0-2": ["multinationale", "pme", "implantation", "filiale", "internationalisation"],
  "ch1-2/1-0": ["délocalisation", "fermeture d'usine", "plan social", "suppressions d'emplois", "désindustrialisation", "licenciements"],
  "ch1-2/1-1": ["chaîne de valeur", "marges", "dividendes", "optimisation fiscale", "profits", "paradis fiscal"],
  "ch1-2/1-2": ["attractivité", "subventions", "politique industrielle", "aides publiques", "impôt minimum", "contrôle des investissements", "nationalisation"],
  "ch1-2/1-3": ["multinationale", "géant", "chaîne de valeur", "filiales", "groupe mondial"],
  "ch2-1/0-0": ["hégémonie", "leadership", "états-unis", "chine", "ordre mondial", "g20"],
  "ch2-1/0-1": ["bien public mondial", "coopération internationale", "pandémie", "climat", "aide au développement"],
  "ch2-1/0-2": ["souveraineté", "impôt minimum", "régulation", "géants du numérique", "autonomie stratégique"],
  "ch2-1/1-0": ["omc", "gatt", "droits de douane", "libéralisation", "multilatéral"],
  "ch2-1/1-1": ["omc", "organe d'appel", "règlement des différends", "multilatéralisme"],
  "ch2-1/1-2": ["rivalité", "guerre commerciale", "tensions", "sanctions", "chine", "états-unis", "géopolitique", "puissance"],
  "ch2-2/0-0": ["accord régional", "mercosur", "union européenne", "asean", "rcep", "accord de libre-échange"],
  "ch2-2/0-1": ["accord régional", "mercosur", "marché unique", "accord de libre-échange", "agriculteurs"],
  "ch2-2/0-2": ["mercosur", "accord commercial", "bloc", "alliance", "brics"],
  "ch2-2/0-3": ["zone euro", "union européenne", "budget européen", "divergences", "convergence", "marché unique"],
  "im-1/0-0": ["inflation", "masse monétaire", "taux directeur", "politique monétaire", "prix"],
  "im-1/0-1": ["monnaie", "euro numérique", "cryptomonnaie", "bitcoin", "stablecoin", "paiement", "espèces"],
  "im-1/0-2": ["crédit", "banques", "création monétaire", "bce", "réserve fédérale", "fed", "taux"],
  "im-1/1-0": ["bce", "banque centrale", "fed", "réserve fédérale", "indépendance", "lagarde", "taux directeur"],
  "im-1/1-1": ["épargne", "investissement", "livret a", "crédit", "taux d'épargne"],
  "im-1/1-2": ["banques", "marchés financiers", "bourse", "obligations", "crédit", "financement", "capital-risque"],
  "ch3/0-0": ["ressources", "matières premières", "pétrole", "métaux critiques", "terres rares", "décroissance", "sobriété"],
  "ch3/0-1": ["biodiversité", "capital naturel", "eau", "forêts", "sécheresse"],
  "ch3/0-2": ["réchauffement", "climat", "transition écologique", "décarbonation", "neutralité carbone", "émissions"],
  "ch3/1-0": ["prix du carbone", "taxe carbone", "marché du carbone", "quotas d'émission", "ajustement carbone", "écotaxe"],
  "ch3/1-1": ["cop", "accord de paris", "négociations climatiques", "coopération climatique", "émissions"],
  "ch3/1-2": ["pays du sud", "pays en développement", "émergents", "financement climatique", "justice climatique", "cop"]
};
