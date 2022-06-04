// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// EX
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// NOTES
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//=======WORK=======//
//P: one string w/ multiple numbers
//R: return highest and lowest number
//E: 
    // highAndLow("1 2 3 4 5");  // return "5 1"
    // highAndLow("1 2 -3 4 5"); // return "5 -3"
    // highAndLow("1 9 3 4 -5"); // return "9 -5"
//P:
    //create let to split string
    //grab largest number
    //grab smallest number

function highAndLow(numbers){
    const numArray = numbers.split(' ');
    return `${Math.max(...numArray)} ${Math.min(...numArray)}`
}