let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
let logBtn = document.getElementById("log-btn")
// Use addEventListener() to listen for button clicks
logBtn.addEventListener("click", function () {
    console.log(data[0].score + " " + data[0].player)

})
// Log Jane's score when the button is clicked (via data)
