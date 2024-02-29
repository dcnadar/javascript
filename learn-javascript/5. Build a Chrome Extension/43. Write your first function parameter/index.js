const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting, name) {
    welcomeEl.textContent = greeting + ", Per Harald Borgen " + name + "👋"
}

greetUser("hey", "Deepak")