document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://date.nager.at/api/v3/publicholidays/2025/TR';
  const tableBody = document.querySelector('#holiday-table tbody');
  const loadingMessage = document.querySelector('#loading');

  fetch(url)
    .then(response => response.json())
    .then(holidays => {
     
      loadingMessage.style.display = 'none';
      
      
      holidays.forEach(holiday => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${holiday.date}</td>
          <td>${holiday.name}</td>
          <td>${holiday.localName}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Veri alınırken bir hata oluştu:', error);
      loadingMessage.textContent = 'Veri alınırken bir hata oluştu.';
    });
});
