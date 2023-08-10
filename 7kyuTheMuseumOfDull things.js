// 9 Aug 2023

// CodeWars 7Ku The museum of incredible dull things

// JavaScript

// Task:
// The museum of incredible dull things wants to get rid of some exhibitions.
// Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions.
// She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. 
// Fair enough.

// Given an array of integers, remove the smallest value.
// Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with a lower index.
// If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


function removeSmallest(numbers) {
  if(numbers.length === 0){ 
    console.log(`Empty Array`)
    return []
  };

  let tempArray = [];
  let digitRemoved = false;
  
  let lowestValue = Math.min(...numbers)
  console.log(`Min value: ${lowestValue}`)

  for(let i=0; i<numbers.length; i++){
    if(numbers[i] === lowestValue && digitRemoved === false){
      digitRemoved = true
      continue
    } else {
      console.log(`Number is ${numbers[i]}`)
      tempArray.push(numbers[i])
    }
  }
  console.log(tempArray)
  return tempArray;
}

removeSmallest([1, 2, 3, 4, 5])
removeSmallest([5, 3, 2, 1, 4])
removeSmallest([2, 2, 1, 2, 1])


// Test
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("removeSmallest", function() {
//   it("works for the examples", function() {
//     assert.deepEqual(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
//     assert.deepEqual(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
//     assert.deepEqual(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
//     assert.deepEqual(removeSmallest([]), [], "Wrong result for []");
//   });
  
//   it("returns [] if the list has only one element", function() {
//     for (let i = 0; i < 10; ++i) {
//       let x = ~~(Math.random() * 400);
//       assert.deepEqual(removeSmallest([x]), [], `Wrong result for ${[x]}`);
//     }
//   });