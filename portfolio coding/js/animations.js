// Typing Animation
class TypingAnimation {
    constructor(element) {
        this.element = element;
        this.currentLang = 'en';
        this.texts = {
            en: [
                'WordPress Developer',
                'Elementor Expert',
                'Performance Optimizer',
                'WooCommerce Specialist'
            ],
            fr: [
                'Développeur WordPress',
                'Expert Elementor',
                'Optimiseur de Performance',
                'Spécialiste WooCommerce'
            ],
            ar: [
                'مطور ووردبريس',
                'خبير إليمنتور',
                'محسن الأداء',
                'متخصص ووكومرس'
            ]
        };
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.typingSpeed = 100;
        this.deletingSpeed = 50;
        this.pauseTime = 2000;

        this.type();
    }

    updateLanguage(lang) {
        this.currentLang = lang;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.element.textContent = '';
    }

    type() {
        const currentTexts = this.texts[this.currentLang];
        const currentText = currentTexts[this.textIndex];

        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let timeout = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            timeout = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % currentTexts.length;
            timeout = 500;
        }

        setTimeout(() => this.type(), timeout);
    }
}

// Counter Animation
class CounterAnimation {
    constructor(element) {
        this.element = element;
        this.target = parseInt(element.dataset.count);
        this.current = 0;
        this.increment = this.target / 100;
        this.hasAnimated = false;
    }

    animate() {
        if (this.hasAnimated) return;

        this.hasAnimated = true;
        const updateCounter = () => {
            this.current += this.increment;

            if (this.current < this.target) {
                this.element.textContent = Math.ceil(this.current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                this.element.textContent = this.target + '+';
            }
        };

        updateCounter();
    }
}

// Scroll Reveal Animation (Enhanced)
class ScrollReveal {
    constructor() {
        this.observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        this.init();
    }

    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add delay based on stagger index if present
                    if (entry.target.classList.contains('stagger-item')) {
                        const delay = entry.target.dataset.delay || (index * 100);
                        setTimeout(() => {
                            entry.target.classList.add('active');
                        }, delay);
                    } else {
                        entry.target.classList.add('active');
                    }

                    // Trigger skill bars
                    if (entry.target.classList.contains('skill-progress')) {
                        entry.target.style.width = entry.target.dataset.width;
                    }

                    // Trigger counters
                    if (entry.target.classList.contains('stat-number')) {
                        new CounterAnimation(entry.target).animate();
                    }

                    this.observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        this.observeElements();
    }

    observeElements() {
        // Observe sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('reveal');
            this.observer.observe(section);
        });

        // Observe skill bars
        document.querySelectorAll('.skill-progress').forEach(bar => {
            this.observer.observe(bar);
        });

        // Observe stats
        document.querySelectorAll('.stat-number').forEach(stat => {
            this.observer.observe(stat);
        });

        // Observe Stagger Items (Cards)
        document.querySelectorAll('.service-card, .project-card, .testimonial-card').forEach((el, i) => {
            el.classList.add('reveal', 'stagger-item');
            el.dataset.delay = (i % 3) * 150; // Stagger by 150ms
            this.observer.observe(el);
        });
    }
}

// Scroll Progress Bar
class ScrollProgress {
    constructor() {
        this.progressBar = document.getElementById('scrollProgress');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            this.progressBar.style.width = scrolled + '%';
        });
    }
}

// Custom Cursor
class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        this.follower = document.getElementById('cursorFollower');
        this.init();
    }

    init() {
        // Only enable on desktop
        if (window.innerWidth > 768) {
            document.addEventListener('mousemove', (e) => {
                this.cursor.style.left = e.clientX + 'px';
                this.cursor.style.top = e.clientY + 'px';

                setTimeout(() => {
                    this.follower.style.left = e.clientX + 'px';
                    this.follower.style.top = e.clientY + 'px';
                }, 100);
            });

            // Add hover effect for interactive elements
            const interactiveElements = document.querySelectorAll('a, button, .service-card, .project-card');
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    this.cursor.style.transform = 'scale(1.5)';
                    this.follower.style.transform = 'scale(1.5)';
                });

                element.addEventListener('mouseleave', () => {
                    this.cursor.style.transform = 'scale(1)';
                    this.follower.style.transform = 'scale(1)';
                });
            });
        }
    }
}

// Parallax Effect
class ParallaxEffect {
    constructor() {
        if (window.matchMedia('(min-width: 768px)').matches) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;

            // Hero Background
            const hero = document.querySelector('.hero-section');
            if (hero) {
                hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
            }

            // Floating Elements (if any)
            document.querySelectorAll('.floating-shape').forEach(shape => {
                const speed = shape.dataset.speed || 0.2;
                shape.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// DOMContentLoaded Logic
document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal
    new ScrollReveal();

    // Page Loader (Handles existing HTML preloader)
    const existingLoader = document.getElementById('preloader');
    if (existingLoader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                existingLoader.style.opacity = '0';
                setTimeout(() => {
                    existingLoader.style.display = 'none';
                }, 500);
            }, 800);
        });
    }

    // Custom Cursor
    new CustomCursor();

    // Parallax
    new ParallaxEffect();

    // Typing Animation
    const typingElement = document.getElementById('typingText');
    if (typingElement) {
        new TypingAnimation(typingElement);
    }

    // Counter Animations
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        new CounterAnimation(counter).animate(); // Simplified trigger, relies on ScrollReveal observing now
    });

    // Ripple Effect for Buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const circle = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            circle.style.cssText = `
                position: absolute;
                left: ${x}px; top: ${y}px;
                width: ${size}px; height: ${size}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                pointer-events: none;
                transform: scale(0);
                transition: transform 0.6s ease-out, opacity 0.6s ease-out;
                opacity: 1;
            `;

            this.appendChild(circle);

            // Force reflow
            void circle.offsetWidth;

            circle.style.transform = 'scale(2.5)';
            circle.style.opacity = '0';

            setTimeout(() => circle.remove(), 600);
        });
    });
});

