const validationInputRef = document.getElementById('validation-input');

function validationInputBlurHandler() {
  if (this.value.length === Number(this.dataset.length)) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
}

validationInputRef.addEventListener('blur', validationInputBlurHandler);
