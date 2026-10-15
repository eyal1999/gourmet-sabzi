/*
 * Gourmet Sabzi – accessibility menu (used on every page, styles in a11y.css).
 *
 * Adds a "skip to main content" link, the round accessibility button and its menu:
 * text size, high contrast, grayscale, link highlighting, readable font, text spacing,
 * stop animations and a large cursor. Choices are saved in this browser (localStorage)
 * and applied from <head> before the page is drawn, so there is no flash on the next visit.
 * Links that open a new tab are announced as such to screen readers.
 * The menu follows the page language (<html lang>), including live switches on the home page.
 */
(function () {
  'use strict';

  const KEY = 'gs-a11y';
  const SIZES = [1, 1.15, 1.3, 1.5, 1.75, 2];
  const TOGGLES = ['contrast', 'gray', 'links', 'font', 'spacing', 'still', 'cursor'];
  const STATEMENT = 'accessibility.html';

  const STR = {
    he: {
      open: 'תפריט נגישות', title: 'תפריט נגישות', close: 'סגירת תפריט הנגישות',
      size: 'גודל טקסט', smaller: 'הקטנת טקסט', larger: 'הגדלת טקסט',
      contrast: 'ניגודיות גבוהה', gray: 'גווני אפור', links: 'הדגשת קישורים', font: 'גופן קריא',
      spacing: 'ריווח טקסט', still: 'עצירת אנימציות', cursor: 'סמן גדול',
      reset: 'איפוס הגדרות', statement: 'הצהרת נגישות', skip: 'דילוג לתוכן הראשי',
      newtab: '(נפתח בלשונית חדשה)', resetDone: 'ההגדרות אופסו',
    },
    en: {
      open: 'Accessibility menu', title: 'Accessibility menu', close: 'Close accessibility menu',
      size: 'Text size', smaller: 'Decrease text size', larger: 'Increase text size',
      contrast: 'High contrast', gray: 'Grayscale', links: 'Highlight links', font: 'Readable font',
      spacing: 'Text spacing', still: 'Stop animations', cursor: 'Large cursor',
      reset: 'Reset settings', statement: 'Accessibility statement', skip: 'Skip to main content',
      newtab: '(opens in a new tab)', resetDone: 'Settings reset',
    },
    fa: {
      open: 'منوی دسترسی‌پذیری', title: 'منوی دسترسی‌پذیری', close: 'بستن منوی دسترسی‌پذیری',
      size: 'اندازهٔ متن', smaller: 'کوچک کردن متن', larger: 'بزرگ کردن متن',
      contrast: 'کنتراست بالا', gray: 'حالت خاکستری', links: 'برجسته کردن پیوندها', font: 'قلم خوانا',
      spacing: 'فاصله‌گذاری متن', still: 'توقف انیمیشن‌ها', cursor: 'نشانگر بزرگ',
      reset: 'بازنشانی تنظیمات', statement: 'بیانیهٔ دسترسی‌پذیری', skip: 'رفتن به محتوای اصلی',
      newtab: '(در زبانهٔ جدید باز می‌شود)', resetDone: 'تنظیمات بازنشانی شد',
    },
  };

  const svg = (body, filled) => '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' +
    (filled ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"') + '>' + body + '</svg>';
  const ICONS = {
    person: svg('<circle cx="12" cy="4.2" r="2.2"/><path d="M20.6 7.4c-2.8.85-5.7 1.3-8.6 1.3s-5.8-.45-8.6-1.3l-.5 1.95c2.05.6 4.15 1 6.3 1.2V22h2.05v-6.1h1.5V22h2.05V10.55c2.15-.2 4.25-.6 6.3-1.2z"/>', true),
    contrast: svg('<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 010 18z" fill="currentColor"/>'),
    gray: svg('<path d="M12 3s6.5 6.6 6.5 11.2a6.5 6.5 0 01-13 0C5.5 9.6 12 3 12 3z"/><path d="M12 9v11" />'),
    links: svg('<path d="M10 14a4 4 0 005.66 0l3-3a4 4 0 00-5.66-5.66l-1 1"/><path d="M14 10a4 4 0 00-5.66 0l-3 3a4 4 0 005.66 5.66l1-1"/>'),
    font: svg('<path d="M4 19l5-14h1l5 14M6 14h7M16 19v-6.5a2.5 2.5 0 015 0V19M16 15.5h5"/>'),
    spacing: svg('<path d="M4 6h16M4 12h16M4 18h16"/><path d="M2 9l2 3-2 3M22 9l-2 3 2 3"/>'),
    still: svg('<rect x="6.5" y="5" width="3.5" height="14" rx="1"/><rect x="14" y="5" width="3.5" height="14" rx="1"/>', true),
    cursor: svg('<path d="M6 3l12.5 9.2-5.6 1.1 3.4 6.8-2.6 1.3-3.4-6.9L6 18.4z"/>', true),
    reset: svg('<path d="M3.5 12a8.5 8.5 0 108.5-8.5 8.7 8.7 0 00-6 2.5L3.5 8.5"/><path d="M3.5 3.5v5h5"/>'),
  };

  const root = document.documentElement;
  let state = { size: 0, on: [] };
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (saved) {
      state.size = Math.min(Math.max(parseInt(saved.size, 10) || 0, 0), SIZES.length - 1);
      state.on = Array.isArray(saved.on) ? saved.on.filter(t => TOGGLES.includes(t)) : [];
    }
  } catch (e) { /* storage blocked or bad data: start from the defaults */ }

  function applyState() {
    if (state.size) root.style.setProperty('--fs', SIZES[state.size]);
    else root.style.removeProperty('--fs');
    TOGGLES.forEach(t => root.classList.toggle('a11y-' + t, state.on.includes(t)));
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
  }

  // Runs in <head>: apply saved settings before the first paint
  applyState();

  const lang = () => (STR[root.lang] ? root.lang : 'he');
  const t = key => STR[lang()][key];

  function build() {
    const body = document.body;

    // Skip link to the main content
    const main = document.querySelector('main');
    let skip = null;
    if (main) {
      if (!main.id) main.id = 'main';
      skip = document.createElement('a');
      skip.className = 'a11y-skip';
      skip.href = '#' + main.id;
      skip.addEventListener('click', e => {
        e.preventDefault();
        main.setAttribute('tabindex', '-1');
        main.focus();
        main.scrollIntoView();
      });
      body.insertBefore(skip, body.firstChild);
    }

    // Screen readers hear "opens in a new tab" on links with target="_blank"
    const note = document.createElement('span');
    note.id = 'a11y-newtab';
    note.hidden = true; // still read out through aria-describedby
    body.appendChild(note);
    const markNewTab = () => document.querySelectorAll('a[target="_blank"]').forEach(a => {
      const ids = (a.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean);
      if (!ids.includes(note.id)) a.setAttribute('aria-describedby', ids.concat(note.id).join(' '));
    });
    markNewTab();

    // Button and menu
    const ui = document.createElement('div');
    ui.className = 'a11y-ui';
    ui.innerHTML =
      '<button type="button" class="a11y-btn" aria-expanded="false" aria-controls="a11yPanel">' + ICONS.person + '</button>' +
      '<div class="a11y-panel" id="a11yPanel" role="dialog" aria-labelledby="a11yTitle" tabindex="-1" hidden>' +
        '<div class="a11y-head"><h2 id="a11yTitle"></h2><button type="button" class="a11y-close"><span aria-hidden="true">&times;</span></button></div>' +
        '<div class="a11y-size" role="group" aria-labelledby="a11ySizeLabel">' +
          '<span id="a11ySizeLabel"></span>' +
          '<div class="a11y-steps">' +
            '<button type="button" class="a11y-step" data-step="-1"><span aria-hidden="true">−</span></button>' +
            '<output aria-live="polite"></output>' +
            '<button type="button" class="a11y-step" data-step="1"><span aria-hidden="true">+</span></button>' +
          '</div>' +
        '</div>' +
        '<div class="a11y-grid">' +
          TOGGLES.map(k => '<button type="button" class="a11y-tool" data-tool="' + k + '" aria-pressed="false">' + ICONS[k] + '<span></span></button>').join('') +
        '</div>' +
        '<div class="a11y-foot">' +
          '<button type="button" class="a11y-reset">' + ICONS.reset + '<span></span></button>' +
          '<a class="a11y-statement" href="' + STATEMENT + '"></a>' +
        '</div>' +
        '<p class="sr-only" aria-live="polite" id="a11yStatus"></p>' +
      '</div>';
    body.appendChild(ui);

    const btn = ui.querySelector('.a11y-btn');
    const panel = ui.querySelector('.a11y-panel');
    const out = panel.querySelector('output');
    const steps = panel.querySelectorAll('.a11y-step');
    const tools = panel.querySelectorAll('.a11y-tool');
    const status = panel.querySelector('#a11yStatus');

    function render() {
      out.textContent = Math.round(SIZES[state.size] * 100) + '%';
      steps[0].setAttribute('aria-disabled', String(state.size === 0));
      steps[1].setAttribute('aria-disabled', String(state.size === SIZES.length - 1));
      tools.forEach(b => b.setAttribute('aria-pressed', String(state.on.includes(b.dataset.tool))));
    }

    function label() {
      const l = lang();
      ui.setAttribute('lang', l);
      ui.setAttribute('dir', l === 'en' ? 'ltr' : 'rtl');
      btn.setAttribute('aria-label', t('open'));
      btn.title = t('open');
      panel.querySelector('h2').textContent = t('title');
      panel.querySelector('.a11y-close').setAttribute('aria-label', t('close'));
      panel.querySelector('#a11ySizeLabel').textContent = t('size');
      steps[0].setAttribute('aria-label', t('smaller'));
      steps[1].setAttribute('aria-label', t('larger'));
      tools.forEach(b => { b.querySelector('span').textContent = t(b.dataset.tool); });
      panel.querySelector('.a11y-reset span').textContent = t('reset');
      const link = panel.querySelector('.a11y-statement');
      link.textContent = t('statement');
      link.href = STATEMENT + (l === 'he' ? '' : '?lang=' + l);
      if (skip) skip.textContent = t('skip');
      note.textContent = t('newtab');
      markNewTab();
    }

    const isOpen = () => !panel.hidden;
    function open() {
      panel.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      panel.focus();
    }
    function close(refocus) {
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      if (refocus) btn.focus();
    }

    btn.addEventListener('click', () => (isOpen() ? close(false) : open()));
    panel.querySelector('.a11y-close').addEventListener('click', () => close(true));
    steps.forEach(s => s.addEventListener('click', () => {
      const next = state.size + Number(s.dataset.step);
      if (next < 0 || next >= SIZES.length) return;
      state.size = next;
      applyState(); save(); render();
    }));
    tools.forEach(b => b.addEventListener('click', () => {
      const k = b.dataset.tool;
      state.on = state.on.includes(k) ? state.on.filter(x => x !== k) : state.on.concat(k);
      applyState(); save(); render();
    }));
    panel.querySelector('.a11y-reset').addEventListener('click', () => {
      state = { size: 0, on: [] };
      applyState(); save(); render();
      status.textContent = '';
      setTimeout(() => { status.textContent = t('resetDone'); }, 50);
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && isOpen()) close(ui.contains(document.activeElement));
    });
    document.addEventListener('click', e => { if (isOpen() && !ui.contains(e.target)) close(false); });
    ui.addEventListener('focusout', e => {
      if (isOpen() && e.relatedTarget && !ui.contains(e.relatedTarget)) close(false);
    });

    render();
    label();
    new MutationObserver(label).observe(root, { attributes: true, attributeFilter: ['lang'] });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
