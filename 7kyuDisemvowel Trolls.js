// 2 Aug 2023

// CodeWars

// JavaScript

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
  // Create array from string
  const arr = Array.from(str);

  // Filter array
  let arr2 = arr.filter(
    element => 
    element.toLowerCase() !== 'a' &&
    element.toLowerCase() !== 'e' &&
    element.toLowerCase() !== 'i' &&
    element.toLowerCase() !== 'o' &&
    element.toLowerCase() !== 'u'
    )
  
  // Create string from array
  let myString = arr2.join("")
  return myString
}

// Test
disemvowel("This website is for losers LOL!")