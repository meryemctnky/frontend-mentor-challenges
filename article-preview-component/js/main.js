const shareElement = document.querySelector('.share');

shareElement.addEventListener('click', function () {
  const tooltip = document.querySelector('.tooltip');

  if (tooltip.style.visibility == 'hidden') {
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
    shareElement.style.backgroundColor = '#48556a';
    shareElement.style.color = 'white';
  } else {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
  }
});
