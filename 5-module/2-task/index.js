function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  
  button.addEventListener('click', event => {
    if (text.hidden) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  });
 
}
