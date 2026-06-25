document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Hero mask-reveal on load ----
  document.querySelectorAll('.mask-line.on-load').forEach((el, i) => {
    setTimeout(() => el.classList.add('is-loaded'), 120 + i * 90);
  });

  // ---- Scroll-triggered reveals ----
  const revealEls = document.querySelectorAll('.reveal, .mask-line.on-scroll');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Stagger siblings in grids/lists
  document.querySelectorAll('[data-stagger]').forEach((grid) => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = (i * 70) + 'ms';
    });
  });

  // ---- Nav: hide on scroll down, reveal on scroll up ----
  const nav = document.querySelector('.site-nav');
  if (nav && !reducedMotion) {
    let lastY = window.scrollY;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > lastY && y > 140) nav.classList.add('nav-hidden');
      else nav.classList.remove('nav-hidden');
      lastY = y;
    });
  }

  // ---- Subtle parallax on case hero banners ----
  if (!reducedMotion) {
    const parallaxEls = document.querySelectorAll('[data-parallax]');
    if (parallaxEls.length) {
      let ticking = false;
      function updateParallax() {
        parallaxEls.forEach((el) => {
          const rect = el.parentElement.getBoundingClientRect();
          const speed = parseFloat(el.getAttribute('data-parallax')) || 0.12;
          const offset = rect.top * speed;
          el.style.transform = `translateY(${offset}px)`;
        });
        ticking = false;
      }
      document.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; }
      });
      updateParallax();
    }
  }
});
