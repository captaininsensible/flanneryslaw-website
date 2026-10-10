document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('nav');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelectorAll('a[href^="#"]');

  document.getElementById('year').textContent = new Date().getFullYear();

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  var sections = document.querySelectorAll('main section[id]');
  window.addEventListener('scroll', function () {
    var pos = window.scrollY + 100;
    sections.forEach(function (s) {
      var active = pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight;
      var a = document.querySelector('.nav a[href="#' + s.id + '"]');
      if (a) a.classList.toggle('active', active);
    });
  });
});
