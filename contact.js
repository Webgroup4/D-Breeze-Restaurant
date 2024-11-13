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


const feedbackForm = document.getElementById('feedbackForm');
const stars = document.querySelectorAll('.stars i');
const feedbackMessage = document.getElementById('feedbackMessage');
const userMessage = document.getElementById('userMessage');
const feedbackContainer = document.getElementById('feedbackContainer');
let selectedRating = 0;

// Handle star selection
stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-value'));
        updateStars(selectedRating);
    });

    star.addEventListener('mouseover', () => {
        const rating = parseInt(star.getAttribute('data-value'));
        updateStars(rating);
    });

    star.addEventListener('mouseout', () => {
        updateStars(selectedRating);
    });
});

// Update the stars based on the selected rating
function updateStars(rating) {
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        if (value <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = document.getElementById('message').value;

    // Reset feedbackMessage classes
    feedbackMessage.className = '';

    if (selectedRating === 0) {
        feedbackMessage.textContent = 'Please select a rating.';
        feedbackMessage.classList.add('error');
        feedbackMessage.style.display = 'block';
        return;
    }

    // Send feedback data to server (replace with your server-side logic)
    fetch('submit-feedback.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rating: selectedRating, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            feedbackMessage.textContent = 'Feedback submitted successfully!';
            feedbackMessage.classList.add('success');
            addFeedbackToContainer(selectedRating, message);
            // Clear the form
            feedbackForm.reset();
            updateStars(0); // Reset the stars
            selectedRating = 0; // Reset the rating
        } else {
            feedbackMessage.textContent = 'Error submitting feedback. Please try again.';
            feedbackMessage.classList.add('error');
        }
        feedbackMessage.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        feedbackMessage.textContent = 'An error occurred. Please try again later.';
        feedbackMessage.classList.add('error');
        feedbackMessage.style.display = 'block';
    });
});

// Function