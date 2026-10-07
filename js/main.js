/**
 * Portfolio Application Logic
 * Graphic Designer Case Studies & Interactive Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentFilter = 'all';
  let searchQuery = '';
  let activeProjectId = null;

  // DOM Elements
  const projectsGrid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('projectSearch');
  const modalOverlay = document.getElementById('caseStudyModal');
  const modalContainer = document.getElementById('modalContainer');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const mobileNavLinks = document.getElementById('navLinks');
  const contactForm = document.getElementById('contactForm');
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  const toastContainer = document.getElementById('toastContainer');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // =========================================================================
  // Theme Management
  // =========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      updateThemeIcon('light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      updateThemeIcon('dark');
    }
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    if (theme === 'light') {
      themeToggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      themeToggleBtn.setAttribute('title', 'Chuyển sang giao diện Tối');
    } else {
      themeToggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      themeToggleBtn.setAttribute('title', 'Chuyển sang giao diện Sáng');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('portfolio-theme', targetTheme);
      updateThemeIcon(targetTheme);
      showToast(`Đã chuyển sang chế độ ${targetTheme === 'light' ? 'sáng' : 'tối'}`);
    });
  }

  initTheme();

  // =========================================================================
  // Mobile Navigation
  // =========================================================================
  if (menuToggleBtn && mobileNavLinks) {
    menuToggleBtn.addEventListener('click', () => {
      mobileNavLinks.classList.toggle('mobile-active');
      const isExpanded = mobileNavLinks.classList.contains('mobile-active');
      menuToggleBtn.setAttribute('aria-expanded', isExpanded);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavLinks.classList.remove('mobile-active');
      });
    });
  }

  // =========================================================================
  // Toast System
  // =========================================================================
  function showToast(message, icon = '✓') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-message">${message}</span>
    `;
    toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // =========================================================================
  // Render Projects Grid
  // =========================================================================
  function renderProjects() {
    if (!projectsGrid) return;

    // Filter projects based on category and search query
    const filtered = PROJECTS_DATA.filter(project => {
      const matchesCategory = (currentFilter === 'all') || (project.category === currentFilter);
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = !query ||
        project.title.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.services.some(s => s.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });

    // Update filter badge counts
    updateFilterCounts();

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="projects-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto; color: var(--text-muted)">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h4 style="margin-top: 1rem; font-size: 1.15rem; color: var(--text-primary)">Không tìm thấy dự án phù hợp</h4>
          <p>Hãy thử tìm kiếm với từ khóa khác hoặc chuyển sang danh mục "Tất cả".</p>
        </div>
      `;
      return;
    }

    projectsGrid.innerHTML = filtered.map(project => {
      const svgVisual = ProjectVisuals.getHeroSvg(project.svgVisual, project.title, project.client);

      return `
        <article class="project-card" data-id="${project.id}" tabindex="0" role="button" aria-label="Khám phá dự án: ${project.title}">
          <div class="project-card-image-wrap">
            ${svgVisual}
            <span class="project-card-badge">${project.categoryLabel}</span>
          </div>
          <div class="project-card-body">
            <div class="project-card-meta">
              <span>${project.client}</span>
            </div>
            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-card-tagline">${project.tagline}</p>
            <div class="project-card-tags">
              ${project.services.slice(0, 3).map(service => `<span class="tag-pill">${service}</span>`).join('')}
            </div>
            <div class="project-card-footer">
              <span>Khám phá dự án</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openCaseStudy(id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const id = card.getAttribute('data-id');
          openCaseStudy(id);
        }
      });
    });
  }

  function updateFilterCounts() {
    filterButtons.forEach(btn => {
      const category = btn.getAttribute('data-filter');
      const countSpan = btn.querySelector('.badge-count');
      if (countSpan) {
        if (category === 'all') {
          countSpan.textContent = PROJECTS_DATA.length;
        } else {
          const count = PROJECTS_DATA.filter(p => p.category === category).length;
          countSpan.textContent = count;
        }
      }
    });
  }

  // Filter Buttons Handler
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderProjects();
    });
  });

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  // =========================================================================
  // Case Study Modal Logic (FR-03 & Core User Flow)
  // =========================================================================
  function openCaseStudy(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project || !modalContainer) return;

    activeProjectId = projectId;

    // Find next and previous projects
    const currentIndex = PROJECTS_DATA.findIndex(p => p.id === projectId);
    const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
    const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

    // Generate Visual Hero
    const heroVisualSvg = ProjectVisuals.getHeroSvg(project.svgVisual, project.title, project.client);

    if (project.showcaseImage) {
      modalContainer.classList.add('is-showcase');
      const safeSrc = encodeURI(project.showcaseImage);
      modalContainer.innerHTML = `
        <!-- Modal Top Bar -->
        <div class="modal-top-bar">
          <div class="modal-breadcrumbs">
            <span>Dự án</span>
            <span>/</span>
            <span>${project.categoryLabel}</span>
            <span>/</span>
            <span>${project.title}</span>
          </div>
          <div class="modal-actions-right">
            <a href="${safeSrc}" target="_blank" rel="noopener noreferrer" class="modal-nav-btn" title="Xem ảnh gốc trong tab mới" aria-label="Open full image">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <button class="modal-nav-btn" id="modalPrevBtn" title="Dự án trước: ${prevProject.title}" aria-label="Dự án trước">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button class="modal-nav-btn" id="modalNextBtn" title="Dự án tiếp theo: ${nextProject.title}" aria-label="Dự án tiếp theo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <button class="modal-close-btn" id="modalCloseActionBtn" title="Đóng cửa sổ" aria-label="Đóng">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Full Project Presentation Showcase (Edge-to-Edge) -->
        <div class="modal-content-inner modal-showcase-mode" style="padding: 0 0 3.5rem 0; width: 100%; display: flex; flex-direction: column; align-items: center;">
          <div class="project-showcase-full" style="width: 100%; margin: 0; padding: 0; background: ${project.showcaseBg || 'transparent'}; position: relative;">
            <img src="${safeSrc}" alt="${project.title} - Full Presentation" style="width: 100%; height: auto; display: block; margin: 0; padding: 0; ${project.aspectRatio ? `aspect-ratio: ${project.aspectRatio};` : 'aspect-ratio: 5303 / 32768;'}" loading="eager">
            ${project.showcaseVideo ? `
              <div class="showcase-video-overlay" style="position: absolute; top: ${project.showcaseVideo.top}; left: ${project.showcaseVideo.left}; width: ${project.showcaseVideo.width}; height: ${project.showcaseVideo.height}; border-radius: ${project.showcaseVideo.borderRadius}; overflow: hidden; background-color: #1a0226;">
                <video src="${encodeURI(project.showcaseVideo.src)}" autoplay loop muted playsinline webkit-playsinline style="width: 100%; height: 100%; object-fit: cover; display: block;"></video>
              </div>
            ` : ''}
            ${(project.showcaseMarquees && project.showcaseMarquees.length > 0) ? 
              project.showcaseMarquees.map((m) => `
                <div class="ton-marquee-bar" style="top: ${m.top}; height: ${m.height};">
                  <div class="ton-marquee-track" style="animation-duration: ${m.speed || '25s'};">
                    <div class="ton-marquee-group">
                      ${Array(12).fill(0).map(() => `
                        <span class="ton-marquee-item">
                          <img src="${encodeURI(m.icon || 'assets/ton-diamond-v2.png')}" alt="" class="ton-marquee-icon" data-pin-no-hover="true" data-pin-nopin="true" loading="eager">
                          <span class="ton-marquee-text">${m.text}</span>
                        </span>
                      `).join('')}
                    </div>
                    <div class="ton-marquee-group" aria-hidden="true">
                      ${Array(12).fill(0).map(() => `
                        <span class="ton-marquee-item">
                          <img src="${encodeURI(m.icon || 'assets/ton-diamond-v2.png')}" alt="" class="ton-marquee-icon" data-pin-no-hover="true" data-pin-nopin="true" loading="eager">
                          <span class="ton-marquee-text">${m.text}</span>
                        </span>
                      `).join('')}
                    </div>
                  </div>
                </div>
              `).join('')
              : ''
            }
          </div>

          <!-- Bottom Navigation Actions -->
          <div class="modal-bottom-nav modal-footer-nav" style="width: 100%; max-width: 1000px; padding: 2rem 1.5rem 0; margin-top: 3rem; border-top: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; box-sizing: border-box;">
            <button class="modal-nav-action" id="modalBottomPrevBtn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>${currentLang === 'vi' ? 'Dự án trước: ' + prevProject.title : 'Previous: ' + prevProject.title}</span>
            </button>
            
            <button class="modal-nav-action" id="modalBottomNextBtn" style="margin-left: auto;">
              <span>${currentLang === 'vi' ? 'Dự án kế tiếp: ' + nextProject.title : 'Next: ' + nextProject.title}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      `;
    } else {
      modalContainer.classList.remove('is-showcase');
      modalContainer.innerHTML = `
      <!-- Modal Top Bar -->
      <div class="modal-top-bar">
        <div class="modal-breadcrumbs">
          <span>Dự án</span>
          <span>/</span>
          <span>${project.categoryLabel}</span>
          <span>/</span>
          <span>${project.title}</span>
        </div>
        <div class="modal-actions-right">
          <button class="modal-nav-btn" id="modalPrevBtn" title="Dự án trước: ${prevProject.title}" aria-label="Dự án trước">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button class="modal-nav-btn" id="modalNextBtn" title="Dự án sau: ${nextProject.title}" aria-label="Dự án tiếp theo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <button class="modal-close-btn" id="modalCloseActionBtn" title="Đóng cửa sổ (ESC)" aria-label="Đóng cửa sổ">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Modal Content Body -->
      <div class="modal-content-inner">
        <div class="modal-header-hero">
          <span class="modal-category-badge">${project.categoryLabel}</span>
          <h2 class="modal-project-title">${project.title}</h2>
          <p class="modal-project-tagline">${project.tagline}</p>

          <!-- Key Metadata Matrix -->
          <div class="modal-meta-grid">
            <div class="meta-box">
              <span class="meta-box-label">Khách hàng</span>
              <div class="meta-box-value">${project.client}</div>
            </div>
            <div class="meta-box">
              <span class="meta-box-label">Vai trò</span>
              <div class="meta-box-value">${project.role}</div>
            </div>
            <div class="meta-box">
              <span class="meta-box-label">Thời gian triển khai</span>
              <div class="meta-box-value">${project.duration}</div>
            </div>
            <div class="meta-box">
              <span class="meta-box-label">Dịch vụ thực hiện</span>
              <div class="meta-box-value">${project.services.join(', ')}</div>
            </div>
          </div>

          <!-- Hero Visual Showcase -->
          <div class="modal-hero-visual">
            ${heroVisualSvg}
          </div>
        </div>

        <!-- Section 1: Brief & Challenge -->
        <section class="case-study-section">
          <h3 class="case-section-heading">
            <span class="heading-number">01</span> Bối cảnh &amp; Bài toán thiết kế
          </h3>
          <p class="case-paragraph">${project.brief.clientIntro}</p>

          <div class="brief-grid">
            <div class="brief-card">
              <h4 class="brief-card-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="var(--accent)">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                Thách thức &amp; Rào cản (Challenge)
              </h4>
              <p class="brief-card-text">${project.brief.challenge}</p>
            </div>

            <div class="brief-card">
              <h4 class="brief-card-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="var(--success)">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Mục tiêu cần đạt (Objective)
              </h4>
              <p class="brief-card-text">${project.brief.objective}</p>
            </div>
          </div>
        </section>

        <!-- Section 2: Approach & Concept -->
        <section class="case-study-section">
          <h3 class="case-section-heading">
            <span class="heading-number">02</span> Ý tưởng cốt lõi &amp; Hướng tiếp cận
          </h3>
          <div class="brief-card" style="margin-bottom: 1.5rem; background-color: var(--bg-tertiary); border-left: 3px solid var(--accent);">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 0.25rem;">BIG IDEA</div>
            <div style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; color: var(--text-primary);">${project.concept.bigIdea}</div>
          </div>
          <p class="case-paragraph">${project.concept.approach}</p>

          <div class="principles-grid">
            ${project.concept.designPrinciples.map(p => `
              <div class="principle-box">
                <h5 class="principle-title">${p.title}</h5>
                <p class="principle-desc">${p.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Section 3: Visual Design System -->
        <section class="case-study-section">
          <h3 class="case-section-heading">
            <span class="heading-number">03</span> Hệ thống thiết kế (Visual System)
          </h3>
          
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-top: 1.25rem;">Bảng màu nhận diện (Color Palette)</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Nhấp vào ô màu để sao chép mã HEX:</p>
          <div class="color-swatches-grid">
            ${project.designSystem.colors.map(c => `
              <div class="swatch-card" data-hex="${c.hex}" title="Sao chép ${c.hex}">
                <div class="swatch-color" style="background-color: ${c.hex}"></div>
                <div class="swatch-info">
                  <span class="swatch-name">${c.name}</span>
                  <span class="swatch-hex">${c.hex} • ${c.role}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="type-specimen-box">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem;">Quy chuẩn Typography</h4>
            <div class="type-row">
              <span class="type-row-label">Headline &amp; Title</span>
              <span class="type-row-spec">${project.designSystem.typography.headline}</span>
            </div>
            <div class="type-row">
              <span class="type-row-label">Body Text &amp; Technical</span>
              <span class="type-row-spec">${project.designSystem.typography.body}</span>
            </div>
            ${project.designSystem.typography.numbers ? `
              <div class="type-row">
                <span class="type-row-label">Numbers &amp; Data</span>
                <span class="type-row-spec">${project.designSystem.typography.numbers}</span>
              </div>
            ` : ''}
          </div>
        </section>

        <!-- Section 4: Deliverables -->
        <section class="case-study-section">
          <h3 class="case-section-heading">
            <span class="heading-number">04</span> Sản phẩm &amp; Hạng mục bàn giao
          </h3>
          <ul class="deliverables-list">
            ${project.deliverables.map(item => `
              <li class="deliverable-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </section>

        <!-- Section 5: Real-world Outcomes -->
        <section class="case-study-section">
          <h3 class="case-section-heading">
            <span class="heading-number">05</span> Tác động &amp; Kết quả thực tế
          </h3>
          <div class="outcome-banner">
            <div class="outcome-metrics-row">
              ${project.outcome.metrics.map(m => `
                <div class="metric-item">
                  <div class="metric-big-number">${m.value}</div>
                  <div class="metric-desc">${m.label}</div>
                </div>
              `).join('')}
            </div>
            <p class="outcome-narrative"><strong>Tóm tắt:</strong> ${project.outcome.summary}</p>
            <p class="outcome-narrative" style="margin-top: 0.5rem;">${project.outcome.detail}</p>
          </div>
        </section>

        <!-- Bottom Navigation Controls -->
        <div class="modal-bottom-nav">
          <button class="modal-nav-action" id="modalBottomPrevBtn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>${currentLang === 'vi' ? 'Dự án trước: ' + prevProject.title : 'Previous: ' + prevProject.title}</span>
          </button>
          
          <button class="modal-nav-action" id="modalBottomNextBtn" style="margin-left: auto;">
            <span>${currentLang === 'vi' ? 'Dự án kế tiếp: ' + nextProject.title : 'Next: ' + nextProject.title}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `;
    }

    // Show modal
    modalOverlay.classList.add('active');
    document.body.classList.add('modal-open');
    modalOverlay.scrollTop = 0;

    // Update URL hash
    window.location.hash = project.id;

    // Attach internal modal events
    const closeAction = document.getElementById('modalCloseActionBtn');
    if (closeAction) closeAction.addEventListener('click', closeCaseStudy);

    const prevAction = document.getElementById('modalPrevBtn');
    if (prevAction) prevAction.addEventListener('click', () => openCaseStudy(prevProject.id));

    const nextAction = document.getElementById('modalNextBtn');
    if (nextAction) nextAction.addEventListener('click', () => openCaseStudy(nextProject.id));

    const bottomPrev = document.getElementById('modalBottomPrevBtn');
    if (bottomPrev) bottomPrev.addEventListener('click', () => openCaseStudy(prevProject.id));

    const bottomNext = document.getElementById('modalBottomNextBtn');
    if (bottomNext) bottomNext.addEventListener('click', () => openCaseStudy(nextProject.id));

    // Color Swatch Click-to-Copy
    document.querySelectorAll('.swatch-card').forEach(card => {
      card.addEventListener('click', () => {
        const hex = card.getAttribute('data-hex');
        if (hex) {
          navigator.clipboard.writeText(hex).then(() => {
            showToast(`Đã sao chép mã màu ${hex} vào clipboard!`);
          }).catch(() => {
            showToast(`Mã màu: ${hex}`);
          });
        }
      });
    });

    // Auto-trigger video playback if showcase video is present
    const overlayVideo = modalContainer.querySelector('.showcase-video-overlay video');
    if (overlayVideo) {
      overlayVideo.play().catch(() => {});
    }
  }

  function closeCaseStudy() {
    if (!modalOverlay) return;
    const runningVideos = modalOverlay.querySelectorAll('video');
    runningVideos.forEach(v => {
      try { v.pause(); } catch(e) {}
    });
    modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
    if (modalContainer) modalContainer.classList.remove('is-showcase');
    activeProjectId = null;

    // Clean hash without jump
    if (window.location.hash) {
      history.pushState(null, null, window.location.pathname + window.location.search);
    }
  }

  // Backdrop click to close
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeCaseStudy();
      }
    });
  }

  // Keyboard navigation for modal
  document.addEventListener('keydown', (e) => {
    if (!modalOverlay || !modalOverlay.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeCaseStudy();
    } else if (e.key === 'ArrowRight' && activeProjectId) {
      const idx = PROJECTS_DATA.findIndex(p => p.id === activeProjectId);
      const nextP = PROJECTS_DATA[(idx + 1) % PROJECTS_DATA.length];
      openCaseStudy(nextP.id);
    } else if (e.key === 'ArrowLeft' && activeProjectId) {
      const idx = PROJECTS_DATA.findIndex(p => p.id === activeProjectId);
      const prevP = PROJECTS_DATA[(idx - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
      openCaseStudy(prevP.id);
    }
  });

  // Handle direct URL hash on page load
  function checkUrlHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const exists = PROJECTS_DATA.find(p => p.id === hash);
      if (exists) {
        openCaseStudy(exists.id);
      }
    }
  }

  // =========================================================================
  // Contact Form Handling with Supabase Integration (FR-05)
  // =========================================================================
  const SUPABASE_CONFIG = {
    url: 'https://rpcebqrgvqqrbleyvvft.supabase.co',
    anonKey: 'sb_publishable_v38GeCVdBGKOywUXaBPoeg_0fWvbZH2',
    table: 'contacts'
  };

  let supabaseClient = null;
  try {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
      supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    }
  } catch (e) {
    console.warn('Supabase SDK initialization notice:', e);
  }

  async function sendToSupabase(payload) {
    if (!SUPABASE_CONFIG.anonKey) {
      console.warn('Supabase Anon Key is not configured.');
      return { success: false, missingKey: true };
    }

    // 1. First try Supabase JS SDK (handles sb_publishable_ keys and auth automatically)
    if (supabaseClient) {
      const { data, error } = await supabaseClient
        .from(SUPABASE_CONFIG.table)
        .insert([payload]);

      if (!error) {
        return { success: true, data };
      }
      console.warn('Supabase SDK insert returned error, attempting REST fallback:', error);
    }

    // 2. Direct REST API Fallback
    const endpoint = `${SUPABASE_CONFIG.url}/rest/v1/${SUPABASE_CONFIG.table}`;
    const headers = {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_CONFIG.anonKey,
      'Prefer': 'return=minimal'
    };

    if (SUPABASE_CONFIG.anonKey.startsWith('eyJ')) {
      headers['Authorization'] = `Bearer ${SUPABASE_CONFIG.anonKey}`;
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      const errMessage = errJson.message || `HTTP ${res.status}: ${res.statusText}`;
      throw new Error(errMessage);
    }

    return { success: true };
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const serviceSelect = document.getElementById('projectType');
      const service = serviceSelect ? (serviceSelect.options[serviceSelect.selectedIndex]?.text || serviceSelect.value) : '';
      const budgetSelect = document.getElementById('projectBudget');
      const budget = budgetSelect ? (budgetSelect.options[budgetSelect.selectedIndex]?.text || budgetSelect.value) : '';
      const message = document.getElementById('projectMessage').value.trim();
      const submitBtn = contactForm.querySelector('.form-submit-btn');

      if (!name || !email || !message) {
        showToast('Vui lòng điền đầy đủ các thông tin bắt buộc (*)', '⚠️');
        return;
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Địa chỉ email không đúng định dạng', '⚠️');
        return;
      }

      // Loading state
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2 A 10 10 0 0 1 22 12"></path>
        </svg>
        <span>Đang gửi thông điệp...</span>
      `;

      const payload = {
        name,
        email,
        service,
        budget,
        message,
        created_at: new Date().toISOString()
      };

      try {
        const result = await sendToSupabase(payload);
        if (result && result.missingKey) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          showToast('Vui lòng cung cấp Supabase Anon Key để hoàn tất lưu dữ liệu!', '⚠️');
          return;
        }

        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast(`Cảm ơn bạn ${name}! Lời nhắn đã được gửi và lưu vào Supabase thành công.`, '✅');
      } catch (err) {
        console.error('Lỗi khi gửi lên Supabase:', err);
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast(`Lỗi gửi dữ liệu lên Supabase: ${err.message}`, '❌');
      }
    });
  }

  // Copy Email Buttons
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = DESIGNER_PROFILE.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Đã sao chép ${email} vào clipboard!`);
      }).catch(() => {
        showToast(email);
      });
    });
  });

  // =========================================================================
  // Scroll Navigation & Back to Top
  // =========================================================================
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll Spy for Nav Links
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // =========================================================================
  // Site-Wide Ambient Cursor-Tracking Glow (Follows cursor smoothly across entire website)
  // =========================================================================
  const siteAmbientGlow = document.getElementById('siteAmbientGlow');

  if (siteAmbientGlow) {
    function calcDefaultPos() {
      return {
        x: window.innerWidth * 0.72,
        y: Math.min(window.innerHeight * 0.35, 260)
      };
    }

    const initPos = calcDefaultPos();
    let targetX = initPos.x;
    let targetY = initPos.y;
    let currentX = targetX;
    let currentY = targetY;
    let isWindowActive = true;
    let rafId = null;

    // Set initial position
    siteAmbientGlow.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0)`;

    // Track mouse movement across entire window/viewport
    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    }, { passive: true });

    // Touch support for mobile / tablet gestures across whole page
    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        targetX = e.touches[0].clientX;
        targetY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        targetX = e.touches[0].clientX;
        targetY = e.touches[0].clientY;
      }
    }, { passive: true });

    // When cursor leaves the browser window, gently drift to aesthetic anchor
    document.addEventListener('mouseleave', () => {
      const def = calcDefaultPos();
      targetX = def.x;
      targetY = def.y;
    });

    // Gentle linear interpolation loop (Lerp) for liquid-smooth trailing
    const lerpFactor = 0.055;

    function animateGlow() {
      if (isWindowActive) {
        currentX += (targetX - currentX) * lerpFactor;
        currentY += (targetY - currentY) * lerpFactor;
        siteAmbientGlow.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0)`;
      }
      rafId = requestAnimationFrame(animateGlow);
    }

    // Performance optimization: pause calculations when tab is hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isWindowActive = false;
        if (rafId) cancelAnimationFrame(rafId);
      } else {
        isWindowActive = true;
        rafId = requestAnimationFrame(animateGlow);
      }
    });

    rafId = requestAnimationFrame(animateGlow);
  }

  // Initial Render
  renderProjects();
  checkUrlHash();

  window.addEventListener('hashchange', checkUrlHash);
});
