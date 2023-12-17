document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    hamburger.addEventListener('click', function () {
        navList.classList.toggle('show');
        hamburgerIcon.classList.toggle('rotate');
        navList.style.transition = 'opacity 0.3s ease-in-out'
    });
});
