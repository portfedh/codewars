// 29 Aug 2023

// CodeWars 8Ku Count of positives / sum of negatives

// JavaScript

// Task:
// *****
// Given an array of integers.
// Return an array
// The first element is the count of positives numbers
// The second element is sum of negative numbers.
// 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// PREP:
// *****
// Parameters:
    // arr: Array with numbers
    // DataType: positive and negative integers 
    // Range: All possible values
    // Other datatypes: No
    // NaN or undefined values: No
    // Empty arrays: yes
// Returns:
    // Array with 0 or two elements
// Examples:
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], --> [10, -65].
    // [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14] --> [8, -50]

// Pseudo code:
  // 

// Code:
//======
function countPositivesSumNegatives(input) {
    let emptyArray = []
    let positiveCount = 0
    let sumOfNegative = 0

    if(input== null){
        return emptyArray
    }
    if(input.length === 0) {
        return emptyArray
    }
    for(let i=0; i<input.length; i++){
        if(input[i]>0){
            positiveCount++
        } else if(input[i]<0){
            sumOfNegative += input[i]
        }
    }
    emptyArray.push(positiveCount)
    emptyArray.push(sumOfNegative)
    return emptyArray
  }


  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))