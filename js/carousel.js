const backButton = document.getElementById('back-button');
const forwardButton = document.getElementById('forward-button');
const carousel = document.getElementById('carousel-wrapper');

/* Showing and hiding the carousel buttons depending on the relation between the .scrollWidth (the total width of the carousel) 
and the .clientWidth (the width of the part of carousel the user actually sees) 
- .scrollWidth -> the width of an element, including padding, excluding borders, scrollbars or margins
- .offsetWidth -> the viewable width of an element in pixels, including padding, border and scrollbar, but not the margin
- .clientWidth -> the viewable width of an element in pixels, including padding, but not the border, scrollbar or margin
*/
const showingButtons = () => { 
  if (carousel.scrollWidth <= carousel.clientWidth) {  
    forwardButton.style.display='none';
    backButton.style.display='none'; 
  } else {
    // Show the back button on all slides except the first slide - when the scroll is on 0 position
      if (carousel.scrollLeft == 0) {
        backButton.style.display='none';
      } else {
        backButton.style.display='block'
      }
    // fullWidth is the width of the part of the carousel which user can't see before scrolling
      const fullWidth = carousel.scrollWidth - carousel.offsetWidth /* - 1 */;
    // Show the forward button on all slides except the last slide - when the scroll reaches the fullWidth
      if (carousel.scrollLeft >= fullWidth) {
        forwardButton.style.display='none';
      } else {
        forwardButton.style.display='block';
      }
    }
  };

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  function throttle(func, delay) {
    let lastTime = 0;
    return function executedFunction(...args) {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
        func(...args);
        lastTime = now;
      }
    };
  }

carousel.addEventListener("scroll", debounce(showingButtons, 100));
carousel.addEventListener("scroll", throttle(showingButtons, 200));


/* Displaying all the products in the carousel using the data from the outer file */
const getProductHTML = (product) => {
  const [ integer, decimals ] = product.price.split('.');

  return `
  <div class="carousel__product">
  <a href="#">
    <div class="product__image-wrapper">
      <img class="product__image" src="${product.image}" alt="${product.altText}">
      <img class="product__image product__image--hover" src="${product.imageHover}" alt="${product.altText}">
    </div>
    <div class="product__info">
      <h3 class="product__title">${product.title}</h3>
      <p class="product__description">${product.description}</p>
      <div class="product__price">
        <span class="product__price-integer">${integer}</span>
        <span class="product__price-decimals">,${decimals}</span>
      </div>
      <a href="#">
        <span class="product__favorite material-symbols-outlined">
          favorite
        </span>
      </a>
    </div>
  </a>
  </div>
  `
};

/* I'm using the += operator to append each product to the innerHTML property rather than overwriting it. 
This allows to display all the products in the array rather than just the last one */
products.forEach((product) => {
  carousel.innerHTML += getProductHTML(product);
});

/* Using buttons to scroll the slides of the value of the carousel.clientWidth */
const scrollRight = () => {
    carousel.scrollBy({ 
        top: 0, 
        left: carousel.clientWidth, 
        behavior: 'smooth' 
      });
}

const scrollLeft = () => {
    carousel.scrollBy({ 
        top: 0,
        left: - carousel.clientWidth, 
        behavior: 'smooth' 
      });
}

backButton.addEventListener('click', scrollLeft);
forwardButton.addEventListener('click', scrollRight);




