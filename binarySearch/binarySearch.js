/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target, left, right) {
  left = left ? left : 0;
  right = right ? right : nums.length;
  let mid = Math.floor(right - left / 2);

  if (!nums.length) return -1;
  if (nums[mid] === target) {
    return mid;
  }
  if (target < nums[mid]) return search(nums, target, left, mid);
  if (target > nums[mid]) return search(nums, target, mid, right);
};

console.log('ssss', search([-1, 0, 3, 5, 9, 12], 9)); // Output: 4
//console.log(search([-1, 0, 3, 5, 9, 12], 2)); // Output: -1
