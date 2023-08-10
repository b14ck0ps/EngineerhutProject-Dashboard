const hamburgerMenu = document.getElementById('hamburger-menu');
const sideNavbar = document.querySelector('.side-navbar');

// Toggle side navbar on hamburger menu click when screen is less than 580px
hamburgerMenu.addEventListener('click', () => {
    sideNavbar.classList.toggle('active');
});
