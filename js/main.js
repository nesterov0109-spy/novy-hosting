(function(){
  'use strict';
  var h=document.getElementById('header');
  window.addEventListener('scroll',function(){
    window.requestAnimationFrame(function(){h.classList.toggle('scrolled',window.scrollY>60)});
  });
  if(window.scrollY>60)h.classList.add('scrolled');
  var t=document.getElementById('menuToggle'),n=document.getElementById('nav');
  if(t){t.addEventListener('click',function(){n.classList.toggle('open')});
    n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open')})})}
  var r=document.querySelectorAll('.reveal,.reveal-s');
  if(r.length){var o=new IntersectionObserver(function(e){e.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}
  })},{threshold:.12,rootMargin:'0px 0px -40px 0px'});r.forEach(function(e){o.observe(e)})}
  document.querySelectorAll('.faq-item').forEach(function(i){var q=i.querySelector('.faq-q');
    if(q){q.addEventListener('click',function(){
      document.querySelectorAll('.faq-item.open').forEach(function(o){if(o!==i)o.classList.remove('open')});
      i.classList.toggle('open')
    })}})
})();
