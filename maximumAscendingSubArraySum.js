/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
	let sum = nums[0];
	let maximumSum = sum;
	for(let i = 0; i < nums.length; i++) {
		if(nums[i] > nums[i - 1]) sum += nums[i];
		else sum = nums[i];
		maximumSum = Math.max(maximumSum, sum);
	}
	return maximumSum;
};

console.log(maxAscendingSum([12,17,15,13,10,11,12]));
