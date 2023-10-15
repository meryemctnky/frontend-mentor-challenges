const shareElement = document.querySelector('.share');

shareElement.addEventListener('click', function () {
  const tooltip = document.querySelector('.tooltip');
  const author = document.querySelector('.author');
  if (window.innerWidth < 768) {
    if (author.style.display == 'flex' && tooltip.style.display == 'none') {
      author.style.display = 'none';
      tooltip.style.display = 'flex';
      tooltip.style.alignItems = 'center';
      tooltip.style.justifyContent = 'space-between';
      shareElement.style.backgroundColor = 'hsl(217, 19%, 35%)';
    } else {
      author.style.display = 'flex';
      tooltip.style.display = 'none';
      shareElement.style.backgroundColor = 'white';
    }
  }

  if (window.innerWidth > 767) {
    if (tooltip.style.display == 'block') {
      tooltip.style.display = 'none';
    } else {
      tooltip.style.display = 'block';
    }
  }
});
