const loginFormRef = document.querySelector('form.login-form');

const loginFormSubmitHandler = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('All fields of the form must be filled out.');
    return;
  }

  const userData = { email: email.value, password: password.value };
  console.log(userData);

  event.currentTarget.reset();
};

loginFormRef.addEventListener('submit', loginFormSubmitHandler);
