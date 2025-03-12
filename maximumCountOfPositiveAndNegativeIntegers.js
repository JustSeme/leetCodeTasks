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

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  const halfLength = Math.ceil(nums.length / 2);
  const rightSide = nums.slice(halfLength);

  const leftSide = nums.slice(0, halfLength);

  console.log('left ', leftSide);
  console.log('right ', rightSide);
};

const arr = [-2, -1, -1, 1, 2, 3, 4];
maximumCount(arr);
