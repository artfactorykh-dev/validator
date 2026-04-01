(function () {
  var SUGARING_URL = 'https://nudasugaring.simplybook.me/v2/#book/category/4/count/1/';
  var FACIAL_URL   = 'https://nudasugaring.simplybook.me/v2/#book/category/7/count/1/';
  var BOOK_URL     = '#book';

  function addMobileButtons() {
    var nav = document.querySelector('ul#sb_menu_list_items_container');
    if (!nav || nav.querySelector('.nuda-mobile-btn')) return;

    var items = [
      { label: 'Book Now ✓',          href: BOOK_URL },
      { label: 'Sugaring Services',   href: SUGARING_URL },
      { label: 'Facial Treatments',   href: FACIAL_URL }
    ];

    items.forEach(function (item) {
      var li = document.createElement('li');
      var a  = document.createElement('a');
      a.href      = item.href;
      a.className = 'nuda-mobile-btn';
      a.textContent = item.label;
      li.appendChild(a);
      nav.appendChild(li);
    });
  }

  function addClickToHeroBtns() {
    var bar = document.querySelector('div.bar');
    if (!bar) return;

    // Make ::before (Sugaring Services) clickable via overlay link
    if (!bar.querySelector('.nuda-hero-sugaring')) {
      var s = document.createElement('a');
      s.href = SUGARING_URL;
      s.className = 'nuda-hero-sugaring';
      s.style.cssText = [
        'position:absolute',
        'left:0','top:0',
        'width:50%','height:100%',
        'z-index:10',
        'cursor:pointer'
      ].join(';');
      bar.style.position = 'relative';
      bar.appendChild(s);
    }

    // Make ::after (Facial Treatments) clickable
    if (!bar.querySelector('.nuda-hero-facial')) {
      var f = document.createElement('a');
      f.href = FACIAL_URL;
      f.className = 'nuda-hero-facial';
      f.style.cssText = [
        'position:absolute',
        'right:0','top:0',
        'width:50%','height:100%',
        'z-index:10',
        'cursor:pointer'
      ].join(';');
      bar.appendChild(f);
    }
  }

  function run() {
    addMobileButtons();
    addClickToHeroBtns();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      run();
      setTimeout(run, 600);
    });
  } else {
    run();
    setTimeout(run, 600);
  }
})();
