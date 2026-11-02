(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav a'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  var byId = {};
  links.forEach(function (a) {
    var href = a.getAttribute('href') || '';
    var key = href.indexOf('#') > -1 ? href.split('#')[1] : href.replace(/\/+$/, '').split('/').pop();
    if (key) byId[key] = a;
  });
  var sections = Object.keys(byId).map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if (!sections.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) { a.removeAttribute('aria-current'); });
      byId[entry.target.id].setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(function (s) { observer.observe(s); });
})();
