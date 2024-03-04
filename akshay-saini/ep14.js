//What is a Callback Fundtion in JavaScript
setTimeout(function () {
    console.log("times")
}, 2000)
function x(y) {
    console.log("x")
    y()
}
x(function y() {
    console.log("y")
})
// JavaScript is a synchronous and single-threaded language
// Blocking the main thread
// Power of Callbacks?
// Deep about Event listeners
function eventListner() {
    // Closures Demo with Event Listeners
    let count = 0
    document.getElementById("btn1")
        .addEventListener("click", function (params) {
            console.log("heey there" + count++)
        })
}
eventListner()
// Scope Demo with Event listeners

// Garbage Collection & removeEventListeners
