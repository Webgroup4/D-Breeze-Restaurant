document.querySelectorAll('.contact-form').forEach(function(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form validation (you can expand this)
        if (name && email && message) {
            // Send form data to server using fetch API
            fetch('https://formspree.io/f/mzzbrlva', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => {
                if (response.ok) {
                    document.getElementById('response-message').innerText = 'Thank you for your message, ' + name + '!';
                    form.reset(); // Reset the form
                } else {
                    document.getElementById('response-message').innerText = 'An error occurred, please try again later.';
                }
            })
            .catch(error => {
                document.getElementById('response-message').innerText = 'An error occurred, please try again later.';
            });
        } else {
            document.getElementById('response-message').innerText = 'Please fill out all fields.';
        }
    });
});