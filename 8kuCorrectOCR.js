// 3 Sep 2023

// CodeWars 8Ku Correct the mistakes of the character recognition software

// JavaScript

// Task:
// *****
// When documents (especially pretty old ones written with a typewriter), 
// are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// The test cases contain numbers only by mistake.
//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1
// PREP:
// *****
// Parameters:
    // DataType: Strings, integers
    // Range: Any character, Numbers 5,0,1
    // Other datatypes: No
    // NaN or undefined values: No
    // Empty variable: No
    // 0 included: No
// Returns:
    // String
// Examples:
    // correct("L0ND0N"),"LONDON"
    // correct("DUBL1N"),"DUBLIN"
    // correct("51NGAP0RE"),"SINGAPORE"
    // correct("BUDAPE5T"),"BUDAPEST"
    // correct("PAR15"),"PARIS"
// Pseudo code:
  // Save sting into array, separated by letter
  // Check every letter in array
  // If 5,0,1 substitute string
  // Join array into string and return answer

// Code:
//======

function correct(string)
{
  array_data = string.split("")
  for(let i=0; i<array_data.length; i++){
    console.log(array_data[i])
    switch (array_data[i]) {
      case '5':
        array_data[i] = 'S'
        break;
      case '1':
        array_data[i] = 'I'
        break;
      case '0':
        array_data[i] = 'O'
        break;
      default:
        break
    }
  }
  let rString = array_data.join('')
  return rString
}

console.log(correct("L0ND0N"));