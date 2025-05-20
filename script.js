    const travelForm = document.getElementById('travelForm');
    const travelResults = document.getElementById('travelResults');

    travelForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const tripName = document.getElementById('tripName').value.trim();
      const itinerary = document.getElementById('itinerary').value.trim();

      if (!tripName || !itinerary) {
        alert("Please fill out the trip name and itinerary.");
        return;
      }

      travelResults.innerHTML = `<strong>Trip Name:</strong> ${tripName}<br><strong>Itinerary:</strong><br>${itinerary.replace(/\n/g, '<br>')}`;
      travelResults.style.display = 'block';
    });

    const form = document.getElementById('expenseForm');
    const errorMsg = document.getElementById('errorMsg');
    const results = document.getElementById('results');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const namesInput = document.getElementById('names').value.trim();
      const totalExpenseInput = document.getElementById('totalExpense').value.trim();

      if (!namesInput || !totalExpenseInput || isNaN(totalExpenseInput) || totalExpenseInput <= 0) {
        errorMsg.textContent = 'Please enter valid names and a positive expense amount.';
        results.style.display = 'none';
        return;
      }

      const names = namesInput.split(',').map(name => name.trim()).filter(name => name);
      const totalExpense = parseFloat(totalExpenseInput);

      if (names.length === 0) {
        errorMsg.textContent = 'Please enter at least one name.';
        results.style.display = 'none';
        return;
      }

      const individualShare = (totalExpense / names.length).toFixed(2);
      let outputHTML = `<strong>Total Expense:</strong> $${totalExpense.toFixed(2)}<br><strong>Each Person Owes:</strong>`;
      outputHTML += '<ul>';
      names.forEach(name => {
        outputHTML += `<li class="person">${name}: $${individualShare}</li>`;
      });
      outputHTML += '</ul>';

      results.innerHTML = outputHTML;
      results.style.display = 'block';
      errorMsg.textContent = '';
    });