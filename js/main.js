let preloader = document.getElementById('preService');
window.addEventListener('load', () => {
    preloader.style.display = "none";
})
//scroll
let stickyHeader = document.querySelector('.header');
window.addEventListener('scroll', () => {
    stickyHeader.classList.toggle('sticky', window.scrollY > 0);
})
//toggleMenu
function toggleMenu(){
    const toggleMenu = document.querySelector('.toggle');
    const navLinks = document.querySelector('.nav-links');
    toggleMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
}
//trends

// https://computirasoftsolutionsampleweb.000webhostapp.com/index.html