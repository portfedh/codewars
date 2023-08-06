// 6 Aug 2023

// CodeWars 7Ku Find the next perfect square!

// JavaScript

// Task:
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. 
// You may assume the parameter is non-negative.

function findNextSquare(sq) {
  let squareRoot = Math.sqrt(sq)

  // Check if perfect square
  if( squareRoot === Math.floor(squareRoot)) {
    console.log('Perfect Square')
    let nextPerfectSquare = squareRoot+1
    nextPerfectSquare = nextPerfectSquare ** 2
    return (nextPerfectSquare)
  }
  return -1;
}
findNextSquare(145)


// Test
// const Test = require('@codewars/test-compat');

// describe("findNextSquare", function() {
//   it("should return the next square for perfect squares", function() {
//     Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
//     Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
//     Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
//     Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
//   });
  
//   it("should return -1 for numbers which aren't perfect squares", function() {
//     Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
//     Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
//   });
// });