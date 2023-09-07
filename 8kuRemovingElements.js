// 6 Sep 2023

// CodeWars 8Ku Removing Elements

// JavaScript

// Task:
// *****
// Take an array and remove every second element from the array. 
// Always keep the first element and start removing with the next element.
// None of the arrays will be empty, 

// PREP:
// *****
// Parameters:
    // DataType: Array
    // Range: Any range
    // Other datatypes: Any type
    // NaN or undefined values: No
    // Empty variable: No
    // 0 included: No
    // Ordered items: No
// Returns:
    // Array
// Examples:
    // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] --> [1, 3, 5, 7, 9]
    // [1, 2] --> [1, 2]
// Pseudo code:
  // For every element in array
  // If mod %2 = 1 pop element
  // Return array

// Code:
//======

function removeEveryOther(arr){
  let newArray = []
  for(let i=0; i<arr.length; i++){
    if(i % 2 === 0){
      newArray.push(arr[i])
    }
  }
  return newArray;
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))

