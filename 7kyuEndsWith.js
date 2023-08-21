// 21 Aug 2023

// CodeWars 7Ku String ends with?

// JavaScript

// Task:
// *****
// Complete the solution so that 
// It returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 

// PREP:
// *****
// Parameters:
    // Strings
// Returns:
    // Return statement
    // dataType: Boolean
// Examples:
    // solution('abcde', 'cde') --> returns true
    // solution('abc', 'd') --> returns false

// Pseudo code:
  // check number of elementd in first string --> 5
  // check number of elements in second string --> 3

  // check if last string of second === last string of first
  // check if second last of second == second last of first.
  // .. continue for all ranche

  // if any === false, return false
  // if all === true, return true


function solution(str, ending){
  let stringLength = str.length -1
  let endingLength = ending.length -1
  console.log(`First word is ${str}. Its length is: ${stringLength}`)
  console.log(`Ending is ${ending}. Its length is: ${endingLength}`)

  for(let i = endingLength; i >= 0; i--){
    let endingLetter = ending[i]
    console.log(`Current ending letter is: ${endingLetter}`)

    let strLetter = str[stringLength]
    console.log(`Current stringletter is: ${strLetter}`)

    if (endingLetter != strLetter){
      console.log("Not the same"); 
      return false
    }
    stringLength -= 1
  }
  console.log('The same. Exiting');
  return true
}

solution('abcdde', 'cde')

// Test:
// *****
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(solution('abcde', 'cde'), true)
// Test.assertEquals(solution('abcde', 'abc'), false)
// });
// });
// // });

// There was a much simpler solution:
function solution(str, ending){
  return str.endsWith(ending);
}
