/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  const n = nums.length;
  const seen = new Set(nums);

  for (let i = 0; i < 1 << n; i++) {
    let binaryString = i.toString(2).padStart(n, '0');
    if (!seen.has(binaryString)) {
      return binaryString;
    }
  }
};


console.log(findDifferentBinaryString(["00","01"]));
