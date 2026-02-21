// Variables
// A variable allows computer to store and manipulate data in a dynamic fashion
// A variable is just like box you can fill it with aything(Data)

// there are three ways to declear a variable (var, let, const)

// var
var myName = "K4ra"
myName = "Camz"

// let
let ourName = "Coders" 
ourName = "Fighters"

// const
const pi = 3.14
// pi = 3.14159 // This will throw an error because you cannot reassign a const variable

console.log(myName); // Camz
console.log(ourName); // Fighters
console.log(pi); // 3.14

// the diffrence between var, let and const
// var is going to be us throungout the whole program, let will only be use within the scope of were it was declear, while const is variale that should never change


// Case Sensitivity in Variables
// Variables are case sensitive, that means there capitlization matters

// Declarations
var myVariable; // camelCase
var MyVariable; // PascalCase
var my_variable; // snake_case

myVariable = "Hello";
MyVariable = "World";
my_variable = "JavaScript";
// myVariable, MyVariable and my_variable are three different variables

// but it's good practice to use camelCase for variable names in JavaScript


// node src/recap/01_Variables/script.js