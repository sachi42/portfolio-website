document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const revealItems = document.querySelectorAll(
    '.hero-copy, .hero-card, .section-heading, .about-grid, .timeline-item, .skill-card, .award-card, .education-box'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px'
    }
  );

  revealItems.forEach((item) => {
    item.classList.add('reveal');
    observer.observe(item);
  });
});
