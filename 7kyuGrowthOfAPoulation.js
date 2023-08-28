// 27 Aug 2023

// CodeWars 7Ku Growth of a Population

// JavaScript

// Task:
// *****
// In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
// It will need 3 entire years.

// PREP:
// *****
// Parameters:
    // p0: Initial population, Integer.
    // percent: percent growth, Integer.
    // aug: people comming or going, Integer.
    // p: target polulation, Integer
    // DataType: integers
    // Negative numbers: yes (aug)
    // Numbers in a range: All positive values
    // Other datatypes: No
    // NaN or undefined values: No
    // Empty arrays: No
// Returns:
    // n
    // dataType: integer
    // Number of years needed to get greater or equal population. 
// Examples:
    // nb_year(1500, 5, 100, 5000) -> 15
    // nb_year(1500000, 2.5, 10000, 2000000) -> 10

// Pseudo code:
  // Assign parameters to variables
  // Create loop counter variable and assign it value to one
  // Create a ending population variable
  // Run for loop:
    // Transform percent integer to decimal
    // Multiply growth factor, add migration and save result in ending population variable
    // Check if result is equal or larger to target poulation
    // if not, update loop an check again.

// Code:
//=====

function nbYear(p0, percent, aug, p) {
    let startingPopulation = p0;
    let endingPopulation = p0;
    let percentGrowth = percent/100;
    let migration = aug;
    let targetPopulation = p;
    let numberOfYears = 0;
    console.log(`Starting population: ${startingPopulation}`)
    console.log(`Percent Growth: ${percentGrowth}`)
    console.log(`Migration: ${migration}`)
    console.log(`Target population: ${targetPopulation}`)
    while(endingPopulation < targetPopulation){ 
        startingPopulation = endingPopulation;
        endingPopulation = parseInt(startingPopulation * (1 + percentGrowth) + migration);
        numberOfYears += 1;
        console.log(`Ending population: ${endingPopulation}`)
        console.log(`Number of years: ${numberOfYears}`)
    }
    return numberOfYears
}


// Test:
// *****
// const Test = require('@codewars/test-compat');

// describe("nbYear",function() {
// it("Basic tests",function() {    
//     Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
//     Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
//     Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
// })})

// Better solution:
function nbYear(p0, percent, aug, p) {
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }