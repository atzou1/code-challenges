// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//====WORK======//
//P: single string return
//R: return each num, square, and join
//E: 9119 returns 811181, because 92 is 81 and 12 is 1.
//P:
    //make num to numbers using unary plus
    //make to string
    //split into substrings
    //map out and square
function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }