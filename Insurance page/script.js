// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been submitted.');
    this.reset();
});

// Mobile menu toggle (optional)
const menuToggle = document.createElement('button');
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
menuToggle.classList.add('menu-toggle');
document.querySelector('header .container').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});