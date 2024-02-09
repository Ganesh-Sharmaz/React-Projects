document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');

    // Pre-defined user objects
    const users = [
        { username: "Ganesh_Sharmaz", email: "shashanklhr@gmail.com", password: "Ganesh@123" },
        { username: "user2", email: "user2@example.com", password: "password2" },
        { username: "user3", email: "user3@example.com", password: "password3" },
        { username: "user4", email: "user4@example.com", password: "password4" },
        { username: "user5", email: "user5@example.com", password: "password5" }
    ];

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get input values
        const usernameInput = document.getElementById('username').value;
        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;

        // Check if input matches any user object
        const matchedUser = users.find(user => 
            user.username === usernameInput &&
            user.email === emailInput &&
            user.password === passwordInput
        );

        // Display appropriate message
        if (matchedUser) {
            alert("Congratulations! You are logged in.");
            // Here you can redirect to another page or perform further actions
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
