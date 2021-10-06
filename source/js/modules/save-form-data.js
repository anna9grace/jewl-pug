const saveFormData = () => {
  const form = document.querySelector('.login__form');
  const emailField = document.querySelector('#login-email');
  let storageEmail = '';

  if (!form || !emailField) {
    return;
  }

  try {
    storageEmail = localStorage.getItem('email');
  } catch (err) {
    throw new Error(err);
  }

  if (storageEmail) {
    emailField.value = storageEmail;
  }

  form.addEventListener('submit', () => {
    localStorage.setItem('email', emailField.value);
  });
};

export {saveFormData};
