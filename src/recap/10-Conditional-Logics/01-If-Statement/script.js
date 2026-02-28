// Conditional Logic with If Statement

// if statement is use to make dicisions in code.
// the keyword "if" help JS to execute code in the curly braces on a certain condition define in the paranthesis.
function myTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true"
    }
    return "No it's not true"
}
// note: there's always a paranthesis after the keyword if(isItTrue) the condition, so if the condition inside the paranthesis evaluate to 'true' then it runs the code within the paranthesis "Yes, it's true". if it's not true then it will run the second return statement "No it's not true".
console.log(myTrueOrFalse(true)); // Yes, it's true

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false"
}
console.log(trueOrFalse(true));


// Logical Operators

// Comparison with the Equality (==) Operator.

// there are many comparison operators in JS that will return boolean values True or False.
// the most common is the equality operator (strict '===') and (loose '=='). and it's often use in 'if statement'
function testEqual(val) {
    if (val == 10) {
        return "Equal";
    }
    return "Not equal";
}
// note: we can't use a single operator '=' (val = 10), because that will 
// mean we are assigning (10) to the (val) varaible which we are not trying to do
// we are trying to check if (val) is equal to (10). 
console.log(testEqual(12)); // output "Not equal", because 12 is not equal to 10

// Comparison with the Strict Equality (===) Operator

// the strict equality does not do the type conversion
// it check both the value and type while the equality(loose) do the type conversion
function testStrict(val) {
    if (val === 25) {
        return "Equal";
    }
    return "Not equal"
}
console.log(testStrict('25')); // output "not equal" beacuse it check both the value and type so the value is a string data-type '25' if it was loose equality (==) operator it will become True.

// Comparing Different Values

function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not equal";
}
console.log(compareEquality(15, "15")); // output "Equal"
// since am using the loose (==) equality operator it performs 'type conversion' it convert the string "15" to a number 15

function compareStrictEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not equal"
}
console.log(compareStrictEquality(15, "15")); // output "Not equal"
// here it check both the value and type
// Tip: Always prefer === over == to avoid sneaky bugs!

// Comparison with the Inequality (!=) Operator
// the opposite of equality operator
function testNotEqual(val) {
    if (val != 77) {
        return "Not equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));
// output "Not equal"; because 10 is not equal to 77

// Comparison with the Strict Inequality (!==) Operator
// the opposite of strict equality operator
function testStrictNotEqual(val) {
    if (val !== 13 ) {
        return "Not equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10)); // output "Not equal"


// Comparison with GreaterThan ( > ) Operator

function testGreaterThan(val) {
    if (val > 50) {
        return "Over 50"
    }

    if (val > 10) {
        return "Over 10"
    }

    return "10 or Under"
}
console.log(testGreaterThan(10)); // output "10 or Under"; because it's not "over 50" and not "over 10" it's "10 or Under".
// it return the first if that is meet, when second it meet it will return only that

// Comparison with GreaterThan Or Equal To ( >= ) Operator

function testGreaterThanOrEqualTo(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}
console.log(testGreaterThanOrEqualTo(10)); // output "10 or Over", because 10 is being pass as the val and it is equal to 10

// Comparison with Less Than ( < ) Operator

function testLessThan(val) {
    if (val < 35) {
        return "Under 35";
    }
    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}
console.log(testLessThan(10)); // output "Under 35"; because 10 is less than 35

// Comparison with Less Than Or Equal TO ( <= ) Operator

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24"
}
console.log(testLessOrEqual(10)); // output "Smaller Than or Equal to 12"


// Comparisons with the Logical AND(&&) Operator
// sometimes you want to check if two things are true at the same time like this nested if statement
function testLogicalAndSample(val) {
    if (val <= 55) {
        if (val >= 25) {
            return "Yes";
        }
    }
    return "No";
}  
console.log(testLogicalAndSample(35)); // output "Yes"

// we can use the AND (&&) Operator to make this shorter
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No"
}
console.log(testLogicalAnd(35)); // output "Yes";
// Note: with logical (AND &&) both the statements(operand) has to be true.

// Comparisons with the Logical OR(||) Operator

function testLogicalOr(val) {
    if (val > 75 || val < 50) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalOr(100)); // output "Yes"
// note: with logical (OR ||) one statement(operand) has be true fot it to return True

// Comparison with the Logical NOT(!) Operator
function testLogicalNot(valIsTrue) {
    if (!valIsTrue) {
        return "Yes"
    }
    return "No"
}
console.log(testLogicalNot(true)); // output "No"
// Logical NOT(!) it return if the oprerands is 'false' and vice versa


// node src/recap/10-Conditional-Logics/01-If-Statement/script.js