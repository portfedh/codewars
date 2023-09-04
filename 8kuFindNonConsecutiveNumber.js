// 4 Sep 2023

// CodeWars 8Ku Find the first non-consecutive number

// JavaScript

// Task:
// *****
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// If the whole array is consecutive then return null.
// The array will always have at least 2 elements1 and all elements will be numbers.
// The numbers will also all be unique and in ascending order.
// The numbers could be positive or negative and the first non-consecutive could be either too!

// PREP:
// *****
// Parameters:
    // DataType: integers
    // Range: Any range
    // Other datatypes: No
    // NaN or undefined values: No
    // Empty variable: No
    // 0 included: No
    // Ordered items: yes, accending order
// Returns:
    // Integer
// Examples:
    // firstNonConsecutive([1,2,3,4,6,7,8]) --> 6
    // firstNonConsecutive([1,2,3,4]) --> 0
// Pseudo code:
  // Save sting into array, separated by letter
  // Check every letter in array
  // If 5,0,1 substitute string
  // Join array into string and return answer

// Code:
//======

function firstNonConsecutive (arr) {
  let thisValue = arr[0];
  let lastValue;

  for(let i=1; i < arr.length; i++){
    lastValue = thisValue;
    thisValue = arr[i];
    let testValue = thisValue - 1
    if(testValue != lastValue){
      return thisValue;
    }
  }
  return null
}

console.log(firstNonConsecutive([1,2,3,4]))