document.addEventListener('DOMContentLoaded', () => {
    console.log("1. Pulse Script Loaded");

    const signupForm = document.querySelector('#signupModal form');
    const loginForm = document.querySelector('#loginModal form');

    if (!signupForm) console.error("2a. Signup Form NOT found in HTML!");
    if (!loginForm) console.error("2b. Login Form NOT found in HTML!");

    const validatePulse = (form) => {
        if (!form) return;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log("3. Submit button clicked!");

            const emailInput = form.querySelector('input[type="email"]');
            const passwordInput = form.querySelector('input[type="password"]');
            
            if (!emailInput || !passwordInput) {
                console.error("4. Could not find inputs inside the form!");
                return;
            }

            let isFormValid = true;

            // Email Logic
            if (!emailInput.value.includes('@') || !emailInput.value.includes('.com')) {
                emailInput.classList.add('is-invalid');
                emailInput.classList.remove('is-valid');
                isFormValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
                emailInput.classList.add('is-valid');
            }

            // Password Logic
            if (passwordInput.value.length < 6) {
                passwordInput.classList.add('is-invalid');
                passwordInput.classList.remove('is-valid');
                isFormValid = false;
            } else {
                passwordInput.classList.remove('is-invalid');
                passwordInput.classList.add('is-valid');
            }

            if (isFormValid) {
                alert("Success! Form is valid.");
            }
        });
    };

    validatePulse(signupForm);
    validatePulse(loginForm);
});
function handlecredentialresponse(response) {
    // This unpacks the Google JWT
    const responsepayload = decodeJwtresponse(response.credential);

    // These are the logs you are looking for
    console.log('Full Name: ' + responsepayload.name);
    console.log('Image URL: ' + responsepayload.picture);
    console.log('Email: ' + responsepayload.email);

    // Use backticks (`) for the alert and remove the "!" 
    alert(`Welcome to pulse, ${responsepayload.given_name}`);
    
    window.location.href = "/Html/index.html";
}
function decodeJwtresponse(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}