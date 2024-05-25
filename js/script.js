// Add any JavaScript functionality if needed, for example, form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name === '' || email === '' || message === '') {
            alert('Por favor, complete todos los campos.');
        } else {
            alert('Formulario enviado correctamente.');
            // Optionally, you can add more functionality to handle form submission
            form.reset();
        }
    });
});
const images = document.querySelectorAll('.carousel-images img');
const desc = document.getElementById('carousel-desc');
const descriptions = [
    "Las tecnologías web han cambiado la forma en que nos comunicamos y accedemos a la información.",
    "La comunicación se ha mejorado significativamente gracias a las tecnologías web.",
    "El acceso a la información global se ha vuelto más fácil y rápido."
];
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

function updateCarousel() {
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
    desc.textContent = descriptions[currentIndex];
}

// Toggle menu for mobile view
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
