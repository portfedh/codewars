// 23 Aug 2023

// CodeWars 7Ku A square of squares

// JavaScript

// Task:
// *****
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; 
// In other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// PREP:
// *****
// Parameters:
    // Integers
// Returns:
    // Return true / false
    // dataType: Boolean
// Examples:
    // -1  =>  false
    //  0  =>  true
    //  3  =>  false
    //  4  =>  true
    // 25  =>  true
    // 26  =>  false

// Pseudo code:
  // Check if number divided by square root of the number has remainder of 0
  // Check edge cases (square root of zero & of negative number)


  var isSquare = function(n){
    let remainder = n % Math.sqrt(n); // Calculate the remainder using the square root of n
    if (remainder == -1){
      return false
    } else if(n == 0){
      return true
    } else if (remainder === 0) {
      return true;
    } else {
      return false;
    }
  }

// Test:
// *****
// const Test = require('@codewars/test-compat');

// describe("isSquare", function(){
//   it("should work for some examples", function(){
//     Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
//     Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
//     Test.assertEquals(isSquare( 3), false, "3 is not a square number");
//     Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
//     Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
//     Test.assertEquals(isSquare(26), false, "26 is not a square number");
//   });
// });