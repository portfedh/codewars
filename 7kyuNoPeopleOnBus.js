// 20 Aug 2023

// CodeWars 7Ku Number of People on the bus

// JavaScript

// Task:
// *****
// There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. 
// Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). 
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// PREP:
// *****
// Parameters:
    // Array
    // Integer pairs
    // People in the bus => 0 
// Returns:
    // Print to console (debugging)
    // Return statements
    // dataType: Number
// Examples:
    // See tests
// Pseudo code:
    // 


var number = function(busStops){
  let peopleOnBus = []
  for(let i=0; i<busStops.length; i++){
    peopleOnBus += busStops[i][0]
    peopleOnBus -= busStops[i][1]
  }
  console.log(peopleOnBus)
  return peopleOnBus
}

// Examples:
number([[10,0],[3,5],[5,8]]);
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]);
number([[0,0]]);

// Test:
// *****
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(number([[10,0],[3,5],[5,8]]),5);
//     assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
//     assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
//     assert.strictEqual(number([[0,0]]),0);
//   });
// });
