// 16 Aug 2023

// CodeWars 7Ku Sum of odd numbers

// JavaScript

// Task:
// *****
// Given the triangle of consecutive odd numbers:
// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// Examples:
// *********
// 1 -->  1
// 2 --> 3 + 5 = 8


function rowSumOddNumbers(n) {
  const firstNumber = (n - 1) * n + 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
      sum += firstNumber + 2 * i;
  }
  return sum;
}

// Test:
// *****
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(rowSumOddNumbers(1), 1);
//     assert.strictEqual(rowSumOddNumbers(42), 74088);
//   });
// });
