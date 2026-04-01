(function () {
  var SUGARING_URL = 'https://nudasugaring.simplybook.me/v2/#book/category/4/count/1/';
  var FACIAL_URL   = 'https://nudasugaring.simplybook.me/v2/#book/category/7/count/1/';

  function injectHeroButtons() {
    // Try multiple possible hero containers (SimplyBook changes structure)
    var hero =
      document.querySelector('.sb-widget') ||
      document.querySelector('#sb_main') ||
      document.querySelector('.container') ||
      document.body;

    if (!hero || document.querySelector('.nuda-fixed-hero')) return;

    var wrapper = document.createElement('div');
    wrapper.className = 'nuda-fixed-hero';

    var btn1 = document.createElement('a');
    btn1.href = SUGARING_URL;
    btn1.textContent = 'Sugaring Services';
    btn1.className = 'nuda-btn';

    var btn2 = document.createElement('a');
    btn2.href = FACIAL_URL;
    btn2.textContent = 'Facial Treatments';
    btn2.className = 'nuda-btn';

    wrapper.appendChild(btn1);
    wrapper.appendChild(btn2);

    hero.appendChild(wrapper);
  }

  function start() {
    injectHeroButtons();

    // retry multiple times (IMPORTANT for SimplyBook)
    var tries = 0;
    var interval = setInterval(function () {
      injectHeroButtons();
      tries++;
      if (tries > 10) clearInterval(interval);
    }, 700);

    // observe DOM changes (extra safety)
    var observer = new MutationObserver(injectHeroButtons);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
