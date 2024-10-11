function submitPayment(event) {
    event.preventDefault();

    // Get form values
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // You can perform further validation here if needed

    // Example: Display payment information
    alert(`Payment Details:\nCard Number: ${cardNumber}\nExpiry Date: ${expiryDate}\nCVV: ${cvv}`);

    // Here you can send the payment details to a server for processing
    // For example, you can use AJAX to send the data to a server-side script
    // and handle the payment processing there
}
/*login*/
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Simulating login credentials validation
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      // Redirect to another page or perform other actions upon successful login
    } else {
      document.getElementById('error-message').textContent = 'Invalid credentials. Please try again.';
    }
  });
  