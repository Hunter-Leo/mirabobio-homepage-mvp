/**
 * MIRABO Biotechnology - Main JavaScript
 * Core functionality and initialization
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lenis Smooth Scroll (temporarily disabled for testing)
    // const lenis = new Lenis({
    //     duration: 1.2,
    //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //     orientation: 'vertical',
    //     smoothWheel: true
    // });

    // function raf(time) {
    //     lenis.raf(time);
    //     requestAnimationFrame(raf);
    // }
    // requestAnimationFrame(raf);

    // GSAP Reveal Animations
    gsap.from('.reveal-text', {
        y: 20,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
    });
    
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
    
    // Header scroll effect (refer-index.html style)
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', throttle(() => {
        const currentScroll = window.pageYOffset;
        
        // Hide on scroll down, show on scroll up
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        // Add backdrop blur when scrolled
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, 100));
    
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav__toggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.querySelector('.mobile-menu__close');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }
    
    // Close mobile menu on link click
    const mobileLinks = document.querySelectorAll('.mobile-menu__link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, 100));
    
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            lenis.scrollTo(0);
        });
    }
    
    // Active nav link highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
