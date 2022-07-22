const nameInputRef = document.getElementById('name-input');
const nameOutputRef = document.getElementById('name-output');

function nameInputHandler() {
  nameOutputRef.textContent = this.value === '' ? 'Anonymous' : this.value;
}

nameInputRef.addEventListener('input', nameInputHandler);
