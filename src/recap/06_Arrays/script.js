// Array
//  it allows you to store several piece of data in one place.
// it always starts with a bracket[ and ends with a bracket].
// and it element are separated with a comma(,)
// it element can be any data-type

// storing Multiple Values to the Array
let ourArray = ["K4ra", 20]; 


// Nested Array
// when one a the elements in an array is another array that's called a nested array.
// eg
let ourNestedArray = [["Bull", 25], ["White Sox", 12]]; // two arrays within an array.

console.log(ourNestedArray);


// Access Array Data with Indexes
// earlier I learned how to get index of a strings using bracket nataion[]
// you can do the same with an array
let ourArray1 = [30, 60, 90];
let ourData = ourArray1[0] // gets the first element in the array 30.

console.log(ourData); // 30


// Modify Array Data with Indexes
// you can use array indexes to modify array, 
// remember I tried to modify a string with it indexes but it can't, but with arrays you can
let ourArray2 = [18, 55, 20];
ourArray2[1] = 19;
// now the number 55 at index[1] is going to be set to 19, so the new array is going to be [18, 19. 20].
console.log(ourArray2);

let ourArray3 = [["Bottle", 12], ["Watch", 50]];
ourArray3[1] // ["Watch" 50] get the second element inside the ourArray3 ["Watch", 50]]
ourArray3[1][0] // "Watch" get the first element "Watch"
ourArray3[1][0] = "Clock" // modify the fisrt element to "Clock"
console.log(ourArray3[1]); // the new array becomes ["Clock", 50]


// Access Multi-Dimensional Arrays with Indexes
// you can also use bracket natation[] to get multi-dimensional or array of arrays
// This is deep array sample
// to access an array of arrays or element within an array you use double brackets [0][0]
let ourArray4 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
ourArray4[0][0]; // 1
// the first barcket[0] gets the first element in the array which is [1,2,3], 
// and then the second bracket[0] will be the first index within this array [1,2,3] which is 1.

// let get the number 8
ourArray4[2][1] 
// let get the number 3
ourArray4[0][2] 


// Manipulating Arrays with push()
// we can append data at the "end" of an array using the push() method.
let appendArray = ["Earth", "Jupitar"];
appendArray.push(["Mars", "Venus"]); // here I push another array at the end of the original array
// appendArray now equals ["Earth", "Jupitar", ["Mars", "Venus"]]

let employees = [["Rasheed", 25], ["Abdallah", 32]];
employees.push(["Abu Bakr", 37]);
// the new array becomes [[ "Rasheed", 25 ], [ "Abdallah", 32 ], [ "Abu Bakr", 37 ]]

// Manipulating Arrays with pop()
// the pop() methods is use to remove and item at the end of and array
let ourArray5 = [10, 50, 100, 150];
let removeFromOurArray5 = ourArray5.pop();
// removeFromOurArray5 now equals 150, and the ourArray5 now equals [10, 50, 100,].
console.log('removeFromOurArray5 is now', removeFromOurArray5); // [150]
console.log('while ourArray5 now becomes', ourArray5); // [10, 50, 100]


// Manipulate Arrays with shift()
// the shift() method is similer to pop() method 
// except it removes the first element in the array
let ourArray6 = ["dog", "J", ["cat"]];
let removeFromOurArray6 = ourArray6.shift();
// removeFromOurArray5 now equals "dog", and the ourArray5 now equals ["J", ["cat"]].
console.log(ourArray6);

// Manipulate Arrays with unshift().
// unshift() method is similer to push() method, push() add an element 
// at the end of the array while unshift() add an element at the beginning of the array
let ourArray7 = ["slowly", "quickly", ["rapidly", "randomly"]];
// console.log(ourArray7); // ["slowly", "quickly", ["rapidly", "randomly"]]
ourArray7.unshift(["happily", "sadly"]); // it adds this element at the beginning of the array
// console.log(ourArray7); // [["happily", "sadly"], slowly", "quickly", ["rapidly", "randomly"]]


// shopping list
let myList = [["cereal", 12], ["milk", 8], ["bananas", 3], ["eggs", 14]];


console.log(myList, typeof myList); // 50:10

// node src/recap/06_Arrays/script.js