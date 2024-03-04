const arr = [5, 2, 10, 5, 3]
//map function================================================
// function double(x) {
//     return x * 2
// }
// function binary(x) {
//     return x.toString(2)
// }
// double the array ================================================
// const newArr = arr.map(double)
// binary
// const newArr = arr.map(binary)
// const newArr = arr.map(function binary(x) {
//or           // arr.map((x) => //---x.toString(2))-- // {
//     return x.toString(2)
// })
// console.log(newArr)

//================================================ filter function  ==================
// function odd(x) {
//     // return x % 2
//     // return x % 2 === 0
//     return x > 4
// }
// const newArr = arr.filter(odd)
// const newArr = arr.filter(function odd(x) {
//     return x > 4
// })
// const newArr = arr.filter((x) => x > 4)
// console.log(newArr)
// ============================== Reduce Function =========================

function findsum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}
// console.log(findsum(arr))
// //
// const theSum = arr.reduce(function (acc, curr) {
//     acc += curr
//     return acc
// }, 0)
const theSum = arr.reduce((acc, curr) => {
    acc += curr
    return acc
}, 0)

const max = arr.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr
    }
    // return curr
    return acc
}, 0)
// console.log(theSum)
console.log(max)

