//====== WORK ========//
//P: single array
//R: return empty array if empty array or null
    //return sorted array if there are numbers in array
//E:
    //solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
    //solution(null); // should return []
//P:
    //condition
      //if numbers not null, sort them
      //else , return empty array


function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
  }