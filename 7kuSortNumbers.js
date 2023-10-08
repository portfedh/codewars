// 8 Oct 2023

// CodeWars 7ku Sort Numbers

// JavaScript

// Task:
// *****
// Finish the solution so that it sorts the passed in array of numbers.
// If the function passes in an empty array or null/nil value then it should return an empty array.

// Parameters
// **********
// DataType: Array
// Range: Any positive value
// Other datatypes: No
// NaN or undefined values: yes
// Empty variable: yes
// 0 included: na
// Ordered items: no

// Returns:
// ********
// Array with numbers, in ascending order.

// Examples:
// *********
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// Pseudo code:
// ************
// check input array length
// if null or empty return
// else array.sort ascending

// Code:
// *****
function solution(nums) {
  let outputArray = [];
  if (nums === null || nums.length == 0) {
    return outputArray;
  }
  outputArray = nums.sort((a, b) => a - b);
  return outputArray;
}

// Test:
// *****
console.log(solution([1, 2, 10, 50, 5]));
console.log(solution(null));
console.log(solution([]));
