// function x() {  //x is call back function
//     console.log("x")
// }
// function y(x) {  // y is higher order function
//     x()
// }

const radius = [3, 4, 2, 5]
const area = function (radius) {
    return Math.floor(Math.PI * radius * radius)
}
const diameter = function (radius) {
    return 2 * radius
}
const circumfrence = function (radius) {
    return Math.floor(Math.PI * radius * 2)
}
// const calculate = function (arr, logic) {
Array.prototype.calculate = function (logic) {  // polyfill
    const output = []
    for (let i = 0; i < this.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}
console.log(radius.map(area))
// console.log(calculate(radius, area))
console.log(radius.calculate(area))
// console.log(calculate(radius, diameter))
// console.log(calculate(radius, circumfrence))

// const calcDia = function (rad) {
//     const output = []
//     for (let i = 0; i < rad.length; i++) {
//         output.push(Math.floor(Math.PI * rad[i] * 2))
//     }
//     return output
// }
// console.log(calcDia(rad))