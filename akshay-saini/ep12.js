// // function outer(params) {
// function outer(b) {
//     let a = 5
//     return function inner(params) {
//         console.log(a, b)
//     }
//     // return inner
// }
// // outer()()
// let close = outer("hey there") //same as outer()()
// close()

//Data privacy using closures-------------------------

// function count() {
//     let count = 0
//     return function counter(params) {
//         count++
//         console.log(count)
//     }
// }
// let counter1 = count()
// counter1()
// counter1()
// let counter2 = count()
// counter2()

// function constructor  -------------------------
function Counter(params) {
    let c = 0
    this.incrementCounter = function () {
        c++
        console.log(c)
    }
    this.decrementCounter = function () {
        c--
        console.log(c)
    }
}
let res = new Counter()
let res2 = new Counter()
res.incrementCounter()
res.decrementCounter()
res2.incrementCounter()
res2.incrementCounter()
res2.incrementCounter()
res2.decrementCounter()

// garbage collector
function x(params) {
    let a = 15, b = 10
    return function co(params) {
        console.log(a)
    }
}
let d = x()
d()
