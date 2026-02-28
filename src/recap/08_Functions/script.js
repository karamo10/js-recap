// Functions
// function allows us to create a re-usable code in javascript
 
// Write Reusable Code with Functions
function ourReusableFunction() {
    console.log("Hey World");
    // anthing inside the function(func body) is run anytime the func is called or invoked
}

ourReusableFunction(); // so here the function is been called(invoked)
// anytime this function is called(invoked) it will print "Hey World" to the console


// Passing Values to Function with Arguments
// parameter are variables that act as a placeholder for the values 
// that are to be input into function when it is called.

function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5) // output 5
// a, b are the function parameters, so when the function is called we going pass the data into the function



// Global Scope and Functions
// Scope: refers to the visibility of variables.
// Varaiable which are defined outside a function block have global scope.
// Global Scope means they can be seen everywhere in javascript code

let myGlobal = 10; // since this is set outside the function we can see it anywhere in the whole code even in fun1().

function fun1() {
   let oopsGlobal = 5;
}

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output); // output myGlobal: 10
}

fun1();
fun2();


// Local Scope and Functions
// variables which are declear within a function 
// as well as the functon params has a global scope that means it is only visible within the function
// eg
function myLocalScope() {
    let myVar = 50; // this variable can only be visile within this function
    console.log(myVar);
}
myLocalScope(); // ouput 50
// console.log(myVar); // error: myVar is not defined, because it is a local(function scope) meaning it is only visible inside the func


// Global vs Local Scope Functions
// it it possible to have both global and local variable with the same "name"
// when you do this the local variable takes present over the global variable
// eg
let outerWear = "T-Shirt"; // global variable
function myOutfit() {
    let outerWear = "Long Sleeve";

    return outerWear;
}
console.log(myOutfit()); // Long Sleeve 
console.log(outerWear); // T-shirt

let footWear = "Nike"; // global variable
function myFootWear() {
    let footWear = "Adidas";

    return footWear;
}
console.log(myFootWear()); // output "adidas". why 'adidas' instead of 'Nike' because the local variable 'adidas' takes presents
console.log(footWear); // output "Nike"


// Return a Value From a Function with Return Statement
// you can return a value from a function with the return statement.
function multiplyByEleven(num) {
    return num * 11;
}
console.log(multiplyByEleven(3)); // ouptut 33

function minusFive(num) {
    return num - 5;
} 
console.log(minusFive(10)); // 5


// Understanding Undefined Value Return From a Function
// functions can have return statement, but they don't have to.
// in this case this function add three to the sum variable which is a global variable cuz it's define 
// before the function it does not return anything, so if you don't specify a return value the return value is just undefined.
let sum = 3;
function addSix() {
    sum = sum + 3;
}
console.log(addSix()); // output undefined

//eg2 the function add ten to the sum1 variable without a return
let sum1 = 0;
function addTen() {
    sum1 += 10;
}
console.log(addTen()); // output undefined

// Assignment with a Return Value
let changed = 0;
function change(num) {
    return (num + 5) / 3
}
// the value return from this function going to be STORED in "changed" variable
changed = change(10);
console.log(changed); // output 5

// eg2
let processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed); // output 2


// Stand in Line
// In CS Que is an abstract data structure where items are kept in order
// new items can be add to the back of the que and old item are taken off from the front of the que
function nextInLine(arr, item) {

    arr.push(item);    
    return arr.shift(); // now going to remove the first element and return it
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before:" +  JSON.stringify(testArr)); // Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // 1; returning the first element
console.log("After:" + JSON.stringify(testArr)); // After: [2,3,4,5,6]


// node src/recap/08_Functions/script.js