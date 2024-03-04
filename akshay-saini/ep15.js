// console.log("start")
// setTimeout(function cb(params) {
//     console.log("not print")
// }, 5000)
// console.log("End")

console.log("start")
document.getElementById("btn1").addEventListener("click", function cb(params) {
    console.log("callback")
})
console.log("End")