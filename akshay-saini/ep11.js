// function x(params) {
//     let a = 1
//     // setTimeout(() => {
//     //     console.log(a)
//     // }, 3000);
//     setTimeout(function name(params) {
//         console.log(a)
//     }, 2000); 
//     console.log("not wait")
// }
// x()

function x(params) {
    // for (let i = 1; i <= 5; i++) {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(() => {
                console.log(x)
            }, x * 1000);
        }
        close(i)
    }
}
x()