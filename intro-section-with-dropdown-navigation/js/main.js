document.addEventListener('DOMContentLoaded', function () {
  const featuresDropdownBtn = document.getElementById('featuresDropdownBtn');
  const featuresDropdownMenu = document.getElementById('featuresDropdownMenu');
  const companyDropdownBtn = document.getElementById('companyDropdownBtn');
  const companyDropdownMenu = document.getElementById('companyDropdownMenu');
  const overlay = document.querySelector('.overlay');

  featuresDropdownBtn.addEventListener('click', function () {
    featuresDropdownMenu.classList.toggle('active');
    if (featuresDropdownBtn.src.includes('icon-arrow-down.svg')) {
      featuresDropdownBtn.src = 'images/icon-arrow-up.svg';
    } else {
      featuresDropdownBtn.src = 'images/icon-arrow-down.svg';
    }
  });

  companyDropdownBtn.addEventListener('click', function () {
    companyDropdownMenu.classList.toggle('active');
    if (companyDropdownBtn.src.includes('icon-arrow-down.svg')) {
      companyDropdownBtn.src = 'images/icon-arrow-up.svg';
    } else {
      companyDropdownBtn.src = 'images/icon-arrow-down.svg';
    }
  });

  const toggleButton = document.getElementById('toggleButton');
  const offcanvas = document.getElementById('offcanvas');

  toggleButton.addEventListener('click', function () {
    offcanvas.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  const closeButton = document.getElementById('closeButton');
  closeButton.addEventListener('click', function () {
    offcanvas.classList.remove('active');
    overlay.classList.remove('active');
  });
});
