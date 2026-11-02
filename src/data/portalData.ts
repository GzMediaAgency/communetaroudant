import { EServiceItem, PacProject, HistoricGate, TrackingRecord, NewsArticle } from '../types/portal';

export const eServicesList: EServiceItem[] = [
  {
    id: 'residence-cert',
    code: 'DOC-01',
    titleAr: 'طلب شهادة السكنى الإدارية',
    titleFr: 'Certificat de Résidence Administratif',
    descAr: 'طلب وثيقة إدارية تثبت مقر السكنى بتراب جماعة تارودانت للملفات القانونية أو بطاقة التعريف.',
    descFr: 'Délivrance du certificat administratif de résidence sur le territoire de la Commune de Taroudant.',
    iconName: 'FileText',
    category: 'civil',
    timeEstimateAr: '24 إلى 48 ساعة',
    timeEstimateFr: '24 à 48 heures',
    docsRequiredAr: [
      'نسخة من البطاقة الوطنية للتعريف الإلكترونية (CNIE)',
      'وصل أداء فاتورة الكهرباء أو الماء الأخيرة باسم المعني أو عقد الكراء مصادق عليه',
      'شهادة الملكية أو تصريح بالشرف بالسكن مصادق عليه'
    ],
    docsRequiredFr: [
      'Copie de la Carte Nationale d\'Identité Électronique (CNIE)',
      'Dernière quittance ONEE (eau ou électricité) ou bail légalisé',
      'Titre de propriété ou déclaration sur l\'honneur de résidence légalisée'
    ],
    isDirectAction: true
  },
  {
    id: 'birth-cert',
    code: 'DOC-02',
    titleAr: 'عقد الازدياد والنسخة الكاملة',
    titleFr: 'Extrait d\'Acte de Naissance & Copie Intégrale',
    descAr: 'طلب استخراج شواهد الحالة المدنية عبر منصة وثيقة الوطنية مع إمكانية التوصيل أو الاستلام المباشر.',
    descFr: 'Commande des extraits d\'acte de naissance et copies intégrales via la plateforme nationale Wathika.',
    iconName: 'Stamp',
    category: 'civil',
    timeEstimateAr: 'فوري عبر منصة وثيقة / 24 ساعة بالمصلحة',
    timeEstimateFr: 'Instantané via Wathika / 24h au guichet',
    docsRequiredAr: [
      'رقم عقد الازدياد وتاريخ التسجيل بالمكتب الجماعي',
      'نسخة من الدفتر العائلي أو البطاقة الوطنية للمصرح'
    ],
    docsRequiredFr: [
      'Numéro d\'acte et année d\'enregistrement au bureau d\'état civil',
      'Copie du livret de famille ou CNIE du demandeur'
    ],
    externalUrl: 'https://www.watiqa.ma'
  },
  {
    id: 'building-permit',
    code: 'URB-01',
    titleAr: 'رخص البناء وإصلاح المباني (منصة رخص)',
    titleFr: 'Permis de Construire & Réfection (Rokhas)',
    descAr: 'إيداع وتتبع ملفات رخص البناء، الهدم، السكن، والمطابقة بالوسط الحضري للمدينة العتيقة والأحياء الجديدة.',
    descFr: 'Dépôt et instruction dématérialisée des permis de bâtir, démolir et d\'habiter via la plateforme Rokhas.ma.',
    iconName: 'Building2',
    category: 'urban',
    timeEstimateAr: '15 إلى 30 يوماً حسب طبيعة المشروع',
    timeEstimateFr: '15 à 30 jours ouvrables selon le dossier',
    docsRequiredAr: [
      'التصاميم الهندسية المعمارية موقعة من مهندس معماري مرخص',
      'شهادة الملكية العقارية حديثة الصلاحية أو رسم الاستمرار',
      'دفتر الورش وموافقة الوكالة الحضرية لتارودانت'
    ],
    docsRequiredFr: [
      'Plans architecturaux certifiés par un architecte agréé',
      'Certificat de propriété foncière récent',
      'Cahier de chantier et avis de l\'Agence Urbaine de Taroudant'
    ],
    externalUrl: 'https://www.rokhas.ma'
  },
  {
    id: 'citizen-complaint',
    code: 'SRV-01',
    titleAr: 'بوابة الشكايات والمقترحات الجماعية',
    titleFr: 'Réclamations & Propositions Citoyennes (Chikaya)',
    descAr: 'إرسال شكاية تتعلق بالإنارة العمومية، النظافة، الطرق، أو اقتراح لتحسين تدبير شؤون المدينة مع رقم تتبع فوري.',
    descFr: 'Signalement d\'anomalies (éclairage, propreté, voirie) et propositions pour la ville avec suivi instantané.',
    iconName: 'AlertCircle',
    category: 'complaints',
    timeEstimateAr: 'الرد الأولي خلال 48 ساعة',
    timeEstimateFr: 'Accusé et prise en charge sous 48 heures',
    docsRequiredAr: [
      'تحديد الحي أو الزنقة بتارودانت بدقة (أو عبر نظام الخريطة)',
      'صورة توضيحية للمشكل إن وجدت',
      'رقم هاتف صالح للتواصل مع المصلحة التقنية المختصة'
    ],
    docsRequiredFr: [
      'Localisation précise du quartier ou de la rue à Taroudant',
      'Photo illustrative de l\'incident (optionnelle mais recommandée)',
      'Numéro de téléphone joignable pour le suivi de terrain'
    ],
    isDirectAction: true
  },
  {
    id: 'business-license',
    code: 'ECO-01',
    titleAr: 'رخصة استغلال محل تجاري أو مهني',
    titleFr: 'Autorisation d\'Exploitation Commerciale & Artisanale',
    descAr: 'تصاريح ممارسة الأنشطة التجارية والحرفية وأسواق القرب بالمدينة العتيقة وجنان الجامع.',
    descFr: 'Démarches d\'autorisation pour commerces, artisans des souks et occupation temporaire du domaine public.',
    iconName: 'Store',
    category: 'business',
    timeEstimateAr: '7 إلى 10 أيام عمل',
    timeEstimateFr: '7 à 10 jours ouvrés',
    docsRequiredAr: [
      'عقد كراء المحل أو شهادة الملكية التجارية',
      'موافقة مصالح الوقاية المدنية والمكتب الصحي الجماعي',
      'السجل التجاري أو بطاقة الصانع التقليدي'
    ],
    docsRequiredFr: [
      'Bail commercial ou attestation de propriété du local',
      'Avis favorable de la protection civile et du bureau d\'hygiène',
      'Registre de commerce ou carte d\'artisan'
    ],
    isDirectAction: true
  },
  {
    id: 'local-taxes',
    code: 'TAX-01',
    titleAr: 'الجبايات والرسوم المحلية',
    titleFr: 'Fiscalité Locale & Taxes Communales',
    descAr: 'الاطلاع على الرسوم المفروضة على الأراضي الحضرية غير المبنية، المشروبات، ورسوم النظافة واستخلاصها.',
    descFr: 'Consultation et paiement des taxes communales (TNB, débits de boissons, services communaux).',
    iconName: 'CreditCard',
    category: 'taxes',
    timeEstimateAr: 'فوري للاستفسار وحساب الرسم',
    timeEstimateFr: 'Calcul immédiat en ligne',
    docsRequiredAr: [
      'المعرف الضريبي الموحد أو رقم الرسم العقاري',
      'نسخة من الإقرار السنوي بالضريبة'
    ],
    docsRequiredFr: [
      'Identifiant fiscal ou numéro d\'article de rôle',
      'Déclaration annuelle d\'imposition'
    ],
    isDirectAction: true
  },
  {
    id: 'tenders',
    code: 'TND-01',
    titleAr: 'بوابة الصفقات العمومية وطلبات العروض',
    titleFr: 'Marchés Publics & Appels d\'Offres',
    descAr: 'تحميل دفاتر التحملات، نتائج طلبات العروض وبرامج الصفقات التوقعية لجماعة تارودانت لسنة 2026.',
    descFr: 'Téléchargement des cahiers des charges (CPS), avis d\'adjudication et programme prévisionnel 2026.',
    iconName: 'FileSpreadsheet',
    category: 'tenders',
    timeEstimateAr: 'متاحة للتحميل على مدار الساعة',
    timeEstimateFr: 'Accès 24/7 en libre téléchargement',
    docsRequiredAr: [
      'التسجيل في البوابة المغربية للصفقات العمومية',
      'شهادة التصنيف والتأهيل للمقاولات والمكاتب الهندسية'
    ],
    docsRequiredFr: [
      'Inscription au portail national des marchés publics',
      'Certificat de qualification et de classification d\'entreprises'
    ],
    externalUrl: 'https://www.marchespublics.gov.ma'
  }
];

export const pacProjects: PacProject[] = [
  {
    id: 'pac-1',
    titleAr: 'مشروع صيانة وتثمين الأسوار التاريخية لتارودانت وأبراجها السعدية',
    titleFr: 'Restauration & Mise en Valeur des Remparts Historiques Saadiens',
    descriptionAr: 'ترميم وتدعيم أجزاء السور الطيني التاريخي البالغ طوله 8 كيلومترات وترميم الأبراج الخمسة مع تركيب إنارة أثرية ذكية.',
    descriptionFr: 'Consolidation et restauration des 8 km de murailles en pisé, réfection des bastions et mise en lumière architecturale.',
    budget: '34,500,000 درهم',
    completionRate: 68,
    status: 'ongoing',
    statusAr: 'قيد الإنجاز الميداني',
    statusFr: 'En cours d\'exécution',
    categoryAr: 'التراث والثقافة',
    categoryFr: 'Patrimoine & Culture',
    partnerAr: 'وزارة الثقافة، جهة سوس ماسة، عمالة تارودانت',
    partnerFr: 'Ministère de la Culture, Région Souss-Massa, Province',
    year: '2024 - 2026'
  },
  {
    id: 'pac-2',
    titleAr: 'تأهيل وتحديث سوق جنان الجامع وسوق الصناعة التقليدية',
    titleFr: 'Réhabilitation & Modernisation des Souks Traditionnels & Jnane El-Jaami',
    descriptionAr: 'تأهيل البنية التحتية، شبكات مكافحة الحرائق، توحيد واجهات المحلات بالخشب والأقواس التقليدية وتحسين الولوجيات للمرتفقين.',
    descriptionFr: 'Rénovation des réseaux, mise aux normes incendie, harmonisation des façades artisanales et facilitation de l\'accès piétonnier.',
    budget: '18,200,000 درهم',
    completionRate: 85,
    status: 'ongoing',
    statusAr: 'مرحلة التشطيبات النهائية',
    statusFr: 'Finitions en cours',
    categoryAr: 'التنمية الاقتصادية والتجارة',
    categoryFr: 'Développement Économique',
    partnerAr: 'غرفة الصناعة التقليدية، وكالة التنمية الحضرية',
    partnerFr: 'Chambre d\'Artisanat, Agence Urbaine',
    year: '2023 - 2026'
  },
  {
    id: 'pac-3',
    titleAr: 'برنامج التحول الرقمي وإدارة القرب الذكية "تارودانت الرقمية"',
    titleFr: 'Digitalisation Intégrale des Services Municipaux & Smart City',
    descriptionAr: 'رقمنة كاملة لمكاتب الحالة المدنية ومكتب الضبط، إنشاء الشباك الوحيد الإلكتروني، وتوفير خدمات الأداء الرقمي الموحد.',
    descriptionFr: 'Dématérialisation totale du bureau d\'ordre et de l\'état civil, guichet unique en ligne et paiement multicanal.',
    budget: '7,800,000 درهم',
    completionRate: 75,
    status: 'ongoing',
    statusAr: 'قيد التعميم والتشغيل',
    statusFr: 'En phase de déploiement',
    categoryAr: 'الحكامة الرقمية',
    categoryFr: 'Gouvernance Digitale',
    partnerAr: 'وكالة التنمية الرقمية (ADD)، المديرية العامة للجماعات الترابية',
    partnerFr: 'Agence de Développement du Digital (ADD), DGCT',
    year: '2024 - 2026'
  },
  {
    id: 'pac-4',
    titleAr: 'مشروع الإنارة العمومية بالطاقة الشمسية الصديقة للبيئة',
    titleFr: 'Transition Énergétique : Éclairage Public LED & Solaire',
    descriptionAr: 'استبدال 4,200 نقطة إنارة قديمة بمصابيح LED موفرة للطاقة مع تركيب أعمدة شمسية بالمداخل الكبرى للمدينة والأحياء الهامشية.',
    descriptionFr: 'Remplacement de 4 200 points lumineux par des lanternes LED intelligentes et déploiement de candélabres solaires aux entrées.',
    budget: '12,400,000 درهم',
    completionRate: 92,
    status: 'completed',
    statusAr: 'مكتمل بنجاح (الشطر الأول)',
    statusFr: 'Achevé (Tranche 1)',
    categoryAr: 'البيئة والنجاعة الطاقية',
    categoryFr: 'Environnement & Énergie',
    partnerAr: 'شركة التنمية المحلية، صندوق التجهيز الجماعي',
    partnerFr: 'Société de Développement Local, FEC',
    year: '2023 - 2025'
  },
  {
    id: 'pac-5',
    titleAr: 'تثمين الحزام الأخضر والواحة الحضرية لوادي سوس',
    titleFr: 'Ceinture Verte & Revalorisation de l\'Oasis Urbaine de l\'Oued Souss',
    descriptionAr: 'إحداث منتزه بيئي ترفيهي لساكنة تارودانت، مسارات رياضية تحت أشجار النخيل والزيتون، ومحطة معالجة المياه العادمة لسقي المساحات الخضراء.',
    descriptionFr: 'Création d\'un parc éco-récréatif, pistes cyclables et réutilisation des eaux traitées pour l\'arrosage de l\'oliveraie.',
    budget: '21,000,000 درهم',
    completionRate: 40,
    status: 'launching',
    statusAr: 'قيد أشغال الحفر والتهيئة',
    statusFr: 'Terrassements et aménagements',
    categoryAr: 'البيئة والمساحات الخضراء',
    categoryFr: 'Espaces Verts & Écologie',
    partnerAr: 'وكالة الحوض المائي لسوس ماسة، جماعة تارودانت',
    partnerFr: 'Agence du Bassin Hydraulique Souss-Massa',
    year: '2025 - 2027'
  }
];

export const historicGates: HistoricGate[] = [
  {
    id: 'gate-zorgan',
    nameAr: 'باب الزركان',
    nameFr: 'Bab Zorgan',
    descriptionAr: 'أحد أشهر وأبهى المداخل التاريخية لسور تارودانت العظيم، يقع في الواجهة الجنوبية وكان يشكل نقطة العبور الرئيسية لقوافل التجارة القادمة من بلاد السودان والصحراء.',
    descriptionFr: 'L\'une des portes les plus emblématiques de Taroudant, orientée au sud. Elle servait de point d\'accueil névralgique pour les caravanes transsahariennes.',
    locationAr: 'الجهة الجنوبية للمدينة العتيقة',
    locationFr: 'Secteur Sud de l\'ancienne médina',
    builtEraAr: 'العهد السعدي (القرن 16 الميلادي)',
    builtEraFr: 'Époque Saadienne (XVIe siècle)',
    image: '/assets/aistudio/____________7a2df98e.jpg',
    isRealPhoto: true,
    factsAr: [
      'يتميز بالقوس المتجاوز الأندلسي المزدوج والمحصن بالأبراج',
      'يشهد رواجاً حيوياً ويربط المدينة بمدخل أكادير وطاطا',
      'بجانبه مجمع حرفي عريق للمصنوعات الجلدية والخزف'
    ],
    factsFr: [
      'Arc outrepassé d\'inspiration hispano-mauresque flanqué de bastions',
      'Point de liaison historique vers le Souss et le Sud marocain',
      'Proximité immédiate des ateliers d\'artisanat cuir et céramique'
    ]
  },
  {
    id: 'gate-targhount',
    nameAr: 'باب تارغنت',
    nameFr: 'Bab Targhount',
    descriptionAr: 'يقع في الواجهة الغربية للمدينة، ويشرف على بساتين الزيتون والليمون الخصبة التي اشتهرت بها تارودانت عبر القرون، وكان بوابة تموين الحصن بالخيرات الزراعية.',
    descriptionFr: 'Porte occidentale ouvrant sur les vergers fertiles d\'oliviers et d\'agrumes qui font la renommée séculaire de la vallée du Souss.',
    locationAr: 'الجهة الغربية المحاذية للبساتين',
    locationFr: 'Façade Ouest bordant les oliveraies',
    builtEraAr: 'تأسس مع تحصين المدينة بالقرن 16',
    builtEraFr: 'Édifié lors des grands travaux du XVIe siècle',
    factsAr: [
      'طراز طيني فريد (التابية / Pisé) مقاوم لعوامل الزمن',
      'مدخل رئيسي للمتنزهين نحو الحزام البستاني للمدينة',
      'أعيد ترميمه بعناية للحفاظ على نقوشه المعمارية الأصلية'
    ],
    factsFr: [
      'Maçonnerie en pisé traditionnel ultra-résistant',
      'Accès privilégié aux promenades champêtres périurbaines',
      'Restauré selon les techniques ancestrales du pisé d\'adobe'
    ]
  },
  {
    id: 'gate-khemis',
    nameAr: 'باب الخميس',
    nameFr: 'Bab El-Khemis',
    descriptionAr: 'سمي نسبة إلى السوق الأسبوعي التاريخي الذي كان يقام بجواره يوم الخميس منذ عهود المرابطين والموحدين، جامعاً قبائل هوارة وإندوزال والأطلس الكبير.',
    descriptionFr: 'Tire son nom du grand marché hebdomadaire traditionnel tenu chaque jeudi, lieu séculaire de troc entre tribus de la plaine et du Haut-Atlas.',
    locationAr: 'الجهة الشمالية الشرقية',
    locationFr: 'Secteur Nord-Est de l\'enceinte',
    builtEraAr: 'تاريخ عريق منذ المرابطين وجدد في العهد السعدي',
    builtEraFr: 'Origines médiévales, remanié par les Saadiens',
    factsAr: [
      'مركز التقاء تجاري لقبائل سوس والأطلس الكبير',
      'يحتفظ ببرج مراقبة استراتيجي وممرات الحرس التاريخية',
      'يؤدي مباشرة إلى المسجد الأعظم ومسجد جنان الجامع'
    ],
    factsFr: [
      'Carrefour d\'échanges intertribaux pluriséculaire',
      'Conserve sa tour de guet supérieure et son chemin de ronde',
      'Mène vers la Grande Mosquée historique et les artères commerçantes'
    ]
  },
  {
    id: 'gate-selsla',
    nameAr: 'باب السلسلة',
    nameFr: 'Bab Selsla',
    descriptionAr: 'الباب المخزني الملكي التاريخي الذي كان مدخلاً خاصاً لقصبة السلطان والوفود الرسمية، سمي بالسلسلة نظراً لوجود سلسلة حديدية ضخمة كانت ترفع لمنع مرور الخيول دون إذن.',
    descriptionFr: 'Porte royale cérémoniale menant à la Kasbah du Sultan. Doit son nom à la lourde chaîne forgée qui filtrait l\'accès des cavaliers royaux.',
    locationAr: 'الواجهة الشمالية بالقرب من القصبة السعدية',
    locationFr: 'Secteur Nord près de la Kasbah historique',
    builtEraAr: 'العهد السعدي الذهبي - عهد أحمد المنصور الذهبي',
    builtEraFr: 'Âge d\'or Saadéen sous Ahmed El Mansour',
    factsAr: [
      'أعلى وأوسع باب في سور تارودانت التذكاري',
      'مدخل الزوار الرسميين والوفود الدبلوماسية قديماً',
      'يعلوه برج مدفعية متطور مصمم وفق الهندسة الدفاعية العسكرية'
    ],
    factsFr: [
      'La porte la plus monumentale de l\'enceinte urbaine',
      'Entrée protocolaire des dignitaires et délégations royales',
      'Bastion supérieur conçu pour les pièces d\'artillerie de bronze'
    ]
  },
  {
    id: 'gate-oulad-bounouna',
    nameAr: 'باب أولاد بنونة',
    nameFr: 'Bab Oulad Bounouna',
    descriptionAr: 'بوابة تاريخية عريقة تصل قلب المدينة بالضواحي الفلاحية، تتميز بهندسة معمارية دفاعية منعرجة (Chicane) لصد أي هجوم مباغت في الأزمنة الغابرة.',
    descriptionFr: 'Porte historique dotée d\'un passage en chicane caractéristique de l\'art militaire marocain destiné à ralentir les charges ennemies.',
    locationAr: 'الجهة الشرقية لتارودانت',
    locationFr: 'Secteur oriental des remparts',
    builtEraAr: 'القرن السادس عشر الميلادي',
    builtEraFr: 'XVIe siècle',
    factsAr: [
      'مدخل ذو انحناء زاوي دفاعي أصيل',
      'يربط المدينة بواحات النخيل الشرقية',
      'يضم مصطبة تاريخية للاستراحة واستقبال القادمين'
    ],
    factsFr: [
      'Tracé coudé traditionnel garantissant la défense de la médina',
      'Connexion directe avec les palmeraies orientales',
      'Comporte une terrasse de repos ombragée historique'
    ]
  }
];

export const sampleTrackingRecords: TrackingRecord[] = [
  {
    trackingId: 'TAR-2026-8941',
    citizenName: 'محمد أمين الإدريسي',
    subjectAr: 'طلب رخصة إصلاح منزل بالمدينة العتيقة (درب الحشيش)',
    subjectFr: 'Demande de permis de réfection en médina (Derb Lhachich)',
    typeAr: 'قسم التعمير والممتلكات',
    typeFr: 'Division de l\'Urbanisme',
    submittedDate: '24 أكتوبر 2026',
    expectedDate: '05 نونبر 2026',
    statusAr: 'جاهز للاستلام بمكتب الضبط',
    statusFr: 'Prêt pour retrait au bureau d\'ordre',
    steps: [
      {
        stepNumber: 1,
        labelAr: 'تسجيل وإيداع الملف الرقمي',
        labelFr: 'Dépôt et enregistrement du dossier',
        date: '24 أكتوبر 2026',
        departmentAr: 'مكتب الضبط المركزي',
        departmentFr: 'Bureau d\'Ordre Central',
        isDone: true,
        isCurrent: false,
        notesAr: 'تم استلام كافة الوثائق والتصاميم مطابقة',
        notesFr: 'Dossier complet et pièces conformes'
      },
      {
        stepNumber: 2,
        labelAr: 'المعاينة الميدانية وموافقة الوكالة الحضرية',
        labelFr: 'Visite de terrain & avis de l\'Agence Urbaine',
        date: '27 أكتوبر 2026',
        departmentAr: 'اللجنة التقنية للتعمير',
        departmentFr: 'Commission Technique d\'Urbanisme',
        isDone: true,
        isCurrent: false,
        notesAr: 'تمت المعاينة مع التأكيد على احترام الطابع الأثري للسور المجاور',
        notesFr: 'Avis favorable avec respect des normes patrimoniales'
      },
      {
        stepNumber: 3,
        labelAr: 'تأشير وموافقة رئيس المجلس الجماعي',
        labelFr: 'Visa & Signature du Président de la Commune',
        date: '29 أكتوبر 2026',
        departmentAr: 'رئاسة الجماعة',
        departmentFr: 'Présidence de la Commune',
        isDone: true,
        isCurrent: false,
        notesAr: 'تم التوقيع الإلكتروني المؤمّن على القرار',
        notesFr: 'Signature électronique sécurisée validée'
      },
      {
        stepNumber: 4,
        labelAr: 'جاهزية الوثيقة للاستلام أو التحميل',
        labelFr: 'Disponibilité du document officiel',
        date: '31 أكتوبر 2026',
        departmentAr: 'شباك الخدمات الموحد',
        departmentFr: 'Guichet Unique Citoyen',
        isDone: true,
        isCurrent: true,
        notesAr: 'يمكنكم الحضور للشباك رقم 3 مصحوبين بالبطاقة الوطنية أو تحميل النسخة الإلكترونية',
        notesFr: 'Retrait disponible au Guichet N°3 ou téléchargement avec QR-code'
      }
    ]
  },
  {
    trackingId: 'TAR-2026-4412',
    citizenName: 'فاطمة الزهراء بنسعيد',
    subjectAr: 'شكاية بخصوص عطب في عمود إنارة عمومية (حي المحايطة)',
    subjectFr: 'Réclamation pour défaillance d\'éclairage public (Hay Lmhaita)',
    typeAr: 'مصلحة الإنارة والشبكات',
    typeFr: 'Service Éclairage Public',
    submittedDate: '29 أكتوبر 2026',
    expectedDate: '01 نونبر 2026',
    statusAr: 'قيد التدخل الميداني من طرف الفريق التقني',
    statusFr: 'Intervention technique de terrain en cours',
    steps: [
      {
        stepNumber: 1,
        labelAr: 'إشعار وتوجيه الشكاية للمصلحة المختصة',
        labelFr: 'Réception et transmission au service technique',
        date: '29 أكتوبر 2026',
        departmentAr: 'منصة الشكايات الذكية',
        departmentFr: 'Cellule Chikaya',
        isDone: true,
        isCurrent: false
      },
      {
        stepNumber: 2,
        labelAr: 'برمجة تدخل الفريق التقني للإنارة',
        labelFr: 'Programmation de l\'équipe de dépannage',
        date: '30 أكتوبر 2026',
        departmentAr: 'مصلحة الصيانة والإنارة',
        departmentFr: 'Service Maintenance & Énergie',
        isDone: true,
        isCurrent: false,
        notesAr: 'تم تعيين فرقة التدخل السريع رقم 2',
        notesFr: 'Équipe d\'intervention rapide affectée'
      },
      {
        stepNumber: 3,
        labelAr: 'إصلاح العطب واستبدال المصباح بـ LED',
        labelFr: 'Réparation et remplacement par LED',
        date: '31 أكتوبر 2026',
        departmentAr: 'فريق التدخل الميداني',
        departmentFr: 'Équipe Terrain',
        isDone: false,
        isCurrent: true,
        notesAr: 'أشغال الصيانة جارية في الموقع اليوم',
        notesFr: 'Travaux de remise en état programmés ce jour'
      },
      {
        stepNumber: 4,
        labelAr: 'إغلاق الشكاية وإشعار المواطن عبر SMS',
        labelFr: 'Clôture de la réclamation et notification SMS',
        date: '01 نونبر 2026',
        departmentAr: 'مصلحة العلاقات مع المرتفقين',
        departmentFr: 'Relations Usagers',
        isDone: false,
        isCurrent: false
      }
    ]
  }
];

export const councilNewsList: NewsArticle[] = [
  {
    id: 'news-1',
    titleAr: 'المجلس الجماعي لتارودانت يصادق بالإجماع على ميزانية سنة 2027 ومشاريع البنية التحتية',
    titleFr: 'Le Conseil Communal adopte à l\'unanimité le budget 2027 et les projets structurants',
    excerptAr: 'خلال دورته العادية لشهر أكتوبر، صادق المجلس على اعتمادات إضافية لتأهيل السير والجولان داخل أسوار المدينة وتوسيع المساحات الخضراء.',
    excerptFr: 'Lors de sa session ordinaire d\'octobre, le Conseil a alloué des crédits prioritaires à la mobilité urbaine intramuros et aux espaces verts.',
    date: '28 أكتوبر 2026',
    categoryAr: 'مقررات المجلس',
    categoryFr: 'Décisions du Conseil',
    readTimeAr: '3 دقائق قراءة',
    readTimeFr: '3 min de lecture'
  },
  {
    id: 'news-2',
    titleAr: 'انطلاق فعاليات ملتقى تارودانت الدولي للصناعة التقليدية وحرف التراث السوسي',
    titleFr: 'Ouverture du Forum International de l\'Artisanat et des Métiers du Patrimoine du Souss',
    excerptAr: 'تظاهرة تراثية كبرى بمشاركة أزيد من 150 صانعاً تقليدياً تسلط الضوء على صناعة الجلد، الفضة، وحرف البناء بالتراب المدكوك.',
    excerptFr: 'Événement culturel majeur réunissant plus de 150 maîtres artisans mettant en lumière le cuir, l\'orfèvrerie berbère et le pisé séculaire.',
    date: '22 أكتوبر 2026',
    categoryAr: 'الثقافة والتراث',
    categoryFr: 'Culture & Tourisme',
    readTimeAr: '4 دقائق قراءة',
    readTimeFr: '4 min de lecture'
  },
  {
    id: 'news-3',
    titleAr: 'إعلان للعموم: تعميم استخراج الشواهد الإدارية وتصحيح الإمضاءات بالمقاطعات الحضرية',
    titleFr: 'Avis public : Généralisation des certificats administratifs dématérialisés dans les arrondissements',
    excerptAr: 'في إطار تقريب الإدارة من المواطنين، أصبح بإمكان المرتفقين إيداع طلبات الشواهد الإدارية وتصحيح الإمضاءات بجميع الملحقات الإدارية بتارودانت.',
    excerptFr: 'Pour fluidifier l\'accueil des usagers, les citoyens peuvent désormais effectuer leurs démarches d\'état civil dans l\'ensemble des annexes communales.',
    date: '15 أكتوبر 2026',
    categoryAr: 'إعلانات إدارية',
    categoryFr: 'Avis Administratifs',
    readTimeAr: '2 دقيقة قراءة',
    readTimeFr: '2 min de lecture'
  }
];

export const modernizationComparison = [
  {
    id: 'mobile',
    titleAr: 'التجاوب الكامل مع الهواتف الذكية (Mobile-First)',
    titleFr: 'Expérience 100% Mobile-First Ergonomique',
    oldPortalAr: 'موقع كلاسيكي غير متجاوب يتطلب التكبير اليدوي، خطوط صغيرة جداً على الشاشات اللمسية وقوائم تنكسر عند التصفح بالهاتف.',
    oldPortalFr: 'Ancien portail rigide conçu pour écran PC, menus cassés sur smartphone, zooming manuel fastidieux.',
    newPortalAr: 'تصميم لمسي انسيابي بأزرار مريحة للإبهام، شريط تنقل سفلي سريع، وأداء فائق السرعة عبر شبكات الهاتف المحمول 4G/5G.',
    newPortalFr: 'Interface tactile fluide optimisée pour l\'usage à une main, barre de navigation basse, chargement instantané.',
    iconName: 'Smartphone'
  },
  {
    id: 'identity',
    titleAr: 'الهوية البصرية المغربية الأصيلة لتارودانت',
    titleFr: 'Identité Visuelle & Architecturale Marocaine',
    oldPortalAr: 'قالب حكومي عام يفتقر إلى روح تارودانت التاريخية مع تكرار عناصر غير متناسقة وألوان باردة غير مرتبطة بهوية المدينة.',
    oldPortalFr: 'Gabarit générique et froid sans lien identitaire avec la riche histoire de Taroudant la Saadienne.',
    newPortalAr: 'ألوان الطين التراثي وسور تارودانت (Pisé Terracotta)، أخضر الزليج الملكي، وزخارف هندسية مغربية تحتفي بلقب "أم مراكش".',
    newPortalFr: 'Harmonie de terre cuite rappelant les remparts en pisé, vert zellige royal et géométries authentiques marocaines.',
    iconName: 'Palette'
  },
  {
    id: 'services',
    titleAr: 'الخدمات الرقمية التفاعلية بدل الروابط المعطلة',
    titleFr: 'Véritables E-Services Interactifs Intégrés',
    oldPortalAr: 'اقتصار الموقع على نشر بلاغات نصية وروابط ملفات PDF ثابتة دون إمكانية إيداع الطلبات أو معرفة مآلها إلكترونياً.',
    oldPortalFr: 'Contenu purement informatif statique avec liens PDF, sans possibilité d\'instruction ou de dépôt direct.',
    newPortalAr: 'شباك إلكتروني متكامل: طلب الشواهد، تراخيص التعمير، إيداع الشكايات مع نظام تتبع آلي بالرقم المرجعي والرسائل القصيرة.',
    newPortalFr: 'Guichet digital interactif : simulateur de pièces, démarches d\'urbanisme, dépôt de réclamations avec code de suivi en temps réel et SMS.',
    iconName: 'Zap'
  },
  {
    id: 'transparency',
    titleAr: 'الحكامة والشفافية التشاركية (Open Data & PAC)',
    titleFr: 'Transparence & Démocratie Participative (PAC)',
    oldPortalAr: 'صعوبة الوصول إلى قرارات المجلس الجماعي وتفاصيل المشاريع ونسب إنجاز برنامج العمل الجماعي.',
    oldPortalFr: 'Accès complexe aux délibérations du conseil et opacité sur l\'état d\'avancement des chantiers de la ville.',
    newPortalAr: 'لوحة قيادة تفاعلية شفافة لبرنامج عمل الجماعة (PAC 2023-2028)، ميزانيات المشاريع، ومحاضر الدورات بلمسة واحدة.',
    newPortalFr: 'Tableau de bord dynamique du Plan d\'Action Communal, budgets détaillés et accès direct aux procès-verbaux.',
    iconName: 'ShieldCheck'
  }
];

export const emergencyHotlines = [
  { nameAr: 'المقر الإداري لرئاسة جماعة تارودانت', nameFr: 'Siège Administratif de la Commune', number: '0661983840', icon: 'Building' },
  { nameAr: 'المكتب الصحي البلدي (حفظ الصحة)', nameFr: 'Bureau Municipal d\'Hygiène', number: '05 28 85 24 10', icon: 'HeartPulse' },
  { nameAr: 'مصلحة الإنارة العمومية والشبكات', nameFr: 'Éclairage Public & Réseaux', number: '05 28 85 11 22', icon: 'Lightbulb' },
  { nameAr: 'المداومة والنظافة الحضرية', nameFr: 'Propreté Urbaine & Collecte', number: '05 28 85 30 00', icon: 'Trash2' },
  { nameAr: 'الوقاية المدنية تارودانت', nameFr: 'Protection Civile (Pompiers)', number: '150', icon: 'Flame' },
  { nameAr: 'الأمن الوطني (الشرطة)', nameFr: 'Sûreté Nationale (Police)', number: '190', icon: 'Shield' },
  { nameAr: 'الدرك الملكي سرية تارودانت', nameFr: 'Gendarmerie Royale', number: '177', icon: 'Compass' },
  { nameAr: 'طوارئ الماء الصالح للشرب (ONEE)', nameFr: 'Dépannage Eau Potable', number: '080 200 77 77', icon: 'Droplets' },
  { nameAr: 'طوارئ الكهرباء (ONEE)', nameFr: 'Dépannage Électricité', number: '080 200 77 77', icon: 'Zap' }
];
