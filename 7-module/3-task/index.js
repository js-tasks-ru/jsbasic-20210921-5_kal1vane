export default class StepSlider {
  #elem;
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.#elem = this.createThumb();
  }
  get elem () {
    return this.#elem;
  }
  createThumb () {
    this.slider = createHTML(`
  <div class="slider">
    <div class="slider__thumb">
      <span class="slider__value">${this.value}</span>
    </div>
    <div class="slider__progress"></div>
    <div class="slider__steps"></div>
  </div>
    `);
    function createHTML(html) {
      const div = document.createElement('div');
      div.innerHTML = html;
      return div.firstElementChild;
    }
    this.createSteps();
    this.clickThump();
  
    return this.slider;
  }
  createSteps () {
    let steps = this.slider.querySelector('.slider__steps');
    for (let i = 0; i < this.steps ; i++) {
      this.span = document.createElement('SPAN');
      if (`${this.value}` == i) {
        this.span.classList.add('slider__step-active');
      }
      steps.append(this.span);
    } 
  }
  clickThump () {
    let sliderProgress = this.slider.querySelector('.slider__progress');
    let sliderValue = this.slider.querySelector('.slider__value');
    let sliderSteps = this.slider.querySelector('.slider__steps');
    let sliderTumbs = this.slider.querySelector('.slider__thumb');

    sliderProgress.style.width = `0%`;

    this.slider.addEventListener('click', event => {
      let left = event.clientX - this.slider.getBoundingClientRect().left;
      let leftRelative = left / this.slider.offsetWidth;
      let SliderSegments = this.steps - 1;
      let notTrueValue = leftRelative * SliderSegments;
      let trueValue = Math.round(notTrueValue);
      let leftPercents = trueValue / SliderSegments * 100;

      for (let i = 0; i < sliderSteps.childNodes.length; i++) {
        sliderSteps.childNodes[i].classList.remove('slider__step-active');
        if (trueValue == i) {
          sliderSteps.childNodes[i].classList.add('slider__step-active');
        }
      }
      sliderTumbs.style.left = `${leftPercents}%`;
      sliderProgress.style.width = `${leftPercents}%`;
      sliderValue.textContent = trueValue;
      const customEvent = new CustomEvent("slider-change", {
        detail: trueValue,
        bubbles: true
      });
      this.slider.dispatchEvent(customEvent);
    });
  }
}
