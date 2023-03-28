const leftScrollButton = document.getElementById('back-button');
const rightScrollButton = document.getElementById('forward-button');
const scrollableArea = document.getElementById('carousel');

const scrollLeft = () => {
    scrollableArea.scrollBy({ 
        top: 0, 
        left: 240, 
        behavior: 'smooth' 
      });
}

const scrollRight = () => {
    scrollableArea.scrollBy({ 
        top: 0,
        left: -240, 
        behavior: 'smooth' 
      });
}

leftScrollButton.addEventListener('click', scrollRight);
rightScrollButton.addEventListener('click', scrollLeft);

/* Make scrollbar thicker after hovering on carousel area */

const toggleScrollbar = () => {
  carousel.classList.toggle('active');
}

scrollableArea.addEventListener('mouseover', toggleScrollbar);