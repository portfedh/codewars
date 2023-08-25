// 24 Aug 2023

// CodeWars 8Ku OppositesAttract

// JavaScript

// Task:
// *****
// Timmy & Sarah think they are in love, but around where they live.
// They will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// PREP:
// *****
// Parameters:
    // Integers
// Returns:
    // Return true / false
    // dataType: Boolean
// Examples:
    // 1,4  =>  true
    // 2,2  =>  false
    // 0,1  =>  true
    // 0,0  =>  false

// Pseudo code:
  // Check if number for each flower is even.
  // If its even, its modulus is 0
  // If its odd, its modulus is 1
  // If both are even, their addition will be 0. 
  // If both are odd, their addition will be 2.
  // If one is even and one is odd, their adition will be one.


  function lovefunc(flower1, flower2){
    let flower1Even = flower1 % 2
    let flower2Even = flower2 % 2
    let sum = flower1Even + flower2Even
    if (sum == 1){
      return true
    } else{
      return false
    }
  }

// Test:
// *****
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(lovefunc(1,4), true)
//     assert.strictEqual(lovefunc(2,2), false)
//     assert.strictEqual(lovefunc(0,1), true)
//     assert.strictEqual(lovefunc(0,0), false)
//   });
// });