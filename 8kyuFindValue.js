// 10 Oct 2023

// CodeWars 8ku You only need one

// JavaScript

// Task:
// *****
// You will be given an array a and a value x.
// Check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// Parameters
// **********
// DataType: Array
// Range: Any string or integer
// Other datatypes: No
// NaN or undefined values: no
// Empty variable: no
// 0 included: yes
// Ordered items: no

// Returns:
// ********
// Boolean value

// Examples:
// *********
// check([66, 101], 66), true;
// check([101, 45, 75, 105, 99, 107], 107), true;
// check(['t', 'e', 's', 't'], 'e'), true;
// check(['what', 'a', 'great', 'kata'], 'kat'), false;

// Pseudo code:
// ************
// search in array

// Code:
// *****
function check(array, searchValue) {
  return array.includes(searchValue);
}

// Test:
// *****
check([66, 101], 66); // true
check([101, 45, 75, 105, 99, 107], 107); // true
check(["t", "e", "s", "t"], "e"); // true
check(["what", "a", "great", "kata"], "kat"); // false
