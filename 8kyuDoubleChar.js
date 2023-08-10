// 10 Aug 2023

// CodeWars 8Ku Double Char

// JavaScript

// Task:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
  // Temp array
  let outputArray = []

  // Turn string to array
  const stingArray = str.split("");

  // Push values to new array
  stingArray.forEach(element => {
    outputArray.push(element);
    outputArray.push(element);
  });

  // Create string from array
  let outputString = outputArray.join("");

  // Return string
  console.log(outputString)
  return outputString
}

doubleChar("abcd")


// Test
// const Test = require('@codewars/test-compat');

// describe("doubleChar", function() {
//   it("works for some examples", function() {
//     Test.assertEquals(doubleChar("abcd"), "aabbccdd");
//     Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
//     Test.assertEquals(doubleChar("1337"), "11333377");
//     Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
//     Test.assertEquals(doubleChar("123456"), "112233445566");
//     Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
//   });
// });
