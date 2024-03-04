// undefined or not defined variables
function a(params) {
    let b = 10;
    c()
    function c(params) {
        console.log(b)
    }
}
a();
console.log(b)