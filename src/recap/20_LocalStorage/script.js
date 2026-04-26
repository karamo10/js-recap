/* 
every browser has a small built-in storage system that lives on the user's computer. 
It lets you 'Survives Page Refreshes and Browser Closes' - unlike regular JS variables which
disappear the moment you refresh.

                               JS Variable  LocalStorage                      
-lives in                      memory       browser storage
- survives refresh             no           yes
- survives browser close       no           yes
- max size                     unlimited    -5MB
- Data type                    anything     strings only

note = localStorage only stores strings 
*/

// localStorage.setItem('key', value); // save

// localStorage.getItem('key') // read

// localStorage.removeItem('key') // delete

// localStorage.clear() // clear everything


const tasks = ['Learn Frontend', 'Move to Backend', 'Now become Fullstack']

/*
I must convert the 'task' to string 
before storing it to localStorage 
*/ 

// array to string (for storing)
const taskToString =  JSON.stringify(tasks)
console.log('task:', taskToString, typeof taskToString); // typeOf: string

// string to array (for reading)
const taskToObject = JSON.parse(taskToString);
console.log('task', taskToObject, typeof taskToObject);
console.log(taskToObject[2]); // Now become Fulstack


// Saving - convert array to string first
localStorage.setItem('tasks', JSON.stringify(tasks))

// Reading - convert string to array 
const task = JSON.parse(localStorage.getItem('tasks'))



// node src/recap/20_LocalStorage/script.js 