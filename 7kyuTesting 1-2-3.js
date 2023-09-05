// 5 Sep 2023

// CodeWars 7Ku Testing 1-2-3

// JavaScript

// Task:
// *****
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.



// PREP:
// *****
// Parameters:
    // DataType: Array
    // Range: Any range
    // Other datatypes: No, but string inside
    // NaN or undefined values: No
    // Empty variable: Yes
    // 0 included: No
    // Ordered items: Stings have no order
// Returns:
    // Array
// Examples:
    // [] --> []
    // ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
// Pseudo code:
  // For every element in array append string with counter
  // Push new element into new array
  // Return array

// Code:
//======

var number=function(array){
  let myArray = []
  for(let i=0; i< array.length; i++){
    myArray.push(`${i+1}: ${array[i]}`)
  }
  return myArray
}

console.log(number(["a", "b", "c"]))

