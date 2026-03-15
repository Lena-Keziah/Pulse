document.addEventListener('DOMContentLoaded', () => {
    // Select the specific signup form by the ID we just added
    const signupForm = document.querySelector('#signup-form-initial');

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Stop the immediate switch
            
            const emailInput = signupForm.querySelector('input[type="email"]');
            const passwordInput = signupForm.querySelector('input[type="password"]');
            
            let isFormValid = true;

            // Email Validation Logic
            if (!emailInput.value.includes('@') || !emailInput.value.includes('.com')) {
                emailInput.classList.add('is-invalid');
                isFormValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
                emailInput.classList.add('is-valid');
            }

            // Password Validation Logic
            if (passwordInput.value.length < 6) {
                passwordInput.classList.add('is-invalid');
                isFormValid = false;
            } else {
                passwordInput.classList.remove('is-invalid');
                passwordInput.classList.add('is-valid');
            }

            // ONLY switch if valid
            if (isFormValid) {
                // 1. Hide the Signup Modal
                const signupModalEl = document.getElementById('signupModal');
                const firstModal = bootstrap.Modal.getInstance(signupModalEl);
                firstModal.hide();

                // 2. Open the Join Network Modal
                const joinModalEl = document.getElementById('joinNetworkModal');
                const secondModal = new bootstrap.Modal(joinModalEl);
                secondModal.show();
            }
        });
    }
});
            // THE FIX: Switch Modals if valid and it's the Signup form
            if (isFormValid) {
                if (isSignup) {
                    // 1. Get the current Signup Modal instance and hide it
                    const signupModalEl = document.getElementById('signupModal');
                    const firstModal = bootstrap.Modal.getInstance(signupModalEl);
                    firstModal.hide();

                    // 2. Wait a tiny bit for the hide animation, then show the second modal
                    setTimeout(() => {
                        const joinModalEl = document.getElementById('joinNetworkModal');
                        const secondModal = new bootstrap.Modal(joinModalEl);
                        secondModal.show();
                    }, 400); 
                } else {
                    // If it's the login form, just redirect
                    window.location.href = "/Html/Post.html";
                }
            }
    

    // Pass 'true' to signupForm so it knows to trigger the second modal
    validatePulse(signupForm, true); 
    validatePulse(loginForm, false);
