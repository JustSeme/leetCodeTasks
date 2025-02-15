/**
 * @param {number} n
 * @return {number}
 */
/* var punishmentNumber = function(n) {
	const punishmentNumbers = [];
  for (let i = 1; i <= i; i++) {
		const partition = i * i
		
		if(partition === i) {
			return partition
		}

		const digits = partition.toLocaleString().split('');
		console.log(digits);
	}
}; */

function canSplit(partitionStr, target, index = 0, sum = 0) {
	if(index === partitionStr.length) {
		return sum === target;
	}

	let currentNumber = 0;

	for(let i = index; i < partitionStr.length; i++) {
		currentNumber = currentNumber * 10 + Number(partitionStr[i]); 
		if(canSplit(partitionStr, target, i + 1, sum + currentNumber)) {
			return true
		}
	}

	return false
}

/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
	let punishmentSum = 0;
	
	for(let i = 1; i <= n; i++) {
		let partitionString = (i * i).toString();
		
		if(canSplit(partitionString, i)) {
			punishmentSum += i * i;
		}
	}

	return punishmentSum;
}

console.log(punishmentNumber(10));