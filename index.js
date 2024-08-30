document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu ul li a');

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
const rootElement = document.documentElement; // or document.body
const logoImage = document.getElementById('logo-image');
const featimg1 = document.getElementById('feat-1-img');
const featimg2 = document.getElementById('feat-2-img');
const featimg3 = document.getElementById('feat-3-img');

// Load saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    rootElement.classList.add('dark-mode');
    logoImage.src = "assets/safervault-logo-v2-bright.png";

    featimg1.src = "assets/features-imgs/safervault-feat-1-darktheme.png";
    featimg2.src = "assets/features-imgs/safervault-feat-2-darktheme.png";
    featimg3.src = "assets/features-imgs/safervault-feat-3-darktheme.png";

    toggleButton.textContent = "Light theme";
}

toggleButton.addEventListener('click', () => {
    if (rootElement.classList.toggle('dark-mode')) {
        logoImage.src = "assets/safervault-logo-v2-bright.png";
        
        featimg1.src = "assets/features-imgs/safervault-feat-1-darktheme.png";
        featimg2.src = "assets/features-imgs/safervault-feat-2-darktheme.png";
        featimg3.src = "assets/features-imgs/safervault-feat-3-darktheme.png";


        toggleButton.textContent = "Light theme";
        localStorage.setItem('theme', 'dark');
    } else {
        logoImage.src = "assets/safervault-logo-v2-dark.png";
        toggleButton.textContent = "Dark theme";
        
        featimg1.src = "assets/features-imgs/safervault-feat-1-lighttheme.png";
        featimg2.src = "assets/features-imgs/safervault-feat-2-lightheme.png";
        featimg3.src = "assets/features-imgs/safervault-feat-3-lightheme.png";

        
        localStorage.setItem('theme', 'light');
    }
});