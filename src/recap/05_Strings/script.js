// Declear String Variables
// anytime you have characters surrounded by quotations marks(single or double), or backticks it's a string
let firstName = "K4ra";
let lastNmae = 'Camz';
let superHero = `spiderman`;
console.log(superHero, typeof superHero);


// Escaping Literal Quotes in Strings
// if you want to include a quote(" ") inside a string, you can use the backslash (\) to escape the quote
let myStr = "I am a \"double quotes\" String inside \"double quotes";
console.log(myStr); // I am a "double quotes" String inside "double quotes

let myStr1 = "I was \"playing\" video games";
console.log(myStr1); // I was "playing" video games

// summary: javascript uses the backslash (\) as an escape character, so if you want to include a quote inside a string, you can use the backslash to escape it. This allows you to include quotes without ending the string prematurely.


// Quoting Strings with Single Quotes
// if you want to include a quote inside a string, you can also use single quotes to quote the string, and then you can include double quotes inside the string without escaping   
let myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr2); 
// We can also use backticks to quote the string, and then we can include both single and double quotes inside the string without escaping

console.log('Strings');

// node src/recap/05_Strings/script.js