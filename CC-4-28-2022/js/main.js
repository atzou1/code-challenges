// Complete the method that takes a boolean value and 
//return a "Yes" string for true, or a "No" string for false.

//===Work======//
 //create conditional to prove if bool is true or false
 function boolToWord( bool ){
     if(bool === true){
         return "Yes"
     }else{
         return "No"
     }
 }

 //OR

 function boolToWord( bool ){
     return bool ? "Yes" : "No"
 }


// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

//===Work====//
 //create for loop to loop through num
 //sort numbers from lowest to highest
 //add together
 var sumnation = function(num){
     let result = 0;
     for(var i = 1; i <= num; i++){
         result += i;
     }
     return result;
 }

 //OR

 const sumnation = n => n * (n+1)/2; //this formula gives the same answers as if each number were added