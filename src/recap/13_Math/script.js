// Math

// Generating Random Numbers With Math.random()
function randomFraction() {

    return Math.random(); // it ruturn number between 0 and 1
}

console.log(randomFraction()); // eg: 0.9307882223437307; between 0 and 1


// Genarate Random Whole Numbers
// generating random whole number can be done with Math.floor()
// Math.floor() round downs to the nearest whole number
// e.g, 1
const randomNumberBetween0and14 = Math.floor(Math.random() * 15);

// e.g, 2 random num between 0 and 10
function randomWholeNumber() {

    return Math.floor(Math.random() * 11);
}

console.log(randomWholeNumber());


// Generating Random Whole Numbers Within a Range
// you can also generate a random whole num within a range

function ourRandonRange(ourMin, ourMax) {

    // the calculation to get the random num between 'ourMin' and 'ouMax'
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

const ourRandm = ourRandonRange(1, 9); // every num will be between 1 and 9

console.log(ourRandm);


// Using the parseInt Function
// it takes in strings and return an integer

function converToInteger(str) {

return parseInt(str)
}

const result = converToInteger("77");

console.log(result); // 77 data-type Number

// Using the parseInt Function with a Radix
// the radix specified the base of the string such as base 2 or base 7... etc. 
// a base 2 will be binary one of the most common to use 
// the default is base 10

// converting "10011" this binary to an integer
function convertToInteger(str) {

     return parseInt(str, 2) // intead of the default base 10 it will be base 2 
     // the computer will know it's a binary  
}

console.log(convertToInteger("10011")); // 19






// node src/recap/13_Math/script.js