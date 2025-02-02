/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let counter = 0;
    for(let i = 0; i < nums.length; i++) {
        const isNextSorted = nums[i] <= nums[i + 1]
        if(!isNextSorted) {
            const isNextShift = nums[i + 1] === undefined && nums[i] <= nums[0];
            if(!isNextShift)
                if(++counter > 1) return false
        }
    }
    return true
};

console.log(check([3,4,5,1,2]))