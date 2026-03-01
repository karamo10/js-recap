// if/else statement challenges

// Challenge 1 — The Password Checker
// Rules:
// The correct password is "javascript123"
// If correct → print "Access granted! Welcome"
// If wrong → print "Access denied! Wrong password"

let userPassword = 'javascript12346';

if (userPassword === 'javascript123') {
  console.log('Access granted! Welcome');
} else {
  console.log('Access denied! Wrong password');
}
// output: Access denied! Wrong password

// Challenge 2 — The Shopping Discount
// Rules:
// Amount Spent  // Discount
// GMD100 or more  // 20% off
// GMD50 or more   // 10% off
// GMD20 or more   // 5% off
// Less than $20 // No discount

// How the Discount Calculation Works
// finalPrice = totalPrice - (totalPrice * discount)
// Find the discount amount → totalPrice * discount
// Subtract it from the total → totalPrice - discountAmount

let totalPrice = 80;
let finalPrice;

if (totalPrice >= 100) {
  finalPrice = totalPrice - totalPrice * 0.2;
  console.log('20% discount applied!');
} else if (totalPrice >= 50) {
  finalPrice = totalPrice - totalPrice * 0.1;
  console.log('10% discount applied!');
} else if (totalPrice >= 20) {
  finalPrice = totalPrice - totalPrice * 0.05;
  console.log('5% discount applied!');
} else {
  finalPrice = totalPrice;
  console.log('No discount.');
}
console.log('Final price:GMD' + finalPrice);
// output: 10% discount applied!
// output: Final price: GMD72

// Challenge 3
// ATM Machine
// Build a simple ATM that does the following:
// Rules:
// User has a balance of $500
// User wants to withdraw an amount
// Check these conditions:

// Condition                      // Message
// Amount is 0 or less            // "Invalid amount"
// Amount is more than balance    // "Insufficient funds"
// Amount is more than $300       // "Exceeds daily withdrawal limit"
// Everything is fine             // "Withdrawal successful! New balance: $___"

let balance = 500;
let withdrawAmount = 150;

if (withdrawAmount <= 0) {
  console.log('Invalid amount');
} else if (withdrawAmount > 300) {
  console.log('Exceeds daily withdrawal limit');
} else if (withdrawAmount > balance) {
  console.log('Insufficient funds');
} else {
  console.log('Withdrawal successful! New balance:', balance - withdrawAmount);
}
// output: Withdrawal successful! New balance: 350


// Challenge 4 Golf Code
let names = ["Hole-in-one", "Eargle", "Birdie", "Par", "Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes >= par + 2) {
    return names[5]
  }
}
console.log(golfScore(5, 1));  // Hole-in-one
console.log(golfScore(5, 2));  // Eagle  (5-2=3, strokes 2 <= 3)
console.log(golfScore(5, 4));  // Birdie (par-1 = 4)
console.log(golfScore(5, 5));  // Par
console.log(golfScore(5, 6));  // Bogey
console.log(golfScore(5, 7));  // Go Home!

/*
Strokes        Return
1            "Hole-in-one"
<= par - 2   "Eargle"
par - 1      "Birdie" 
par          "par"
par + 1      "Bogey"
>= par + 2   "Go Home!"
*/


// node src/recap/10-Conditional-Logics/06_Challenges/script.js
