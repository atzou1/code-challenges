// Complete the square sum function so that it squares each number passed 
// into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//=====PSEUDOCODE====//
//make function then create variable and assign it to numbers
//return using reduce to square root numbers and sum them
function squareSum(numbers){
    return numbers.reduce((sum,num) => (num*num)+sum);
}

//===================================================================//
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

//=====PSEUDOCODE====//
//find how many hours in milli, minutes in milli, and seconds in milli
//return each and multiply
function past(h, m, s){
    return((h*3600000)+(m*60000)+(s*1000));
  }
