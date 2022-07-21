const validationInputRef = document.getElementById('validation-input');

const validationInputBlurHandler = event => {
  const validationInputValue = event.currentTarget.value;
  const validationInputLengthAtr = event.currentTarget.dataset.length;

  if (validationInputValue.length === Number(validationInputLengthAtr)) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  } else {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  }
};

validationInputRef.addEventListener('blur', validationInputBlurHandler);
