// CARF Website JavaScript
// Simple and easy to understand

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== ACTIVE NAVIGATION ON SCROLL =====
    const sections = document.querySelectorAll('.section');
    const navigationLinks = document.querySelectorAll('.nav a');

    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });

        navigationLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // ===== MOBILE MENU TOGGLE (if you add a hamburger menu later) =====
    // You can add this functionality when needed
    
    console.log('CARF Website loaded successfully!');
});
