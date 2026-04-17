// Select all navbar links
const navLinks = document.querySelectorAll('.nav-links a');

// Listen for scroll events
window.addEventListener('scroll', () => {

  // Find which section is currently visible
  let current = '';

  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  // Add 'active' class to matching nav link
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

});