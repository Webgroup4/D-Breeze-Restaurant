document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const termsChecked = document.getElementById('termsCheckbox').checked;

    const responseMessage = document.getElementById('response-message');
    responseMessage.innerText = ''; //clear previous message
    responseMessage.classList.remove('error');

    if (name && email && message && termsChecked) {
        fetch('https://formspree.io/f/mzzbrlva', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => {
            if (response.ok) {
                responseMessage.innerText = 'Thank you for your message, ' + name + '!';
                document.getElementById('contactForm').reset();
            } else {
                responseMessage.innerText = 'An error occurred, please try again later.';
                responseMessage.classList.add('error');
            }
        })
        .catch(error => {
            responseMessage.innerText = 'An error occurred, please try again later.';
            responseMessage.classList.add('error');
        });
    } else {
        responseMessage.innerText = 'Please fill out all fields and accept the terms.';
        responseMessage.classList.add('error');
    }
});
