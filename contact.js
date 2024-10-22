document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation (you can expand this)
    if (name && email && message) {
        document.getElementById('response-message').innerText = 'Thank you for your message, ' + name + '!';
        document.getElementById('contact-form').reset(); // Reset the form
    } else {
        document.getElementById('response-message').innerText = 'Please fill out all fields.';
    }
});
