// Data types: undefined, null, boolean, string, symbol, number and object


// 1. undefined: a variable that has not been assigned a value is of type undefined
let a;
console.log(a); // undefined

// 2. null: represents the intentional absence of any object value
let b = null;
console.log(b); // null

// 3. boolean: represents a logical entity and can have two values: true and false
let isJavaScriptFun = true;
console.log(isJavaScriptFun); // true

// 4. string: represents a sequence of characters
let name = 'John';
console.log(name); // John

// 5. symbol: a unique and immutable primitive value
let sym1 = Symbol('foo');
let sym2 = Symbol('foo');
console.log(sym1 === sym2); // false

// 6. number: represents both integer and floating-point numbers
let num = 42;
console.log(num); // 42

// 7. object: a collection of properties and methods 
let person = {
    name: 'Alice',
    age: 30   
};
console.log(person); // { name: 'Alice', age: 30


console.log('Data Types');


// node src/recap/01_Data-types/script.js