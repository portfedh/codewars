// 30 Sep 2023

// CodeWars 8Ku Reversed Strings

// JavaScript

// Task:
// *****
// Complete the solution so that it reverses the string passed into it.

// Parameters
// **********
// DataType: string
// Range: Any
// Other datatypes: No
// NaN or undefined values: No
// Empty variable: No
// 0 included: NA
// Ordered items: NA

// Returns:
// ********
// Input string reversed

// Examples:
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Pseudo code:
// ************
// Create empty array
// for each character input into new array, in initial position
// Join array into string

// Code:
//======

function solution(str) {
  let myArray = [];
  for (let i = 0; i < str.length; i++) {
    myArray.unshift(str[i]);
  }
  let result = myArray.join("");
  return result;
}

console.log(solution("world"));
