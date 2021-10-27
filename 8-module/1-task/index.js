import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, { once: true });

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    const removePosition = (this.elem.getBoundingClientRect().top + window.pageYOffset);
    const positionFixed = this.elem.getBoundingClientRect().top;
    const container = document.querySelector('.header.container');

    const containerWidth = container.getBoundingClientRect().right + 20;

    const widthElem = this.elem.offsetWidth;
    const windowAvailable = document.documentElement.clientWidth;

    const leftMargin = Math.min(
      containerWidth,
      windowAvailable - widthElem - 10
    );

    this.elem.style.left = `${leftMargin}px`;

    if (positionFixed < 0) {
      this.elem.style.position = 'fixed';
      this.elem.style.top = '50px';
      this.elem.style.zIndex = '1000';
      this.elem.style.left = `${leftMargin}px`;
    }
    if (positionFixed == removePosition) {
      this.elem.style = '';
    }
    const mobailFixed = document.documentElement.clientWidth;
    if (mobailFixed <= 767) {
      this.elem.style = '';
    }
  }
}
