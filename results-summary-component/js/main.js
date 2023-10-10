async function fetchData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) {
      throw new Error('HTTP Hatası: ' + response.status);
    }
    const data = await response.json();

    const rows = document.querySelector('.rows');

    data.forEach((item) => {
      const rowDiv = createRow(item);
      rows.appendChild(rowDiv);
    });
  } catch (error) {
    console.error('Bir hata oluştu:', error);
  }
}

function createRow(item) {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';

  const badgeDiv = document.createElement('div');
  badgeDiv.className = 'badge';

  const img = document.createElement('img');
  img.src = item.icon;
  img.alt = 'icon';

  const b1 = document.createElement('b');
  b1.textContent = item.category;

  const p = document.createElement('p');

  const b2 = document.createElement('b');
  b2.textContent = item.score;

  const textNode = document.createTextNode('/100');

  badgeDiv.appendChild(img);
  badgeDiv.appendChild(b1);

  p.appendChild(b2);
  p.appendChild(textNode);

  rowDiv.appendChild(badgeDiv);
  rowDiv.appendChild(p);

  return rowDiv;
}

fetchData();
