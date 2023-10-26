document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const closeButton = document.getElementById('closeButton');
  const offcanvas = document.getElementById('offcanvas');

  toggleButton.addEventListener('click', () => {
    offcanvas.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    offcanvas.classList.remove('active');
  });
});
