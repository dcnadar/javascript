// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.


// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"
let largestCountries = ["China", "India", "USA"]
// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"
let bestFruits = ["Apples", "Bananas"]
let desc = ["largest countries", "best fruits"]
// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    const lastIndex = arr.length - 1
    let baseString = `The ${arr.length} ${desc} are`
    for (let i = 0; i < arr.length; i++) {
        // console.log(baseString)
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString

}
let result = generateSentence(desc, largestCountries)
console.log(result)