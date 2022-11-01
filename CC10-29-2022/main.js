//create variable for first num
//create variable for last num
//loop through numbers array
//return new array

function pipeFix(numbers){
    let first = numbers[0];
    let last = numbers[numbers.length - 1];
    let arr = [];

    for(let i = first; i <= last; i++){
        arr.push(i);
    }
    return arr;
}