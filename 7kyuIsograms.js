// 29 Jul 2023

// CodeWars

// JavaScript

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
  // Make string lowercase
  let string = str.toLowerCase()
  // Create a set from string
  let mySet = new Set(string.split(""));
  // Determine set and sting length
  let setLength = mySet.size
  let stringLength = str.length
  // Compare lengths
  if (setLength === stringLength) {
    return true
  } else {
    return false
  }
}

console.log(isIsogram("moose"));
console.log(isIsogram("Dermatoglyphics"));