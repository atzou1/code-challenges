<<<<<<< HEAD
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//========== WORK =======//
//create function taking array
//return sum using reduce and mod 2 to make even
//conditional if not odd then even

function oddOrEven(arr){
    return arr.reduce((a,b) => a+b,0) % 2 ? "odd" : "even"

    //===== WORK ======//
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//========== WORK =======//
//create function taking array
//return sum using reduce and mod 2 to make even
//conditional if not odd then even

function oddOrEven(arr){
    return arr.reduce((a,b) => a+b,0) % 2 ? "odd" : "even"
>>>>>>> 2f807f23ec5aafbd16e8d1d67d4b3b08c7c43799
}