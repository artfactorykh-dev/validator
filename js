(function () {
  var SUGARING_URL = 'https://nudasugaring.simplybook.me/v2/#book/category/4/count/1/';
  var FACIAL_URL   = 'https://nudasugaring.simplybook.me/v2/#book/category/7/count/1/';
  var BOOK_URL     = '#book';

  /* =========================
     MOBILE MENU BUTTONS
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
     HERO CLICKABLE OVERLAY
     (for ::before / ::after buttons)
  ========================= */
  function addClickToHeroBtns() {
    var bar = document.querySelector('div.bar');
    if (!bar || bar.querySelector('.nuda-click-fix')) return;

    bar.style.position = 'relative';

    // LEFT (Sugaring)
    var s = document.createElement('a');
    s.href = SUGARING_URL;
    s.className = 'nuda-click-fix sugaring';

    // RIGHT (Facial)
    var f = document.createElement('a');
    f.href = FACIAL_URL;
    f.className = 'nuda-click-fix facial';

    bar.appendChild(s);
    bar.appendChild(f);
  }

  /* =========================
     HEADER BOOK NOW BUTTON
  ========================= */
  function addBookNowToHeader() {
    var nav = document.querySelector('#header ul#sb_menu_list_items_container');
    if (!nav || nav.querySelector('.nuda-book-btn')) return;

    var li = document.createElement('li');
    var a  = document.createElement('a');

    a.href = BOOK_URL;
    a.textContent = 'Book Now ✓';
    a.className = 'nuda-book-btn';

    li.appendChild(a);
    nav.appendChild(li);
  }

  /* =========================
     MAIN RUN
  ========================= */
  function run() {
    addMobileButtons();
    addClickToHeroBtns();
    addBookNowToHeader();
  }

  /* =========================
     LOAD + RELOAD HANDLING
  ========================= */
  function init() {
    run();

    // retry for SimplyBook dynamic rendering
    var tries = 0;
    var interval = setInterval(function () {
      run();
      tries++;
      if (tries > 10) clearInterval(interval);
    }, 700);

    // observe DOM changes
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
