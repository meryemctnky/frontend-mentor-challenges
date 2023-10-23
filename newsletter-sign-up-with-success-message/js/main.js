const subscribeForm = document.getElementById('subscribeForm');
const card = document.querySelector('.card');
const cardSuccess = document.querySelector('.card-success');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add('error');
    cardSuccess.style.display = 'none';
    card.style.display = 'flex';
    errorMessage.style.display = 'flex';
  } else {
    emailInput.classList.remove('error');
    cardSuccess.style.display = 'flex';
    card.style.display = 'none';
  }
});

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.trim().toLowerCase());
};
