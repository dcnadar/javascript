// //Block scope in java
// if (true) console.log("dfsadf")

// // when a function expect only one statement then we use block to send multiple statements
// if (true) {
//     console.log("when a function expect only one statement then we use block to send multiple statements")
// }

//// Scope of variable and Shadow variable

// shadowing of variale
let b = 100  // block variable a shadow and replaces in global space
{
    var a = 10
    let b = 4
    const c = 42
    console.log(a)
    console.log(b)
    console.log(c)
}

// console.log(a)
console.log(b)
// console.log(b) // Reference Error
// console.log(c)  