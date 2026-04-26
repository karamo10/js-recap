let contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '08038039',
    likes: ['Pizza', 'Coding', 'Yoga'],
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    number: 'unknown',
    likes: ['Burger', 'Cycling', 'hiking'],
  },
  {
    firstName: 'Jarron',
    lastName: 'Davies',
    number: '00048544',
    likes: ['Tacos', 'Drawing', 'Swimming'],
  },
];

/*
 the task is to create a lookupPofile() function where we can pass in 'name' and a property 'prop' and it's going to return the value of that property.

 If we pass the name eg: 'Jarron' and prop 'likes' it should return the array of ["Tacos", "Drawing", "Hiking"], if the name that is passed in does not correspond to any contacts then the function should return "No such contact", and if there's no property, it should return "No such property"
*/

function lookupProfile(name, prop) {
  //step 1: loop through the contacts with for loop
  for (let i = 0; i < contacts.length; i++) {
    // steps 2: chech if the name exists in the contacts
    if (contacts[i].firstName === name) {
      // step 3: if exists return the prop pass in for that name 
      // if prop not found return 'No such property'
      return contacts[i][prop] || "No such property"
    }
  } // if not contacts return 'No such contact'
  return "No such contact"
}

const data2 = lookupProfile("Akira", "number"); // 08038039
const data1 = lookupProfile("Jarron", "likes"); // ['Tacos', 'Drawing', 'Swimming']
const data3 = lookupProfile("Alex", "likes"); // No such contact

console.log(data1, data2, data3);

// node src/recap/12_Loops/04-Challenge/script.js
