// 3 Oct 2023

// CodeWars 6ku Mexican Wave

// JavaScript

// Task:
// *****
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// The input string will always be lower case but maybe empty.
// If the character in the string is whitespace then pass over it as if it was an empty seat

// Parameters
// **********
// DataType: Array with strings
// Range: Any value
// Other datatypes: No
// NaN or undefined values: No
// Empty variable: No
// 0 included: NA
// Ordered items: NA

// Returns:
// ********
// Array with strings

// Examples:
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// wave("Two words") =>["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]

// Pseudo code:
// ************
// Create empty array
// Save string as array
// Create a for loop:
//   Create an array from original string
//   Capitalize posstition letter(i)
//   Join array to create output string
//   Push to empty array
// Return array with strings

// Code:
//======
function wave(str) {
  let returnArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') { // Check if the character is not a space
      let inputArray = str.split("");
      inputArray[i] = inputArray[i].toUpperCase();
      let outputString = inputArray.join("");
      returnArray.push(outputString);
    }
  }
  return returnArray;
}

console.log(wave("hello"));
