let hasCompletedCourse = false
let givesCertificate = true

// if (hasCompletedCourse === true) {
//     if (givesCertificate === true) {
//         generateCertificate()
//     }
// }

// if (hasCompletedCourse === false && givesCertificate === true) {
//     generateCertificate()
// }

if (hasCompletedCourse && givesCertificate) {
    generateCertificate()
}

function generateCertificate() {
    return "Generating certificate...."
}
console.log(generateCertificate())

