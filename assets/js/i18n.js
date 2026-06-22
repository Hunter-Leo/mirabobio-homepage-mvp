/**
 * MIRABO Biotechnology - Internationalization (i18n) Runtime
 *
 * Client-side i18n solution for multi-language switching.
 * Uses data-i18n attributes on HTML elements to drive text replacement.
 * Supports EN, ZH, KO languages with automatic domain-based detection.
 *
 * Usage:
 *   <h1 data-i18n="home.hero_title">Fallback text</h1>
 *   <input data-i18n-placeholder="contact.form_placeholder_name">
 *   <meta data-i18n-meta-content="home.meta_desc" content="...">
 *   <title data-i18n-title="home.page_title">...</title>
 *
 * Constitution:
 *   - i18n.js single responsibility: only i18n switching
 *   - New language = new JSON file only, no JS changes
 *   - Translation key missing -> fallback to HTML original
 *   - kebab-case filenames, camelCase JS variables, dot-path JSON keys
 */
(function () {
  'use strict';

  // Prevent flash of untranslated content — hide translatable elements
  // until translations are applied, then make them visible.
  var i18nFlashStyle = document.createElement('style');
  i18nFlashStyle.textContent = '[data-i18n], [data-i18n-placeholder], [data-i18n-title] { visibility: hidden; }';
  document.head.appendChild(i18nFlashStyle);

  /** Main i18n controller object */
  var I18n = {
    config: {
      defaultLang: 'en',
      availableLangs: ['en', 'zh', 'ko'],
      storageKey: 'mirabo_lang',
      translations: {}
    },
    state: {
      currentLang: 'en',
      translations: null,
      icpConfig: null
    },

    /**
     * Initialize the i18n system.
     * Detects default language, loads saved preference, fetches translation
     * and ICP config, renders translations and UI.
     */
    init: function () {
      var self = this;
      // 1. Detect default language from domain
      this.config.defaultLang = this._detectDefault();

      // 2. Override with localStorage if available
      var saved = localStorage.getItem(this.config.storageKey);
      var lang = saved || this.config.defaultLang;

      // 3. Load translations and ICP config
      Promise.all([
        this._fetchJSON('locales/' + lang + '.json'),
        this._fetchJSON('locales/icp-config.json')
      ]).then(function (results) {
        self.state.translations = results[0];
        self.state.icpConfig = results[1];
        self.state.currentLang = lang;
        self._onReady();
      }).catch(function () {
        console.warn('i18n: Failed to load translations for "' + lang + '", falling back to English');
        self.state.currentLang = 'en';
        self.state.translations = {};
        self.state.icpConfig = {};
        self._onReady();
      });
    },

    /**
     * Called after translations are loaded. Applies text, renders ICP,
     * renders switcher, and dispatches ready event.
     */
    _onReady: function () {
      this._translate();
      // Reveal translated content
      if (i18nFlashStyle && i18nFlashStyle.parentNode) {
        i18nFlashStyle.parentNode.removeChild(i18nFlashStyle);
      }
      this._renderICP();
      this._renderLangSwitcher();
      document.documentElement.lang = this.state.currentLang;
      window.I18n = this;
      window.dispatchEvent(new CustomEvent('i18nReady', {
        detail: { lang: this.state.currentLang }
      }));
    },

    /**
     * Detect default language based on the current hostname.
     * @returns {string} Language code: 'zh' for .cn domains, 'en' otherwise.
     */
    _detectDefault: function () {
      var hostname = window.location.hostname.toLowerCase();
      if (hostname.endsWith('.cn')) {
        return 'zh';
      }
      return 'en';
    },

    /**
     * Fetch a JSON file from the given URL path.
     * @param {string} url - Relative URL to the JSON file.
     * @returns {Promise<Object>} Parsed JSON object.
     */
    _fetchJSON: function (url) {
      return fetch(url).then(function (res) {
        if (!res.ok) {
          throw new Error('Failed to load ' + url + ': ' + res.status);
        }
        return res.json();
      });
    },

    /**
     * Get a translation value by dot-path key.
     * Falls back to the HTML original text if key is missing.
     * @param {string} key - Dot-path translation key (e.g. "nav.home").
     * @param {string} fallback - Fallback text if key not found.
     * @returns {string} Translated text or fallback.
     */
    _t: function (key, fallback) {
      var parts = key.split('.');
      var value = this.state.translations;
      for (var i = 0; i < parts.length; i++) {
        if (value == null || typeof value !== 'object') {
          console.warn('i18n: Missing translation key "' + key + '"');
          return fallback;
        }
        value = value[parts[i]];
      }
      if (value == null || typeof value === 'object') {
        console.warn('i18n: Missing translation key "' + key + '"');
        return fallback;
      }
      return value;
    },

    /**
     * Translate all elements with data-i18n attributes on the page.
     * Supports: data-i18n, data-i18n-placeholder, data-i18n-meta-content,
     * data-i18n-title attributes.
     */
    _translate: function () {
      var self = this;

      // Replace textContent for data-i18n elements
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        var fallback = el.textContent.trim();
        var translated = self._t(key, fallback);
        if (translated !== undefined) {
          el.textContent = translated;
        }
      });

      // Replace placeholder for data-i18n-placeholder elements
      document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-placeholder');
        var fallback = el.getAttribute('placeholder') || '';
        var translated = self._t(key, fallback);
        if (translated !== undefined) {
          el.setAttribute('placeholder', translated);
        }
      });

      // Replace meta content for data-i18n-meta-content elements
      document.querySelectorAll('[data-i18n-meta-content]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-meta-content');
        var fallback = el.getAttribute('content') || '';
        var translated = self._t(key, fallback);
        if (translated !== undefined) {
          el.setAttribute('content', translated);
        }
      });

      // Replace title for data-i18n-title elements
      document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-title');
        var fallback = el.textContent.trim();
        var translated = self._t(key, fallback);
        if (translated !== undefined) {
          el.textContent = translated;
        }
        // Also update the document title
        if (el.tagName === 'TITLE') {
          document.title = translated || fallback;
        }
      });
    },

    /**
     * Switch the current language.
     * Persists the choice, reloads translation, and re-renders.
     * @param {string} lang - Language code ('en', 'zh', 'ko').
     */
    setLang: function (lang) {
      if (this.config.availableLangs.indexOf(lang) === -1) {
        console.warn('i18n: Unsupported language "' + lang + '"');
        return;
      }

      var self = this;
      this._fetchJSON('locales/' + lang + '.json').then(function (translations) {
        self.state.translations = translations;
        self.state.currentLang = lang;
        localStorage.setItem(self.config.storageKey, lang);
        document.documentElement.lang = lang;
        self._translate();
        self._renderICP();
      }).catch(function (err) {
        console.warn('i18n: Failed to load language "' + lang + '": ' + err.message);
      });
    },

    /**
     * Render ICP record(s) in the footer bottom area if the current domain
     * has matches in icp-config.json.
     */
    _renderICP: function () {
      var hostname = window.location.hostname.toLowerCase();
      var icpEntries = this.state.icpConfig && this.state.icpConfig[hostname];

      if (!icpEntries || icpEntries.length === 0) {
        return; // No ICP config for this domain
      }

      var footerBottom = document.querySelector('.footer__bottom');
      if (!footerBottom) {
        return;
      }

      // Remove previous ICP elements
      var existingIcp = footerBottom.querySelector('.footer__icp');
      if (existingIcp) {
        existingIcp.remove();
      }

      var icpContainer = document.createElement('div');
      icpContainer.className = 'footer__icp';
      icpContainer.style.marginTop = '8px';

      icpEntries.forEach(function (entry) {
        var link = document.createElement('a');
        link.href = entry.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = entry.text;
        link.style.color = '#9CA3AF';
        link.style.fontSize = '12px';
        link.style.textDecoration = 'none';
        link.style.display = 'block';
        link.style.marginTop = '2px';
        icpContainer.appendChild(link);
      });

      footerBottom.appendChild(icpContainer);
    },

    /**
     * Render the language switcher UI into the navigation bar.
     * For .cn domains, hide the Korean (KO) option.
     */
    _renderLangSwitcher: function () {
      var navLinks = document.querySelector('.nav__links');
      if (!navLinks) {
        return;
      }

      // Remove existing language switcher if any
      var existing = navLinks.querySelector('.lang-switcher');
      if (existing) {
        existing.remove();
      }

      var isCnDomain = false; // Show all languages regardless of domain

      var self = this;
      var langMap = { en: 'EN', zh: '中文', ko: '한국어' };
      var currentLangCode = this.state.currentLang;

      // Build language switcher list item
      var li = document.createElement('li');
      li.className = 'lang-switcher';
      li.style.position = 'relative';

      li.innerHTML =
        '<button class="lang-switcher__btn nav__link" type="button" aria-haspopup="true" aria-expanded="false">' +
          '<span class="lang-switcher__label">' + (langMap[currentLangCode] || 'EN') + '</span>' +
          '<svg class="lang-switcher__arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5">' +
            '<path d="M1 1l4 4 4-4"/>' +
          '</svg>' +
        '</button>' +
        '<ul class="lang-switcher__dropdown" role="menu">' +
          '<li role="none"><a href="#" role="menuitem" data-lang="en">EN</a></li>' +
          '<li role="none"><a href="#" role="menuitem" data-lang="zh">中文</a></li>' +
          (isCnDomain ? '' : '<li role="none"><a href="#" role="menuitem" data-lang="ko">한국어</a></li>') +
        '</ul>';

      navLinks.appendChild(li);

      // Bind click events
      var btn = li.querySelector('.lang-switcher__btn');
      var dropdown = li.querySelector('.lang-switcher__dropdown');
      var options = li.querySelectorAll('[data-lang]');

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        dropdown.classList.toggle('active');
      });

      options.forEach(function (opt) {
        opt.addEventListener('click', function (e) {
          e.preventDefault();
          var lang = opt.getAttribute('data-lang');
          self.setLang(lang);

          // Update button label
          var label = btn.querySelector('.lang-switcher__label');
          if (label) {
            label.textContent = opt.textContent;
          }

          // Close dropdown
          dropdown.classList.remove('active');
          btn.setAttribute('aria-expanded', 'false');

          // Update active state
          options.forEach(function (o) { o.classList.remove('active'); });
          opt.classList.add('active');
        });
      });

      // Close dropdown on outside click
      document.addEventListener('click', function () {
        dropdown.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      });
    }
  };

  // Auto-initialize on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      I18n.init();
    });
  } else {
    I18n.init();
  }
})();
