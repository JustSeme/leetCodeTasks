function constructTransformedArray(nums) {
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
}

console.log(constructTransformedArray([-10]));
