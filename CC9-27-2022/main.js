// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!

//======== WORK =========//
function doubleChar(str) {
    return str.split('').map(x => x.repeat(2)).join('')
  }


  
//=========================================================//
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

//======== WORK==========//
//find all vowels (aeiou) and replace them with !

function replace(s){
  return s.replace(/[aeiou]/gi, '!');
}