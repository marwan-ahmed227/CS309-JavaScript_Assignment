const form = document.querySelector("#registration-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Read the values from the inputs
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
    const age = Number(document.querySelector("#age").value);

    // Clear old error messages
    document.querySelector("#name-error").textContent = "";
    document.querySelector("#email-error").textContent = "";
    document.querySelector("#password-error").textContent = "";
    document.querySelector("#confirm-password-error").textContent = "";
    document.querySelector("#age-error").textContent = "";
    document.querySelector("#form-message").textContent = "";

    let isValid = true;

    if (name === "") {
        document.querySelector("#name-error").textContent = "Name is required.";
        isValid = false;
    }

    // Simple email pattern from the JavaScript guide
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        document.querySelector("#email-error").textContent = "Please enter a valid email.";
        isValid = false;
    }

    if (password.length < 8) {
        document.querySelector("#password-error").textContent =
            "Password must be at least 8 characters.";
        isValid = false;
    }

    if (confirmPassword === "" || confirmPassword !== password) {
        document.querySelector("#confirm-password-error").textContent =
            "Passwords do not match.";
        isValid = false;
    }

    // The guide shows checking a number in the range 1 to 120
    if (document.querySelector("#age").value.trim() === "" ||
        Number.isNaN(age) || age < 1 || age > 120) {
        document.querySelector("#age-error").textContent = "Age must be between 1 and 120.";
        isValid = false;
    }

    if (isValid) {
        document.querySelector("#form-message").textContent =
            "Registration form is valid!";
        form.reset();
    }
});
