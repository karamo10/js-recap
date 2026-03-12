// Do While 

/*
The do...while loop is similar to while, but with one key difference
it runs the code block FIRST, then checks the condition.
this means it always executes at least once.
*/

let myArray = [];
let i = 10;

/*
this while loop first checks the condition (i < 5), before it 
runs the any code within the loop. A Do... While loop will always run 
at least one time and then it will check the condition.

while (i < 5) {
    myArray.push(i);
    i++;
}
so this sample says while i < 5 which is false so is not going to do anything
*/
// with Do... while loop
do {
    myArray.push(i)
    i++
} while (i < 5);

console.log(i, myArray); // i = 11, myArray = [ 10 ]


// node src/recap/12_Loops/03-Do-While/script.js