// Write a function that takes a single string (word) as argument. The function must return an ordered list 
//must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'),[0,3,4,6] );

//===== WORK ========//
//P: single string argument
//R: return an ordered list containing indexes of all capital letters in string
//E:
    //Test.assertSimilar( capitals('CodEWaRs'),[0,3,4,6] );
//P:
    //make empty array for result
    //loop through index
    //create conditional where you grab words with caps and make as index
    //return the result


let capitals = function(word) {
    let result = [];
    for(let i = 0; i < word.length; i++){
        if(word[i].toUpperCase() == word[i]) result.push(i);
    }
    return result;
}