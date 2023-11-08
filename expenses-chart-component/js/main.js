document.addEventListener('DOMContentLoaded', (e) => {
  const chart = document.getElementById('chart');
  const balanceValue = document.getElementById('balance-value');
  const totalValue = document.getElementById('total-value');

  const fetchData = async () => {
    try {
      const response = await fetch('data.json');

      if (!response.ok) {
        throw new Error('HTTP Hatası: ' + response.status);
      }

      const data = await response.json();

      const maxAmount = Math.max(...data.map((item) => item.amount));
      const totalBalance = 921.48;
      const totalAmount = 478.33;

      balanceValue.textContent = `$${totalBalance.toFixed(2)}`;
      totalValue.textContent = `$${totalAmount.toFixed(2)}`;

      data.forEach((item) => {
        const barContainer = document.createElement('div');
        barContainer.classList.add('bar-container');

        const bar = document.createElement('div');
        bar.classList.add('bar');

        if (item.amount === maxAmount) {
          bar.classList.add('max-bar');
        }
        const barHeight = (item.amount / totalAmount) * totalBalance * 1.5 + 'px';
        bar.style.height = barHeight;

        const createTooltip = () => {
          const tooltip = document.createElement('div');
          tooltip.classList.add('tooltip');
          tooltip.textContent = `$${item.amount}`;
          bar.appendChild(tooltip);
        };

        const removeTooltip = () => {
          const tooltip = bar.querySelector('.tooltip');
          if (tooltip) {
            bar.removeChild(tooltip);
          }
        };

        bar.addEventListener('mouseover', createTooltip);
        bar.addEventListener('mouseout', removeTooltip);

        barContainer.appendChild(bar);

        const dayLabel = document.createElement('div');
        dayLabel.classList.add('day-label');
        dayLabel.textContent = item.day;
        barContainer.appendChild(dayLabel);

        chart.appendChild(barContainer);
      });
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  fetchData();
});
