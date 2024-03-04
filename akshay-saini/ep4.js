// How functions work in JS ❤️ & Variable Environment
const x = 1
a();
b();
console.log(x)
function a() {
    let x = 10
    console.log(x)
}
function b() {
    let x = 100
    console.log(x)
}
// x = 12 const cant be changed
console.log(x)