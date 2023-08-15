// 15 Aug 2023

// CodeWars 7Ku List Filtering

// JavaScript

// Task:
// *****
// Create a function that takes a list of non-negative integers and strings 
// returns a new list with the strings filtered out.

// Examples:
// *********
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(l) {
  let newList = []
  for(let i=0; i <l.length; i++){
    if(l[i] >= 0 && typeof l[i] !== 'string'){
      newList.push(l[i])
    }
  }
  console.log(newList)
  return newList
}

filter_list([ 1, 2, '1', '123', 123 ])

// Test:
// *****
// const assert = require('chai').assert;
// describe("Tests", () => {
//   it("test", () => {
//     assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
//     assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
//     assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
//   });
// });