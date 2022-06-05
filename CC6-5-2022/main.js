// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

//=========WORK=========//
// P: however many numbers in sq
// R: return next perfect square after one passed as parameter. If not, return -1
// E: 
    // 121 --> 144
    // 625 --> 676
    // 114 --> -1 since 114 is not a perfect square
// P:
    //create variable that solve sqrt
    //create conditional
        //if the sq is a perfect square, return the next square
        //else return -1 if not perfect square

function findNextSquare(sq){
    let sqrtRoot = Math.sqrt(sq);
    return sqrtRoot % 1 === 0 ? Math.pow(++sqrtRoot, 2) : -1;
}
