// 12 Oct 2023

// CodeWars 8ku Lario and Muigi Pipe Problem

// JavaScript

// Task:
// *****
// Given a list of unique numbers sorted in ascending order
// return a new list so that the values increment by 1
// from the minimum value up to the maximum value (both included).

// Parameters
// **********
// DataType: Array with integers
// Range: any
// NaN or undefined values: no
// Empty variable: no
// 0 included: yes
// Ordered items: yes

// Returns:
// ********
// List of integers

// Examples:
// *********
// pipeFix([6,9]) --> [6,7,8,9]
// pipeFix([-1,4])--> [-1,0,1,2,3,4]

// Pseudo code:
// ************
// Get first and last numbers in array
// Create new array
// Using forloop: from i = min to i = max
// push number i to array and increment one

// Code:
// *****
function pipeFix(numbers) {
  let myArray = [];
  let minValue = Math.min(...numbers);
  let maxValue = Math.max(...numbers);
  for (i = minValue; i <= maxValue; i++) {
    myArray.push(i);
  }
  return myArray;
}

// Test:
// *****
console.log(pipeFix([-1, 4]));
