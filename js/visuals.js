/**
 * Project Visuals Generator
 * High-fidelity vector graphics and mockups for each design project
 */

const ProjectVisuals = {
  getHeroSvg(visualId, title, client) {
    if (visualId === "chickcoop") {
      return `
        <img src="assets/chickcoop.jpg" alt="${title} - ${client}" class="project-thumbnail-img" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy">
      `;
    }
    if (visualId === "the-ton-journal") {
      return `
        <img src="assets/the-ton-journal.jpg" alt="${title} - ${client}" class="project-thumbnail-img" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy">
      `;
    }
    if (visualId === "viking") {
      return `
        <img src="assets/viking.png" alt="${title} - ${client}" class="project-thumbnail-img" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy">
      `;
    }
    if (visualId === "mindx") {
      return `
        <img src="assets/mindx.jpg" alt="${title} - ${client}" class="project-thumbnail-img" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy">
      `;
    }
    if (visualId === "frenz") {
      return `
        <img src="assets/frenz-thumb.jpg" alt="${title} - ${client}" class="project-thumbnail-img" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy">
      `;
    }
    if (visualId === "sweeper") {
      return `
        <img src="assets/sweeper-thumb.jpg" alt="${title} - ${client}" class="project-thumbnail-img" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy">
      `;
    }
    if (visualId === "bong-sen") {
      return `
        <img src="assets/bong-sen-thumb.jpg" alt="${title} - ${client}" class="project-thumbnail-img" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy">
      `;
    }
    if (visualId === "9bana") {
      return `
        <img src="assets/9bana-thumb.jpg" alt="${title} - ${client}" class="project-thumbnail-img" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy">
      `;
    }
    if (visualId === "tayo-tea" || visualId === "taiyo-tea") {
      return `
        <img src="assets/tayo-tea-thumb.jpg" alt="${title} - ${client}" class="project-thumbnail-img" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy">
      `;
    }
    switch (visualId) {
      case "aura":
        return `
          <svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="project-svg-visual">
            <defs>
              <linearGradient id="aura-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#14261d"/>
                <stop offset="60%" stop-color="#234032"/>
                <stop offset="100%" stop-color="#3d6b52"/>
              </linearGradient>
              <linearGradient id="gold-foil" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f5e1a4"/>
                <stop offset="50%" stop-color="#d4af37"/>
                <stop offset="100%" stop-color="#996515"/>
              </linearGradient>
              <filter id="shadow-drop" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="15" stdDeviation="20" flood-color="#000" flood-opacity="0.45"/>
              </filter>
            </defs>
            <rect width="800" height="500" fill="url(#aura-bg)"/>
            <!-- Organic botanical leaf lines -->
            <g stroke="#ffffff" stroke-opacity="0.12" stroke-width="1.2" fill="none">
              <path d="M-50,250 C150,100 250,400 450,200 C650,50 750,300 850,220" />
              <path d="M-20,180 C200,350 400,100 600,280 C700,380 820,200 900,150" />
              <circle cx="680" cy="120" r="140" />
              <circle cx="680" cy="120" r="90" stroke-dasharray="4,6" />
            </g>
            <!-- Bottle 1: Dropper Serum -->
            <g transform="translate(230, 90)" filter="url(#shadow-drop)">
              <!-- Cap & Rubber Bulb -->
              <rect x="52" y="20" width="36" height="35" rx="4" fill="#151b17"/>
              <path d="M60,20 C60,5 80,5 80,20 Z" fill="#2d3731"/>
              <rect x="46" y="55" width="48" height="15" rx="2" fill="url(#gold-foil)"/>
              <!-- Glass Bottle Body -->
              <rect x="25" y="70" width="90" height="230" rx="14" fill="#f7f5ee"/>
              <!-- Label -->
              <rect x="33" y="105" width="74" height="160" rx="4" fill="#ffffff"/>
              <!-- Label Graphics -->
              <circle cx="70" cy="130" r="8" fill="#3d6b52"/>
              <text x="70" y="152" font-family="'Cormorant Garamond', Georgia, serif" font-size="10" font-weight="600" text-anchor="middle" fill="#1c2421" letter-spacing="1.5">AURA</text>
              <text x="70" y="163" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" text-anchor="middle" fill="#667085" letter-spacing="0.5">BOTANICALS</text>
              <line x1="45" y1="172" x2="95" y2="172" stroke="#d48b68" stroke-width="0.8"/>
              <text x="70" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" font-weight="600" text-anchor="middle" fill="#234032">BIO-SERUM</text>
              <text x="70" y="196" font-family="'Plus Jakarta Sans', sans-serif" font-size="4.5" text-anchor="middle" fill="#52525b">Cellular Repair 30ml</text>
              <text x="70" y="248" font-family="'Space Mono', monospace" font-size="4" text-anchor="middle" fill="#8daa91">FSC-100% RECYCLED</text>
            </g>
            <!-- Bottle 2: Face Cream Jar -->
            <g transform="translate(420, 180)" filter="url(#shadow-drop)">
              <!-- Jar Lid -->
              <rect x="30" y="20" width="130" height="26" rx="5" fill="url(#gold-foil)"/>
              <!-- Frosted Amber Glass -->
              <rect x="25" y="46" width="140" height="110" rx="10" fill="#234032"/>
              <!-- Jar Label -->
              <rect x="42" y="65" width="106" height="72" rx="4" fill="#f7f5ee"/>
              <text x="95" y="85" font-family="'Cormorant Garamond', Georgia, serif" font-size="9" font-weight="700" text-anchor="middle" fill="#1c2421" letter-spacing="2">AURA BOTANICALS</text>
              <text x="95" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="600" text-anchor="middle" fill="#d48b68">HYDRA RESTORE CREAM</text>
              <text x="95" y="112" font-family="'Plus Jakarta Sans', sans-serif" font-size="4.5" text-anchor="middle" fill="#71717a">Bakuchiol &amp; Centella Asiatica 50g</text>
              <circle cx="95" cy="126" r="3" fill="#3d6b52"/>
            </g>
            <!-- Floating badge -->
            <g transform="translate(620, 360)">
              <rect width="130" height="42" rx="21" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
              <circle cx="24" cy="21" r="10" fill="#8daa91"/>
              <text x="24" y="24" font-size="8" text-anchor="middle" fill="#fff" font-weight="bold">✓</text>
              <text x="44" y="19" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="#ffffff">ECO PACKAGING</text>
              <text x="44" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#d1fae5">100% Recyclable</text>
            </g>
            <!-- Project metadata header in image -->
            <text x="45" y="65" font-family="'Space Mono', monospace" font-size="10" fill="#8daa91" letter-spacing="2">CASE 01 / BRAND &amp; PACKAGING</text>
            <text x="45" y="445" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-style="italic" fill="#ffffff" opacity="0.85">Aura Botanicals Lab</text>
          </svg>
        `;

      case "vanguard":
        return `
          <svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="project-svg-visual">
            <defs>
              <linearGradient id="vanguard-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#120e0d"/>
                <stop offset="50%" stop-color="#241610"/>
                <stop offset="100%" stop-color="#421a08"/>
              </linearGradient>
              <filter id="van-shadow" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000000" flood-opacity="0.6"/>
              </filter>
            </defs>
            <rect width="800" height="500" fill="url(#vanguard-bg)"/>
            <!-- Technical Grid & Curves -->
            <g stroke="#ea580c" stroke-opacity="0.18" stroke-width="1" fill="none">
              <line x1="50" y1="0" x2="50" y2="500" />
              <line x1="750" y1="0" x2="750" y2="500" />
              <line x1="0" y1="120" x2="800" y2="120" stroke-dasharray="4,4"/>
              <line x1="0" y1="380" x2="800" y2="380" stroke-dasharray="4,4"/>
              <!-- Roast Curve Graph -->
              <path d="M80,420 Q 220,380 340,240 T 700,100" stroke="#ea580c" stroke-width="2.5" opacity="0.4"/>
            </g>
            <!-- Coffee Bag Front Mockup -->
            <g transform="translate(260, 60)" filter="url(#van-shadow)">
              <!-- Main Bag Body Kraft Dark Matte -->
              <polygon points="40,30 240,30 270,70 270,370 240,390 40,390 10,370 10,70" fill="#1e1814" stroke="#3d332d" stroke-width="2"/>
              <!-- Heat Seal Top Ridge -->
              <rect x="35" y="24" width="210" height="16" fill="#ea580c" rx="2"/>
              <line x1="45" y1="32" x2="235" y2="32" stroke="#fff" stroke-dasharray="3,3" stroke-width="1"/>
              <!-- Giant Typography On Bag -->
              <text x="140" y="115" font-family="'Space Grotesk', 'Impact', sans-serif" font-size="34" font-weight="900" text-anchor="middle" fill="#f3ead8" letter-spacing="-1">VANGUARD</text>
              <text x="140" y="135" font-family="'Space Mono', monospace" font-size="8.5" text-anchor="middle" fill="#ea580c" letter-spacing="3">COFFEE ROASTERS</text>
              <!-- Technical Spec Card Sticker -->
              <rect x="38" y="155" width="204" height="195" rx="4" fill="#f8fafc"/>
              <!-- Sticker Header -->
              <rect x="38" y="155" width="204" height="32" rx="4" fill="#0f172a"/>
              <text x="50" y="176" font-family="'Space Mono', monospace" font-size="8.5" font-weight="bold" fill="#ea580c">ORIGIN: CAU DAT</text>
              <text x="228" y="176" font-family="'Space Mono', monospace" font-size="8.5" text-anchor="end" fill="#fff">1,650m</text>
              <!-- Info details -->
              <text x="52" y="205" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#64748b">VARIETAL</text>
              <text x="52" y="220" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0f172a">Red Bourbon Single Origin</text>
              <text x="52" y="242" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#64748b">PROCESS &amp; PROFILE</text>
              <text x="52" y="257" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#ea580c">Anaerobic Slow Natural • Medium</text>
              <!-- Tasting Notes Pills -->
              <g transform="translate(52, 272)">
                <rect x="0" y="0" width="55" height="18" rx="9" fill="#fed7aa"/>
                <text x="27.5" y="12" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" font-weight="600" text-anchor="middle" fill="#9a3412">Apricot</text>
                <rect x="60" y="0" width="60" height="18" rx="9" fill="#e0e7ff"/>
                <text x="90" y="12" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" font-weight="600" text-anchor="middle" fill="#3730a3">Bergamot</text>
                <rect x="125" y="0" width="50" height="18" rx="9" fill="#fef3c7"/>
                <text x="150" y="12" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" font-weight="600" text-anchor="middle" fill="#854d0e">Honey</text>
              </g>
              <text x="52" y="325" font-family="'Space Mono', monospace" font-size="7" fill="#94a3b8">NET WT. 250G / 8.8 OZ • ROASTED ON DEMAND</text>
              <circle cx="218" cy="322" r="10" fill="#ea580c" opacity="0.2"/>
              <text x="218" y="325" font-size="8" text-anchor="middle" fill="#ea580c" font-weight="bold">VG</text>
            </g>
            <text x="50" y="65" font-family="'Space Mono', monospace" font-size="10" fill="#ea580c" letter-spacing="2">CASE 02 / SPECIALTY IDENTITY</text>
            <text x="50" y="445" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="800" fill="#f3ead8">Vanguard Roasters</text>
          </svg>
        `;

      case "urban":
        return `
          <svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="project-svg-visual">
            <defs>
              <linearGradient id="urban-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0a1020"/>
                <stop offset="60%" stop-color="#101e3d"/>
                <stop offset="100%" stop-color="#1d4ed8"/>
              </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#urban-bg)"/>
            <!-- Swiss Grid 12 Column guides -->
            <g stroke="#ffffff" stroke-opacity="0.08" stroke-width="1">
              <line x1="100" y1="0" x2="100" y2="500"/>
              <line x1="200" y1="0" x2="200" y2="500"/>
              <line x1="300" y1="0" x2="300" y2="500"/>
              <line x1="400" y1="0" x2="400" y2="500"/>
              <line x1="500" y1="0" x2="500" y2="500"/>
              <line x1="600" y1="0" x2="600" y2="500"/>
              <line x1="700" y1="0" x2="700" y2="500"/>
            </g>
            <!-- Poster Showcase Mockup Frame -->
            <g transform="translate(230, 45)">
              <rect x="0" y="0" width="340" height="410" fill="#f1f5f9" rx="3" stroke="#60a5fa" stroke-width="2"/>
              <!-- Poster Content -->
              <rect x="25" y="25" width="290" height="360" fill="#0f172a"/>
              <!-- Architectural Abstract Forms -->
              <circle cx="170" cy="180" r="100" fill="none" stroke="#2563eb" stroke-width="18" stroke-dasharray="15,8"/>
              <rect x="110" y="120" width="120" height="120" fill="none" stroke="#e11d48" stroke-width="4" transform="rotate(45 170 180)"/>
              <line x1="60" y1="180" x2="280" y2="180" stroke="#f8fafc" stroke-width="1.5"/>
              <line x1="170" y1="70" x2="170" y2="290" stroke="#f8fafc" stroke-width="1.5"/>
              <!-- Typography swiss layout -->
              <text x="40" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#f8fafc" letter-spacing="-0.5">URBAN</text>
              <text x="40" y="82" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#2563eb" letter-spacing="-0.5">PULSE</text>
              <text x="210" y="55" font-family="'JetBrains Mono', monospace" font-size="7.5" fill="#94a3b8">BIENNALE 2024</text>
              <text x="210" y="68" font-family="'JetBrains Mono', monospace" font-size="6.5" fill="#64748b">OCT 14 — 24</text>
              <text x="40" y="330" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="#f8fafc">ADAPTIVE ARCHITECTURES</text>
              <text x="40" y="344" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#94a3b8">FUTURE OF DENSE SOUTHEAST ASIAN HABITATS</text>
              <text x="40" y="365" font-family="'JetBrains Mono', monospace" font-size="6" fill="#e11d48">21.0285° N, 105.8542° E • EXHIBITION HALL 01</text>
            </g>
            <text x="50" y="65" font-family="'Space Mono', monospace" font-size="10" fill="#60a5fa" letter-spacing="2">CASE 03 / EXHIBITION &amp; POSTER</text>
            <text x="50" y="445" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#ffffff">Urban Pulse Biennale</text>
          </svg>
        `;

      case "lumina":
        return `
          <svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="project-svg-visual">
            <defs>
              <linearGradient id="lumina-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#090514"/>
                <stop offset="40%" stop-color="#3b0764"/>
                <stop offset="80%" stop-color="#701a75"/>
                <stop offset="100%" stop-color="#06b6d4"/>
              </linearGradient>
              <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#a855f7"/>
                <stop offset="50%" stop-color="#ec4899"/>
                <stop offset="100%" stop-color="#06b6d4"/>
              </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#lumina-bg)"/>
            <!-- Dynamic Soundwave Ribbons -->
            <g fill="none" stroke="url(#wave-grad)" stroke-width="4" opacity="0.8">
              <path d="M-50,220 C150,120 250,380 450,200 C650,40 750,340 850,220"/>
              <path d="M-50,250 C180,380 320,120 520,320 C680,440 760,180 850,260" stroke-width="8" opacity="0.6"/>
              <path d="M-50,290 C220,80 380,420 580,180 C700,60 780,260 850,300" stroke-width="2"/>
            </g>
            <!-- Glowing Orbs -->
            <circle cx="280" cy="180" r="90" fill="#ec4899" opacity="0.3" filter="blur(30px)"/>
            <circle cx="540" cy="280" r="110" fill="#06b6d4" opacity="0.35" filter="blur(35px)"/>
            <!-- Kinetic Festival Lockup -->
            <g transform="translate(400, 250)" text-anchor="middle">
              <text x="0" y="-30" font-family="'Space Grotesk', sans-serif" font-size="64" font-weight="900" fill="#ffffff" letter-spacing="4">LUMINA</text>
              <text x="0" y="25" font-family="'Space Mono', monospace" font-size="14" font-weight="700" fill="#06b6d4" letter-spacing="8">MUSIC &amp; LIGHT FESTIVAL</text>
              <rect x="-140" y="45" width="280" height="30" rx="15" fill="rgba(255,255,255,0.15)" stroke="#ec4899" stroke-width="1.5"/>
              <text x="0" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#ffffff">DECEMBER 28 — 30 • SAIGON STADIUM</text>
            </g>
            <text x="50" y="65" font-family="'Space Mono', monospace" font-size="10" fill="#a855f7" letter-spacing="2">CASE 04 / DIGITAL &amp; KEY VISUAL</text>
            <text x="50" y="445" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="800" fill="#ffffff">Lumina Sound Festival</text>
          </svg>
        `;

      case "kanso":
        return `
          <svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="project-svg-visual">
            <defs>
              <linearGradient id="kanso-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#181715"/>
                <stop offset="60%" stop-color="#26231e"/>
                <stop offset="100%" stop-color="#3d372e"/>
              </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#kanso-bg)"/>
            <!-- Lookbook Spread in 3D Perspective -->
            <g transform="translate(180, 70)">
              <!-- Left Page -->
              <rect x="0" y="0" width="215" height="340" fill="#f8f6f0" rx="3"/>
              <!-- Left Page Photo Mockup -->
              <rect x="25" y="30" width="165" height="210" fill="#dfdacf"/>
              <!-- Minimalist Chair Graphic -->
              <line x1="60" y1="180" x2="60" y2="110" stroke="#383632" stroke-width="4"/>
              <line x1="140" y1="180" x2="140" y2="135" stroke="#383632" stroke-width="4"/>
              <path d="M50,135 Q 100,125 150,135" stroke="#383632" stroke-width="5" fill="none"/>
              <circle cx="107" cy="130" r="28" fill="#b8976c" opacity="0.6"/>
              <!-- Editorial Text -->
              <text x="25" y="275" font-family="'Cinzel', Georgia, serif" font-size="11" font-weight="700" fill="#1f1d19" letter-spacing="1.5">ASH WOOD LOUNGE</text>
              <text x="25" y="295" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" fill="#78716c">Handcrafted in solid Tần Bì wood.</text>
              <text x="25" y="307" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" fill="#78716c">Edition 2024 • Item № 042</text>
              <!-- Right Page -->
              <rect x="220" y="0" width="215" height="340" fill="#faf9f5" rx="3"/>
              <!-- Book Center Spine Shadow -->
              <rect x="215" y="0" width="10" height="340" fill="rgba(0,0,0,0.18)"/>
              <!-- Right Page Minimal Content -->
              <text x="250" y="70" font-family="'Cinzel', Georgia, serif" font-size="22" fill="#1f1d19" letter-spacing="3">KANSO</text>
              <text x="250" y="90" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#a38258" letter-spacing="1">SIMPLICITY &amp; PURITY</text>
              <line x1="250" y1="105" x2="310" y2="105" stroke="#a38258" stroke-width="1"/>
              <text x="250" y="130" font-family="'Tenor Sans', Georgia, serif" font-size="8.5" fill="#57534e">"Không gian tĩnh tại</text>
              <text x="250" y="145" font-family="'Tenor Sans', Georgia, serif" font-size="8.5" fill="#57534e">bắt đầu từ những vật thể</text>
              <text x="250" y="160" font-family="'Tenor Sans', Georgia, serif" font-size="8.5" fill="#57534e">thuần khiết nhất."</text>
              <rect x="250" y="210" width="155" height="95" fill="#ece8df"/>
              <circle cx="327" cy="257" r="22" fill="#b8976c"/>
            </g>
            <text x="50" y="65" font-family="'Space Mono', monospace" font-size="10" fill="#b8976c" letter-spacing="2">CASE 05 / EDITORIAL LOOKBOOK</text>
            <text x="50" y="445" font-family="'Cinzel', Georgia, serif" font-size="28" fill="#f5f3ef">Kanso Living</text>
          </svg>
        `;

      case "coi-nguon":
        return `
          <svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="project-svg-visual">
            <defs>
              <linearGradient id="coi-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1c0707"/>
                <stop offset="50%" stop-color="#4a0f0f"/>
                <stop offset="100%" stop-color="#7f1d1d"/>
              </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#coi-bg)"/>
            <!-- Book Cover Mockup Hardcover -->
            <g transform="translate(255, 55)">
              <rect x="0" y="0" width="290" height="390" rx="4" fill="#991b1b" stroke="#7f1d1d" stroke-width="2"/>
              <!-- Book Spine Fold -->
              <rect x="0" y="0" width="22" height="390" fill="#7f1d1d"/>
              <line x1="22" y1="0" x2="22" y2="390" stroke="#fef08a" stroke-opacity="0.4" stroke-width="1.5"/>
              <!-- Traditional Heritage Pattern Gold -->
              <g stroke="#fef08a" stroke-width="1.5" fill="none" opacity="0.6">
                <circle cx="155" cy="170" r="75"/>
                <circle cx="155" cy="170" r="60" stroke-dasharray="3,3"/>
                <!-- Cloud Curves -->
                <path d="M125,170 C130,150 150,150 155,160 C160,150 180,150 185,170 C190,190 170,200 155,190 C140,200 120,190 125,170 Z" fill="#b91c1c"/>
              </g>
              <!-- Gold Embossed Title -->
              <text x="155" y="105" font-family="'Cormorant Garamond', serif" font-size="28" font-weight="700" text-anchor="middle" fill="#fef08a" letter-spacing="3">CỘI NGUỒN</text>
              <text x="155" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="600" text-anchor="middle" fill="#fed7aa" letter-spacing="2">ORIGINS OF VIETNAMESE CRAFT</text>
              <line x1="95" y1="280" x2="215" y2="280" stroke="#fef08a" stroke-width="1"/>
              <text x="155" y="305" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" text-anchor="middle" fill="#fee2e2">KHẢO CỨU DI SẢN LÀNG NGHỀ BẮC BỘ</text>
              <text x="155" y="322" font-family="'Space Mono', monospace" font-size="6.5" text-anchor="middle" fill="#fca5a5">LIMITED ART EDITION • 500 COPIES</text>
            </g>
            <text x="50" y="65" font-family="'Space Mono', monospace" font-size="10" fill="#fca5a5" letter-spacing="2">CASE 06 / BOOK &amp; HERITAGE</text>
            <text x="50" y="445" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-style="italic" fill="#ffffff">Cội Nguồn (Origins)</text>
          </svg>
        `;

      case "hyperion":
        return `
          <svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="project-svg-visual">
            <defs>
              <linearGradient id="hyper-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#051510"/>
                <stop offset="50%" stop-color="#064e3b"/>
                <stop offset="100%" stop-color="#059669"/>
              </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#hyper-bg)"/>
            <!-- Cryptographic Grid Background -->
            <g stroke="#10b981" stroke-opacity="0.1" stroke-width="1">
              <pattern id="hyper-dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="#34d399"/>
              </pattern>
              <rect width="800" height="500" fill="url(#hyper-dots)"/>
            </g>
            <!-- UI Floating Card Glassmorphism -->
            <g transform="translate(230, 90)">
              <rect x="0" y="0" width="340" height="230" rx="16" fill="rgba(15, 23, 42, 0.85)" stroke="#10b981" stroke-width="2"/>
              <!-- Card Chip & Logo -->
              <rect x="30" y="30" width="40" height="30" rx="4" fill="#10b981" opacity="0.8"/>
              <circle cx="280" cy="45" r="16" fill="#10b981" opacity="0.3"/>
              <text x="280" y="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" text-anchor="middle" fill="#fff">HY</text>
              <!-- Balance -->
              <text x="30" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#94a3b8">PORTFOLIO VALUATION</text>
              <text x="30" y="140" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#ffffff">$248,910.45</text>
              <text x="30" y="165" font-family="'Space Mono', monospace" font-size="9" fill="#34d399">+18.4% (YTD ALPHA)</text>
              <!-- Card Holder Info -->
              <text x="30" y="200" font-family="'Space Mono', monospace" font-size="9" fill="#cbd5e1">HYPERION BLACK TIER</text>
              <text x="300" y="200" font-family="'Space Mono', monospace" font-size="9" text-anchor="end" fill="#94a3b8">EXP 08/29</text>
            </g>
            <!-- Growth Chart Line -->
            <path d="M120,400 Q 280,360 400,280 T 700,200" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="6,4"/>
            <text x="50" y="65" font-family="'Space Mono', monospace" font-size="10" fill="#34d399" letter-spacing="2">CASE 07 / FINTECH IDENTITY</text>
            <text x="50" y="445" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#ffffff">Hyperion Fintech</text>
          </svg>
        `;

      case "solstice":
        return `
          <svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="project-svg-visual">
            <defs>
              <linearGradient id="sol-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0a0d14"/>
                <stop offset="60%" stop-color="#161f30"/>
                <stop offset="100%" stop-color="#3d2c0b"/>
              </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#sol-bg)"/>
            <!-- Solstice Gin Bottle Mockup -->
            <g transform="translate(290, 40)">
              <!-- Glass Bottle Neck -->
              <rect x="80" y="15" width="60" height="75" fill="#1e293b" opacity="0.6"/>
              <!-- Cork with Gold Seal -->
              <rect x="75" y="5" width="70" height="20" rx="3" fill="#d4af37"/>
              <!-- Heavy Glass Body -->
              <rect x="25" y="90" width="170" height="320" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
              <!-- Luxury Velvet Label -->
              <rect x="38" y="130" width="144" height="230" rx="4" fill="#07090e" stroke="#d4af37" stroke-width="1.5"/>
              <!-- Celestial Astrolabe Circles Gold Foil -->
              <circle cx="110" cy="200" r="42" fill="none" stroke="#d4af37" stroke-width="1.2"/>
              <circle cx="110" cy="200" r="32" fill="none" stroke="#d4af37" stroke-width="0.8" stroke-dasharray="2,3"/>
              <!-- Sun Rays -->
              <g stroke="#d4af37" stroke-width="1" opacity="0.7">
                <line x1="110" y1="150" x2="110" y2="162"/>
                <line x1="110" y1="238" x2="110" y2="250"/>
                <line x1="60" y1="200" x2="72" y2="200"/>
                <line x1="148" y1="200" x2="160" y2="200"/>
              </g>
              <!-- Lettering -->
              <text x="110" y="275" font-family="'Cinzel', Georgia, serif" font-size="16" font-weight="700" text-anchor="middle" fill="#d4af37" letter-spacing="3">SOLSTICE</text>
              <text x="110" y="292" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" text-anchor="middle" fill="#cbd5e1" letter-spacing="1.5">ARTISAN DRY GIN</text>
              <text x="110" y="325" font-family="'Space Mono', monospace" font-size="5.5" text-anchor="middle" fill="#94a3b8">BATCH 04 • ALC. 44% VOL • 700ML</text>
            </g>
            <text x="50" y="65" font-family="'Space Mono', monospace" font-size="10" fill="#d4af37" letter-spacing="2">CASE 08 / LUXURY PACKAGING</text>
            <text x="50" y="445" font-family="'Cinzel', Georgia, serif" font-size="28" fill="#f8fafc">Solstice Craft Gin</text>
          </svg>
        `;

      case "zenith":
        return `
          <svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="project-svg-visual">
            <defs>
              <linearGradient id="zen-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#050505"/>
                <stop offset="60%" stop-color="#240715"/>
                <stop offset="100%" stop-color="#831843"/>
              </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#zen-bg)"/>
            <!-- Kinetic Distorted Typography Layout -->
            <g transform="translate(100, 120)">
              <text x="0" y="80" font-family="'Space Grotesk', sans-serif" font-size="95" font-weight="900" fill="#f43f5e" letter-spacing="-4" transform="skewX(-15)">ZENITH</text>
              <text x="12" y="170" font-family="'Space Grotesk', sans-serif" font-size="95" font-weight="900" fill="#ffffff" letter-spacing="-4" transform="skewX(12)" opacity="0.9">TYPE</text>
              <text x="320" y="170" font-family="'Space Grotesk', sans-serif" font-size="95" font-weight="900" fill="#84cc16" letter-spacing="-4">LAB</text>
            </g>
            <circle cx="650" cy="180" r="80" fill="none" stroke="#f43f5e" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="650" y="185" font-family="'Space Mono', monospace" font-size="9" text-anchor="middle" fill="#fff">EXPERIMENTAL</text>
            <text x="50" y="65" font-family="'Space Mono', monospace" font-size="10" fill="#f43f5e" letter-spacing="2">CASE 09 / EXPERIMENTAL TYPE</text>
            <text x="50" y="445" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="900" fill="#ffffff">Zenith Type Lab</text>
          </svg>
        `;

      default:
        return `<div class="placeholder-visual">Graphic Design Project</div>`;
    }
  }
};
