function flattenAndSort(array){
    //use flat(1) to flatten array 
    //use sort in ascend. order to make numerical ascend
    return array.flat(1).sort((a,b) => a-b);
}
flattenAndSort([[1,4],[2],[3,5]]);