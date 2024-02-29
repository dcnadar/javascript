let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

//
// my method------------------------------------
// function apples(params) {
//     for (let i = 0; i < fruit.length; i++) {
//         if (fruit[i] == "🍎") {
//             appleShelf.textContent += fruit[i]
//         }
//     }
// }
// function orange(params) {

//     for (let j = 0; j < fruit.length; j++) {
//         if (fruit[j] == "🍊") {
//             orangeShelf.textContent += fruit[j]
//         }
//     }
// }

// instructor method--------------------------
function sortFruit(params) {
    for (let j = 0; j < fruit.length; j++) {
        if (fruit[j] == "🍊") {
            orangeShelf.textContent += fruit[j]
        }
        else {
            appleShelf.textContent += fruit[j]
        }
    }
    // for (let i = 0; i < fruit.length; i++) {
    //     if (fruit[i] == "🍎") {
    //         appleShelf.textContent += fruit[i]
    //     }
    // }

}

sortFruit()

