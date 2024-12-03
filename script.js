document.addEventListener('DOMContentLoaded', function() {
    // Select navbar elements
    const navLinks = document.querySelectorAll('.nav-links a');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu after selection
            if (window.innerWidth <= 970) {
                menuBtn.checked = false;
            }
            
            // Map link text to section selectors
            const sectionMap = {
                'home': '.home',
                'about': '.about-enhanced',
                'projects': '.projects',
                'contact': '.contact',
                'view cv': '#cv-modal' // Placeholder for CV modal
            };

            const linkText = this.textContent.toLowerCase().trim();
            const targetSelector = sectionMap[linkText];

            if (targetSelector) {
                const targetSection = document.querySelector(targetSelector);
                if (targetSection) {
                    targetSection.scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }
            }
        });
    });

    // Mobile menu toggle (additional functionality)
    if (window.innerWidth <= 970) {
        // Ensure menu closes when clicking outside
        document.addEventListener('click', function(event) {
            if (!navLinksContainer.contains(event.target) && 
                !document.querySelector('.btn.menu-btn').contains(event.target)) {
                menuBtn.checked = false;
            }
        });
    }

    // Add active state to current section
    function setActiveSection() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && 
                scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Find corresponding nav link and add active class
                const correspondingLink = Array.from(navLinks).find(
                    link => link.textContent.toLowerCase() === 
                    section.classList[0].toLowerCase()
                );

                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Add scroll event listener for active section tracking
    window.addEventListener('scroll', setActiveSection);
});

// Optional: Typed text effect for professional title
document.addEventListener('DOMContentLoaded', function() {
    const typedCursor = document.querySelector('.typed-cursor');
    const texts = ['Web & Mobile Developer', 'Software Engineer', 'Tech Innovator'];
    let currentIndex = 0;

    function typeText() {
        typedCursor.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    // Change text every 3 seconds
    setInterval(typeText, 2000);
});


