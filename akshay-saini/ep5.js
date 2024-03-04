// shortest js program --
// Window and this keyword
console.log("Window is a global object whenever any global exectuion context js program is created ")
// alert("this is global ")
let a = 7
// anything not inside a function is global space
// anyhting we create will attach to the window inside the global space
// this x will be in global space
console.log(a)
// console.log(this.a)

console.log(window.a) // error x is not defined
// this also do the same work