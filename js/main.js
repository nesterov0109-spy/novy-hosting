// Новый Хостинг — Main
(function() {
  'use strict';

  // HEADER SCROLL
  const header = document.getElementById('header');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  });
  if (window.scrollY > 60) header.classList.add('scrolled');

  // MOBILE MENU
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (toggle) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // SCROLL REVEAL (Intersection Observer)
  const revealEls = document.querySelectorAll('.reveal, .reveal-l, .reveal-s');
  if (revealEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => obs.observe(el));
  }

  // FAQ ACCORDION
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (q) {
      q.addEventListener('click', () => {
        document.querySelectorAll('.faq-item.open').forEach(o => { if (o !== item) o.classList.remove('open'); });
        item.classList.toggle('open');
      });
    }
  });

})();
