// 6 Oct 2023

// CodeWars 7ku Get the Middle Character

// JavaScript

// Task:
// *****
// You are going to be given a word.
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// Parameters
// **********
// DataType: String
// Range: Any positive value
// Other datatypes: No
// NaN or undefined values: No
// Empty variable: No
// 0 included: no
// Ordered items: no

// Returns:
// ********
// String, one letter

// Examples:
// *********
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// Pseudo code:
// ************
// check input string lenght
// if number if number is odd: Divide by two and round down
// Return that character in the string
// if numbers even: Divide by two
// Return that position and the previous one

// Code:
// *****
function getMiddle(s) {
  //Check if string is odd or even:
  if (s.length % 2 === 0) {
    let upper = s.length / 2;
    let lower = upper - 1;
    return s[lower] + s[upper];
  } else {
    let position = Math.floor(s.length / 2);
    return s[position];
  }
}

// Test:
// *****
console.log(getMiddle("test1"));
