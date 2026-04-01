(function () {
  var SUGARING_URL = 'https://nudasugaring.simplybook.me/v2/#book/category/4/count/1/';
  var FACIAL_URL   = 'https://nudasugaring.simplybook.me/v2/#book/category/7/count/1/';
  var BOOK_URL     = '#book';

  /* =========================
     MOBILE NAV BUTTONS
  ========================= */
  function addMobileButtons() {
    var nav = document.querySelector('ul#sb_menu_list_items_container');
    if (!nav || nav.querySelector('.nuda-mobile-btn')) return;

    var items = [
      { label: 'Book Now ✓', href: BOOK_URL },
      { label: 'Sugaring Services', href: SUGARING_URL },
      { label: 'Facial Treatments', href: FACIAL_URL }
    ];

    items.forEach(function (item) {
      var li = document.createElement('li');
      var a  = document.createElement('a');

      a.href = item.href;
      a.className = 'nuda-mobile-btn';
      a.textContent = item.label;

      li.appendChild(a);
      nav.appendChild(li);
    });
  }

  /* =========================
     HERO BUTTONS (REAL BUTTONS)
  ========================= */
  function addHeroButtons() {
    var bar = document.querySelector('div.bar');
    if (!bar || bar.querySelector('.nuda-hero-btn')) return;

    bar.innerHTML = ''; // remove old/fake buttons

    var items = [
      { label: 'Sugaring Services', href: SUGARING_URL },
      { label: 'Facial Treatments', href: FACIAL_URL }
    ];

    items.forEach(function (item) {
      var a = document.createElement('a');

      a.href = item.href;
      a.className = 'nuda-hero-btn';
      a.textContent = item.label;

      bar.appendChild(a);
    });
  }

  /* =========================
     MAIN RUNNER
  ========================= */
  function run() {
    addMobileButtons();
    addHeroButtons();
  }

  /* =========================
     LOAD HANDLING
  ========================= */
  function init() {
    run();

    // run again after widget renders
    setTimeout(run, 800);

    // observe DOM changes (IMPORTANT for SimplyBook)
    var observer = new MutationObserver(run);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
