/* Small, dependency-free. Three jobs:
   1. dark/light toggle that remembers your choice
   2. highlight the nav link for the section you're reading
   3. keep the footer year current                          */

(function () {
  'use strict';

  var root = document.documentElement;

  /* --- 1. Theme toggle ------------------------------------- */
  var toggle = document.getElementById('theme-toggle');

  function paint() {
    var dark = root.dataset.theme === 'dark';
    toggle.querySelector('.theme-toggle__label').textContent = dark ? 'Light' : 'Dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  if (toggle) {
    paint();
    toggle.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
      paint();
    });
  }

  /* --- 2. Scrollspy ---------------------------------------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.hash); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var seen = new Map();

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { seen.set(e.target.id, e.isIntersecting); });

      var active = null;
      sections.forEach(function (s) { if (seen.get(s.id)) { active = active || s.id; } });

      links.forEach(function (a) {
        if (a.hash === '#' + active) { a.setAttribute('aria-current', 'true'); }
        else { a.removeAttribute('aria-current'); }
      });
    }, { rootMargin: '-30% 0px -55% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* --- 3. Footer year -------------------------------------- */
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }
})();
