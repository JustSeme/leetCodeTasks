/* function constructTransformedArray(nums) {
	const numsLength = nums.length
	const result = []

	for(let i = 0; i < numsLength; i++) {
		let idx = i + nums[i]

		let idxModule = Math.abs(idx)
		while(idxModule > numsLength - 1) {
			idxModule -= numsLength
		}
		idx = idxModule * Math.sign(idx)

		result.push(nums.at(idx))
	}

	return result
} */

/* function constructTransformedArray(nums) {
  const n = nums.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    result[i] = nums[(((i + nums[i]) % n) + n) % n];
  }

  return result;
} */

function constructTransformedArray(nums) {
	const n = nums.length
	const result = new Array(n)

	for(let i = 0; i < n; i++) {
		const x = nums[i]

		if(x === 0) {
			result[i] = x
		} else {
			const target = ((i + x) % n + n) % n
			result[i] = nums[target]
		}
	}

	return result
}

console.log(constructTransformedArray([-10]));
