// 1 Oct 2023

// CodeWars 7Ku is this a triangle?

// JavaScript

// Task:
// *****
// Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

// Parameters
// **********
// DataType: Integers
// Range: Positive values
// Other datatypes: No
// NaN or undefined values: No
// Empty variable: No
// 0 included: NA
// Ordered items: NA

// Returns:
// ********
// Boolean

// Examples:
// isTriangle(1,2,2), true
// isTriangle(7,2,2), false

// Pseudo code:
// ************
// The triangle inequality theorem:
// Sum of the lengths of any two sides of a triangle must be greater than the length of the third side
// Join array into string
// a + b > c, a + c > b, b + c > a

// Code:
//======
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  } else {
    return false;
  }
}

console.log(isTriangle(7, 2, 2));
