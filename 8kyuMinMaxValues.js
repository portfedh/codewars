// 26 Aug 2023

// CodeWars 8Ku Maximum and Minimum Values of a List

// JavaScript

// Task:
// *****
// Your task is to make two functions ( max and min) that receive a list of integers as input, 
// and return the largest and lowest number in that list, respectively.
// You may consider that there will not be any empty arrays/vectors.

// PREP:
// *****
// Parameters:
    // DataType: integers
    // Negative numbers: yes
    // Numbers in a range: No
    // Other datatypes: No
    // NaN or undefined values: No
    // Empty arrays: No
// Returns:
    // dataType: integer
    // Return: minimum or maximum value

// Examples:
    // * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
    // * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
    // * [42, 54, 65, 87, 0]             -> min = 0, max = 87
    // * [5]                             -> min = 5, max = 5

// Pseudo code:
  // Create a variable with min/max value
  // Give it the first value in an array
  // Compare each element in array with variable. 
  // If bigger or smaller, depending on the function, update the variable
  // Return the variable content at the end

// Code:
var min = function(list){
    let minValue = list[0];
    for(let i=0; i<list.length; i++){
        if(list[i] < minValue){ 
            minValue = list[i]
        }
    }
    return minValue;
}

var max = function(list){
    let maxValue = list[0];
    for(let i=0; i<list.length; i++){
        if(list[i] > maxValue){ 
            maxValue = list[i]
        }
    }
    return maxValue;
}

console.log(min([4,6,2,1,9,63,-134,566]));
console.log(min([42, 54, 65, 87, 0]))
console.log(max([4,6,2,1,9,63,-134,566]))
console.log(max([5]))

// Test:
// *****
// const Test = require('@codewars/test-compat');

// describe("Test", function(){
//   it("Examples", function(){
//     Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
//     Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
//     Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
//     Test.assertEquals(max([5]), 5);
//   });
// });