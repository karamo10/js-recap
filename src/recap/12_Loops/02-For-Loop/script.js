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

// Count Backwards with a For Loop
let myArray1 = [];

for (let i = 10; i > 0; i -= 2) {
    myArray1.push(i)
}

console.log(myArray1); // even nums: [ 10, 8, 6, 4, 2 ]
// 
let myArray2 = [];

for (let i = 9; i > 0; i -= 2) {
    myArray2.push(i)
}

console.log(myArray2); // odd nums: [ 9, 7, 5, 3, 1 ]

// Iterate Through an Array with a For Loop
// it is common in JS to iterate through the contentof an array

let ourArr = [9, 10, 11, 12];
let ourTotal = 0;

for (let i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal); // 42 (9 + 10 + 11 + 12 = 42)

// Nesting For Loops
// you can also nest for loops inside of each other, if you have a multi-dimensional or nested array you can use a nested for loop to access all the array elements

function multiplyAll(arr) {
    let product = 1;

    // here we are using two for loops to access the nested array, the first loop is to access the outer array and the second loop is to access the inner array
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) { 
            product *= arr[i][j]
        }
    }

    return product;
}

// here I'm having this multiply all function it's define above but am calling it here and am passing in this multidimensional array, array inside an array
// I'm going to use nested for loops within this multiply all function to multiply every number in this nested arrays 
let product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(product); // 5040 (1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040) // 


/*
Challenge 1

Shopping Cart Total
*/ 
const cart = [
    { item: "Laptop", price: 50.98 },
    { item: "Wireless keyboard", price: 20.05 },
    { item: "Mouse", price: 10.90 },
];

let total = 0;

for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
}

console.log("Total price:",total); // Total price: 81.93

// node src/recap/12_Loops/02-For-Loop/script.js