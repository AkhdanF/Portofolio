document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const menuBtn = document.getElementById('menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    // Smooth scrolling and mobile menu handling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu
            if (window.innerWidth <= 970) {
                menuBtn.checked = false;
            }
            
            // Section mapping with data attributes
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });

    // Mobile menu outside click handler
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 970 && 
            !navLinksContainer.contains(event.target) && 
            !document.querySelector('.btn.menu-btn').contains(event.target)) {
            menuBtn.checked = false;
        }
    });

    // Active section tracking
    function updateActiveSection() {
        const scrollPosition = window.pageYOffset;
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Find and activate corresponding link
                const activeLink = document.querySelector(`[data-target="${section.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // Scroll and resize event listeners
    window.addEventListener('scroll', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);
});

// Typed text effect
document.addEventListener('DOMContentLoaded', function() {
    const typedCursor = document.querySelector('.typed-cursor');
    const texts = ['Web & Mobile Developer', 'Software Engineer', 'Tech Innovator'];
    let currentIndex = 0;

    function typeText() {
        typedCursor.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    // Change text every 2 seconds
    setInterval(typeText, 2000);
});