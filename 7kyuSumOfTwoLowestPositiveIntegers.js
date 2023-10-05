// 4 Oct 2023

// CodeWars 7ku Sum of two lowest positive integers

// JavaScript

// Task:
// *****
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.

// Parameters
// **********
// DataType: Array with integers
// Range: Any positive value
// Other datatypes: No
// NaN or undefined values: No
// Empty variable: No
// 0 included: yes
// Ordered items: no

// Returns:
// ********
// integer

// Examples:
// *********
// [19, 5, 42, 2, 77] --> 7

// Pseudo code:
// ************
// Get array with integers
// Sort the array in ascending order
// Add the first two numbers

// Code:
// *****
function sumTwoSmallestNumbers(numbers) {
  const ascendingOrder = numbers.slice().sort((a, b) => a - b);
  return ascendingOrder[0] + ascendingOrder[1];
}

// Test:
// *****
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
