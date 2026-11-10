// ===================================
// Portfolio Data
// ===================================
const portfolioData = [
    {
        id: 1,
        title: "Neural Horizons — AI Brand Film",
        category: "ai-generated",
        description: "Full AI-generated brand film for a neurotech startup. Created 100% with Runway Gen-3 and Kling, edited in DaVinci Resolve with custom color grade.",
        tools: ["Runway Gen-3", "Kling AI", "DaVinci Resolve", "ElevenLabs"],
        thumbnail: "assets/thumbnails/neural-horizons.jpg",
        videoUrl: "https://example.com/neural-horizons.mp4",
        year: 2024
    },
    {
        id: 2,
        title: "Pulse — Fitness App Commercial",
        category: "commercial",
        description: "High-energy commercial blending AI-generated environments with live-action footage. Custom ComfyUI pipeline for consistent character across scenes.",
        tools: ["Runway Gen-3", "ComfyUI", "Premiere Pro", "After Effects", "Topaz Video AI"],
        thumbnail: "assets/thumbnails/pulse-commercial.jpg",
        videoUrl: "https://example.com/pulse.mp4",
        year: 2024
    },
    {
        id: 3,
        title: "Synthwave Dreams — Music Video",
        category: "ai-generated",
        description: "Entirely AI-generated music video for electronic artist. 200+ generations curated and edited to beat. Luma Dream Machine for fluid motion.",
        tools: ["Luma Dream Machine", "Kling AI", "DaVinci Resolve", "Suno"],
        thumbnail: "assets/thumbnails/synthwave-dreams.jpg",
        videoUrl: "https://example.com/synthwave.mp4",
        year: 2024
    },
    {
        id: 4,
        title: "TechTalk Series — AI Avatar Episodes",
        category: "edited",
        description: "12-episode educational series using HeyGen avatars with custom voice clones. Automated pipeline for rapid localization into 8 languages.",
        tools: ["HeyGen", "ElevenLabs", "Premiere Pro", "Python Automation"],
        thumbnail: "assets/thumbnails/techtalk-series.jpg",
        videoUrl: "https://example.com/techtalk.mp4",
        year: 2024
    },
    {
        id: 5,
        title: "GlowBrand — TikTok/Reels Package",
        category: "social",
        description: "30 vertical videos for skincare brand launch. AI-generated B-roll, hook-optimized editing, platform-specific captions. 2M+ views first month.",
        tools: ["Runway Gen-3", "CapCut Pro", "ElevenLabs", "Custom Hooks"],
        thumbnail: "assets/thumbnails/glowbrand-social.jpg",
        videoUrl: "https://example.com/glowbrand.mp4",
        year: 2024
    },
    {
        id: 6,
        title: "Quantum Computing Explainer",
        category: "edited",
        description: "Technical explainer video combining 3D animations, AI-generated visualizations, and motion graphics. Custom ControlNet for accurate diagrams.",
        tools: ["After Effects", "ComfyUI", "ControlNet", "Blender", "DaVinci Resolve"],
        thumbnail: "assets/thumbnails/quantum-explainer.jpg",
        videoUrl: "https://example.com/quantum.mp4",
        year: 2023
    },
    {
        id: 7,
        title: "EcoFuture — Documentary Short",
        category: "commercial",
        description: "Climate tech documentary. AI-enhanced archival footage upscaling with Topaz, generative B-roll for impossible shots, custom narration.",
        tools: ["Topaz Video AI", "Runway Gen-3", "Premiere Pro", "ElevenLabs"],
        thumbnail: "assets/thumbnails/ecofuture.jpg",
        videoUrl: "https://example.com/ecofuture.mp4",
        year: 2023
    },
    {
        id: 8,
        title: "AutoStyle — Car Configurator Videos",
        category: "ai-generated",
        description: "Automated video generation pipeline for 50+ car configurations. ComfyUI + API integration producing personalized videos at scale.",
        tools: ["ComfyUI", "Custom LoRAs", "Python/API", "ControlNet", "After Effects"],
        thumbnail: "assets/thumbnails/autostyle.jpg",
        videoUrl: "https://example.com/autostyle.mp4",
        year: 2024
    },
    {
        id: 9,
        title: "Mindful Moments — Meditation App",
        category: "social",
        description: "Daily meditation video series. AI-generated serene environments with consistent style. Automated scheduling and publishing pipeline.",
        tools: ["Kling AI", "Luma Dream Machine", "Suno", "Python Automation", "CapCut Pro"],
        thumbnail: "assets/thumbnails/mindful.jpg",
        videoUrl: "https://example.com/mindful.mp4",
        year: 2024
    }
];

// ===================================
// State Management
// ===================================
let currentFilter = 'all';
let currentTheme = localStorage.getItem('theme') || 'dark';

// ===================================
// DOM Elements
// ===================================
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const workGrid = document.getElementById('workGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const showcaseThumbs = document.getElementById('showcaseThumbs');
const showcasePlaceholder = document.querySelector('.showcase-placeholder');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const statNumbers = document.querySelectorAll('.stat-number');

// ===================================
// Theme Management
// ===================================
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeToggle();
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeToggle();
}

function updateThemeToggle() {
    themeToggle.setAttribute('aria-pressed', currentTheme === 'dark');
}

// ===================================
// Mobile Menu
// ===================================
function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.toggle('is-open');
    mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

// ===================================
// Stats Counter Animation
// ===================================
function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}

// Intersection Observer for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===================================
// Work Grid Rendering
// ===================================
function renderWorkGrid(filter = 'all') {
    const filtered = filter === 'all'
        ? portfolioData
        : portfolioData.filter(project => project.category === filter);

    workGrid.innerHTML = filtered.map((project, index) => `
        <article class="work-card animate-in animate-delay-${Math.min(index + 1, 6)}" data-project-id="${project.id}" tabindex="0" role="button" aria-label="View ${project.title}">
            <div class="work-card-thumb">
                <div class="thumb-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                        <polygon points="23 7 16 12 23 17 23 7"></polygon>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                </div>
                <div class="play-overlay" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                </div>
            </div>
            <div class="work-card-content">
                <span class="work-card-tag">${formatCategory(project.category)}</span>
                <h3 class="work-card-title">${project.title}</h3>
                <p class="work-card-desc">${project.description}</p>
                <div class="work-card-tools">
                    ${project.tools.slice(0, 4).map(tool => `<span>${tool}</span>`).join('')}
                    ${project.tools.length > 4 ? `<span>+${project.tools.length - 4} more</span>` : ''}
                </div>
            </div>
        </article>
    `).join('');

    // Add click/keyboard handlers to work cards
    document.querySelectorAll('.work-card').forEach(card => {
        card.addEventListener('click', () => openProjectModal(card.dataset.projectId));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(card.dataset.projectId);
            }
        });
    });

    // Re-observe for animations
    observeAnimations();
}

function formatCategory(category) {
    const map = {
        'ai-generated': 'AI Generated',
        'edited': 'Edited',
        'commercial': 'Commercial',
        'social': 'Social'
    };
    return map[category] || category;
}

// ===================================
// Filter Handling
// ===================================
function setActiveFilter(filter) {
    currentFilter = filter;
    filterBtns.forEach(btn => {
        const isActive = btn.dataset.filter === filter;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive);
    });
    renderWorkGrid(filter);
}

// ===================================
// Project Modal
// ===================================
function openProjectModal(projectId) {
    const project = portfolioData.find(p => p.id === parseInt(projectId));
    if (!project) return;

    modalBody.innerHTML = `
        <div class="modal-header">
            <span class="modal-tag">${formatCategory(project.category)}</span>
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-year">${project.year}</p>
        </div>
        <div class="modal-video">
            <div class="video-placeholder" aria-label="Video player placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></path>
                </svg>
                <p>Video preview would be embedded here</p>
                <a href="${project.videoUrl}" class="btn btn-primary" target="_blank" rel="noopener">Watch Full Video</a>
            </div>
        </div>
        <div class="modal-description">
            <p>${project.description}</p>
        </div>
        <div class="modal-tools">
            <h3>Tools Used</h3>
            <div class="tools-list">
                ${project.tools.map(tool => `<span>${tool}</span>`).join('')}
            </div>
        </div>
    `;

    projectModal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalClose.focus();

    // Trap focus
    trapFocus(projectModal);
}

function closeProjectModal() {
    projectModal.hidden = true;
    document.body.style.overflow = '';
}

function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', function handleTab(e) {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}

// ===================================
// Showcase Thumbnails
// ===================================
function renderShowcaseThumbs() {
    showcaseThumbs.innerHTML = portfolioData.slice(0, 6).map((project, index) => `
        <button class="thumb-item ${index === 0 ? 'active' : ''}" data-project-id="${project.id}" aria-label="Preview ${project.title}" aria-pressed="${index === 0}">
            <div class="thumb-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
            </div>
        </button>
    `).join('');

    document.querySelectorAll('.thumb-item').forEach(thumb => {
        thumb.addEventListener('click', () => {
            document.querySelectorAll('.thumb-item').forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-pressed', 'false');
            });
            thumb.classList.add('active');
            thumb.setAttribute('aria-pressed', 'true');
        });
    });
}

// ===================================
// Scroll Animations
// ===================================
function observeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                closeMobileMenu();
            }
        });
    });
}

// ===================================
// Header Scroll Effect
// ===================================
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    }, { passive: true });
}

// ===================================
// Keyboard Navigation
// ===================================
function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !projectModal.hidden) {
            closeProjectModal();
        }
    });
}

// ===================================
// Initialize Everything
// ===================================
function init() {
    initTheme();
    renderWorkGrid();
    renderShowcaseThumbs();
    initSmoothScroll();
    initHeaderScroll();
    initKeyboardNav();
    observeAnimations();

    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    modalClose.addEventListener('click', closeProjectModal);

    // Close modal on backdrop click
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal || e.target.classList.contains('modal-backdrop')) {
            closeProjectModal();
        }
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => setActiveFilter(btn.dataset.filter));
    });

    // Mobile menu links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}