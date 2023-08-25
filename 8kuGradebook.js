// 25 Aug 2023

// CodeWars 8Ku Grasshopper - Grade book

// JavaScript

// Task:
// *****
// Complete the function so that it finds the average of the three scores passed to it 
// and returns the letter value associated with that grade.
// Tested values are all between 0 and 100. 
// Theres is no need to check for negative values or values greater than 100.
// Numerical Score  Letter Grade
// 90 <= score <= 100   'A'
// 80 <= score < 90   'B'
// 70 <= score < 80   'C'
// 60 <= score < 70   'D'
// 0 <= score < 60  'F'

// PREP:
// *****
// Parameters:
    // Integers: 0-100
    // Negative numbers: No
    // Numbers above range: No
    // Other datatypes: No
    // NaN or undefined values: No
// Returns:
    // dataType: String
    // Return: 'A', 'B', 'C', 'D'

// Examples:
    // 50 --> 'F'
    // 79 --> 'C'
    // 85 --> 'B'

// Pseudo code:
  // Add numbers and divide by 3
  // Run case statment and return letter

// Code:
function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  if (average >= 90) {
      return 'A';
  } else if (average >= 80 && average < 90) {
      return 'B';
  } else if (average >= 70 && average < 80) {
      return 'C';
  } else if (average >= 60 && average < 70) {
      return 'D';
  } else {
      return 'F';
  }
}

console.log(getGrade(90, 91, 90));

// Test:
// *****
// const Test = require('@codewars/test-compat');

// describe('grade book', function () {
//   it('should return an A', function () {
//     Test.assertEquals(getGrade(95,90,93), 'A')
//     Test.assertEquals(getGrade(100,85,96), 'A')
//     Test.assertEquals(getGrade(92,93,94), 'A')
//   })
//   it('should return a B', function () {
//     Test.assertEquals(getGrade(70,70,100), 'B')
//     Test.assertEquals(getGrade(82,85,87), 'B')
//     Test.assertEquals(getGrade(84,79,85), 'B')
//     Test.assertEquals(getGrade(89,89,90), 'B') 
//   })
//     it('should return a C', function () {
//     Test.assertEquals(getGrade(70,70,70), 'C')
//     Test.assertEquals(getGrade(75,70,79), 'C')
//     Test.assertEquals(getGrade(60,82,76), 'C')
//   })
//     it('should return a D', function () {
//     Test.assertEquals(getGrade(65,70,59), 'D')
//     Test.assertEquals(getGrade(66,62,68), 'D')
//     Test.assertEquals(getGrade(58,62,70), 'D')
//   })
//     it('should return an F', function () {
//     Test.assertEquals(getGrade(44,55,52), 'F')
//     Test.assertEquals(getGrade(48,55,52), 'F')
//     Test.assertEquals(getGrade(58,59,60), 'F')
//   })
// })