// 12 Aug 2023

// CodeWars 8Ku How good are you really?

// JavaScript

// Task:
// *****
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. 
// You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. 
// Now calculate the average and compare your score!
// Return True if you're better, else False!
// Your points are not included in the array of your class's points.
// For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  let total
  let average
  
  total = classPoints.reduce((total, currentValue) => total + currentValue, 0)
  total += yourPoints
  average = total / (classPoints.length + 1)
  
  if(yourPoints > average) { 
    return true
  } else {
    return false
  }

}

// Test:
// *****
// const chai = require('chai');
// const assert = chai.assert;

// describe("Example Tests", function() {
//   it("betterThanAverage([2, 3], 5) should return True", function() {
//     assert.strictEqual(betterThanAverage([2, 3], 5), true);
//   });
  
//   it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
//     assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
//   });
  
//   it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
//     assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
//   });
  
//   it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function() {
//     assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
//   });
  
//   it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function() {
//     assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
//   });
// });
