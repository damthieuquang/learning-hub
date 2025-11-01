// i18next initialization script
i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'vi',
    debug: true,
    backend: {
      loadPath: 'locales/{{lng}}.json'
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  }, function(err, t) {
    if (err) console.error('i18next error:', err);
    // Update page after i18next is ready
    updatePageLanguage();
  });

// Function to update page content with current language
function updatePageLanguage() {
  document.documentElement.lang = i18next.language;

  // Update document title
  const titleKey = document.body.getAttribute('data-page');
  if (titleKey === 'index') {
    document.title = i18next.t('index.title');
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = i18next.t(key);
  });

  // Update all elements with data-i18n-html attribute (for innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = i18next.t(key);
  });

  // Dispatch event so other scripts can listen
  window.dispatchEvent(new Event('languageChanged'));
}

// Function to change language
function changeLanguage(lang) {
  i18next.changeLanguage(lang, updatePageLanguage);
}

// Function to get translation (useful for dynamic content)
function t(key) {
  return i18next.t(key);
}
