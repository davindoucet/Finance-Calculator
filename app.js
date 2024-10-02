document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // UI Vars
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    // Calculate
    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x -1);

    if (isFinite(monthly)) {
        document.getElementById('monthly-payment').textContent = monthly.toFixed(2);
        document.getElementById('total-payment').textContent = (monthly * calculatedPayments).toFixed(2);
        document.getElementById('total-interest').textContent = ((monthly * calculatedPayments) - principal).toFixed(2);
        document.getElementById('results').classList.remove('hide');
    } else {
        alert('Please check your numbers');
    }
});
