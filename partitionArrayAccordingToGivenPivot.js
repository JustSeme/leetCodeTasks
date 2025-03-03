/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
/* var pivotArray = function(nums, pivot) { // 18 ms, 88.12 MB
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
}; */

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
/* var pivotArray = function (nums, pivot) { // 31 ms, 87.89 MB
  const less = [];
  const equal = [];
  const greater = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      less.push(nums[i]);
    } else if (nums[i] === pivot) {
			equal.push(nums[i]);
		} else if (nums[i] > pivot) {
      greater.push(nums[i]);
    }
  }
  return [...less, ...equal, ...greater];
}; */

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
