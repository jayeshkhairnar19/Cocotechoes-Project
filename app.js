function generateLibrary() {
    const libraryTable = document.getElementById('libraryTable');
    const tbody = libraryTable.querySelector('tbody');
    tbody.innerHTML = '';

    const numMembers = 10;

    for (let i = 1; i <= numMembers; i++) {
      const numBooks = Math.floor(Math.random() * (30 - 10 + 1)) + 10;

      for (let j = 1; j <= numBooks; j++) {
        const memberName = `Member${i}`;
        const bookName = `Book${j}`;
        const checkoutDate = getRandomDate();
        const returnDate = getRandomDate();

        const row = `<tr>
          <td>${memberName}</td>
          <td>${bookName}</td>
          <td>${checkoutDate}</td>
          <td>${returnDate}</td>
        </tr>`;

        tbody.innerHTML += row;
      }
    }
  }

  function getRandomDate() {
    const startDate = new Date(2024, 0, 1).getTime();
    const endDate = new Date(2024, 11, 31).getTime();
    const randomDate = new Date(startDate + Math.random() * (endDate - startDate));
    return randomDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  }

  function calculateAverageDays() {
    const libraryTable = document.getElementById('libraryTable');
    const tbody = libraryTable.querySelector('tbody');

    let totalDays = 0;
    let totalBooks = 0;

    for (const row of tbody.rows) {
      const checkoutDate = new Date(row.cells[2].textContent);
      const returnDate = new Date(row.cells[3].textContent);
      const daysKept = (returnDate - checkoutDate) / (1000 * 60 * 60 * 24);

      totalDays += daysKept;
      totalBooks++;
    }

    const averageDays = totalBooks > 0 ? totalDays / totalBooks : 0;
    const averageDaysElement = document.getElementById('averageDays');
    averageDaysElement.textContent = `Average number of days each member keeps the book: ${averageDays.toFixed(2)} days`;
  }