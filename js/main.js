// Main JavaScript - Header, Navigation, Theme Toggle, Smooth Scroll, Form Handling

// Sticky Header
class StickyHeader {
    constructor() {
        this.header = document.getElementById('header');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        });
    }
}

// Mobile Menu
class MobileMenu {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.overlay = document.getElementById('mobileNavOverlay');
        this.backdrop = document.querySelector('.mobile-nav-backdrop');
        this.navLinks = document.querySelectorAll('.mobile-nav-link');
        this.init();
    }

    init() {
        if (!this.menuToggle || !this.overlay) return;

        // Toggle Menu
        this.menuToggle.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Close on Backdrop Click
        if (this.backdrop) {
            this.backdrop.addEventListener('click', () => {
                this.closeMenu();
            });
        }

        // Close on Link Click
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close on Escape Key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        const isActive = this.menuToggle.classList.contains('active');
        if (isActive) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.menuToggle.classList.add('active');
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock scroll
    }

    closeMenu() {
        this.menuToggle.classList.remove('active');
        this.overlay.classList.remove('active');
        document.body.style.overflow = ''; // Unlock scroll
    }
}

// Theme Toggle
class ThemeToggle {
    constructor() {
        this.toggle = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);

        // Toggle theme on click
        this.toggle.addEventListener('click', () => {
            const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
        });
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
}

// Smooth Scroll
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');

                // Skip if it's just "#"
                if (href === '#') {
                    e.preventDefault();
                    return;
                }

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Active Navigation Link
class ActiveNavigation {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            let current = '';

            this.sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    initComponents() {
        // Initialize Components
        const projectsManager = new ProjectsManager();
        const testimonialsSlider = new TestimonialsSlider();

        // Render FAQ
        if (testimonialsSlider.renderFAQ) {
            testimonialsSlider.renderFAQ();
        }

        // Re-render components on language change
        document.addEventListener('languageChanged', () => {
            projectsManager.renderProjects();
            testimonialsSlider.renderTestimonials();
            if (testimonialsSlider.renderFAQ) {
                testimonialsSlider.renderFAQ();
            }
        });
    }

    async handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // Show loading state
        const submitBtn = this.form.querySelector('.btn-submit');
        const originalText = submitBtn.querySelector('span').textContent;
        submitBtn.querySelector('span').textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success message
            this.showMessage('success', 'Message sent successfully! I\'ll get back to you soon.');

            // Reset form
            this.form.reset();

            // Reset button
            submitBtn.querySelector('span').textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    }

    showMessage(type, message) {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = message;

        // Insert after form
        this.form.parentNode.insertBefore(messageEl, this.form.nextSibling);

        // Animate in
        setTimeout(() => messageEl.classList.add('show'), 100);

        // Remove after 5 seconds
        setTimeout(() => {
            messageEl.classList.remove('show');
            setTimeout(() => messageEl.remove(), 300);
        }, 5000);
    }
}

// Lazy Loading Images
class LazyLoadImages {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        }
    }
}

// Update current year in footer
function updateYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

class DesktopNav {
    constructor() {
        this.nav = document.querySelector('.desktop-nav');
        this.indicator = document.querySelector('.nav-active-indicator');
        this.links = document.querySelectorAll('.desktop-nav .nav-link');
        this.sections = document.querySelectorAll('section');
        this.init();
    }

    init() {
        if (!this.nav || !this.indicator) return;

        // Set initial position
        this.updateActiveLink();

        // Update on scroll
        window.addEventListener('scroll', () => {
            this.updateActiveLink();
        });

        // Update on resize
        window.addEventListener('resize', () => {
            this.updateIndicator(document.querySelector('.desktop-nav .nav-link.active'));
        });

        // Hover effects
        this.links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                this.updateIndicator(link);
            });
        });

        // Reset to active on mouseleave
        this.nav.addEventListener('mouseleave', () => {
            const activeLink = document.querySelector('.desktop-nav .nav-link.active');
            this.updateIndicator(activeLink);
        });
    }

    updateActiveLink() {
        let current = '';
        const scrollY = window.scrollY;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        this.links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
                // Only update indicator if not hovering
                if (!this.nav.matches(':hover')) {
                    this.updateIndicator(link);
                }
            }
        });
    }

    updateIndicator(element) {
        if (!element) {
            this.indicator.style.opacity = '0';
            return;
        }

        const navRect = this.nav.getBoundingClientRect();
        const elRect = element.getBoundingClientRect();

        // Calculate relative position
        const left = elRect.left - navRect.left;
        const width = elRect.width;

        this.indicator.style.left = `${left}px`;
        this.indicator.style.width = `${width}px`;
        this.indicator.style.opacity = '1';
    }
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    new StickyHeader();
    new MobileMenu();
    new DesktopNav();
    new ThemeToggle();
    new SmoothScroll();
    new ActiveNavigation();
    new ContactForm();
    new LazyLoadImages();
    updateYear();

    // Dispatch custom event when language changes
    const originalSetLanguage = window.languageManager?.setLanguage;
    if (originalSetLanguage && window.languageManager) {
        window.languageManager.setLanguage = function (lang) {
            originalSetLanguage.call(this, lang);
            document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        };
    }
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is hidden
        document.body.classList.add('page-hidden');
    } else {
        // Resume animations when page is visible
        document.body.classList.remove('page-hidden');
    }
});
