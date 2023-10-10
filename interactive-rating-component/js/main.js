const ratings = document.querySelectorAll('.ratings li');
const ratingCard = document.getElementById('ratingCard');
const submitBtn = document.getElementById('submitBtn');
const cardImg = document.querySelector('.card-img');
const resultText = document.getElementById('result-text');
const desc = document.getElementById('desc');
const thanksImg = document.getElementById('thanks-img');

let selectedRating = 0;

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    selectedRating = parseInt(rating.getAttribute('data-rating'));
    updateSelectedRatingText();
    rating.style.backgroundColor = 'hsl(217, 12%, 63%)';
  });
});

submitBtn.addEventListener('click', () => {
  resultText.style.display = 'block';
  ratingCard.querySelector('h1').textContent = 'Thank you!';
  desc.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
  desc.style.textAlign = 'center';
  desc.style.padding = '0 1rem';

  document.querySelector('.ratings').style.display = 'none';
  submitBtn.style.display = 'none';
  cardImg.style.display = 'none';
  thanksImg.style.display = 'block';
  ratingCard.classList.add('center');
});

function updateSelectedRatingText() {
  const selectedRatingText = `You selected ${selectedRating} out of 5`;
  resultText.textContent = selectedRatingText;
}
