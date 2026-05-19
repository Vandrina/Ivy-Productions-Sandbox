// Ivy — Web Work
// Embed-mode detection, atmosphere injection, sub-nav current state, tweaks.

(function () {
  // ---- embed detection ----
  try {
    if (window.self !== window.top) document.body.classList.add('is-embedded');
  } catch (e) {
    document.body.classList.add('is-embedded');
  }

  // ---- inject decorative atmosphere (grid + ivy/cathedral watermark) ----
  const atmosphere = document.createElement('div');
  atmosphere.className = 'atmosphere';
  atmosphere.innerHTML = `
    <svg class="grid" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="ivy-grid" width="110" height="55" patternUnits="userSpaceOnUse">
          <line x1="0"  y1="0"  x2="110" y2="0"  stroke="#1e2126" stroke-width="0.6"/>
          <line x1="0"  y1="27" x2="110" y2="27" stroke="#1e2126" stroke-width="0.5"/>
          <line x1="55" y1="0"  x2="55"  y2="27" stroke="#1d2024" stroke-width="0.4"/>
          <line x1="27" y1="27" x2="27"  y2="55" stroke="#1d2024" stroke-width="0.4"/>
          <line x1="82" y1="27" x2="82"  y2="55" stroke="#1d2024" stroke-width="0.4"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ivy-grid)"/>
    </svg>
    <svg class="watermark" viewBox="-800 0 1600 620" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMin meet">
      <!-- ============================================================
           Center: the dominant gothic window (~60% column width)
           Larger rose, deeper lancets, sub-tracery in the lower panel.
           ============================================================ -->
      <g>
        <!-- main arched outline -->
        <path d="M -240,620 L -240,300 C -240,128 -120,60 0,50 C 120,60 240,128 240,300 L 240,620"
              fill="none" stroke="#c8a45a" stroke-width="2.4"/>
        <!-- central mullion -->
        <line x1="0" y1="620" x2="0" y2="218" stroke="#c8a45a" stroke-width="1.6"/>
        <!-- transom (horizontal divider) -->
        <line x1="-240" y1="400" x2="240" y2="400" stroke="#c8a45a" stroke-width="1.3"/>
        <!-- inner arched curves rising to the point -->
        <path d="M -240,400 C -172,300 -62,245 0,218" fill="none" stroke="#c8a45a" stroke-width="1.3"/>
        <path d="M 240,400 C 172,300 62,245 0,218" fill="none" stroke="#c8a45a" stroke-width="1.3"/>
        <!-- rose window (large, ornamented) -->
        <circle cx="0" cy="140" r="62"  fill="none" stroke="#c8a45a" stroke-width="1.4"/>
        <circle cx="0" cy="140" r="12"  fill="none" stroke="#c8a45a" stroke-width="0.8"/>
        <circle cx="0" cy="96"  r="26"  fill="none" stroke="#c8a45a" stroke-width="0.9"/>
        <circle cx="-34" cy="162" r="26" fill="none" stroke="#c8a45a" stroke-width="0.9"/>
        <circle cx="34"  cy="162" r="26" fill="none" stroke="#c8a45a" stroke-width="0.9"/>
        <!-- lower-panel tracery: secondary mullions + transom -->
        <line x1="-120" y1="620" x2="-120" y2="400" stroke="#c8a45a" stroke-width="0.85"/>
        <line x1="120"  y1="620" x2="120"  y2="400" stroke="#c8a45a" stroke-width="0.85"/>
        <line x1="-240" y1="510" x2="240" y2="510" stroke="#c8a45a" stroke-width="0.7" opacity="0.7"/>
        <!-- trefoil heads in the upper sub-panels -->
        <path d="M -180,470 C -180,450 -160,440 -150,455 C -140,440 -120,450 -120,470" fill="none" stroke="#c8a45a" stroke-width="0.65"/>
        <path d="M -60,470 C -60,450 -40,440 -30,455 C -20,440 0,450 0,470" fill="none" stroke="#c8a45a" stroke-width="0.65"/>
        <path d="M 0,470 C 0,450 20,440 30,455 C 40,440 60,450 60,470" fill="none" stroke="#c8a45a" stroke-width="0.65"/>
        <path d="M 120,470 C 120,450 140,440 150,455 C 160,440 180,450 180,470" fill="none" stroke="#c8a45a" stroke-width="0.65"/>
      </g>
      <!-- ============================================================
           Flanking lancets (medium) — pushed out toward viewport edges
           ============================================================ -->
      <g transform="translate(-560, 150)">
        <path d="M -110,460 L -110,265 C -110,145 -55,90 0,80 C 55,90 110,145 110,265 L 110,460"
              fill="none" stroke="#c8a45a" stroke-width="1.8"/>
        <line x1="0" y1="460" x2="0" y2="198" stroke="#c8a45a" stroke-width="1.2"/>
        <line x1="-110" y1="325" x2="110" y2="325" stroke="#c8a45a" stroke-width="1"/>
        <path d="M -110,325 C -78,255 -32,222 0,198" fill="none" stroke="#c8a45a" stroke-width="1"/>
        <path d="M 110,325 C 78,255 32,222 0,198" fill="none" stroke="#c8a45a" stroke-width="1"/>
        <circle cx="0" cy="135" r="40" fill="none" stroke="#c8a45a" stroke-width="1"/>
        <circle cx="0" cy="135" r="8"  fill="none" stroke="#c8a45a" stroke-width="0.6"/>
        <line x1="0" y1="460" x2="0" y2="325" stroke="#c8a45a" stroke-width="0.7" opacity="0.6"/>
      </g>
      <g transform="translate(560, 150)">
        <path d="M -110,460 L -110,265 C -110,145 -55,90 0,80 C 55,90 110,145 110,265 L 110,460"
              fill="none" stroke="#c8a45a" stroke-width="1.8"/>
        <line x1="0" y1="460" x2="0" y2="198" stroke="#c8a45a" stroke-width="1.2"/>
        <line x1="-110" y1="325" x2="110" y2="325" stroke="#c8a45a" stroke-width="1"/>
        <path d="M -110,325 C -78,255 -32,222 0,198" fill="none" stroke="#c8a45a" stroke-width="1"/>
        <path d="M 110,325 C 78,255 32,222 0,198" fill="none" stroke="#c8a45a" stroke-width="1"/>
        <circle cx="0" cy="135" r="40" fill="none" stroke="#c8a45a" stroke-width="1"/>
        <circle cx="0" cy="135" r="8"  fill="none" stroke="#c8a45a" stroke-width="0.6"/>
        <line x1="0" y1="460" x2="0" y2="325" stroke="#c8a45a" stroke-width="0.7" opacity="0.6"/>
      </g>
      <!-- architectural sill running full viewport width -->
      <line x1="-800" y1="620" x2="800" y2="620" stroke="#c8a45a" stroke-width="0.7" opacity="0.55"/>
    </svg>
  `;
  document.body.insertBefore(atmosphere, document.body.firstChild);

  // ---- align watermark top to just below the lowermost nav ----
  const positionWatermark = () => {
    const navs = document.querySelectorAll('[data-watermark-anchor], .subnav, .mainnav');
    if (!navs.length) return;
    const sub = navs[navs.length - 1]; // pick the lowest one
    const r = sub.getBoundingClientRect();
    const top = r.bottom + window.scrollY + 8; // small breathing room
    document.documentElement.style.setProperty('--watermark-top', `${top}px`);
  };
  positionWatermark();
  window.addEventListener('resize', positionWatermark);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(positionWatermark);

  // ---- sub-nav current page state ----
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.subnav .nav a').forEach((a) => {
    const href = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
    if (href === path) a.classList.add('current');
  });

  // ---- read persisted tweaks + apply defaults ----
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem('ivy-tweaks') || '{}'); } catch (e) {}

  // defaults
  if (!saved.density)   saved.density   = 'cozy';
  if (!saved.titleFont) saved.titleFont = 'metamorphous';
  if (!saved.ornament)  saved.ornament  = 'normal';

  // migrate retired title-font values
  const VALID_TITLE_FONTS = ['metamorphous', 'newrocker', 'pirata', 'uncial', 'medieval'];
  if (!VALID_TITLE_FONTS.includes(saved.titleFont)) saved.titleFont = 'metamorphous';

  document.body.dataset.density   = saved.density;
  document.body.dataset.titleFont = saved.titleFont;
  document.body.dataset.ornament  = saved.ornament;
  if (saved.embedPreview) document.body.classList.add('is-embedded');

  // ---- public tweaks API ----
  window.IvyTweaks = {
    set(key, value) {
      const s = JSON.parse(localStorage.getItem('ivy-tweaks') || '{}');
      s[key] = value;
      localStorage.setItem('ivy-tweaks', JSON.stringify(s));
      if (key === 'density')      document.body.dataset.density   = value;
      if (key === 'titleFont')    document.body.dataset.titleFont = value;
      if (key === 'ornament')     document.body.dataset.ornament  = value;
      if (key === 'embedPreview') document.body.classList.toggle('is-embedded', !!value);
    },
    get(key) {
      const s = JSON.parse(localStorage.getItem('ivy-tweaks') || '{}');
      return key ? s[key] : s;
    },
    reset() {
      localStorage.removeItem('ivy-tweaks');
      location.reload();
    }
  };
})();
