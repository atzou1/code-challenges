// Given an array of integers as strings and numbers, return the sum of the array 
// values as if all were numbers.

// Return your answer as a number.
//=============================================

//create new array using map
//transform string to array
//convert (a,b) to sum of array using reduce
let sumMix = x => x.map(a => +a).reduce((a,b)=>a+b)