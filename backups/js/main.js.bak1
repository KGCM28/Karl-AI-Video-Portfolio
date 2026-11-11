// ===================================
// Portfolio Data
// ===================================
const portfolioData = [
    {
        id: 1,
        title: "Neural Horizons — AI Brand Film",
        category: "ai-generated",
        tags: ["Runway Gen-3", "Kling", "DaVinci Resolve"],
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
        tags: ["Runway Gen-3", "ComfyUI", "Premiere Pro"],
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
        tags: ["Luma Dream Machine", "Kling", "DaVinci Resolve"],
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
        tags: ["HeyGen", "ElevenLabs", "Premiere Pro"],
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
        tags: ["Runway Gen-3", "CapCut Pro", "ElevenLabs"],
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
        tags: ["After Effects", "ComfyUI", "ControlNet"],
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
        tags: ["Topaz Video AI", "Runway Gen-3", "Premiere Pro"],
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
        tags: ["ComfyUI", "Custom LoRAs", "Python/API"],
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
        tags: ["Kling AI", "Luma Dream Machine", "Suno"],
        description: "Daily meditation video series. AI-generated serene environments with consistent style. Automated scheduling and publishing pipeline.",
        tools: ["Kling AI", "Luma Dream Machine", "Suno", "Python Automation", "CapCut Pro"],
        thumbnail: "assets/thumbnails/mindful.jpg",
        videoUrl: "https://example.com/mindful.mp4",
        year: 2024
    },
    {
        id: 10,
        title: "Flexora — AI Product Showcase",
        category: "ai-generated",
        // tags: ["Runway Gen-3", "Luma Dream Machine", "ComfyUI"],
        // description: "AI-generated product showcase video for Flexora. Created using Runway Gen-3 and Luma Dream Machine with ComfyUI workflows for consistent character and product rendering.",
        // tools: ["Runway Gen-3", "Luma Dream Machine", "ComfyUI", "Topaz Video AI"],
        thumbnail: "assets/thumbnails/flexora.jpg",
        videoUrl: "assets/Flexora_v5_watermark.mp4",
        year: 2024
    },
    {
        id: 11,
        title: "Velare — Pixar-Style AI Animation",
        category: "ai-generated",
        // tags: ["Runway Gen-3", "Luma Dream Machine", "Pixar Style"],
        // description: "Pixar-style AI animation for Velare brand. Created with Runway Gen-3 and Luma Dream Machine, featuring consistent character design and cinematic lighting.",
        // tools: ["Runway Gen-3", "Luma Dream Machine", "ComfyUI", "Topaz Video AI"],
        thumbnail: "assets/thumbnails/velare.jpg",
        videoUrl: "assets/Velare_Pixar_H3_final.mp4",
        year: 2024
    }
];

// ===================================
// State Management
// ===================================
let currentTheme = localStorage.getItem('theme') || 'dark';

// ===================================
// DOM Elements (initialized in init())
// ===================================
let themeToggle;
let mobileMenuBtn;
let mobileMenu;
let workGrid;
let projectModal;
let modalClose;
let modalBody;
let themeToggleExists;

// ===================================
// Theme Management
// ===================================
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (themeToggleExists) updateThemeToggle();
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    if (themeToggleExists) updateThemeToggle();
    // Force reflow to ensure all elements update their colors
    document.body.offsetHeight;
}

function updateThemeToggle() {
    if (themeToggleExists) {
        themeToggle.setAttribute('aria-pressed', currentTheme === 'dark');
    }
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
// Render Work Grid
// ===================================
function renderWorkGrid() {
    // Existing site uses a static #videoGrid, not the old dynamic #workGrid.
    if (!workGrid) return;
    workGrid.innerHTML = portfolioData.map((project, index) => `
        <article class="work-card animate-in animate-delay-${Math.min(index + 1, 6)}" data-project-id="${project.id}" tabindex="0" role="listitem" aria-label="View ${project.title}">
            <div class="work-card-thumb">
                <div class="thumb-placeholder" style="background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-card));">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" style="width: 48px; height: 48px; color: var(--text-muted);">
                        <polygon points="23 7 16 12 23 17 23 7"></polygon>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                </div>
                <div class="play-overlay" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                </div>
            </div>
            <div class="work-card-content">
                <span class="work-card-tag">${project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                <h3 class="work-card-title">${project.title}</h3>
                <p class="work-card-desc">${project.description.substring(0, 120)}...</p>
                <div class="work-card-tools">
                    ${project.tools.slice(0, 4).map(tool => `<span>${tool}</span>`).join('')}
                    ${project.tools.length > 4 ? `<span>+${project.tools.length - 4} more</span>` : ''}
                </div>
            </div>
        </article>
    `).join('');

    // Add click/keyboard handlers
    document.querySelectorAll('.work-card').forEach(card => {
        card.addEventListener('click', () => openProjectModal(card.dataset.projectId));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(card.dataset.projectId);
            }
        });
    });

    observeAnimations();
}

// ===================================
// Project Modal
// ===================================
function openProjectModal(projectId) {
    const project = portfolioData.find(p => p.id === parseInt(projectId));
    if (!project) return;

    modalBody.innerHTML = `
        <div class="modal-header">
            <span class="modal-tag">${project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-year">${project.year}</p>
        </div>
        <div class="modal-video">
            <div class="video-placeholder" aria-label="Video player placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
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
// Hero Mouse Spotlight Effect
// ===================================
function initHeroSpotlight() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    let mouseX = 50;
    let mouseY = 50;
    let currentX = 50;
    let currentY = 50;

    function updateSpotlight() {
        // Smooth interpolation for trailing effect
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        hero.style.setProperty('--mouse-x', `${currentX}%`);
        hero.style.setProperty('--mouse-y', `${currentY}%`);

        requestAnimationFrame(updateSpotlight);
    }

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 100;
        mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    });

    hero.addEventListener('mouseleave', () => {
        // Return to center slowly
        mouseX = 50;
        mouseY = 50;
    });

    // Start animation loop
    updateSpotlight();
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
    // Initialize DOM elements
    themeToggle = document.getElementById('themeToggle');
    mobileMenuBtn = document.getElementById('mobileMenuBtn');
    mobileMenu = document.getElementById('mobileMenu');
    workGrid = document.getElementById('workGrid');
    projectModal = document.getElementById('projectModal');
    modalClose = document.getElementById('modalClose');
    modalBody = document.getElementById('modalBody');
    themeToggleExists = !!themeToggle;

    initTheme();
    renderWorkGrid();
    initSmoothScroll();
    initHeaderScroll();
    initKeyboardNav();
    initHeroSpotlight();
    observeAnimations();
    initHookLab();

    // Event listeners
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    modalClose.addEventListener('click', closeProjectModal);

    // Close modal on backdrop click
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal || e.target.classList.contains('modal-backdrop')) {
            closeProjectModal();
        }
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

// ===================================
// Hook Lab — horizontal looping video carousel
// ===================================
function initHookLab() {
    const section = document.getElementById('hooks');
    const rail = document.getElementById('hookGrid');
    if (!section || !rail) return;

    const cards = Array.from(rail.querySelectorAll('.hook-card'));
    const filters = Array.from(section.querySelectorAll('.hook-filter'));
    const prev = section.querySelector('.hook-prev');
    const next = section.querySelector('.hook-next');
    const position = document.getElementById('hookPosition');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pausedByUser = new Set();
    const requestedByUser = new Set();
    let railInViewport = false;
    let framePending = false;

    const shownCards = () => cards.filter(card => !card.hidden);
    const isVisibleInRail = (card) => {
        const box = card.getBoundingClientRect();
        const clip = rail.getBoundingClientRect();
        const overlap = Math.max(0, Math.min(box.right, clip.right) - Math.max(box.left, clip.left));
        return overlap / Math.max(box.width, 1) >= 0.6;
    };

    function updatePlayButton(card) {
        const video = card.querySelector('video');
        const button = card.querySelector('.hook-play-toggle');
        if (!video || !button) return;
        const playing = !video.paused && !video.ended;
        button.querySelector('span').textContent = playing ? '❚❚' : '▶';
        button.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${video.getAttribute('aria-label')}`);
        button.setAttribute('aria-pressed', String(playing));
        card.classList.toggle('is-playing', playing);
    }

    function startVideo(card) {
        const video = card.querySelector('video');
        if (!video || card.classList.contains('video-unavailable')) return;

        // Assign the source once: off-screen cards never request their MP4.
        if (!video.hasAttribute('src')) {
            video.src = video.dataset.src;
        }
        if (video.paused && !video.dataset.playPending) {
            video.dataset.playPending = 'true';
            const playRequest = video.play();
            if (playRequest && typeof playRequest.then === 'function') {
                playRequest.then(() => {
                    delete video.dataset.playPending;
                    updatePlayButton(card);
                    scheduleSync();
                }).catch(() => {
                    delete video.dataset.playPending;
                    updatePlayButton(card);
                });
            } else {
                delete video.dataset.playPending;
            }
        }
    }

    function syncPlayback() {
        framePending = false;
        const pageActive = railInViewport && !document.hidden;

        cards.forEach(card => {
            const video = card.querySelector('video');
            if (!video) return;
            const eligible = pageActive && !card.hidden && isVisibleInRail(card);
            const permitted = (requestedByUser.has(card) || !reducedMotion.matches) && !pausedByUser.has(card);

            if (eligible && permitted) {
                startVideo(card);
            } else if (!video.paused) {
                video.pause();
            }
        });
        updateControls();
    }

    function scheduleSync() {
        if (framePending) return;
        framePending = true;
        requestAnimationFrame(syncPlayback);
    }

    function updateControls() {
        const visible = shownCards();
        const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
        if (prev) prev.disabled = rail.scrollLeft < 3;
        if (next) next.disabled = rail.scrollLeft >= maxScroll - 3;
        if (!position) return;
        if (!visible.length) {
            position.textContent = 'No hooks in this category';
            return;
        }
        const railBox = rail.getBoundingClientRect();
        const indices = visible.map((card, i) => {
            const box = card.getBoundingClientRect();
            const overlap = Math.max(0, Math.min(box.right, railBox.right) - Math.max(box.left, railBox.left));
            return overlap / Math.max(box.width, 1) >= 0.5 ? i : -1;
        }).filter(index => index >= 0);
        const first = indices.length ? indices[0] + 1 : 1;
        const last = indices.length ? indices[indices.length - 1] + 1 : first;
        position.textContent = `${first}–${last} of ${visible.length} hooks`;
    }

    function advance(direction) {
        const visible = shownCards();
        if (!visible.length) return;
        const firstIndex = visible.findIndex(card => isVisibleInRail(card));
        const current = Math.max(0, firstIndex);
        const target = visible[Math.max(0, Math.min(visible.length - 1, current + direction))];
        if (!target) return;
        const origin = visible[0].offsetLeft;
        rail.scrollTo({
            left: target.offsetLeft - origin,
            behavior: reducedMotion.matches ? 'instant' : 'smooth'
        });
    }

    // Derive counts from the actual DOM rather than hard-coding them.
    filters.forEach(filter => {
        const category = filter.dataset.g;
        const count = category === 'all' ? cards.length : cards.filter(card => card.dataset.g === category).length;
        const badge = filter.querySelector('[data-count]');
        if (badge) badge.textContent = String(count);
        filter.addEventListener('click', () => {
            filters.forEach(button => button.setAttribute('aria-pressed', String(button === filter)));
            cards.forEach(card => {
                card.hidden = category !== 'all' && card.dataset.g !== category;
                if (card.hidden) {
                    card.querySelector('video')?.pause();
                    card.classList.remove('is-playing');
                }
            });
            rail.scrollLeft = 0;
            scheduleSync();
        });
    });

    cards.forEach(card => {
        const video = card.querySelector('video');
        const img = card.querySelector('.hook-poster');
        const button = card.querySelector('.hook-play-toggle');
        if (!video) return;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'none';
        img?.addEventListener('error', () => card.classList.add('poster-missing'));
        video.addEventListener('playing', () => updatePlayButton(card));
        video.addEventListener('pause', () => updatePlayButton(card));
        video.addEventListener('error', () => {
            card.classList.add('video-unavailable');
            const errorText = card.querySelector('.hook-error');
            if (errorText) errorText.hidden = false;
            updatePlayButton(card);
        });
        button?.addEventListener('click', () => {
            if (!video.paused) {
                pausedByUser.add(card);
                requestedByUser.delete(card);
                video.pause();
            } else {
                pausedByUser.delete(card);
                requestedByUser.add(card);
                startVideo(card);
            }
            updatePlayButton(card);
        });
    });

    const railObserver = new IntersectionObserver(entries => {
        railInViewport = entries[0]?.isIntersecting ?? false;
        scheduleSync();
    }, { threshold: 0.1 });
    railObserver.observe(rail);

    rail.addEventListener('scroll', scheduleSync, { passive: true });
    window.addEventListener('resize', scheduleSync);
    document.addEventListener('visibilitychange', scheduleSync);
    reducedMotion.addEventListener?.('change', scheduleSync);
    prev?.addEventListener('click', () => advance(-1));
    next?.addEventListener('click', () => advance(1));
    rail.addEventListener('keydown', event => {
        if (event.target !== rail) return; // Allow controls inside the cards.
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            advance(event.key === 'ArrowRight' ? 1 : -1);
        }
    });

    updateControls();
}
