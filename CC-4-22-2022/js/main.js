// Take an array and remove every second element from the array. Always keep the first element
// and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//=======WORK=========//
// P= 
// R= return array as every second element removed from original array
// E= 
    // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// P=
    //filter out the array by creating function 
    //use % to get rid of every second element
    function removeEveryOther(arr){
        return arr.filter(function(elem, index) {
          return index % 2 === 0;
        });
      }

//=============================================================
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//======WORK=======//
