const backButton = document.getElementById('back-button');
const forwardButton = document.getElementById('forward-button');
const carousel = document.getElementById('carousel-wrapper');
/* const carouselSlides = document.getElementsByClassName('carousel__product'); */

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

carousel.addEventListener("scroll", showingButtons);


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



/* IT DOESN'T WORK... I THINK IT IS BECAUSE carouselSlides IS NOT AN ARRAY OF PRODUCTS,
AM I RIGHT? */
/* Showing and hiding the carousel buttons depending on the slide number */
/* const updateCarouselButtons = (currentSlide) => {

  // Show the forward button on all slides except the last slide
  if (currentSlide < carouselSlides.length) {
    forwardButton.style.display = "block";
  } else {
    forwardButton.style.display = "none";
  }

  // Show the previous button on all slides except the first slide
  if (currentSlide > 1) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
}; */
/* I ALSO THINK USING onmouseover ISN'T THE BEST OPTION, BUT IF NOT, WHEN AND HOW THIS FUNCTION SHOULD BE INVOKED? */
/* carousel.addEventListener('onmouseover', updateCarouselButtons); */



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




