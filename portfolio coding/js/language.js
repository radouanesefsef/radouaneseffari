// Language Switcher with RTL Support
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
        this.init();
    }

    init() {
        // Set initial language
        this.setLanguage(this.currentLang);

        // Language switcher buttons in header
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
            });
        });

        // Language switcher buttons in footer
        const footerLangButtons = document.querySelectorAll('.lang-btn-footer');
        footerLangButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
            });
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);

        // Update HTML lang and dir attributes
        const html = document.documentElement;
        html.setAttribute('lang', lang);

        // Set RTL for Arabic
        if (lang === 'ar') {
            html.setAttribute('dir', 'rtl');
            document.body.classList.add('rtl');
        } else {
            html.setAttribute('dir', 'ltr');
            document.body.classList.remove('rtl');
        }

        // Update active button states
        this.updateActiveButtons(lang);

        // Translate all elements
        this.translatePage(lang);

        // Update typing animation text
        if (window.typingAnimation) {
            window.typingAnimation.updateLanguage(lang);
        }
    }

    updateActiveButtons(lang) {
        // Header buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Footer buttons
        document.querySelectorAll('.lang-btn-footer').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    translatePage(lang) {
        // Get translations for the selected language
        const translations = window.translations[lang];

        if (!translations) {
            console.error(`Translations for ${lang} not found`);
            return;
        }

        // Translate all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                // Handle different element types
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[key];
                } else if (element.tagName === 'OPTION') {
                    element.textContent = translations[key];
                } else {
                    // For elements with HTML content (like buttons with icons)
                    if (element.querySelector('svg')) {
                        // Keep the SVG and only update text
                        const svg = element.querySelector('svg');
                        element.innerHTML = `<span>${translations[key]}</span>`;
                        element.appendChild(svg);
                    } else {
                        element.textContent = translations[key];
                    }
                }
            }
        });
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});
