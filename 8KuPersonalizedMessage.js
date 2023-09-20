// 19 Sep 2023

// CodeWars 8Ku Personalized Message

// JavaScript

// Task:
// *****
// reate a function that gives a personalized greeting.
//This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// name equals owner --> 'Hello boss'
// otherwise --> 'Hello guest'

// Parameters
// **********
// DataType: String
// Range: Any range
// Other datatypes: No
// NaN or undefined values: No
// Empty variable: No
// 0 included: NA
// Ordered items: NA

// Returns:
// ********
// String

// Examples:
// greet('Greg', 'Daniel') --> 'Hello guest'
// greet('Daniel', 'Daniel') --> 'Hello boss'

// Pseudo code:
// ************
// compare input string with owner
// if equal, return 'hello boss'
// if not, return 'hello guest'

// Code:
//======

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

greet("Greg", "Daniel");
