const emailInput = document.getElementById('emailInput');
const submit = document.getElementById('button');
const error = document.getElementById('error-text');
const success = document.getElementById('success-text');
const iconError = document.getElementById('icon-error');

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
};

const displayError = () => {
  error.style.display = 'block';
  iconError.style.display = 'block';
  success.style.display = 'none';
  emailInput.style.borderColor = 'red';
};

const displaySuccess = () => {
  emailInput.style.borderColor = 'hsl(0, 36%, 70%)';
  error.style.display = 'none';
  iconError.style.display = 'none';
  success.style.display = 'block';
};

submit.addEventListener('click', () => {
  const email = emailInput.value;
  if (!validateEmail(email)) {
    displayError();
  } else {
    displaySuccess();
  }
  emailInput.value = '';
});
