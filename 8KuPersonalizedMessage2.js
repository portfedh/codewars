// 21 Sep 2023

// CodeWars 8Ku Personalized Message

// JavaScript

// Task:
// *****
// Who remembers back to their time in the schoolyard.
// When girls would take a flower and tear its petals.
// saying each of the following phrases each time a petal was torn:
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

// Parameters
// **********
// DataType: number
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
// howMuchILoveYou(7),"I love you"
// howMuchILoveYou(3),"a lot"
// howMuchILoveYou(6),"not at all"

// Pseudo code:
// ************
// Find the modulus of the number given.
// Use case statement.
// Return string

// Code:
//======

function howMuchILoveYou(nbPetals) {
  result = nbPetals % 6;

  switch (result) {
    case 1:
      return "I love you";
      break;
    case 2:
      return "a little";
      break;
    case 3:
      return "a lot";
      break;
    case 4:
      return "passionately";
      break;
    case 5:
      return "madly";
      break;
    case 6:
      return "not at all";
      break;
  }
}

console.log(howMuchILoveYou(7));
