// 11 Aug 2023

// CodeWars 8Ku HighestProfitWins

// JavaScript

// Task:
// *****
// Ben has a very simple idea to make some profit: 
// he buys something and sells it again. 
// He's going to buy it for the lowest possible price and sell it at the highest.
// Write a function that returns both the minimum and maximum number of the given list/array. 
// All arrays or lists will always have at least one element.
// You don't need to check the length. 
// Also, your function will always get an array or a list.
// You don't have to check for null, undefined or similar.

// Examples:
// *********
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr){
  arr.sort((a, b) => a - b);
  let min = arr[0]
  let maxRange = arr.length - 1
  let max = arr[maxRange]
  let outputArray = []
  outputArray.push(min)
  outputArray.push(max)


  console.log('Array:')
  console.log(arr)
  console.log(`Min Value: ${min}`)
  console.log(`Max Range: ${maxRange}`)
  console.log(`Max Value: ${max}`)
  console.log(outputArray)

  return outputArray;
}

let a = [1,2,3,4,5]
minMax(a)


// Test:
// *****
// const assert = require('chai').assert;
// describe("minMax", () => {
//   const testCases = [
//     [[1, 2, 3, 4, 5], [1, 5]],
//     [[2334454, 5], [5, 2334454]],
//     [[5], [5, 5]]
//   ];
//   for(const [input, expected] of testCases) {
//     it(`should work for ${JSON.stringify(input)}`, () => {
//       assert.deepEqual(minMax(input), expected);
//     });
//   }
// });
