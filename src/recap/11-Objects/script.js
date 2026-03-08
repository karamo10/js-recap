// Objects
// they are similer to Arrays except instead of "indexes" to access the data you use "property"

// Creating my first object.
let myDog = {
    "name": "Quincy",
    "legs": 4,
    "tails": 2,
    "friends": []
}
// note: it properties can be any data-type

// Accessing Object Properties with Dot Notation.
// there are two main ways to access a property on an object ("Dot" and "Bracket" Notation)

let testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
}

let hatValue = testObj.hat; // ballcap
let shirtValue = testObj.shirt; // jarsey

// Accessing Object Properties with Bracket Notation.
// you can use bracket notation to access a property in an object, 
// but it is required if the name has a space in it 
// you can testObj1 object and three properties which is having a space "an entree", "my side", "the drink" 

let testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
}

let entreeValue = testObj1["an entree"] // hamburger
let drinkValue = testObj1['the drink'] // water
 
// Accessing Object Properties with Variables.
let testObj2 = {
    7: "Bangal",
    10: "Ubaba",
    25: "Papito"
}

let playerNumber = 25;
let player = testObj2[playerNumber]; // 'Papito'

console.log("testObj: " + hatValue, shirtValue + " testObj1: " + entreeValue, drinkValue + " Player: ", player);

// Updating Object Properties.
let ourDog = {
    "name": "Quincy",
    "legs": 4,
    "tails": 2,
    "friends": []
}

ourDog.name = "Happy Quincy";
ourDog.tails = 1;
console.log(ourDog);
/*
{ 
  name: 'Happy Quincy', 
  legs: 4, 
  tails: 1, 
  friends: [] 
}
*/ 

// Add New Properties to an Object.
// you can add new property to an array using "Dot or Bracket Notation"
// let's add a few 'new properties' to {ourDog} object 

ourDog.bark = "woof!"; // using dot natation
ourDog['color'] = "brown"; // using bracket notation
console.log(ourDog);
/* 
{
  name: 'Happy Quincy',
  legs: 4,
  tails: 1,
  friends: [],
  bark: 'woof!',
  color: 'brown'
}
*/

// Delete Properties Fron an Object.
// you can use delete keywork to delete a property fron an object
// let's delete the bar property from {ourDog} object
delete ourDog.bark;
console.log(ourDog);
/*
{
  name: 'Happy Quincy',
  legs: 4,
  tails: 1,
  friends: [],
  color: 'brown'
}
  the 'bark' property has now been deleted
*/

// Using Objects for Lookups.
// object can be thoungt us like a key value storage like a dictionary, you can use an object to lookups values 
// in this case I am having a switch statement that return certain values e.g when passed 'alpha' to the function it return "Adams" etc. we can replace this Switch Statement with an {Object}, and use the object for lookups instead of the switch statement

function phoneticLookup(val) {
    let result = "";

    switch (val) {
        case "alpha":
            result = "Adam";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
    }

    return result;
}

// sample with an {Object}
function phoneticLookups(val) {
    let result = "";

    const lookups = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
    }

    result = lookups[val];

    return result;
}

console.log(phoneticLookups("charlie")); // Chicago
console.log(phoneticLookups("bravo")); // Boston

// Testing Object for Properties.
// you can check if an object has a property with the hasOwnProperty method
let myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
// let's check if the object has this specific property, if it doesn't have the property it return "not found"
function checkObj(checkProp) {
    // myObj.hasOwnProperty(checkProp); it's going to return boolean(true or false). so let's make it if statement
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp] // we going to return the value of that prop
    } else {
        return "Not found"
    }
}

console.log(checkObj("gift")); // 'pony'
console.log(checkObj("hey")); // 'Not found'

// Manipulating Complex Objects.
// js object is a way to stored flexible data, go can store: String, Number, Arrays and even other Objects
let myMusic = [
    {
        "artist": "J Cole",
        "title": "Trap",
        "release_year": 2024,
        "format": [
            "mp3",
            "mp4"
        ],
        "gold": true
    },
    {
        "artist": "Postmelon",
        "title": "Traping",
        "release_year": 2025,
        "format": [
            "mp3",
            "Youtube video"
        ],
        "gold": true
    }
];
// we created a myMusic array where each object holds data in a property with key-value format, this is very similer to Json. 

// Accessing Nested Objects.
// here I am having object with other object nested inside an onject, in other to access sub-properties of an object you can change to get the Dot or Bracket Notation

let myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "scrumbs"
        }
        
    },
    "outside": {
        "trunk": "jack"
    }
}
// accessing "glove box" property myStorage.cars.inside["glove box"] and using bracket notation beacuse "glove box" has a space 
let gloveBoxContents = myStorage.car.inside["glove box"]; // 'maps'
// for "trunk" am going to use dot notation
let trunkContents = myStorage.outside.trunk; // 'jack'
console.log(gloveBoxContents, trunkContents); 

// Accessing Array of Objects [{}]

let myPlants = [
    {
        type: "flowers",
        lists: [
            "rose",
            "tulip"
        ]
    },
    {
        type: "trees",
        lists: [
            "birch",
            "pine"
        ]
    }
];
// here to access the secondTree "pine" I will be using both bracket and Dot Notation to access it
let secondTree = myPlants[1].lists[1] // 'pine'
// the same with the first flower
let firstFlower = myPlants[0].lists[0] // 'rose'
console.log(secondTree + " & ", firstFlower);

// Record Collection
// each records is having a unique Id, they don't have the same information
// we're suppose to create a updateRecords function, were we can pass the Id, the Property, and the Value.
// and it is going to update our record collection with the property and the value, then return the update collection
// if the we have an empty string for the value, it should just completely delete that property

let collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]

    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold",
    }
}

let collectionCopy = JSON.parse(JSON.stringify(collection));

// the function that update the record collection
function updateRecords(id, prop, value) {
    // check if the value is an empty string, if it is then delete that property
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") { // if the property is "tracks" we're going to push the value to the end of the tracks array
        // but if the tracks property is empty, we need to create it, and then push the value to it 
        if (!collection[id].hasOwnProperty("tracks")) {
            collection[id][prop] = [];
        }
        collection[id][prop].push(value);
    } else { // if the property is not "tracks" then we just update or set the value for that property
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));



// node src/recap/11-Objects/script.js