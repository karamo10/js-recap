// else if
// if you have multiple conditions that needs
// to be addressed, you can use 'else if statements.

// eg
function testElseIfSample(val) {
  if (val > 10) {
    return 'Greather than 10';
  }
  if (val < 5) {
    return 'Smaller than 5';
  }

  return 'Between 5 and 10';
}
console.log(testElseIfSample(7)); // Between 5 and 10

// eg with else if statement
function testElseIf(val) {
  if (val > 10) {
    return 'Greather than 10';
  } else if (val < 5) {
    return 'Smaller than 5';
  } else {
    return 'Between 5 and 10';
  }
}
console.log(testElseIf(7)); // Between 5 and 10

// Chaining if else statement
// key rule: once the condition is 'True' Javascript runs the that block and skips the rest.

/*
Write chained if/else if statements to fulfill the following conditions

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/

function testSize(num) {
  if (num < 5) {
    return 'Tiny';
  } else if (num < 10) {
    return 'Small';
  } else if (num < 15) {
    return 'Medium';
  } else if (num < 20) {
    return 'Large';
  } else {
    return 'Huge';
  }
}
console.log(testSize(1)); // Tiny
console.log(testSize(16)); // Large
console.log(testSize(21)); // Huge


// node src/recap/10-Conditional-Logics/03_Else-If-Statement/script.js
