// Storing Values with Assignment Operator

// There are differences between declear variables and assigning variable
var a; // here the variable is being decleared to be called a, so it is undefined cuz has not be assign yet
var b = 2; // and then here I have assigned the variable

// the equal (=) sign is the assignment operator, it assign number 2 to variable b

a = 7; // now I am assigning the value of 7 to variable a, so now a is no longer undefined but it is 7

console.log(a, b); // 7, 2  


// Intializing Variable 
// Intializing a variable means to assign it a value at the time of declaration
var c = 5; // here I am intializing variable c with the value of 5

// Unintialized variable
// A variable that has been declared but not assigned a value is called an unintialized variable, and its value is undefined
var d; // here I am declearing variable d but not assigning it a value

// Intialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String"

console.log(a); // 6
console.log(b); // 15
console.log(c); // I am a String


// node src/recap/02_Storing-values/script.js