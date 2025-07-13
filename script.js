document.addEventListener('DOMContentLoaded', () => {
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });
});