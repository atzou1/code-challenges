// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

//=========== WORK =============//
//P: 2 parameters
//R: return if arguments are anagrams of each other
//E: 
    // "foefet" is an anagram of "toffee"

    // "Buckethead" is an anagram of "DeathCubeK"
//P:
    //split into characters
    //sort them out
    //join them back together
    //make them equal to each other
let isAnagram = function(test, original){
    return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')
}