let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function random(params) {
    let ranIndex = Math.floor(Math.random() * 3)// + 1
    return hands[ranIndex]
    // if (ranIndex == 0) {
    //     console.log(hands[0])
    // } else if (ranIndex == 1) {
    //     console.log(hands[1])
    // } else {
    //     console.log(hands[2])
    // }
}
console.log(random())

