// 3 Oct 2023

// CodeWars 7ku Binary Addition

// JavaScript

// Task:
// *****
// Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.

// Parameters
// **********
// DataType: two integers
// Range: Any value
// Other datatypes: No
// NaN or undefined values: No
// Empty variable: No
// 0 included: yes
// Ordered items: no

// Returns:
// ********
// string

// Examples:
// *********
// 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// Pseudo code:
// ************
// Add the numbers
// transform and return added number to binary

// Code:
// *****

function addBinary(a, b) {
  let sum = a + b;
  return sum.toString(2);
}

console.log(addBinary(1, 2));
