// 30 Oct 2023

// CodeWars 8ku Needle in the Haystack

// JavaScript

// Task:
// *****
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// Parameters
// **********
// DataType: Array of strings
// Range: Any possible value
// NaN or undefined values: No
// Empty variable: No
// 0 included: No
// Ordered items: No

// Returns:
// ********
// Integer with position

// Examples:
// *********
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// Pseudo code:
// ************
// For loop in array length
// If "needle" return "found the needle at position 'i' "

// Code:
// *****
function findNeedle(haystack) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] == "needle") {
      return `found the needle at position ${i}`;
    }
  }
  return "Your function didn't return anything";
}

// Test:
// *****
var haystack_1 = [
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
];
console.log(findNeedle(haystack_1));
