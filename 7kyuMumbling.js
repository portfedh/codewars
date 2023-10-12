// 11 Oct 2023

// CodeWars 7ku Mumbling

// JavaScript

// Task:
// *****
// The examples below show you how to write function accum:

// Parameters
// **********
// DataType: String
// Range: a - z, caps or not
// NaN or undefined values: no
// Empty variable: no
// 0 included: no
// Ordered items: no

// Returns:
// ********
// String with hyphens

// Examples:
// *********
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// Pseudo code:
// ************
// Transfor string to array
// create new array
// push to new array array[0].toUppercase
// for loop in i =1 to array length: push array[i]
// join array into string with "-" symbol
// retrurn string

// Code:
// *****
function accum(s) {
  // Convert the input string to uppercase
  s = s.toUpperCase();
  // Initialize an empty array to store the parts
  var parts = [];
  // Iterate through the characters of the input string
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    // Create a part with the current character repeated i+1 times
    var part = char + char.toLowerCase().repeat(i);
    // Add the part to the array
    parts.push(part);
  }
  // Join the parts with hyphens and return the result
  return parts.join('-');
}

// Test:
// *****
console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
