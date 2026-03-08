// For Loop

// Is the most common type of loop in Javascript

let ourArray = [];
// you start with the keyword 'for' then follow by a parenthesis with three different items wich are separated by semicolon
// firt is "the initialization", second "the condition" and then "the final expression"

// the initialization happens before any of coding inside the loop runs, then the next is th condition once the condition evaluates to false it breakout of the loop(eg i < 5 will continue to run over and over until it is false then breakout of the loop, the final thing is what we do at the end of each iteration. with each iteration we'll increment i by 1 ) 

for (let i = 0; i < 5; i++) {
    ourArray.push(i);
}

console.log(ourArray); // [ 0, 1, 2, 3, 4 ]

// e.g 2
let myArray = [];

for (let i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray); // [ 1, 2, 3, 4, 5 ]

// Iterating Odd Number with a For Loop

let oddNumber = [];
// incrementing i by 2(i += 2)
for (let i = 1; i < 10; i += 2) {
    oddNumber.push(i)
}
 
console.log(oddNumber); // [ 1, 3, 5, 7, 9 ] 


// node src/recap/12_Loops/02-For-Loop/script.js