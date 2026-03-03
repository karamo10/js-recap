// Black jack card counting function
// when yo see a low card a count goes up when you see a high card the count goes down, if it's a middle value card, the count stays the same. 
// and when the count is positive, the player should bet high, and when the count is zero or negative the player should bet low
// I will be using switch statement to figure out what card has been passed in and what to do about it.

let count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10: 
        case "J": // jack               
        case "Q": // queen              
        case "K": // king
        case "A": // ace  
            count--;
            break;
    }

    let holdBet = "Hold"
    if (count > 0) {
        holdBet = "Bet"
    }

    return count + " " + holdBet;
}

console.log(count);


cc(2); cc("K"); cc(10); cc("K"); cc("A");
console.log(cc(4))


// node src/recap/09_Boolean-Values/Challenge/script.js