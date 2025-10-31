// Simple nav toggle and smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  toggle.addEventListener('click', function(){
    nav.classList.toggle('open');
  });

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close nav on mobile
        if (nav.classList.contains('open')) nav.classList.remove('open');
      }
    });
  });

  // current year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;
});
