// 2 Sep 2023

// CodeWars 8Ku Thinkful - Logic Drills: Traffic light

// JavaScript

// Task:
// *****
// You're writing code to control your town's traffic lights. 
// You need a function to handle each change from green, to yellow, to red, and then to green again. 
// Complete the function that takes a string as an argument representing the current state of the light 
// and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.

// PREP:
// *****
// Parameters:
    // DataType: Strings 
    // Range: Any character
    // Other datatypes: No
    // NaN or undefined values: No
    // Empty variable: No
    // 0 included: No
// Returns:
    // String
// Examples:
    // updateLight("green") --> "yellow"
    // updateLight("yellow") --> "red"
    // updateLight("red") --> "green"

// Pseudo code:
  // Case statement:
  // Green -> Yellow --> Red -->

// Code:
//======
function updateLight(current) {
  switch (current) {
    case "green":
      console.log("Return Yellow");
      return 'yellow';
      break;
    case "yellow":
      console.log("Return Red");
      return 'red';
      break;
    case "red":
      console.log("Return Green");
      return 'green';
      break;
    default:
      console.log("Invalid color");
  }
}

console.log(updateLight("green"));