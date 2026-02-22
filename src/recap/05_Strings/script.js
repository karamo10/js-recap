// Declear String Variables

// anytime you have characters surrounded by quotations marks(single or double), or backticks it's a string
let firstName = "K4ra";
let lastNmae = 'Camz';
let superHero = `spiderman`;
console.log(superHero, typeof superHero);

// Escaping Literal Quotes in Strings
// if you want to include a quote(" ") inside a string, you can use the backslash (\ escape character) to escape the quote
let myStr = "I am a \"double quotes\" String inside \"double quotes\"";
console.log(myStr); // I am a "double quotes" String inside "double quotes"

let myStr1 = "I like \"playing\" video games";
console.log(myStr1); // I like "playing" video games

// summary: javascript uses the backslash (\ escape character) as an escape character, so if you want to include a quote inside a string, you can use the backslash to escape it. This allows you to include quotes without ending the string prematurely.

// Quoting Strings with Single Quotes
// if you want to include a quote inside a string, you can also use single quotes to quote the string, and then you can include double quotes inside the string without escaping
let link = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(link);
// We can also use backticks to quote the string, and then we can include both single and double quotes inside the string without escaping

// Escape Sequences in Strings

/*****
 * CODE OUTPUT
 * \' single quote
 * \" double quote
 * \\ backslash: anytime you use \\ you going to use two backslashes so that JS can know you're not trying to escape a charater
 * \n newline
 * \t tab
 * \r carriage return
 * \b backspace
 * \f form feed
 *****/

// \n newline
let myStr2 = 'First line\nSecond line\nThird line';
console.log(myStr2);
// First line
// Second line
// Third line

// \t tab
let myStr3 = 'I was a cozy out\tthere';
console.log(myStr3); // I was a cozy out        there

// \r carriage return
let myStr4 = 'I was a \rcozy out there';
console.log(myStr4); // cozy out there

// \b backspace
let backspace = 'Hello how can I implement \bbackspace';
console.log(backspace); // Hello how can I implemenbackspace

// \f form feed
let feed = 'Hello\f how can I implement backspace';
console.log(feed);


// Concatenating Strings with Plus Operator
let ourStr = 'I come first. ' + 'I come second.';
console.log(ourStr); // I come first. I come second.

// Concatenating Strings with Plus Equals Operator
// strings can be also concatenated by using plus eqaul (+=) operator
let ourStr1 = 'I come first. ';
ourStr1 += 'I come second.';
console.log(ourStr1); // I come first. I come second.
// here is just like went we're using numbers, equals means went you takes whatever is in the end and add it to the variable

let ourStr2 = 'This is the first sentence. ';
ourStr2 += 'This is the last sentence.';
console.log(ourStr2);

// Contructing Strings with Variables
// we can also concatenate strings with variables
let myName = 'K4ra';
console.log('Hello my name is ' + myName + ', nice to meet you!');

let hubby = 'video games';
console.log(
  'I like playing ' + hubby + ' and watching ' + superHero + ' movies',
);
// I like playing video games and watching spiderman movies

// Appending Variables to Strings with the equal plus (=+) operator
let anAdjective = 'awesome!';
let ourStr3 = 'freeCodeCamp is ';
ourStr3 += anAdjective;
console.log(ourStr3); // freeCodeCamp is awesome!

let someAdjective = 'worthwhile';
let ourStr4 = 'Learning to code is ';
ourStr4 += someAdjective;
console.log(ourStr4); // Learning to code is worthwhile

// Find Length of String
// .length returns the total number of character
let middleNameLength = 0;
let middleName = 'pabicamz';

middleNameLength = middleName.length;
console.log(middleNameLength); // 8

// Bracket Notaion(is a way to get character at a specific index within a string)
// to find first character in string
let firstLetterOfTvSeries = '';
let tvSeries = 'Silicon valley';

firstLetterOfTvSeries = tvSeries[0]; // it gets the first character of the string "S".
console.log(firstLetterOfTvSeries); // S

let firstLetterOfMovie = '';
let movie = 'Swipe';

firstLetterOfMovie = movie[0];
console.log(firstLetterOfMovie); // S

// Note: most programming languages do start counting from 0 (0 base indexing) 
// not like what we the humans do by starting it at 1.

// Bracket Notation to find the last character of a string even if you don't
// know how many characters are they, you will do it base on the length
let lastLetterOfLongerStr = "";
let longerStr = "K4ra";

lastLetterOfLongerStr = longerStr[longerStr.length - 1];
console.log(lastLetterOfLongerStr); // a

// Bracket Notation to Find Nth-to-last Character String 
// You just subtract how much ever you want from the length of the string
let lastLetterOfLongerStr1 = "";
let longerStr1 = "pabicamz";

lastLetterOfLongerStr1 = longerStr1[longerStr1.length - 2]; // this gets the second to last character "m" from the string
console.log(lastLetterOfLongerStr1); // m

// String Immutability
// strings are immutable meaning they cannot be altered once created,
// it doesn't means they cannot be change just that the individual characters of a string leterals cannot be change
let str = 'Jello World';

// str[0] = "H"; // this will throw an error instead we can do. str = "Hello World".
// we can change "Jello World" to "Hello World" but we cannot change the invidual character like that (str[0] = "H") 
// instead we can do
str = 'Hello World';
console.log(str); // Hello World

let str1 = 'Kara';
// str1[1] = "4" // Cannot assign to read only property '1' of string 'Kara'
str1 = 'K4ra';
console.log(str1); // K4ra

// Word Blank project(map lips styles word game)
function wordBlanks(myNoun, MyAdjective, myVerb, myAdverb) {
  let result = "";
  result += "The " + MyAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."

  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly")); // The big dog ran to the store quickly.
console.log(wordBlanks("bike", "slow", "flew", "slowly")); // The slow bike flew to the store slowly.

function whoAreYou(name, age, superHero) {
  let result = "";
  result += "Hello my name is " + name + " I am " + age + " years old, " + superHero + " is my superhero"

  return result;
}

console.log(whoAreYou("Kara", 20, "spiderman"));
// Hello my name is Kara I am 20 years old, spiderman is my superhero


// node src/recap/05_Strings/script.js
