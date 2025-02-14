// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (email === '' || message === '') {
        alert('Please fill out all fields');
        return;
    }

    // Log the form data to console (You can replace this with a backend API call)
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Success message
    alert('Your message has been sent successfully!');
});