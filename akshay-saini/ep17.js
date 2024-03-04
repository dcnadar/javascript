setTimeout(() => {
    console.log("Timeout of 5 sec")
}, 5000);
let date = new Date().getTime()
let endDate = date
while (endDate < date + 9000) {
    endDate = new Date().getTime()
}
console.log("time wasted")
console.log("Start")
function cb(params) {
    console.log("Callback")
}
// cb()
setTimeout(cb, 0)
console.log("Ends")