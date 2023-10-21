document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const emailErrorMessage = document.getElementById('emailErrorMessage');

  form.addEventListener('submit', (e) => {
    if (emailInput.value.trim() === '') {
      emailErrorMessage.style.display = 'block';
      emailErrorMessage.textContent = 'Whoops! It looks like you forgot to add your email';
      emailInput.style.borderColor = 'hsl(354, 100%, 66%)';
      e.preventDefault();
    } else if (!validateEmail(emailInput.value)) {
      emailErrorMessage.style.display = 'block';
      emailInput.style.borderColor = 'hsl(354, 100%, 66%)';
      e.preventDefault();
    }
  });

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
});
