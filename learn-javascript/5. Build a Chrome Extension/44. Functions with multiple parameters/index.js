const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, emoji) {
    // Rewrite the expression using template literals
    welcomeEl.textContent = `${greeting}, how are you ${name}  👋 and andother ${emoji}`
}

greetUser("Howdy", "James", "🍎")