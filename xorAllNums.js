/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/* var xorAllNums = function(nums1, nums2) {
    const nums3 = [];
    nums1.forEach(num => {
        nums2.forEach(num2 => {
            nums3.push(num ^ num2)
        })
    })

    return nums3.reduce((prev, acc) => prev ^ acc, 0)
}; */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    const nums1Length = nums1.length, nums2Length = nums2.length;
    let xor1 = 0;

    if(nums1Length % 2) {
        for(const num of nums1) {
            xor1 ^= num;
        }
    }

    if(nums2Length % 2) {
        for(const num of nums2) {
            xor1 ^= num;
        }
    }

    return xor1
};

xorAllNums([2, 1, 3], [10, 2, 5, 0])