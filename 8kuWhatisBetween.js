// 12 Sep 2023

// CodeWars 8Ku What is between?

// JavaScript

// Task:
// *****
// Complete the function that takes two integers (a, b, where a < b)
// It returns an array of all integers between the input parameters, including them.

// PREP:
// *****
// Parameters: a, b
// DataType: Integers
// Range: positive and negative values
// Other datatypes: no
// NaN or undefined values: No
// Empty variable: No
// 0 included: yes
// Ordered items: yes
// Returns: array with integers
// Examples:
// between(1, 4) --> [1, 2, 3, 4]
// between(-2, 2) --> [-2, -1, 0, 1, 2]

// Pseudo code:
// Create empty array
// Create a for loop
// function initializes with value a
// Limit to for loop is value b
// append values to array and return array

// Code:
//======

function between(a, b) {
  let myArray = [];
  for (let i = a; i <= b; i++) {
    myArray.push(i);
  }
  return myArray
}

between(-2, 2);
