let num1 = 0
let num2 = 5
let res =0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
result=document.getElementById('sum-el');

// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    res=num1+num2;
    result.textContent=" Sum: "+res
}
function subtract() {
    res=num1-num2;
    result.textContent="Subtract: "+res
}
function divide() {
    res=num1/num2;
    result.textContent="Divide: "+res
}
function multiply() {
    res= num1*num2;
    result.textContent="Multiply: "+res
}

// Call the correct function when the user clicks on one of the buttons


// Perform the given calculation using num1 and num2

// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


