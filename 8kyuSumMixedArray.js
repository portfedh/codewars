// 30 Aug 2023

// CodeWars 8Ku Sum Mixed Array

// JavaScript

// Task:
// *****
// Given an array of integers as strings and numbers
// return the sum of the array values as if all were numbers.
// Return your answer as a number.


// PREP:
// *****
// Parameters:
    // arr: Array with numbers and strings
    // DataType: positive and negative integers 
    // Range: All possible values
    // Other datatypes: Strings
    // NaN or undefined values: No
    // Empty arrays: No
// Returns:
    // Integer
// Examples:
    // sumMix([9, 3, '7', '3']) --> 22
    // sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) --> 42
    // sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) --> 41

// Pseudo code:
  // Transform array to all integers
  // Sum array

// Code:
//======
function sumMix(x){
    let myArray = []
    
    for(let i=0; i<x.length; i++){
      let value = parseInt(x[i])
      myArray.push(value)
    }
     
    const sum = myArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    }, 0);

    return sum
  }

// console.log(sumMix([9, 3, '7', '3']))