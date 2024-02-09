document.addEventListener("DOMContentLoaded", function() {
    const loginPage = document.getElementById('loginPage');
    const signupPage = document.getElementById('signupPage');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const signupLink = document.getElementById('signupLink');
    const loginLink = document.getElementById('loginLink');

    let users = JSON.parse(localStorage.getItem('users')) || [];

    signupLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginPage.style.display = "none";
        signupPage.style.display = "block";
    });

    loginLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginPage.style.display = "block";
        signupPage.style.display = "none";
    });

    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = document.getElementById('signupUsername').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value.trim();
    
        if (!username || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }
    
        // Check if username or email already exists
        const existingUser = users.find(user => user.username === username || user.email === email);
        if (existingUser) {
            alert("Username or email already exists. Please log in instead.");
            loginPage.style.display = "block";
            signupPage.style.display = "none";
            return;
        }
    
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Sign up successful! You can now log in.");
        loginPage.style.display = "block";
        signupPage.style.display = "none";
        console.log(users);
    });
    

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value.trim();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        
        if (!username || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        const matchedUser = users.find(user => 
            user.username === username &&
            user.email === email &&
            user.password === password
        );

        if (matchedUser) {
            alert("Congratulations! You are logged in.");
            // Redirect or further actions can be performed here
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
