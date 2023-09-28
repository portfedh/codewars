// 27 Sep 2023

// CodeWars 8Ku Sum Arrays

// JavaScript

// Task:
// *****
// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.

// Parameters
// **********
// DataType: number, integer & fload
// Range: Any range
// Other datatypes: No
// NaN or undefined values: No
// Empty variable: yes
// 0 included: yes
// Ordered items: NA

// Returns:
// ********
// Number

// Examples:
// Input: [1, 5.2, 4, 0, -1] --> Output: 9.2
// Input: [] --> Output: 0
// Input: [-2.398] --> Output: -2.398

// Pseudo code:
// ************
// For loop with subtotal variable
// Add current number to subtotal
// Return subtotal

// Code:
//======

function sum(numbers) {
  if (numbers == 0) {
    return 0;
  }
  const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  return summedNums;
}

console.log(sum([1, 5.2, 4, 0, -1]));
