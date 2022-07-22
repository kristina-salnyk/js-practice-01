function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnRef = document.querySelector('button.change-color');
const colorLabelRef = document.querySelector('span.color');

const changeColorBtnClickHandler = event => {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;
  colorLabelRef.textContent = newColor;
};

changeColorBtnRef.addEventListener('click', changeColorBtnClickHandler);
