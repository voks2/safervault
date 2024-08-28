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

// Load saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    rootElement.classList.add('dark-mode');
    logoImage.src = "assets/safervault-logo-v2-bright.png";
    toggleButton.textContent = "Light theme";
}

toggleButton.addEventListener('click', () => {
    if (rootElement.classList.toggle('dark-mode')) {
        logoImage.src = "assets/safervault-logo-v2-bright.png";
        toggleButton.textContent = "Light theme";
        localStorage.setItem('theme', 'dark');
    } else {
        logoImage.src = "assets/safervault-logo-v2-dark.png";
        toggleButton.textContent = "Dark theme";
        localStorage.setItem('theme', 'light');
    }
});