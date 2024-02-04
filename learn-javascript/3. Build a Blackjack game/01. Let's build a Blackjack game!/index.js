// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
let firstCard=12;
let secondCard=1;
// 11 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard+secondCard
let tot = document.getElementById('para')
let re = document.getElementById('msg')
function card(){
    if (sum<21) {
        let an="Do you want another card to draw 😐";
        re.textContent=`Result:${an}`;//template string
    } else if(sum===21){
        
        let ok="You've got blackjack 🤯";
        re.textContent="Result:"+ok;

    } else{
        let ex="You Lost 🤬";
        re.textContent=ex;
    }
    tot.textContent="Total sum of Cards: "+sum
}
