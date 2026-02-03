/* function isTrionic(nums) {
  let curr = nums[0];
  let pIndex = 0;
  let qIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (curr > nums[i + 1]) {
			pIndex = i;
			break;
		}
    else curr = nums[i + 1];
  }

  for (let i = pIndex; i < nums.length; i++) {
    if (curr < nums[i + 1]) {
			qIndex = i;
			break;
		}
		else curr = nums[i + 1]
	}

	return 0 < pIndex && pIndex < qIndex && qIndex < nums.length - 1
} */


function isTrionic(nums) {
	const n = nums.length
	let p = 0

	while(p < n - 2 && nums[p] < nums[p + 1]) p++
	if(p === 0) return false

	let q = p
	while(q < n - 1 && nums[q] > nums[q + 1]) q++
	if(q === p || q === n - 1) return false

	while(q < n - 1 && nums[q] < nums[q + 1]) q++
	return q === n - 1
}

console.log(isTrionic([5,9,1,7]));
