// 4 Aug 2023

// CodeWars 7Ku Vowel Count

// JavaScript

// Task:
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  let counter = 0
  let vowels = ['a','e','i','o','u']
  let myString = str.toLowerCase()
  
  for (let char of myString) {
    if((vowels.includes(char))){
      console.log(`${char} is a vowel.`)
      counter += 1
    } else{
      console.log(`${char} is not a vowel.`)
    }
  }
  return counter;
}

// Test
getCount("abracadabra") // Output --> 5