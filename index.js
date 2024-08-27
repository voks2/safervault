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
