const nameInputRef = document.getElementById('name-input');
const nameOutputRef = document.getElementById('name-output');

const nameInputHandler = event => {
  const currentInputValue = event.currentTarget.value;
  nameOutputRef.textContent = currentInputValue === '' ? 'Anonymous' : currentInputValue;
};

nameInputRef.addEventListener('input', nameInputHandler);
