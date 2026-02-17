document.addEventListener('DOMContentLoaded', function() {
    
    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue
            
            // Aquí normalmente enviarías los datos a un servidor (backend)
            // Por ahora, mostramos una alerta de éxito
            alert('¡Gracias por tu mensaje! En ElectricistasConcepcion nos pondremos en contacto contigo pronto.');
            
            contactForm.reset(); // Limpia el formulario
        });
    }

    // Smooth scroll para navegación (opcional si CSS scroll-behavior no es suficiente)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('is-active');
            mainNav.classList.toggle('is-active');
        });

        // Close menu when a link is clicked
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('is-active')) {
                    hamburgerBtn.classList.remove('is-active');
                    mainNav.classList.remove('is-active');
                }
            });
        });
    }

    // Animación de aparición en scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Deja de observar el elemento una vez que es visible
            }
        });
    }, {
        threshold: 0.1 // El callback se ejecuta cuando al menos el 10% del elemento es visible
    });

    // Selecciona todos los elementos que quieres animar
    const elementsToAnimate = document.querySelectorAll('.fade-in-element');
    elementsToAnimate.forEach(el => observer.observe(el));
});