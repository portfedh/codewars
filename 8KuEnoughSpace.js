// 19 Oct 2023

// CodeWars 8ku Will there be enough space?

// JavaScript

// Task:
// *****
// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// if there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Parameters
// **********
// DataType: Integers
// Range: any
// NaN or undefined values: no
// Empty variable: no
// 0 included: yes
// Ordered items: no

// Returns:
// ********
// Number

// Examples:
// *********
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

// Pseudo code:
// ************
// Subtract 'on' from 'cap'
// Subtract cap - wait
// If ('wait' <= 'cap') --> return 0
// Else (return 'wait' - 'cap')

// Code:
// *****
function enough(cap, on, wait) {
  let remainingCap = cap - on;
  let remainingWait = wait - remainingCap;
  if (remainingWait < 0) {
    return 0;
  }
  return remainingWait;
}

// Test:
// *****
console.log(enough(100, 60, 50)); // 10);
console.log(enough(20, 5, 5)); // 0
