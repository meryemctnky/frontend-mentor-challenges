document.addEventListener('DOMContentLoaded', () => {
  const ageForm = document.getElementById('ageForm');
  const birthDay = document.getElementById('birthDay');
  const birthMonth = document.getElementById('birthMonth');
  const birthYear = document.getElementById('birthYear');
  const years = document.getElementById('years');
  const months = document.getElementById('months');
  const days = document.getElementById('days');

  // Displays an error message on the webpage for a specific error scenario.
  const showError = (errorMessage, errorElement, errorField, errorLabel) => {
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
    errorLabel.classList.add('light-red');
    errorField.classList.add('error');
  };

  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear();

  // Determines if a given year is a leap year.
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  // Defines the number of days in each month, considering leap years for February.
  const daysInMonth = {
    1: 31, // January has 31 days.
    2: isLeapYear(todayYear) ? 29 : 28, // February has 29 days in a leap year, 28 otherwise.
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  //Validates whether a given day is valid for the specified month and year
  const validateDay = (day, month, year) => {
    if (day < 1 || day > daysInMonth[month]) {
      return false;
    }
    return true;
  };

  const validateForm = (birthDayValue, birthMonthValue, birthYearValue) => {
    const dayErrorMessage = document.getElementById('dayErrorMessage');
    const monthErrorMessage = document.getElementById('monthErrorMessage');
    const yearErrorMessage = document.getElementById('yearErrorMessage');

    const birthDayLabel = document.querySelector('label[for="birthDay"]');
    const birthMonthLabel = document.querySelector('label[for="birthMonth"]');
    const birthYearLabel = document.querySelector('label[for="birthYear"]');

    if (!validateDay(birthDayValue, birthMonthValue, birthYearValue)) {
      showError('Must be a valid day', dayErrorMessage, birthDay, birthDayLabel);
    }

    if (!birthYearValue) {
      showError('This field is required', yearErrorMessage, birthYear, birthYearLabel);
    } else if (birthYearValue < 1900 || birthYearValue > todayYear) {
      showError('Must be in the past', yearErrorMessage, birthYear, birthYearLabel);
    }

    if (!birthMonthValue) {
      showError('This field is required', monthErrorMessage, birthMonth, birthMonthLabel);
    } else if (birthMonthValue < 1 || birthMonthValue > 12) {
      showError('Must be a valid month', monthErrorMessage, birthMonth, birthMonthLabel);
    }

    if (!birthDayValue) {
      showError('This field is required', dayErrorMessage, birthDay, birthDayLabel);
    } else if (birthDayValue < 1 || birthDayValue > 31) {
      showError('Must be a valid day', dayErrorMessage, birthDay, birthDayLabel);
    }

    if (
      (birthYearValue && (birthYearValue < 1900 || birthYearValue > todayYear)) ||
      (birthMonthValue && (birthMonthValue < 1 || birthMonthValue > 12)) ||
      (birthDayValue && (birthDayValue < 1 || birthDayValue > 31))
    ) {
      return false;
    }

    return true;
  };

  const calculateAge = (birthDay, birthMonth, birthYear, years, months, days) => {
    let yearsResult = todayYear - birthYear;
    let monthsResult = todayMonth - birthMonth;
    let daysResult = todayDay - birthDay;

    if (monthsResult < 0 || (monthsResult === 0 && daysResult < 0)) {
      yearsResult--;
      monthsResult += 12;
    }

    if (daysResult < 0) {
      daysResult = daysInMonth[todayMonth - 1] - birthDay + todayDay;
      monthsResult--;
    }

    years.textContent = yearsResult;
    months.textContent = monthsResult;
    days.textContent = daysResult;
  };

  ageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const birthDayValue = parseInt(birthDay.value);
    const birthMonthValue = parseInt(birthMonth.value);
    const birthYearValue = parseInt(birthYear.value);

    if (validateForm(birthDayValue, birthMonthValue, birthYearValue)) {
      calculateAge(birthDayValue, birthMonthValue, birthYearValue, years, months, days);
    }
  });
});
