const sizeControlRangeRef = document.getElementById('font-size-control');
const textLabelRef = document.getElementById('text');

const sizeControlRangeInputHandler = event => {
  textLabelRef.style.fontSize = `${event.currentTarget.value}px`;
};

sizeControlRangeRef.addEventListener('input', sizeControlRangeInputHandler);
