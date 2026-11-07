// Intersection Observer za animacije pri skrolovanju
document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animiraj samo jednom
            }
        });
    }, {
        threshold: 0.15 // Aktiviraj kada je 15% elementa vidljivo
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});
