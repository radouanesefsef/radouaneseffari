// Project Detail Modal
class ProjectModal {
    constructor() {
        this.modal = null;
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
        this.createModal();
        this.init();
    }

    createModal() {
        // Create modal HTML
        const modalHTML = `
            <div class="project-modal" id="projectModal">
                <div class="modal-backdrop"></div>
                <div class="modal-content">
                    <button class="modal-close" aria-label="Close modal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <div class="modal-body">
                        <!-- Content will be dynamically inserted -->
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('projectModal');
    }

    init() {
        // Close button
        const closeBtn = this.modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => this.close());

        // Backdrop click
        const backdrop = this.modal.querySelector('.modal-backdrop');
        backdrop.addEventListener('click', () => this.close());

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });

        // Listen for language changes
        document.addEventListener('languageChanged', (e) => {
            this.currentLang = e.detail.lang;
        });
    }

    open(projectData) {
        const modalBody = this.modal.querySelector('.modal-body');

        modalBody.innerHTML = `
            <div class="modal-image">
                <img src="${projectData.image}" alt="${projectData.title[this.currentLang]}" />
            </div>
            <div class="modal-details">
                <h2 class="modal-title">${projectData.title[this.currentLang]}</h2>
                <p class="modal-description">${projectData.description[this.currentLang]}</p>
                <div class="modal-tags">
                    <h3>Tech Stack:</h3>
                    <div class="tags-list">
                        ${projectData.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="modal-features">
                    <h3>Key Features:</h3>
                    <ul>
                        <li>Responsive design for all devices</li>
                        <li>Optimized for 95+ PageSpeed score</li>
                        <li>Custom ${projectData.tags[0]} integration</li>
                        <li>SEO-optimized structure</li>
                        <li>Modern UI/UX design</li>
                    </ul>
                </div>
            </div>
        `;

        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize modal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.projectModal = new ProjectModal();
});
