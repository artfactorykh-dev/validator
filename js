<script>
(function () {
  var SUGARING = 'https://nudasugaring.simplybook.me/v2/#book/category/4/count/1/';
  var FACIAL   = 'https://nudasugaring.simplybook.me/v2/#book/category/7/count/1/';
  var BOOK     = 'https://nudasugaring.simplybook.me/v2/';

  function run() {
    var bar = document.querySelector('div.bar');
    if (bar && !bar.querySelector('.nuda-btn')) {
      var orig = bar.querySelector('div.btn.book.btn-with-icon.custom');
      if (orig) orig.style.display = 'none';
      var s = document.createElement('a');
      s.href = SUGARING;
      s.className = 'nuda-btn';
      s.textContent = 'Sugaring Services';
      var f = document.createElement('a');
      f.href = FACIAL;
      f.className = 'nuda-btn';
      f.textContent = 'Facial Treatments';
      bar.appendChild(s);
      bar.appendChild(f);
    }
    var bookLink = document.querySelector('div.btn.book.btn-with-icon.custom a');
    if (bookLink) bookLink.href = BOOK;
    var hc = document.querySelector('div.header-controls');
    if (hc && !hc.querySelector('.nuda-nav-book')) {
      var nb = document.createElement('a');
      nb.href = BOOK;
      nb.className = 'nuda-nav-book';
      nb.textContent = 'Book Now \u2713';
      hc.appendChild(nb);
    }
    var nav = document.querySelector('ul#sb_menu_list_items_container');
    if (nav && !nav.querySelector('.nuda-mobile-li')) {
      [{text:'Book Now \u2713',url:BOOK},
       {text:'Sugaring Services',url:SUGARING},
       {text:'Facial Treatments',url:FACIAL}
      ].forEach(function(item){
        var li=document.createElement('li');
        li.className='nuda-mobile-li';
        var a=document.createElement('a');
        a.href=item.url;
        a.textContent=item.text;
        li.appendChild(a);
        nav.appendChild(li);
      });
    }
  }

  setTimeout(run, 500);
  setTimeout(run, 1500);
  setTimeout(run, 3000);
})();
</script>
