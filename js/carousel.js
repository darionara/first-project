const backButton = document.getElementById('back-button');
const forwardButton = document.getElementById('forward-button');
const carousel = document.getElementById('carousel-wrapper');
const carouselSlides = document.getElementsByClassName('carousel__product');

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
I AM RIGHT? */
/* Showing and hiding the carousel buttons depending on the slide number */
const updateCarouselButtons = (currentSlide) => {

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
};
/* I ALSO THINK USING onmouseover ISN'T THE BEST OPTION, BUT IF NOT, WHEN AND HOW THIS FUNCTION SHOULD BE INVOKED? */
carousel.addEventListener('onmouseover', updateCarouselButtons);



/* Using buttons to scroll the slides */
const scrollRight = () => {
    carousel.scrollBy({ 
        top: 0, 
        left: 240, 
        behavior: 'smooth' 
      });
}

const scrollLeft = () => {
    carousel.scrollBy({ 
        top: 0,
        left: -240, 
        behavior: 'smooth' 
      });
}

backButton.addEventListener('click', scrollLeft);
forwardButton.addEventListener('click', scrollRight);




