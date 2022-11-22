//===========================CHALLENGE 1================//
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return 

//===========WORK=======//
//make conditional if > 0, return negative else return num
let makeNegative = num => num > 0 ? -num : num;

//=============================CHALLENGE 2=======================//
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//=======WORK=========//
//split,reverse,join to reverse words and letters
//split, reverse, join again to put word position back to original position, but keep words reverse

function reversedWords(str){
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
}
