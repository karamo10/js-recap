
// condition ? statement-if-true : statement-if-false;

// function using if-else
// function checkIfTrue(a, b) {
//     if (a === b) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function using ternary operator
function checkIfTrue(a, b) {
    return a == b ? true : false;
    
    // return a === b; is going to do the same thing
}

// console.log(checkIfTrue(10, 20));


// Using Multiple Conditinal (Ternary) Operator
// you can nested ternary oprerators in each other

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(10)); // positive



// node src/recap/10_Conditional-Logics/05_Ternary-Operator/script.js 2:33:40