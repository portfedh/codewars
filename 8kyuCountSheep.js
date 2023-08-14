// 14 Aug 2023

// CodeWars 8Ku If you can't sleep, just count sheep!!

// JavaScript

// Task:
// *****
// Given a non-negative integer, 3 for example
// return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let myArray = []
  if(num == 0){
    return ''
  }else{
    for(let i=1; i <= num; i++){
      myString = `${i} sheep...`
      myArray.push(myString)
    }
  }
  console.log(myArray.join(''))
  return myArray.join('')
}

countSheep(2)

// Test:
// *****
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Fixed tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(countSheep(0), "");
//     assert.strictEqual(countSheep(1), "1 sheep...");
//     assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
//     assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
//   });
// });