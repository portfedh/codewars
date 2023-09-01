// 31 Aug 2023

// CodeWars 8Ku Average of Array

// JavaScript

// Task:
// *****
// Write a function which calculates the average of the numbers in a given list.
// Empty arrays should return 0.


// PREP:
// *****
// Parameters:
    // arr: Array with integers
    // DataType: Positive and negative integers 
    // Range: All possible values
    // Other datatypes: No
    // NaN or undefined values: No
    // Empty arrays: yes
// Returns:
    // Integer, Floats
// Examples:
    // findAverage([1,1,1]) // --> 1
    // findAverage([1,2,3]) // --> 2
    // findAverage([1,2,3,4]) // --> 2.5

// Pseudo code:
  // Check if empty array and return 0
  // If array has elments add element to a result variable
  // Divide the result variable by the array length

// Code:
//======
function find_average(array) {
  if (array.length === 0) {
  return 0;
  }
  var result = 0;
  for (i=0; i<array.length; i++) {
    result +=array[i];
  }
  return result/array.length;
}
