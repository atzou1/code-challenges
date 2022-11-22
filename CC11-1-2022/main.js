//create function with num as param
//create an empty string
//loop through num
//concat `${i} sheep...` with empty string
//return result

var countSheep = function(num){
	let result = '';
	for(let i = 1; i <= num; i++){
		result += `${i} sheep...`
	}
	return result
}