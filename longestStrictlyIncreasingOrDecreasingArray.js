/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
	let incrCounter = 1;
	let decrCounter = 1;
	let maxCounter = 1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			incrCounter++;
		} else {
			incrCounter = 1;
		}
		if(nums[i] < nums[i - 1]) {
			decrCounter++;
		} else {
			decrCounter = 1;
		}
		if (incrCounter > decrCounter) {
			maxCounter = Math.max(maxCounter, incrCounter);
		} else {
			maxCounter = Math.max(maxCounter, decrCounter);
		}
	}
	return maxCounter;
};

console.log(longestMonotonicSubarray([3,2,1]))