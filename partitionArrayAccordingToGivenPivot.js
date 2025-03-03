/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const rearranged = new Array(nums.length);
		let lastIndex = 0;
		for(let i = 0; i < nums.length ; i++) {
			if(nums[i] < pivot) {
				rearranged[lastIndex++] = nums[i];
			}
		}
		for(let i = 0; i < nums.length ; i++) {
			if(nums[i] === pivot) {
				rearranged[lastIndex++] = nums[i];
			}
		}
		for(let i = 0; i < nums.length ; i++) {
			if(nums[i] > pivot) {
				rearranged[lastIndex++] = nums[i];
			}
		}
		return rearranged
};

console.log(pivotArray([9,12,5,10,14,3,10], 10));