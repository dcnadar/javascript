let age = 18

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
// function discount() {
// let age = 6
if (age < 6) {
    console.log("Free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student dis")
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

// }

// discount()