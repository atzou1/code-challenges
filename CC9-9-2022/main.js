//========= PROBLEM 1 ==========//
//Create a function that takes an integer as an argument and returns "Even" 
//for even numbers or "Odd" for odd numbers.

//=====WORK======//
//P: 1 param
//R: return even for even num and odd for odd num
//E: N/A
//P: 
    //return numbers divisible by 2 with no remainder as even
    //rest is odd

    function even_or_odd(number) {
        return(number%2 == 0 ? "Even" : "Odd");
      }

//======== PROBLEM 2 ==========//

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//==== WORK ========//
//P: 1 param
//R: return struing with removed vowels
//E: 
    //"hello"     -->  "hll"
    // "goodbye"   -->  "gdby"
    // "HELLO"     -->  "HELLO"
//P: 
    //replace vowels in string with '' (remove vowels)

    function shortcut(string){
        return string.replace(/[aeiou]/g,'') //aeiou are words being plucked from string
    }