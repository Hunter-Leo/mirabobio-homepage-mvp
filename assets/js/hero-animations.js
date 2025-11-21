/**
 * MIRABO Biotechnology - Hero Section Animations
 */

// Typing effect for hero title
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    setTimeout(type, 500);
}

// Mouse parallax effect
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        const particles = document.querySelector('#particles-js');
        
        if (particles) {
            particles.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
}

// Smooth scroll
function initSmoothScroll() {
    const scrollIndicator = document.querySelector('.hero__scroll');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
        const text = heroTitle.getAttribute('data-text');
        typeWriter(heroTitle, text, 50);
    }
    
    initParallax();
    initSmoothScroll();
});
