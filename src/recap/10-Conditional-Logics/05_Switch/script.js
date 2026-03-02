// Switch is just a cleaner way to write multiple conditions when checking one variable against many values.

/*
write a switch statement which tests val nd sets answer for the folloeing conditions
1 -- "alpha"
2 -- "beta"
3 -- "gamma"
4 -- "delta"
*/

function caseInSwitch(val) {
  let answer = '';
  switch (val) {
    case 1:
      answer = 'alpha';
      break;
    case 2:
      answer = 'beta';
      break;
    case 3:
      answer = 'gamma';
      break;
    case 4:
      answer = 'delta';
      break;
  }

  return answer;
}
// note: break 'stops the switch after a match is found'
console.log(caseInSwitch(2)); // beta
console.log(caseInSwitch(4)); // delta

// Default Option in Switch Statements
// 'default' runs when nothing matches, it's kind of like 'else' in if/else statement
function switchOfStuff(val) {
  let answer = '';
  switch (val) {
    case 'a':
      answer = 'apple';
      break;
    case 'b':
      answer = 'ball';
      break;
    case 'c':
      answer = 'cat';
      break;
    default:
      answer = 'stuff';
      break;
  }

  return answer;
}

console.log(switchOfStuff('a')); // "apple"
console.log(switchOfStuff('z')); // "stuff"
console.log(switchOfStuff('c')); // "cat"
console.log(switchOfStuff(1)); // "stuff"

// Multiple Identical Options in Switch Statements
// sometimes you want a switch statement were 'multiple' input share the 'same output'. that's easy enough let's check this sample
// 1, 2, 3 -- "Low"
// 4, 5, 6 -- "Mid"
// 7, 8, 9 -- "High"
function sequentialSizes(val) {
  let answer = '';
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      break;
  }
  return answer;
}

console.log(sequentialSizes(1)); // Low
console.log(sequentialSizes(5)); // Mid
console.log(sequentialSizes(9)); // High

function days(day) {
  let result;
  switch (day) {
    case 'Saturday':
    case 'Sunday':
      result = "It's the weekend";
      break;
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      result = "It's a weekday";
      break;
    default:
      result = 'Invalid day';
  }

  return result;
}

console.log(days('Sunday')); // It's the weekend
console.log(days('Tuesday')); // It's a weekday

// Replacing If Else Chains with Switch

// sometimes Switch statement can be easier write and easier to understand than a 'Chain of If Else Statement'
// so am going to change is this 'Chain of If Else Statement' to Switch statement
function testChainToSwitch(val) {
  let answer = '';
  if (val === 'K4ra') {
    answer = 'Camz';
  } else if (val === 7) {
    answer = "Ronaldo's number";
  } else if (val === 1) {
    answer = 'There is no #1';
  } else if (val === 10) {
    answer = "Messi's number";
  } else if (val === 'Spider') {
    answer = 'Man';
  }

  return answer;
}
// Changing it to switch statement
function chainToSwitch(val) {
  let result;
  switch (val) {
    case 'K4ra':
      result = 'Camz';
      break;
    case 7:
      result = "Ronaldo's number";
      break;
    case 1:
      result = 'There is no #1';
      break;
    case 10:
      result = "Messi's number";
      break;
    case 'Spider':
      result = 'Man';
      break;
    default:
      result = 'No result found!';
      break;
  }

  return result;
}

console.log(chainToSwitch(7)); // Ronaldo's number
console.log(chainToSwitch('Spider')); // Man
console.log(chainToSwitch(10)); // Messi's number
console.log(chainToSwitch('K4ra')); // Camz

/*    Challenges    */

// Ch1. The Season Finder
/*
Write a switch statement that takes a "month name" and return the season

Rules:

MONTH                                SEASON 
December, January, February          Winter
March, April, May                    Spring
June, July, August                   Summer
September, October, November         Autumn
Anything else                        Invalid month
*/

function getSeason(month) {
  let result;
  switch (month) {
    case 'December':
    case 'January':
    case 'February':
      result = 'Winter';
      break;
    case 'March':
    case 'April':
    case 'May':
      result = 'Spring';
      break;
    case 'June':
    case 'July':
    case 'August':
      result = 'Summer';
      break;
    case 'September':
    case 'October':
    case 'November':
      result = 'Autumn';
      break;
    default:
      result = 'Invalid month';
      break;
  }

  return result;
}
console.log(getSeason('June')); // Summer
console.log(getSeason('November')); // Autumn
console.log(getSeason('January')); // Winter
console.log(getSeason('Julys')); // Invalid month

// Ch2. The Calculator
/*
Write a switch statement that takes two numbers and an operator and returns the result.

Rules:

OPERATOR             ACTION 
"+"                  Add
"-"                  Subtract
"*"                  Multiply
"/"                  Divide
Anything else        "Invalid operator"
*/

function calculate(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num1 === 0) {
        result = "Can't divide by zero";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = 'Invalid operator';
      break;
  }

  return result;
}

console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '-')); // 5
console.log(calculate(10, 5, '*')); // 50
console.log(calculate(10, 5, '/')); // 2
console.log(calculate(10, 5, '!')); // Invalid operator

// node src/recap/10-Conditional-Logics/05_Switch/script.js
