// 31 Oct 2023

// CodeWars 8ku Will you make it?

// JavaScript

// Task:
// *****
// You were camping with your friends far away from home.
// When it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away!
// You know that on average, your car runs on about 25 miles per gallon.
// There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not

// Parameters
// **********
// DataType: Integer
// Range: Any possible value
// NaN or undefined values: No
// Empty variable: No
// 0 included: No
// Ordered items: No

// Returns:
// ********
// Boolean

// Examples:
// *********
// zeroFuel(50, 25, 2); // true

// Pseudo code:
// ************
// Check miles the car can go for with curren fuel
// Check if distance to pump is equal or below that number

// Code:
// *****
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let miles = mpg * fuelLeft;
  if (miles >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

// Test:
// *****
zeroFuel(50, 25, 2); // true
zeroFuel(100, 50, 1); // false
