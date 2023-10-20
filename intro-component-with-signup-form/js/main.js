const signupForm = document.getElementById('signupForm');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

const firstNameError = document.getElementById('firstNameErrorMessage');
const lastNameError = document.getElementById('lastNameErrorMessage');
const emailError = document.getElementById('emailErrorMessage');
const passwordError = document.getElementById('passwordErrorMessage');

const firstNameIcon = document.getElementById('firstNamerrorIcon');
const lastNameIcon = document.getElementById('lastNameErrorIcon');
const emailIcon = document.getElementById('emailErrorIcon');
const passwordIcon = document.getElementById('passwordErrorIcon');

const inputs = [
  { element: firstName, errorElement: firstNameError, iconElement: firstNameIcon, errorMessage: 'First Name cannot be empty' },
  { element: lastName, errorElement: lastNameError, iconElement: lastNameIcon, errorMessage: 'Last Name cannot be empty' },
  { element: email, errorElement: emailError, iconElement: emailIcon, errorMessage: 'Looks like this is not an email' },
  {
    element: password,
    errorElement: passwordError,
    iconElement: passwordIcon,
    errorMessage: 'Password should be at least 6 characters long',
  },
];

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

const updateValidation = (element, errorElement, iconElement, errorMessage, isSuccess) => {
  errorElement.style.display = isSuccess ? 'none' : 'block';
  iconElement.style.display = isSuccess ? 'none' : 'inline';
  element.style.borderColor = isSuccess ? '#ced4da' : 'hsl(0, 100%, 74%)';
  element.classList.toggle('success', isSuccess);
  if (!isSuccess) {
    errorElement.textContent = errorMessage;
  }
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  let isFormValid = true;

  inputs.forEach((input) => {
    const trimmedValue = input.element.value.trim();
    if (
      trimmedValue === '' ||
      (input.element === password && trimmedValue.length < 6) ||
      (input.element === email && !isValidEmail(trimmedValue))
    ) {
      updateValidation(input.element, input.errorElement, input.iconElement, input.errorMessage, false);
      isFormValid = false;
    } else {
      updateValidation(input.element, input.errorElement, input.iconElement, '', true);
    }
  });
  if (isFormValid) {
    signupForm.reset();
  }
};
