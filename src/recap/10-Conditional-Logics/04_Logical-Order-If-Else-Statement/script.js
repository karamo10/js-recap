// Logical Order in If-Else Statements
// when you have if else statements with multiple conditions, it is important to put them in the correct logical order.
// for example if you have a condition that checks if a number is greater than 10 and another condition that checks if a number is greater than 5, you should put the condition that checks if the number is greater than 10 first, otherwise the condition that checks if the number is greater than 5 will always be true and the condition that checks if the number is greater than 10 will never be reached.

function orderMyLogic1(val) {
  if (val < 10) {
    return 'Less than 10';
  } else if (val < 5) {
    return 'Less tha 5';
  } else {
    return 'Greater than or equal to 10';
  }
}
// this function is checking if the value is "Less than 10" and "Less than 5"
// so when 7 is pass as the value it output: 'Less than 10' that's correct, but when pass 3 as the value it still output 'Less than 10' but I expect "Less than 5" because it is really "Less than 5". That means the Logical Order not being applied.
console.log(orderMyLogic1(7)); // output, Less than 10
console.log(orderMyLogic1(3)); // output, Less than 10

// applying the in If-Else logical order
function orderMyLogic(val) {
  if (val < 5) {
    return 'Less than 5';
  } else if (val < 10) {
    return 'Less than 10';
  } else {
    return 'Greater than or equal to 10';
  }
}
console.log(orderMyLogic(3)); // Less than 5

// eg 2
function testOrderMyLogic(val) {
  if (val > 10) {
    return 'Greater than 10';
  } else if (val > 5) {
    return 'Greater than 5';
  } else {
    return 'Less than or equal to 5';
  }
}
console.log(testOrderMyLogic(11)); // Greater than 10
console.log(testOrderMyLogic(7)); // Greater than 5
console.log(testOrderMyLogic(5)); // Less than or equal to 5

// eg 3
function checkScores(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else {
    return 'F';
  }
}
console.log(checkScores(97)); // A
console.log(checkScores(79)); // C
console.log(checkScores(50)); // F

// node src/recap/10-Conditional-Logics/04_Logical-Order-If-Else-Statement/script.js
