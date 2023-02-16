var toggleButton = document.querySelectorAll('.toggle-button')[0];
var navbarLinks = document.querySelectorAll('.navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})