// ===================================
// FIXED VERSION - FAQ now works properly
// ===================================

// Projects Data
const projectsData = [
    {
        id: 1,
        title: {
            en: 'Networks & More Store',
            fr: 'Boutique Networks & More',
            ar: 'متجر الشبكات والمزيد'
        },
        category: 'ecommerce',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
        description: {
            en: 'A comprehensive Arabic e-commerce platform for networking equipment. Features advanced filtering, dual-language support, and seamless payment integration.',
            fr: 'Une plateforme e-commerce arabe complète pour les équipements réseau. Comprend un filtrage avancé, un support bilingue et une intégration de paiement transparente.',
            ar: 'منصة تجارة إلكترونية عربية شاملة لمعدات الشبكات. تتميز بتصفية متقدمة، دعم ثنائي اللغة، وتكامل سلس للدفع.'
        },
        tags: ['WordPress', 'WooCommerce', 'RTL Support', 'Payment Gateway'],
        link: 'https://networksandmore.com.sa/store/?lang=ar'
    },
    {
        id: 2,
        title: {
            en: 'Spectra Baby',
            fr: 'Spectra Baby',
            ar: 'سبيكترا بيبي'
        },
        category: 'ecommerce',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800',
        description: {
            en: 'Official distributor website for Spectra Baby products. Built with a focus on trust, cleanliness, and user experience for new mothers.',
            fr: 'Site officiel du distributeur des produits Spectra Baby. Construit en mettant l\'accent sur la confiance, la propreté et l\'expérience utilisateur pour les nouvelles mères.',
            ar: 'الموقع الرسمي لموزع منتجات سبيكترا بيبي. تم بناؤه مع التركيز على الثقة والنظافة وتجربة المستخدم للأمهات الجدد.'
        },
        tags: ['WordPress', 'Elementor', 'Brand Identity', 'Product Catalog'],
        link: 'https://spectrababy.sa/'
    },
    {
        id: 3,
        title: {
            en: 'Dadem Phone',
            fr: 'Dadem Phone',
            ar: 'دادم فون'
        },
        category: 'ecommerce',
        image: 'https://images.unsplash.com/photo-1592899677712-a5a2542dcaf5?auto=format&fit=crop&q=80&w=800',
        description: {
            en: 'High-performance electronics e-commerce store. Optimized for speed and handling large product inventories with dynamic search.',
            fr: 'Boutique en ligne d\'électronique haute performance. Optimisée pour la vitesse et la gestion de grands inventaires de produits avec recherche dynamique.',
            ar: 'متجر إلكترونيات عالي الأداء. محسن للسرعة والتعامل مع مخزونات كبيرة من المنتجات مع بحث ديناميكي.'
        },
        tags: ['WooCommerce', 'Speed Optimization', 'Mobile First', 'UI/UX'],
        link: 'https://dademphone.com/'
    },
    {
        id: 4,
        title: {
            en: 'Upass Academy',
            fr: 'Académie Upass',
            ar: 'أكاديمية يوباس'
        },
        category: 'education',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
        description: {
            en: 'Educational platform offering courses and resources. Features include LMS integration, student progress tracking, and secure video hosting.',
            fr: 'Plateforme éducative proposant des cours et des ressources. Les fonctionnalités incluent l\'intégration LMS, le suivi des progrès des étudiants et l\'hébergement vidéo sécurisé.',
            ar: 'منصة تعليمية تقدم دورات وموارد. تشمل الميزات تكامل نظام إدارة التعلم، تتبع تقدم الطلاب، واستضافة فيديو آمنة.'
        },
        tags: ['WordPress', 'LMS', 'Membership', 'Video Integration'],
        link: 'https://upass.academy/'
    },
    {
        id: 5,
        title: {
            en: 'Pas Ninja Shop',
            fr: 'Boutique Pas Ninja',
            ar: 'متجر باس نينجا'
        },
        category: 'ecommerce',
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
        description: {
            en: 'Modern online shop with a unique aesthetic. Custom checkout flow and integrated social proof elements to boost conversions.',
            fr: 'Boutique en ligne moderne avec une esthétique unique. Flux de paiement personnalisé et éléments de preuve sociale intégrés pour augmenter les conversions.',
            ar: 'متجر حديث على الإنترنت بجمالية فريدة. تدفق دفع مخصص وعناصر إثبات اجتماعي مدمجة لتعزيز التحويلات.'
        },
        tags: ['WooCommerce', 'Custom Theme', 'Conversion Rate Opt', 'Analytics'],
        link: 'https://pasninjashop.com/'
    }
];

// Testimonials Data
const testimonialsData = [
    {
        id: 1,
        name: "Ahmed Al-Rashid",
        role: { en: "CEO, TechFlow", fr: "PDG, TechFlow", ar: "المدير التنفيذي، تك فلو" },
        location: { en: "Saudi Arabia", fr: "Arabie Saoudite", ar: "السعودية" },
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
        rating: 5,
        text: {
            en: "Radouane transformed our slow corporate site into a lightning-fast platform. Our PageSpeed score jumped from 55 to 98! His communication was clear throughout the 3-week project, and he even provided a video guide for our team.",
            fr: "Radouane a transformé notre site lent en une plateforme ultra-rapide. Notre score PageSpeed est passé de 55 à 98 ! Sa communication était claire tout au long du projet de 3 semaines.",
            ar: "حول رضوان موقعنا البطيء إلى منصة فائقة السرعة. قفزت سرعة الصفحة من 55 إلى 98! كان تواصله واضحاً طوال المشروع الذي استغرق 3 أسابيع."
        }
    },
    {
        id: 2,
        name: "Elena Rossi",
        role: { en: "Creative Director", fr: "Directrice Créative", ar: "مديرة إبداعية" },
        location: { en: "Italy", fr: "Italie", ar: "إيطاليا" },
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
        rating: 5,
        text: {
            en: "I was worried about not having a design background, but Radouane took my rough ideas and built a stunning portfolio. The animations are subtle but professional. Highly recommend for any creative looking to showcase their work.",
            fr: "Je m'inquiétais de ne pas avoir de compétences en design, mais Radouane a pris mes idées brutes et a construit un portfolio époustouflant. Les animations sont subtiles mais professionnelles.",
            ar: "كنت قلقة بشأن عدم وجود خلفية في التصميم، لكن رضوان أخذ أفكاري الأولية وبنى معرض أعمال مذهل. الرسوم المتحركة دقيقة واحترافية."
        }
    },
    {
        id: 3,
        name: "Omar Hassan",
        role: { en: "E-commerce Manager", fr: "Responsable E-commerce", ar: "مدير التجارة الإلكترونية" },
        location: { en: "UAE", fr: "EAU", ar: "الإمارات" },
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
        rating: 5,
        text: {
            en: "We needed a complex WooCommerce setup with multi-currency support. Radouane handled the technical challenges effortlessly. Sales increased by 40% in the first month after re-launch.",
            fr: "Nous avions besoin d'une configuration WooCommerce complexe avec support multi-devises. Radouane a géré les défis techniques sans effort. Les ventes ont augmenté de 40% le premier mois suivant la relance.",
            ar: "كنا بحاجة إلى إعداد WooCommerce معقد مع دعم متعدد العملات. تعامل رضوان مع التحديات التقنية بسهولة. زادت المبيعات بنسبة 40٪ في الشهر الأول بعد إعادة الإطلاق."
        }
    },
    {
        id: 4,
        name: "Sofia Martinez",
        role: { en: "Marketing Lead", fr: "Responsable Marketing", ar: "رئيس التسويق" },
        location: { en: "Spain", fr: "Espagne", ar: "إسبانيا" },
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
        rating: 5,
        text: {
            en: "Professional, punctual, and incredibly skilled. He didn't just build a website; he built a lead generation machine. The integration with our CRM works perfectly.",
            fr: "Professionnel, ponctuel et incroyablement compétent. Il n'a pas seulement construit un site web ; il a construit une machine à générer des prospects. L'intégration avec notre CRM fonctionne parfaitement.",
            ar: "محترف، دقيق في المواعيد، وماهر بشكل لا يصدق. لم يبن مجرد موقع ويب؛ بل بنى آلة لتوليد العملاء المحتملين. التكامل مع نظام إدارة علاقات العملاء لدينا يعمل بشكل مثالي."
        }
    },
    {
        id: 5,
        name: "Marcus Weber",
        role: { en: "Startup Founder", fr: "Fondateur de Startup", ar: "مؤسس شركة ناشئة" },
        location: { en: "Germany", fr: "Allemagne", ar: "ألمانيا" },
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
        rating: 5,
        text: {
            en: "Radouane is a true partner. He suggested features we hadn't thought of that improved user retention. The multilingual support implementation was flawless.",
            fr: "Radouane est un véritable partenaire. Il a suggéré des fonctionnalités auxquelles nous n'avions pas pensé qui ont amélioré la rétention des utilisateurs. La mise en œuvre du support multilingue a été impeccable.",
            ar: "رضوان شريك حقيقي. اقترح ميزات لم نفكر فيها حسنت من الاحتفاظ بالمستخدمين. كان تنفيذ الدعم متعدد اللغات لا تشوبه شائبة."
        }
    },
    {
        id: 6,
        name: "Layla Al-Farsi",
        role: { en: "Boutique Owner", fr: "Propriétaire de Boutique", ar: "صاحبة متجر" },
        location: { en: "Oman", fr: "Oman", ar: "عمان" },
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        rating: 5,
        text: {
            en: "Beautiful design and fast delivery! My customers love the new site. It's easy for me to update products, and the Arabic version looks perfect.",
            fr: "Design magnifique et livraison rapide ! Mes clients adorent le nouveau site. Il est facile pour moi de mettre à jour les produits, et la version arabe est parfaite.",
            ar: "تصميم جميل وتسليم سريع! عملائي يحبون الموقع الجديد. من السهل علي تحديث المنتجات، والنسخة العربية تبدو مثالية."
        }
    }
];

// FAQ Data - CRITICAL: Must be defined before FAQManager class
const faqData = [
    {
        id: 1,
        question: { en: "How long does a typical WordPress project take?", fr: "Combien de temps dure un projet WordPress typique ?", ar: "كم يستغرق مشروع ووردبريس النموذجي؟" },
        answer: {
            en: "Timelines vary by complexity. A standard brochure site normally takes 1-2 weeks, while a custom E-commerce platform may take 3-5 weeks. I provide a detailed schedule before we start.",
            fr: "Les délais varient selon la complexité. Un site vitrine standard prend normalement 1 à 2 semaines, tandis qu'une plateforme E-commerce personnalisée peut prendre 3 à 5 semaines.",
            ar: "تختلف المواعيد حسب التعقيد. يستغرق الموقع التعريفي القياسي عادةً 1-2 أسبوع، بينما قد تستغرق منصة التجارة الإلكترونية المخصصة 3-5 أسابيع."
        },
        category: "project"
    },
    {
        id: 2,
        question: { en: "What is your development process?", fr: "Quel est votre processus de développement ?", ar: "ما هي عملية التطوير الخاصة بك؟" },
        answer: {
            en: "I follow a structured 5-step process: Discovery (Discussions), Planning (Sitemap/Wireframes), Design & Development, Testing (QA/Mobile Check), and finally Launch & Training.",
            fr: "Je suis un processus structuré en 5 étapes : Découverte, Planification, Design & Développement, Tests, et enfin Lancement & Formation.",
            ar: "أتبع عملية منظمة من 5 خطوات: الاكتشاف (المناقشات)، التخطيط، التصميم والتطوير، الاختبار، وأخيراً الإطلاق والتدريب."
        },
        category: "project"
    },
    {
        id: 3,
        question: { en: "Do I need to provide the content (text/images)?", fr: "Dois-je fournir le contenu (texte/images) ?", ar: "هل أحتاج إلى توفير المحتوى (النصوص/الصور)؟" },
        answer: {
            en: "Ideally, yes. You know your business best. However, if you need help, I can provide placeholder content or recommend professional copywriters and stock image resources.",
            fr: "Idéalement, oui. Vous connaissez mieux votre entreprise. Cependant, si vous avez besoin d'aide, je peux fournir du contenu fictif ou recommander des rédacteurs professionnels.",
            ar: "من الناحية المثالية، نعم. أنت تعرف عملك بشكل أفضل. ومع ذلك، إذا كنت بحاجة إلى مساعدة، فيمكنني توفير محتوى مؤقت أو التوصية بكتاب نصوص محترفين."
        },
        category: "project"
    },
    {
        id: 4,
        question: { en: "What is your pricing structure?", fr: "Quelle est votre structure tarifaire ?", ar: "ما هي هيكلية التسعير لديك؟" },
        answer: {
            en: "I offer project-based pricing to keep things transparent. No hidden hourly fees. Payments are typically split 50% upfront and 50% upon successful completion.",
            fr: "Je propose une tarification par projet pour plus de transparence. Pas de frais horaires cachés. Les paiements sont généralement divisés en 50% d'acompte et 50% à la fin.",
            ar: "أقدم تسعيراً قائماً على المشروع للحفاظ على الشفافية. لا رسوم خفية بالساعة. يتم تقسيم المدفوعات عادة 50٪ مقدماً و 50٪ عند الانتهاء بنجاح."
        },
        category: "business"
    },
    {
        id: 5,
        question: { en: "What payment methods do you accept?", fr: "Quels moyens de paiement acceptez-vous ?", ar: "ما هي طرق الدفع التي تقبلها؟" },
        answer: {
            en: "I accept payments via Bank Transfer, PayPal, and Wise. For local clients in Algeria, I also accept CCP or BaridiMob transfers.",
            fr: "J'accepte les paiements par virement bancaire, PayPal et Wise. Pour les clients locaux en Algérie, j'accepte également les virements CCP ou BaridiMob.",
            ar: "أقبل الدفع عن طريق التحويل البنكي، PayPal، و Wise. بالنسبة للعملاء المحليين في الجزائر، أقبل أيضاً تحويلات CCP أو BaridiMob."
        },
        category: "business"
    },
    {
        id: 6,
        question: { en: "Do you provide SEO optimization?", fr: "Proposez-vous une optimisation SEO ?", ar: "هل تقدم تحسين محركات البحث (SEO)؟" },
        answer: {
            en: "Yes! All websites are built with SEO best practices: fast loading speeds, mobile responsiveness, semantic HTML, and I configure Yoast SEO or RankMath for you.",
            fr: "Oui ! Tous les sites sont construits avec les meilleures pratiques SEO : vitesse de chargement, adaptabilité mobile, HTML sémantique, et je configure Yoast SEO ou RankMath pour vous.",
            ar: "نعم! يتم بناء جميع المواقع وفقاً لأفضل ممارسات السيو: سرعة التحميل، التجاوب مع الجوال، HTML دلالي، وأقوم بتهيئة Yoast SEO أو RankMath لك."
        },
        category: "technical"
    },
    {
        id: 7,
        question: { en: "Will my website be mobile-friendly?", fr: "Mon site web sera-t-il adapté aux mobiles ?", ar: "هل سيكون موقع الويب الخاص بي متجاوباً مع الجوال؟" },
        answer: {
            en: "Absolutely. I take a 'Mobile-First' approach, ensuring your site looks and works perfectly on smartphones, tablets, and desktop computers.",
            fr: "Absolument. J'adopte une approche 'Mobile-First', garantissant que votre site fonctionne parfaitement sur smartphones, tablettes et ordinateurs.",
            ar: "بالتأكيد. أتبع نهج 'الجوال أولاً'، لضمان أن موقعك يبدو ويعمل بشكل مثالي على الهواتف الذكية والأجهزة اللوحية وأجهزة الكمبيوتر."
        },
        category: "technical"
    },
    {
        id: 8,
        question: { en: "Do I need to buy hosting/domain before we start?", fr: "Dois-je acheter l'hébergement/domaine avant de commencer ?", ar: "هل أحتاج لشراء الاستضافة/النطاق قبل البدء؟" },
        answer: {
            en: "Not necessarily. I can guide you to choose the best hosting provider and domain name for your needs. I can also help you set them up as part of the service.",
            fr: "Pas nécessairement. Je peux vous guider pour choisir le meilleur hébergeur et nom de domaine. Je peux aussi vous aider à les configurer.",
            ar: "ليس بالضرورة. يمكنني توجيهك لاختيار أفضل مزود استضافة واسم نطاق لاحتياجاتك. يمكنني أيضاً مساعدتك في إعدادها كجزء من الخدمة."
        },
        category: "technical"
    },
    {
        id: 9,
        question: { en: "Can you create a multilingual website?", fr: "Pouvez-vous créer un site web multilingue ?", ar: "هل يمكنك إنشاء موقع ويب متعدد اللغات؟" },
        answer: {
            en: "Yes, exactly like this portfolio! I specialize in building multilingual sites (English, French, Arabic) with full RTL (Right-to-Left) support for Arabic users.",
            fr: "Oui, exactement comme ce portfolio ! Je suis spécialisé dans la création de sites multilingues (anglais, français, arabe) avec support RTL complet.",
            ar: "نعم، تماماً مثل هذا المعرض! أنا متخصص في بناء مواقع متعددة اللغات (الإنجليزية، الفرنسية، العربية) مع دعم كامل لاتجاه الكتابة من اليمين لليسار."
        },
        category: "technical"
    },
    {
        id: 10,
        question: { en: "Can you maintain my site after launch?", fr: "Pouvez-vous maintenir mon site après le lancement ?", ar: "هل يمكنك صيانة موقعي بعد الإطلاق؟" },
        answer: {
            en: "Absolutely. I offer monthly maintenance packages that include backups, security updates, plugin updates, and small content edits to keep your site running smoothly.",
            fr: "Absolument. Je propose des forfaits de maintenance mensuels incluant sauvegardes, mises à jour de sécurité et petites modifications de contenu.",
            ar: "بالتأكيد. أقدم باقات صيانة شهرية تشمل النسخ الاحتياطي، تحديثات الأمان، تحديثات الإضافات، وتعديلات المحتوى الصغيرة."
        },
        category: "post-launch"
    },
    {
        id: 11,
        question: { en: "Will you teach me how to manage the site?", fr: "Allez-vous m'apprendre à gérer le site ?", ar: "هل ستعلمني كيفية إدارة الموقع؟" },
        answer: {
            en: "Yes, I provide a personalized video tutorial explaining how to edit text, change images, and add new posts/products so you feel confident managing your site.",
            fr: "Oui, je fournis un tutoriel vidéo personnalisé expliquant comment modifier le texte, changer les images et ajouter de nouveaux articles/produits.",
            ar: "نعم، أقدم فيديو تعليمي مخصص يشرح كيفية تعديل النص، تغيير الصور، وإضافة منشورات/منتجات جديدة لتشعر بالثقة في إدارة موقعك."
        },
        category: "post-launch"
    },
    {
        id: 12,
        question: { en: "What if I need changes after the launch?", fr: "Et si j'ai besoin de modifications après le lancement ?", ar: "ماذا لو احتجت إلى تغييرات بعد الإطلاق؟" },
        answer: {
            en: "Minor tweaks are included in the 30-day support period. For larger changes or new features later on, we can discuss a separate quote or use my hourly rate.",
            fr: "Les ajustements mineurs sont inclus dans la période de support de 30 jours. Pour les changements plus importants, nous pouvons discuter d'un devis séparé.",
            ar: "التعديلات الطفيفة مشمولة في فترة الدعم لمدة 30 يوماً. بالنسبة للتغييرات الكبيرة أو الميزات الجديدة لاحقاً، يمكننا مناقشة عرض سعر منفصل."
        },
        category: "post-launch"
    },
    {
        id: 13,
        question: { en: "How do you handle website security?", fr: "Comment gérez-vous la sécurité du site web ?", ar: "كيف تتعامل مع أمان الموقع؟" },
        answer: {
            en: "I implement strict security measures including SSL installation, firewall configuration, limited login attempts, and daily backups to protect your site from threats.",
            fr: "Je mets en œuvre des mesures de sécurité strictes, notamment l'installation SSL, la configuration du pare-feu et les sauvegardes quotidiennes pour protéger votre site.",
            ar: "أطبق إجراءات أمنية صارمة تشمل تثبيت SSL، تكوين الجدار الناري، تحديد محاولات الدخول، والنسخ الاحتياطي اليومي لحماية موقعك من التهديدات."
        },
        category: "technical"
    },
    {
        id: 14,
        question: { en: "How will we communicate during the project?", fr: "Comment communiquerons-nous pendant le projet ?", ar: "كيف سنتواصل خلال المشروع؟" },
        answer: {
            en: "We can communicate via Email, WhatsApp, or Zoom. I provide weekly updates and am available for quick questions throughout the development process.",
            fr: "Nous pouvons communiquer par e-mail, WhatsApp ou Zoom. Je fournis des mises à jour hebdomadaires et je suis disponible pour des questions rapides.",
            ar: "يمكننا التواصل عبر البريد الإلكتروني، واتساب، أو زووم. أقدم تحديثات أسبوعية وأنا متاح للإجابة على الأسئلة السريعة طوال عملية التطوير."
        },
        category: "project"
    }
];

// Projects Component
class ProjectsManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
        this.init();
    }

    init() {
        // Projects are now static HTML with data-translate attributes
        // No JS rendering needed
    }

    renderProjects() {
        // Static implementation
    }
}

// Testimonials Slider Component
class TestimonialsSlider {
    constructor() {
        this.currentIndex = 0;
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
        this.track = document.querySelector('.testimonials-track');
        this.init();
    }

    init() {
        this.renderTestimonials();
        this.setupControls();
        this.startAutoPlay();

        document.addEventListener('languageChanged', (e) => {
            this.currentLang = e.detail.lang;
            this.renderTestimonials();
        });
    }

    renderTestimonials() {
        if (!this.track) return;
        this.track.innerHTML = testimonialsData.map(t => `
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <div class="quote-icon">❝</div>
                    <p class="testimonial-text">${t.text[this.currentLang]}</p>
                    <div class="rating">★★★★★</div>
                </div>
                <div class="testimonial-author">
                    <img src="${t.image}" alt="${t.name}" class="author-img">
                    <div class="author-info">
                        <h4>${t.name}</h4>
                        <span>${t.role[this.currentLang]}</span>
                        <small>${t.location[this.currentLang]}</small>
                    </div>
                </div>
            </div>
        `).join('');
    }

    setupControls() {
        const prevBtn = document.querySelector('.slider-btn.prev');
        const nextBtn = document.querySelector('.slider-btn.next');

        if (prevBtn) prevBtn.addEventListener('click', () => {
            this.slide('prev');
            this.resetAutoPlay();
        });

        if (nextBtn) nextBtn.addEventListener('click', () => {
            this.slide('next');
            this.resetAutoPlay();
        });

        if (this.track && this.track.parentElement) {
            this.track.parentElement.addEventListener('mouseenter', () => this.stopAutoPlay());
            this.track.parentElement.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }

    slide(direction) {
        if (!this.track || !this.track.children.length) return;
        const cardWidth = this.track.children[0].offsetWidth || 300;
        const gap = 32;
        const totalWidth = cardWidth + gap;

        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % testimonialsData.length;
        } else {
            this.currentIndex = (this.currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
        }

        this.track.style.transform = `translateX(-${this.currentIndex * totalWidth}px)`;
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.slide('next'), 5000);
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// FAQ Manager Class
class FAQManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.renderFAQ());
        } else {
            this.renderFAQ();
        }

        document.addEventListener('languageChanged', (e) => {
            this.currentLang = e.detail.lang;
            this.renderFAQ();
        });
    }

    renderFAQ() {
        const faqGrid = document.getElementById('faq-grid');

        if (!faqGrid) {
            console.error('FAQ Grid container (#faq-grid) not found in HTML!');
            return;
        }

        if (typeof faqData === 'undefined' || !Array.isArray(faqData) || faqData.length === 0) {
            console.error('FAQ Data is missing or empty');
            faqGrid.innerHTML = '<p class="error-text" style="text-align:center;color:#888;">FAQ Data could not be loaded.</p>';
            return;
        }

        console.log('✅ Rendering', faqData.length, 'FAQ items...');

        try {
            faqGrid.innerHTML = faqData.map((item) => `
                <div class="faq-item">
                    <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${item.id}">
                        <span class="question-text">${item.question[this.currentLang] || item.question['en']}</span>
                        <span class="faq-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </span>
                    </button>
                    <div class="faq-answer" id="faq-answer-${item.id}" hidden>
                        <div class="answer-content">
                            <p>${item.answer[this.currentLang] || item.answer['en']}</p>
                        </div>
                    </div>
                </div>
            `).join('');

            this.attachListeners(faqGrid);
            console.log('✅ FAQ rendered successfully');
        } catch (error) {
            console.error('❌ Error rendering FAQ:', error);
            faqGrid.innerHTML = '<p class="error-text" style="text-align:center;color:#888;">Unable to load FAQs. Please refresh the page.</p>';
        }
    }

    attachListeners(container) {
        const questions = container.querySelectorAll('.faq-question');
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const isExpanded = question.getAttribute('aria-expanded') === 'true';

                // Close all others
                questions.forEach(q => {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.hidden = true;
                });

                // Toggle current
                if (!isExpanded) {
                    question.setAttribute('aria-expanded', 'true');
                    question.nextElementSibling.hidden = false;
                }
            });
        });
    }
}

// Initialize all components
console.log('🚀 Components.js loaded');

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
} else {
    initComponents();
}

function initComponents() {
    console.log('🎯 Initializing Portfolio Components...');

    try {
        console.log('▶️ Starting ProjectsManager...');
        new ProjectsManager();
    } catch (e) {
        console.error('❌ ProjectsManager failed:', e);
    }

    try {
        console.log('▶️ Starting TestimonialsSlider...');
        new TestimonialsSlider();
    } catch (e) {
        console.error('❌ TestimonialsSlider failed:', e);
    }

    try {
        console.log('▶️ Starting FAQManager...');
        new FAQManager();
    } catch (e) {
        console.error('❌ FAQManager failed:', e);
    }

    console.log('✅ All components initialized');
}