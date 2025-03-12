/**
 * @param {number[]} nums
 * @return {number}
 */
/* var maximumCount = function (nums) {
  let positiveCount = 0;
  let negetiveCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) positiveCount++;
    else if (nums[i] < 0) negetiveCount++;
  }

  return Math.max(positiveCount, negetiveCount);
}; */

function lowerBound(arr) {
	let start = 0;
	let end = arr.length - 1;
	let index = arr.length;

	while (start <= end) {
		let mid = Math.ceil((start + end) / 2);

		if(arr[mid] < 0) start = mid + 1;
		else if(arr[mid] >= 0) {
			end = mid - 1;
			index = mid;
		}
	}
	return index;
}

function upperBound(arr) {
	let start = 0;
	let end = arr.length - 1;
	let index = arr.length;

	while (start <= end) {
		let mid = Math.ceil((start + end) / 2);

		if(arr[mid] <= 0) start = mid + 1;
		else if(arr[mid] > 0) {
			end = mid - 1;
			index = mid;
		}
	}
	return index;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
	return Math.max(lowerBound(nums), nums.length - upperBound(nums));
};

const arr = [-2, -1, -1, -1, -1, 0, 0, 1, 2, 3, 4, 5];
console.log(maximumCount(arr));
