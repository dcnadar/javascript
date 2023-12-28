// Get the counter element
let counterElement = document.getElementById('counter');
let saveEl=document.getElementById('save');

// Initialize the counter
var count = 0;

function save(){
    saveEl.textContent+=count+" - ";
    // if(count>=0){
    //     count=0;
    //     counterElement.textContent=0;
    // }
    count=0;
    counterElement.textContent=0;
}

// Function to increment the counter
function increment() {
    count++;
    updateCounter();
}

// Function to decrement the counter
function decrement() {
    if (count > 0) {
        count--;
        updateCounter();
    }
}

// Function to update the counter on the page
function updateCounter() {
    counterElement.textContent = count;
}



