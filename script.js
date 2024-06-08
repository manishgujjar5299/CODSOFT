
  document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Hide nav-links when a link is clicked (for better UX)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});