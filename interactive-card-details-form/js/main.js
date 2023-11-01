document.addEventListener('DOMContentLoaded', () => {
  const creditCardForm = document.getElementById('credit-card-form');
  const cardThanks = document.getElementById('thanks-card');

  /*********************  INPUT ELEMENTS **************************/
  const inputName = document.getElementById('inputName');
  const inputCardNumber = document.getElementById('inputCardNumber');
  const inputExpMonth = document.getElementById('inputExpiryMonth');
  const inputExpYear = document.getElementById('inputExpiryYear');
  const inputCvc = document.getElementById('inputCvc');

  /**************  FRONT_CARD AND BACK_CARD ELEMENTS **************/
  const cardNumber = document.getElementById('card-number');
  const cardName = document.getElementById('name');
  const cardExpMonth = document.getElementById('exp-month');
  const cardExpYear = document.getElementById('exp-year');
  const cardCvc = document.getElementById('card-cvc');

  /*********************  ERROR MESSAGES ELEMENTS **************************/
  const nameErrorMessage = document.getElementById('nameErrorMessage');
  const numberErrorMessage = document.getElementById('numberErrorMessage');
  const monthErrorMessage = document.getElementById('monthErrorMessage');
  const yearErrorMessage = document.getElementById('yearErrorMessage');
  const cvcErrorMessage = document.getElementById('cvcErrorMessage');

  const displayError = (inputElement, errorMessageElement, message, addError) => {
    errorMessageElement.innerText = message;
    if (addError) {
      errorMessageElement.style.display = 'block';
      inputElement.classList.add('error');
    } else {
      errorMessageElement.style.display = 'none';
      inputElement.classList.remove('error');
    }
  };

  /***************  VALIDATES AND UPDATES INPUTS, HANDLES ERRORS **************/
  inputName.addEventListener('input', () => {
    const nameValue = inputName.value;
    const regex = /^[a-zA-ZğĞıİöÖüÜşŞçÇ\s]*$/;
    if (regex.test(nameValue)) {
      cardName.innerText = nameValue || 'Jane Appleseed';
      displayError(inputName, nameErrorMessage, '', false);
    } else {
      displayError(inputName, nameErrorMessage, 'Wrong format, letters only', true);
    }
  });

  inputCardNumber.addEventListener('input', (e) => {
    const numberValue = e.target.value;
    const regex = /^[0-9 ]*$/;
    const formattedValue = numberValue.replace(/\s/g, '');

    if (regex.test(numberValue)) {
      let parts = [];
      for (let i = 0; i < formattedValue.length; i += 4) {
        parts.push(formattedValue.substring(i, i + 4));
      }
      const cardNumberWithSpaces = parts.join(' ');
      e.target.value = cardNumberWithSpaces;
      cardNumber.innerText = cardNumberWithSpaces;
      displayError(inputCardNumber, numberErrorMessage, 'Invalid card number format', false);
    } else {
      displayError(inputCardNumber, numberErrorMessage, 'Wrong format, numbers only', true);
    }
  });

  inputExpMonth.addEventListener('input', () => {
    const expMonthValue = inputExpMonth.value;
    const regex = /^[0-9]/;
    if (expMonthValue === '') {
      displayError(inputExpMonth, monthErrorMessage, "Can't be blank", true);
    } else if (!regex.test(expMonthValue)) {
      displayError(inputExpMonth, monthErrorMessage, 'Numbers only', true);
    } else if (parseInt(expMonthValue) > 12) {
      displayError(inputExpMonth, monthErrorMessage, 'Invalid date', true);
    } else {
      cardExpMonth.innerText = expMonthValue || '00';
      displayError(inputExpMonth, monthErrorMessage, '', false);
    }
  });

  inputExpYear.addEventListener('input', () => {
    const expYearValue = inputExpYear.value;
    const regex = /^[0-9]/;
    var currentYear = new Date().getFullYear() % 100;
    var minYear = currentYear;
    var maxYear = currentYear + 10;

    if (expYearValue === '') {
      displayError(inputExpYear, yearErrorMessage, "Can't be blank", true);
    } else if (!regex.test(expYearValue)) {
      displayError(inputExpYear, yearErrorMessage, 'Numbers only', true);
    } else if (parseInt(expYearValue) < minYear || parseInt(expYearValue) > maxYear) {
      displayError(inputExpYear, yearErrorMessage, 'Invalid date', true);
    } else {
      cardExpYear.innerText = expYearValue || '00';
      displayError(inputExpYear, yearErrorMessage, '', false);
    }
  });

  inputCvc.addEventListener('input', () => {
    const cvcValue = inputCvc.value;
    const regex = /^[0-9]/;

    if (cvcValue === '') {
      displayError(inputCvc, cvcErrorMessage, "Can't be blank", true);
    } else if (!regex.test(cvcValue)) {
      displayError(inputCvc, cvcErrorMessage, 'Numbers only', true);
    } else {
      cardCvc.innerText = inputCvc.value || '123';
      displayError(inputCvc, cvcErrorMessage, '', false);
    }
  });
  /***************  PREVENTS DEFAULT FORM SUBMISSION, SHOWS THANK YOU MESSAGE **************/
  creditCardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    creditCardForm.style.display = 'none';
    cardThanks.style.display = 'flex';
  });
});
