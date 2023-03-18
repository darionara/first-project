const menu = document.querySelector('.navbar__menu');
const hamburger = document.querySelector('.hamburger');
const bars = document.querySelectorAll('.hamburger__bar');

const showMenu = () => {
    menu.classList.toggle('active');
    
    bars.forEach((bar) => {
        bar.classList.toggle('close')
    });
}

hamburger.addEventListener('click', showMenu);
