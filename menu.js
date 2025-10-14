
// Hamburger menu toggle for all pages, including service schedule
document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.getElementById('hamburger-menu');
  var navLinks = document.getElementById('navbar-links');
  if (hamburger && navLinks) {
    // Remove previous event listeners if any
    hamburger.onclick = null;
    hamburger.onkeypress = null;
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
    hamburger.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        navLinks.classList.toggle('active');
      }
    });
  }
});









