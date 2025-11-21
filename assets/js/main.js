/**
 * MIRABO Biotechnology - Main JavaScript
 * Core functionality and initialization
 */

document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect for hero title
    const titleElement = document.querySelector('.hero__title');
    const subtitleElement = document.querySelector('.hero__subtitle');
    
    if (titleElement) {
        const text1 = 'Bridging Biology';
        const text2 = 'and Everyday Life.';
        const line1 = document.createTextNode('');
        const line2 = titleElement.querySelector('span');
        
        titleElement.innerHTML = '';
        titleElement.appendChild(line1);
        titleElement.appendChild(document.createElement('br'));
        titleElement.appendChild(line2);
        
        let i = 0;
        function typeWriter() {
            if (i < text1.length) {
                line1.textContent += text1.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            } else if (i === text1.length) {
                i++;
                setTimeout(typeWriter, 200);
            } else {
                let j = 0;
                line2.textContent = '';
                function typeSecondLine() {
                    if (j < text2.length) {
                        line2.textContent += text2.charAt(j);
                        j++;
                        setTimeout(typeSecondLine, 30);
                    } else {
                        // Start subtitle typing after title completes
                        if (subtitleElement) {
                            const subtitleText = 'Pioneering AI-integrated platforms to create next-generation bioactive ingredients and medical materials. From In-Silico prediction to commercial scale.';
                            subtitleElement.textContent = '';
                            subtitleElement.style.opacity = '1';
                            let k = 0;
                            function typeSubtitle() {
                                if (k < subtitleText.length) {
                                    subtitleElement.textContent += subtitleText.charAt(k);
                                    k++;
                                    setTimeout(typeSubtitle, 2);
                                } else {
                                    // Show other elements after subtitle
                                    gsap.to('.hero__badge, .hero__cta', {
                                        opacity: 1,
                                        duration: 0.8,
                                        ease: 'power2.out'
                                    });
                                }
                            }
                            setTimeout(typeSubtitle, 300);
                        }
                    }
                }
                typeSecondLine();
            }
        }
        
        setTimeout(typeWriter, 500);
    }
    
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
