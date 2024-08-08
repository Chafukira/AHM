// Ensure that the document is fully loaded before running the scripts
document.addEventListener('DOMContentLoaded', function () {
    
    // Navbar shrink function
    var navbar = document.querySelector('nav.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }
    });

    // Smooth scroll for navbar links
    var navLinks = document.querySelectorAll('nav a.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetID = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetID);

            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Optional: Any additional JavaScript functionality can be added here

});