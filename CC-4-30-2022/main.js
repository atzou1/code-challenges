// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

//========PREP=========
// PARAMETERS: looks like 2 parameters in one that needs to be split
// RETURN: Return an array that take the two initials from the first and last name and combines them using a '.'
// EXAMPLE:
        // It should look like this:
        // Sam Harris => S.H
        // patrick feeney => P.F
// PSEUDOCODE:
        //return name by splitting it with a space
        //call split elements and set it to the i[0] to return the first letter from separated elements
        //combine the elements with a '.'
        //make sure to capitalize the initials

function abbrevName(name){
    return name.split(' ').map(i => i[0]).join('.').toUpperCase()
}
