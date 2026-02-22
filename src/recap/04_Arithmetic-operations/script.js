// Arithmetic Operations

// Adding number
let oranges = 10 + 5; // 15

// Subtracting number
let mangoes = 10 - 5; // 5

// Multiplying number
let product = 10 * 5; // 50

// Dividing number
let quotient = 10 / 5; // 2

// Incrementing number(means to add 1 to it)
let myVar = 10;
myVar = myVar + 1; // so here am incrementing a myVar by 1, now it becomes 11, but there's a quicker way to do this, which is using the increment operator (++)
myVar++; // myVar is now 11

// Decrementing number (means to subtract 1 from it)
let myBalance = 11;
myBalance = myBalance - 1;
// quicker way
myBalance--; // myBalance is now 10
console.log(myBalance);

// Decimal Numbers (sometimes refers to as floating-point numbers or floats)
let myDecimal = 5.7; // this is a decimal number

// Multiply Decimal Numbers
let productOfDecimals = 2.5 * 2.0; // 5
console.log(productOfDecimals);

// Divide Decimal Numbers
let quotientOfDecimals = 5.0 / 2.0; // 2.5
console.log(quotientOfDecimals);

// Finding a Remainder (or Modulus is just like a percent % sign it gives the remainder of division of 2 numbers)
let remainder = 11 % 3; 
console.log(remainder); // 2 because 3 goes into 11 three times with a remainder of 2

// Compond Assignment with Augmented Addition
let a = 3;
let b = 4;
// this is a common pattern but there's a shorter way to write this using the += operator
// a = a + 12;
// b = b + 6;
a += 12;
b += 6;
console.log(a, b); // 15, 10

// Compond Assignment with Augmented Subtraction
let x = 5;
let y = 20;
x -= 3;
y -= 7;
console.log(x, y); // 2, 13

// Compond Assignment with Augmented Multiplication
let c = 2;
let d = 1;
c *= 3;  
d *= 3;
console.log(c, d); // 6, 3

// Compond Assignment with Augmented Division
let f = 48;
let g = 33;
f /= 12;  
g /= 11;
console.log(f, g); // 4 , 3

// node src/recap/04_Arithmetic-operations/script.js
