const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', (counterValue) => { counterValue = -- valueEl.textContent });

incrementBtn.addEventListener('click', (counterValue) => { counterValue = ++ valueEl.textContent });
