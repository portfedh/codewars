// 2 Oct 2023

// CodeWars Friend or Foe??

// JavaScript

// Task:
// *****
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
// Otherwise, you can be sure he's not...

// Parameters
// **********
// DataType: Array
// Range: String value inside
// Other datatypes: No
// NaN or undefined values: No
// Empty variable: No
// 0 included: NA
// Ordered items: NA

// Returns:
// ********
// Array with strings

// Examples:
// friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]
// friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]
// friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]
// friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]

// Pseudo code:
// ************
// Create a friend empty array.
// For every element in array:
// check if arrayElement.length <4
// if true, append friend array.
// return friend array.

// Code:
//======
function friend(friends) {
  let friendArrary = [];
  for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    if (friends[i].length === 4) {
      friendArrary.push(friends[i]);
    }
  }
  return friendArrary;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
