function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputControlRef = document.querySelector('#controls>input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesBlockRef = document.getElementById('boxes');

const getNextBoxItemSizes = () => {
  const lastBoxItemRef = boxesBlockRef.lastElementChild;

  if (lastBoxItemRef === null) return { width: 30, height: 30 };

  return {
    width: Number.parseInt(lastBoxItemRef.style.width) + 10,
    height: Number.parseInt(lastBoxItemRef.style.height) + 10,
  };
};

const createBoxes = amount => {
  const boxItems = [];
  const nextBoxItemSizes = getNextBoxItemSizes();

  for (let i = 0; i < amount; i += 1) {
    const newBoxItemRef = document.createElement('div');
    newBoxItemRef.style.width = `${nextBoxItemSizes.width}px`;
    newBoxItemRef.style.height = `${nextBoxItemSizes.height}px`;
    newBoxItemRef.style.backgroundColor = getRandomHexColor();

    boxItems.push(newBoxItemRef);

    nextBoxItemSizes.width += 10;
    nextBoxItemSizes.height += 10;
  }
  boxesBlockRef.append(...boxItems);
};

const createBtnClickHandler = () => {
  const amount = inputControlRef.value;

  if (amount <= 0) {
    alert('Invalid value entered.');
    return;
  }

  createBoxes(amount);
};

const destroyBoxes = () => {
  boxesBlockRef.innerHTML = '';
};

createBtnRef.addEventListener('click', createBtnClickHandler);

destroyBtnRef.addEventListener('click', destroyBoxes);
