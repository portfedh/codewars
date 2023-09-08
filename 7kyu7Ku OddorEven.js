// 7 Sep 2023

// CodeWars 7Ku Odd or Even?

// JavaScript

// Task:
// *****
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).


// PREP:
// *****
// Parameters:
    // DataType: Array
    // Range: Any range
    // Other datatypes: Integers, Floats
    // NaN or undefined values: No
    // Empty variable: Empty array
    // 0 included: yes
    // Ordered items: No
// Returns:
    // Array
// Examples:
    // Input: [0] --> Output: "even"
    // Input: [0, 1, 4] --> Output: "odd"
    // Input: [0, -1, -5] --> Output: "even"

// Pseudo code:
  // Check if array is 0: --> return even
  // Add array
  // Check if result is odd or even
  // Return result

// Code:
//======

function oddOrEven(array) {
  if(array.length === 0){
    return 'even'
  }
  // Find sum of array
  const summedNums = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  })
  // Check if off or even
  if(summedNums%2 ==0 ){
    return 'even'
  } else{
    return 'odd'
  }
}

console.log(oddOrEven([0, 1, 4]))

