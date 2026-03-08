// Loops
// Loops allows you to run code multiple times

// While Loop
// We going to talk about while loops that runs while a specified condition is true, 
// and stops while it's no longer true.

let myArray = [];
// e.g lets push 0 to 4 digit to myArray
let i = 0;
while (i < 5) {
    myArray.push(i)
    i++ // to make sure it ends
}

console.log(myArray); // [ 0, 1, 2, 3, 4 ]

// e.g 2
let ourArray = [];
// while i <= 10 ourArray++
let item = 1;
while (item <= 10) {
    ourArray.push(item);
    item++;
}

console.log(ourArray); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// node src/recap/12_Loops/01-While-Loop/script.js