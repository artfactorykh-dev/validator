(function() {
  var SUGARING_URL = 'https://nudasugaring.simplybook.me/v2/#book/category/4/count/1/';
  var FACIAL_URL   = 'https://nudasugaring.simplybook.me/v2/#book/category/7/count/1/';
  var BOOK_URL     = '#book';

  function injectButtons() {

    // ── 1. HERO: replace Book Now with two buttons ──────────────────
    var bar = document.querySelector('div.bar');
    if (bar && !bar.querySelector('.nuda-hero-btn')) {
      // Remove or hide the original btn div
      var origBtn = bar.querySelector('div.btn.book.btn-with-icon.custom');
      if (origBtn) origBtn.style.display = 'none';

      var sSvc = document.createElement('a');
      sSvc.href = SUGARING_URL;
      sSvc.className = 'nuda-hero-btn';
      sSvc.textContent = 'Sugaring Services';

      var fTrt = document.createElement('a');
      fTrt.href = FACIAL_URL;
      fTrt.className = 'nuda-hero-btn';
      fTrt.textContent = 'Facial Treatments';

      bar.appendChild(sSvc);
      bar.appendChild(fTrt);
    }

    // ── 2. DESKTOP NAV: inject Book Now into header-controls ────────
    var headerControls = document.querySelector('div.header-controls');
    if (headerControls && !headerControls.querySelector('.nuda-nav-book-btn')) {
      var navBtn = document.createElement('a');
      navBtn.href = BOOK_URL;
      navBtn.className = 'nuda-nav-book-btn';
      navBtn.textContent = 'Book Now';
      headerControls.appendChild(navBtn);
    }

    // ── 3. MOBILE HAMBURGER: inject buttons into nav list ───────────
    var mobileNav = document.querySelector('ul#sb_menu_list_items_container');
    if (mobileNav && !mobileNav.querySelector('.nuda-mobile-book-btn')) {

      var makeLink = function(cls, href, label) {
        var li = document.createElement('li');
        var a  = document.createElement('a');
        a.href      = href;
        a.className = cls;
        a.textContent = label;
        li.appendChild(a);
        return li;
      };

      mobileNav.appendChild(makeLink('nuda-mobile-book-btn',     BOOK_URL,     'Book Now ✓'));
      mobileNav.appendChild(makeLink('nuda-mobile-sugaring-btn', SUGARING_URL, 'Sugaring Services'));
      mobileNav.appendChild(makeLink('nuda-mobile-facial-btn',   FACIAL_URL,   'Facial Treatments'));
    }
  }

  // Run on load + slight delay to catch async-rendered elements
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      injectButtons();
      setTimeout(injectButtons, 800);
    });
  } else {
    injectButtons();
    setTimeout(injectButtons, 800);
  }
})();
