// Function Declaration-----------------
// Function Statement  -----------------
function a(params) {
    console.log("hey there statement")
}
a()
// Function Expression-----------------
let b = function () {
    console.log("hey there expression")
}
b()  // main difference between both is hoisting
// Anonymous Function-----------------
// function() {
//     console.log("anonymus function")
// }
// Named Function Expression-----------------
let c = function xyz() {
    console.log("hey there named function expression")
    console.log(xyz)
}
c()
// Difference between Parameters & Arguments ?-----------------
function sum(num1, num2) {
    return console.log(num1 + num2)
}
sum(1, 2)
// First Class Functions-----------------
let firstClassfunc = function abc(param1) {
    return function xyz(params) {
    }
}
console.log(firstClassfunc())
// Arrow Function-----------------