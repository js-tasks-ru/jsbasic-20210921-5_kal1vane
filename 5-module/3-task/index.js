function initCarousel() {
  let rightButton = document.querySelector('.carousel__arrow_right');
  let leftButton = document.querySelector('.carousel__arrow_left');
  let photoCarousel = document.querySelector('.carousel__inner');
  let carousel = document.querySelector('.carousel'); 
  let lengthCarousel = document.querySelectorAll('.carousel__slide');
  
  let widthCarousel = photoCarousel.offsetWidth;
  let carouselCurrentPosition = 0;
  if (carouselCurrentPosition === 0) {
    leftButton.style.display = 'none';
  }

  carousel.addEventListener('click', event => { 
    let target = event.target;

    if (target == leftButton) {
      carouselCurrentPosition += widthCarousel;
    } else if (target == rightButton) {
      carouselCurrentPosition -= widthCarousel;
    }
  
    if (carouselCurrentPosition === 0) {
      leftButton.style.display = 'none';
    } else if (carouselCurrentPosition === -(lengthCarousel.length - 1) * widthCarousel) {
      rightButton.style.display = 'none';
    } else {
      leftButton.style.display = '';
      rightButton.style.display = '';
    }

    photoCarousel.style.transform = `translateX(${carouselCurrentPosition}px)`;
    
    
  });
  
  

}
