const spanEl = document.querySelector('#text');
const sizeControleEl = document.querySelector('#font-size-control');

sizeControleEl.addEventListener('input', onMouseMove);

function onMouseMove(event) {
  if (event) {
    spanEl.setAttribute('style', `font-size: ${event.target.value}px;`);
  };
}