// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son 
//(or in how many years he will be twice as old).

//
function twiceAsOld(dadYearsOld, sonYearsOld){
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//=====================================================
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Parameters= one string argument
// Return= a string that is reversed from string element
// Example= 
    // 'world'  =>  'dlrow'
    // 'word'   =>  'drow'
// Pseudocode=
    //split the string
    //reverse the string
    //join back together

function solution(str){
    return str.split("").reverse().join("");
}