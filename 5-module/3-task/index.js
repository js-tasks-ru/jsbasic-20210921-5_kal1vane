function initCarousel() {
  let rightButton = document.querySelector('.carousel__arrow_right');
  let leftButton = document.querySelector('.carousel__arrow_left');
  let photoCarousel = document.querySelector('.carousel__inner');
  let carousel = document.querySelector('.carousel'); 

  let widthCarousel = photoCarousel.offsetWidth;
  let carouselCurrentPosition = 0;

  arrowHidden();
  carousel.addEventListener('click', event => { 
    let target = event.target;

    if (target == leftButton) {
      carouselCurrentPosition += widthCarousel;
    } else if (target == rightButton) {
      carouselCurrentPosition -= widthCarousel;
    }
  

    photoCarousel.style.transform = `translateX(${carouselCurrentPosition}px)`;
    
    arrowHidden();
    
  });
  function arrowHidden() {
    if (carouselCurrentPosition === 0) {
      leftButton.style.display = 'none';
    } else if (carouselCurrentPosition === -3 * widthCarousel) {
      rightButton.style.display = 'none';
    } else {
      leftButton.style.display = '';
      rightButton.style.display = '';
    }
  }
  

}
