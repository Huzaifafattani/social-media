function showSignup() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
}

function showLogin() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function logout() {
    document.getElementById("main").style.display = "none";
    document.getElementById("login").style.display = "block";
}

document.getElementById("loginForm").addEventListener("submit"), function(event) {
    event.preventDefault();
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    // Perform login functionality (e.g., make API calls, check credentials)
    // If login is successful, show the main page; otherwise, show an error message
    document.getElementById("login").style}
