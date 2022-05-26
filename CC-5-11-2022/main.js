// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

//======WORK========

//return array by concat string 'found the needle at position' 
// concat with indexOf
function findNeedle(haystack){
    return 'found the needle at position ' + haystack.indexOf('needle');
};
