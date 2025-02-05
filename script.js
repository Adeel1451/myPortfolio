// Smooth Scroll Function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
