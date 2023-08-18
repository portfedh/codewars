// 17 Aug 2023

// CodeWars 8Ku Reduce but grow

// JavaScript

// Task:
// *****
// Given a non-empty array of integers, 
// Return the result of multiplying the values together in order.

// Example:
// *********
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
  let y = 1
  console.log(x)
  for(let i=0; i<x.length; i++){
    y = y * x[i]
  }
  return y
}

// Test:
// *****
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {  
//     assert.strictEqual(grow([1, 2, 3]), 6);
//     assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
//     assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 
//   });
// })