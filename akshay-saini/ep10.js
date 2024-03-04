// // let a = 7
// function a(params) {
//     var a = 8
//     function b(params) {
//         console.log(a)
//     }
//     b()
// }
// a()

// // clouser
// function x(params) {
//     let a = 10
//     // cool devellop
//     // return function y(){
//     //     console.log(a)
//     // }
//     function y(params) {
//         console.log(a)
//     }
//     // y()
//     return y
// }
// // x()
// // 1000 lines of code
// let z = x()
// console.log(z)
// z()

// ------

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();