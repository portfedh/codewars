# Daily CodeWars Exercises

Welcome to my Daily CodeWars Exercises repository! This is where I document my journey of sharpening my problem-solving skills by solving CodeWars challenges on a daily basis.

## File Naming Convention

Each exercise is stored in a separate file following the naming convention:

- `<Ku_Level>`: Difficulty level denoted in Kyu (Ku) lower number is higher difficulty.
- `<Exercise_Name>`: Descriptive name of the CodeWars exercise.

## File Structure

Each file contains the following sections:

1. **Problem Definition**: A description of the problem statement.

2. **Parameters**: List of input parameters required for the function.

3. **Returns**: Expected output or return value.

4. **Examples**: Examples illustrating the usage of the function.

6. *Pseudo Code**: High-level plan before the actual code implementation.

8. **Code**: Implementation of the solution.


## Example File

Here's an example of how a file might look:

```javascript
// 18 Sep 2023

// CodeWars 6Ku Replace With Alphabet Position

// JavaScript

// Task:
// *****
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

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
// alphabetPosition("The sunset sets at twelve o' clock.")
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// Pseudo code:
// ************
// Create a object with key value pairs
// Create array from string
// Loop array
// Check its key and push its value to temp array
// Transform array to string
// Return string

// Code:
//======

function alphabetPosition(text) {
  let tempArray = [];
  let stringArray = text.split("");
  let myDictionary = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  for (let i = 0; i < stringArray.length; i++) {
    if (myDictionary.hasOwnProperty(stringArray[i].toLowerCase())) {
      tempArray.push(myDictionary[stringArray[i].toLowerCase()]);
    } else {
    }
  }
  let outputarray = tempArray.join(" ");
  console.log(outputarray);
  return outputarray;
}

alphabetPosition("My name is pablo");

