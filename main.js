// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
};

// Initial call and event listener
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Smooth reveal for individual elements with delay
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero .reveal');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('active');
        }, 300 * (index + 1));
    });
});
