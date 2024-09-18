// Mobile menu toggle functionality
const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Typed.js initialization
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphics Designer', 'Programmer', 'AI Engineer'],
    typeSpeed: 50,
    backSpeed: 50, // Speed of the backspacing
    loop: true // This makes the animation loop
});
