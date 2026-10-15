/*
 * Gourmet Sabzi – language switching for the accessibility statement, privacy policy and terms pages.
 * Each page holds the full text in Hebrew, English and Farsi (<article class="doc" lang="…">);
 * legal.css shows the one matching <html lang>. Shares the home page's saved language (gs-lang)
 * and ?lang= links. Header and footer labels use data-t="key" from the strings below.
 */
(function () {
  'use strict';

  const DIR = { he: 'rtl', en: 'ltr', fa: 'rtl' };
  const STORAGE_KEY = 'gs-lang';
  const T = {
    he: {
      'title.accessibility': 'הצהרת נגישות | גורמה סבזי',
      'title.privacy': 'מדיניות פרטיות | גורמה סבזי',
      'title.terms': 'תנאי שימוש | גורמה סבזי',
      back: 'חזרה לאתר',
      langs: 'שפה',
      access: 'הצהרת נגישות',
      privacy: 'מדיניות פרטיות',
      terms: 'תנאי שימוש',
      legalNav: 'מידע משפטי',
      home: 'גורמה סבזי – לדף הבית',
      addr: 'גורמה סבזי · לוינסקי 47, תל אביב',
    },
    en: {
      'title.accessibility': 'Accessibility Statement | Gourmet Sabzi',
      'title.privacy': 'Privacy Policy | Gourmet Sabzi',
      'title.terms': 'Terms of Use | Gourmet Sabzi',
      back: 'Back to the website',
      langs: 'Language',
      access: 'Accessibility statement',
      privacy: 'Privacy policy',
      terms: 'Terms of use',
      legalNav: 'Legal information',
      home: 'Gourmet Sabzi – home page',
      addr: 'Gourmet Sabzi · 47 Levinski St, Tel Aviv',
    },
    fa: {
      'title.accessibility': 'بیانیهٔ دسترسی‌پذیری | گورمه سبزی',
      'title.privacy': 'سیاست حفظ حریم خصوصی | گورمه سبزی',
      'title.terms': 'شرایط استفاده | گورمه سبزی',
      back: 'بازگشت به سایت',
      langs: 'زبان',
      access: 'بیانیهٔ دسترسی‌پذیری',
      privacy: 'سیاست حفظ حریم خصوصی',
      terms: 'شرایط استفاده',
      legalNav: 'اطلاعات حقوقی',
      home: 'گورمه سبزی – صفحهٔ اصلی',
      addr: 'گورمه سبزی · لوینسکی ۴۷، تل‌آویو',
    },
  };

  const root = document.documentElement;
  const page = document.body.dataset.page;

  function apply(lang, persist) {
    if (!DIR[lang]) lang = 'he';
    root.lang = lang;
    root.dir = DIR[lang];
    document.title = T[lang]['title.' + page];
    document.querySelectorAll('[data-t]').forEach(el => { el.textContent = T[lang][el.dataset.t]; });
    document.querySelectorAll('[data-t-label]').forEach(el => { el.setAttribute('aria-label', T[lang][el.dataset.tLabel]); });
    const q = lang === 'he' ? '' : '?lang=' + lang;
    document.querySelectorAll('[data-href]').forEach(el => { el.href = el.dataset.href + q; });
    document.querySelectorAll('.langs [data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
      try {
        const url = new URL(location.href);
        if (lang === 'he') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
        history.replaceState(history.state, '', url);
      } catch (e) { /* file:// pages can't rewrite the URL */ }
    }
  }

  document.querySelectorAll('.langs [data-lang]').forEach(b => b.addEventListener('click', () => apply(b.dataset.lang, true)));

  let lang = 'he';
  try { lang = new URLSearchParams(location.search).get('lang') || localStorage.getItem(STORAGE_KEY) || 'he'; } catch (e) { /* ignore */ }
  apply(lang, false);
})();
