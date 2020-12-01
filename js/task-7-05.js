const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', el => (el.target.value != '')
  ? spanEl.textContent = el.target.value
  : spanEl.textContent = 'незнакомец');
