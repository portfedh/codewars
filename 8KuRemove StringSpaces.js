// 13 Sep 2023

// CodeWars 8Ku Remove String Spaces

// JavaScript

// Task:
// *****
// Write a function that removes the spaces from the string,
// then return the resultant string.

// PREP:
// *****
// Parameters: string
// DataType: string
// Range: any amount of values
// Other datatypes: no
// NaN or undefined values: No
// Empty variable: No
// 0 included: NA
// Ordered items: NA

// Returns: String

// Examples:
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

// Pseudo code:
// create new temp array
// Create array from string
// loop array
// if not a space, append array
// transform array to string
// return string

// Code:
//======

function noSpace(string) {
  let tempArray = [];
  let stringArray = string.split("");
  for (let i = 0; i < stringArray.length; i++) {
    if (string[i] !== " ") {
      tempArray.push(string[i]);
    }
  }
  let outputarray = tempArray.join("");
  console.log(outputarray);
  return outputarray;
}

noSpace("8aaaaa dddd r     ");
