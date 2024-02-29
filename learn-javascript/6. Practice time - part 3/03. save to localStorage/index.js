// let locStore = document.getElementById("local")
// Save a value to localStorage

let value = "the value is now 200"

// localStorage.setItem("value2", value)
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
let st = localStorage.getItem("value")
console.log(st)
console.log(localStorage.getItem("value2"))
// console.log(localStorage.getItem(st))
localStorage.clear()