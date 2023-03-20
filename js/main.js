const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');

const showMenu = () => {
    menu.classList.toggle('menu--active');

    hamburger.classList.toggle('hamburger--close');
}

hamburger.addEventListener('click', showMenu);
