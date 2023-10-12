// 12 Oct 2023

// CodeWars 7ku Ones&Zeroes

// JavaScript

// Task:
// *****
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Parameters
// **********
// DataType: Array with integers
// Range: 0 | 1
// NaN or undefined values: no
// Empty variable: no
// 0 included: yes
// Ordered items: no

// Returns:
// ********
// Integer

// Examples:
// *********
// binaryArrayToNumber([0,0,0,1]), 1
// binaryArrayToNumber([0,0,1,0]), 2
// binaryArrayToNumber([1,1,1,1]), 15
// binaryArrayToNumber([0,1,1,0]), 6

// Pseudo code:
// ************
// Transfor string to array
// create new array
// push to new array array[0].toUppercase
// for loop in i =1 to array length: push array[i]
// join array into string with "-" symbol
// retrurn string

// Code:
// *****
const binaryArrayToNumber = (arr) => {
  const binaryNumber = arr.join("");
  return parseInt(binaryNumber, 2);
};

// Test:
// *****
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
