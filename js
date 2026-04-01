(function () {
  var SUGARING_URL = 'https://nudasugaring.simplybook.me/v2/#book/category/4/count/1/';
  var FACIAL_URL   = 'https://nudasugaring.simplybook.me/v2/#book/category/7/count/1/';
  var BOOK_URL     = '#book';

  /* ========================= HERO BUTTONS ========================= */
  function addHeroButtons() {
    var bar = document.querySelector('div.bar');
    if (!bar || bar.querySelector('.nuda-hero-btn')) return;

    // Hide the default Book Now button in the hero
    var defaultBtn = bar.querySelector('.btn.book');
    if (defaultBtn) defaultBtn.style.display = 'none';

    var s = document.createElement('a');
    s.href = SUGARING_URL;
    s.className = 'nuda-hero-btn';
    s.textContent = 'Sugaring Services';

    var f = document.createElement('a');
    f.href = FACIAL_URL;
    f.className = 'nuda-hero-btn';
    f.textContent = 'Facial Treatments';

    bar.appendChild(s);
    bar.appendChild(f);
  }

  /* ========================= HEADER BOOK NOW ========================= */
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

  /* ========================= MOBILE MENU ========================= */
  function addMobileButtons() {
    var nav = document.querySelector('ul#sb_menu_list_items_container');
    if (!nav || nav.querySelector('.nuda-mobile-btn')) return;
    var items = [
      { label: 'Book Now ✓',        href: BOOK_URL },
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

  /* ========================= RUN ========================= */
  function run() {
    addHeroButtons();
    addBookNowToHeader();
    addMobileButtons();
  }

  function init() {
    run();
    var tries = 0;
    var interval = setInterval(function () {
      run();
      tries++;
      if (tries > 10) clearInterval(interval);
    }, 700);
    var observer = new MutationObserver(run);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
