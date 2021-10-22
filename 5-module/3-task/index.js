function initCarousel() {
  let rightButton = document.querySelector('.carousel__arrow_right');
  let leftButton = document.querySelector('.carousel__arrow_left');
  let photoCarousel = document.querySelector('.carousel__inner');
  let carousel = document.querySelector('.carousel'); 
  let lengthCarousel = document.querySelectorAll('.carousel__slide');
  
  let widthCarousel;
  let carouselCurrentPosition = 0;
  leftButton.style.display = 'none';


  rightButton.addEventListener('click', function () {
    widthCarousel = photoCarousel.offsetWidth;
    carouselCurrentPosition -= widthCarousel;
    checkPostion();    
  });
  leftButton.addEventListener('click', function () {
    widthCarousel = photoCarousel.offsetWidth;
    carouselCurrentPosition += widthCarousel;
    checkPostion();  
  });
  function checkPostion() {
    if (carouselCurrentPosition === 0) {
      leftButton.style.display = 'none';
    } else if (carouselCurrentPosition === -(lengthCarousel.length - 1) * widthCarousel) {
      rightButton.style.display = 'none';
    } else {
      leftButton.style.display = '';
      rightButton.style.display = '';
    }
    photoCarousel.style.transform = `translateX(${carouselCurrentPosition}px)`;
  }
}
