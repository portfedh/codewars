// 28 Aug 2023

// CodeWars 8Ku Sum of positive

// JavaScript

// Task:
// *****
// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.

// PREP:
// *****
// Parameters:
    // arr: Array with numbers
    // DataType: integers or floats
    // Negative numbers: yes
    // Numbers in a range: All possible values
    // Other datatypes: No
    // NaN or undefined values: No
    // Empty arrays: No
// Returns:
    // single value
    // dataType: integer
    // In empty array, return 0
// Examples:
    // positiveSum([1,2,3,4,5]) // --> 15
    // positiveSum([1,-2,3,4,5]) // --> 13
    // positiveSum([]) // --> 0
    // positiveSum([-1,-2,-3,-4,-5]) // --> 0
    // positiveSum([-1,2,3,4,-5]) // --> 9

// Pseudo code:
  // 

// Code:
//======
function positiveSum(arr) {
    let subtotal = 0;
    arr.forEach(element => {
        if(element>0){subtotal += element}
    });
    console.log(subtotal)
    return subtotal
}

// Test:
// *****
// const { assert } = require("chai")
// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(positiveSum([1,2,3,4,5]),15);
//     assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
//     assert.strictEqual(positiveSum([]),0);
//     assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
//     assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
//     });
//   });