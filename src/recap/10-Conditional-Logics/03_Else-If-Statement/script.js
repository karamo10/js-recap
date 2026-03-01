// else if
// if you have multiple conditions that needs 
// to be addressed, you can use 'else if statements.  

// eg 
function testElseIfSample(val) {
     if (val > 10) {
        return "Greather than 10"
     }
    if (val < 5) {
        return "Smaller than 5"
    }

    return "Between 5 and 10"
}
console.log(testElseIfSample(7)); // Between 5 and 10

// eg with else if statement
function testElseIf(val) {
    if (val > 10) {
        return "Greather than 10"
    } else if (val < 5) {
        return "Smaller than 5"
    } else {
        return "Between 5 and 10"
    }
}
console.log(testElseIf(7)); // Between 5 and 10




// node src/recap/10-Conditional-Logics/03_Else-If-Statement/script.js