/* ────────────────────────────────────────────────────────────
   reveal.js — scroll-triggered reveal + nav active highlight
   ──────────────────────────────────────────────────────────── */

(function(){
  // Reveal-on-scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('v');
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Nav active section highlight
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (scrollY >= s.offsetTop - 80) current = s.id; });
    navLinks.forEach(a => {
      const on = a.getAttribute('href') === `#${current}`;
      a.style.color      = on ? 'var(--ink)'    : '';
      a.style.background = on ? 'var(--paper3)' : '';
    });
  });
})();
