let counterValue = 0;

const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const valueLabelRef = document.getElementById('value');

decrementBtnRef.addEventListener('click', function () {
  valueLabelRef.textContent = counterValue -= 1;
});

incrementBtnRef.addEventListener('click', function () {
  valueLabelRef.textContent = counterValue += 1;
});
