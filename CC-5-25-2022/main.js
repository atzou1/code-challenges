// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

//=====WORK=========//
//P: function
//R: return the array "number", into words
//E:
    // Input :: 1
    // Output :: "One".
//P:
    //make function and assign to array "number"
    //create one array equal words (from numbers)
    //make number as index and let word array choose by number
switchItUp = number => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number];