document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu ul li a, .menu ul li button');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Close menu when a menu item is clicked
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });

    // Close menu when clicking outside of the menu
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});


// dark mode implementation

const toggleButton = document.getElementById('dark-mode-toggle');
const rootElement = document.documentElement;
const logoImage = document.getElementById('logo-image');

// Optional: Check if the page is the home page
const isHomePage = window.location.pathname.endsWith('index.html') || 
                   window.location.pathname === '/' || 
                   window.location.pathname === '/safervault/' || 
                   window.location.pathname === '/safervault/index.html';

// Optional: Check if feature images exist on the page
const featimg1 = document.getElementById('feat-1-img');
const featimg2 = document.getElementById('feat-2-img');
const featimg3 = document.getElementById('feat-3-img');

// Load saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    rootElement.classList.add('dark-mode');
    logoImage.src = "assets/safervault-logo-v2-bright.png";
    
    if (isHomePage) {
        // Change feature images only on home page
        if (featimg1 && featimg2 && featimg3) {
            featimg1.src = "assets/features-imgs/safervault-feat-1-darktheme.png";
            featimg2.src = "assets/features-imgs/safervault-feat-2-darktheme.png";
            featimg3.src = "assets/features-imgs/safervault-feat-3-darktheme.png";
        }
    }

    toggleButton.textContent = "Light theme";
}

toggleButton.addEventListener('click', () => {
    if (rootElement.classList.toggle('dark-mode')) {
        logoImage.src = "assets/safervault-logo-v2-bright.png";
        
        if (isHomePage) {
            // Change feature images only on home page
            if (featimg1 && featimg2 && featimg3) {
                featimg1.src = "assets/features-imgs/safervault-feat-1-darktheme.png";
                featimg2.src = "assets/features-imgs/safervault-feat-2-darktheme.png";
                featimg3.src = "assets/features-imgs/safervault-feat-3-darktheme.png";
            }
        }

        toggleButton.textContent = "Light theme";
        localStorage.setItem('theme', 'dark');
    } else {
        logoImage.src = "assets/safervault-logo-v2-dark.png";

        if (isHomePage) {
            // Change feature images only on home page
            if (featimg1 && featimg2 && featimg3) {
                featimg1.src = "assets/features-imgs/safervault-feat-1-lighttheme.png";
                featimg2.src = "assets/features-imgs/safervault-feat-2-lighttheme.png";
                featimg3.src = "assets/features-imgs/safervault-feat-3-lighttheme.png";
            }
        }

        toggleButton.textContent = "Dark theme";
        localStorage.setItem('theme', 'light');
    }
});




