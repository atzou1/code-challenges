// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

//==== WORK =======//
//P: 2 parameters
//R: return true if values are below limit value, else false
//E: n/a
//P: 
    //create variable to check if variable is <= limit
    //if every element in array pass test return true
    //else false
    function smallEnough(a, limit){
        let aCheck = (i) => i <= limit;
        if(a.every(aCheck)){
          return true
        }else{
          return false
        }
      }