function hideSelf() {
  let button = document.querySelector('.hide-self-button');

  button.addEventListener('click', event => {
    event.target.hidden = "true";
  });
}
