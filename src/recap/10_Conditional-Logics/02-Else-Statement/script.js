// else statement

// when a 'if statement' is true the code block right after the curly braces will run to true and if not true nothing happens
// but with an else statement and ultimate block of code can be executed when it is not true

function testElse(val) {
  if (val > 20) {
    result = 'Greater than 20';
  } else {
    result = 'Less than 20';
  }
  return result;
}

console.log(testElse(35)); // Greater than 20



// node src/recap/10-Conditional-Logics/02-Else-Statement/script.js
