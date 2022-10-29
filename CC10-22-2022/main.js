Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

//====== WORK =========//
//create function w/ 1 param
//return new set with a spread ... to delete dupes
//make sure to set new set in an array

function distinct(a){
    return [...new Set(a)]
}