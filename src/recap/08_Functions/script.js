// Functions
// function allows us to create a re-usable code in javascript
 
// Write Reusable Code with Functions
function ourReusableFunction() {
    console.log("Hey World");
    // anthing inside the function(func body) is run anytime the func is called or invoked
}

ourReusableFunction(); // so here the function is been called(invoked)
// anytime this function is called(invoked) it will print "Hey World" to the console

// eg2
function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();


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
// != does not equal
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
// console.log(myVar); // myVar is not defined, because it is a local(function scope) meaning it is only visible inside the func


// Global vs Local Scope Functions
// it it possible to have both global and local variable with the same name
// when you do this the local variable takes present over the global variable
// eg
let outerWear = "T-Shirt";

function myOutfit() {
    let outerWear = "Sweater";

    return outerWear;
}
console.log(myOutfit()); // output Sweater


// node src/recap/08_Functions/script.js