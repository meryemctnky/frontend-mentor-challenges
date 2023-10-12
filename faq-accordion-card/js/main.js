const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const accordionButton = item.querySelector('.accordion-button');
  const content = item.querySelector('.accordion-collapse');
  const icon = accordionButton.querySelector('i.fa-solid');

  accordionButton.addEventListener('click', () => {
    if (content.style.display == 'none' || content.style.display == '') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }

    if (accordionButton.style.fontWeight == 'bold') {
      accordionButton.style.fontWeight = 'normal';
    } else {
      accordionButton.style.fontWeight = 'bold';
    }
    if (icon.classList.contains('fa-angle-down')) {
      icon.classList.remove('fa-angle-down');
      icon.classList.add('fa-angle-up');
    } else {
      icon.classList.remove('fa-angle-up');
      icon.classList.add('fa-angle-down');
    }
  });
});
