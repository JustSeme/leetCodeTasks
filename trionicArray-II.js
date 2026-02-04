/* function maxSumTrionic(nums) {
	const n = nums.length
	let sum = 0
	
	let l = 0
	while(l < n - 3 && nums[l] < nums[l + 1]) {
		sum += nums[l]
		l++
	}

	let p = l
	while(p < n - 2 && nums[p] < nums[p + 1]) {
		sum += nums[p]
		p++
	}
	// if(l === p || p === n - 2) return false

	let q = p
	while(q < n - 1 && nums[q] > nums[q + 1]) {
		sum += nums[q]
		q++
	}
	// if(q === p || q === n - 1) return false

	let r = q
	while(r < n - 1 && nums[r] < nums[r + 1]) {
		sum += nums[r]
		r++
	}
	return sum
} */


function maxSumTrionic(nums) {
	let up1 = -Infinity
	let down = -Infinity
	let up2 = -Infinity
	let answer = -Infinity

	for(let i = 1; i < nums.length; i++) {
		const a = nums[i - 1], b = nums[i]

		if(a < b) {
			up1 = Math.max(up1, a) + b
			up2 = Math.max(up2, down) + b
			answer = Math.max(answer, up2)
			down = -Infinity
		}
		else if(a > b) {
			down = Math.max(down, up1) + b
			up1 = -Infinity
			up2 = -Infinity
		}
		else if(a === b) up1 = down = up2 = -Infinity
	}

	return answer
}

console.log(maxSumTrionic([1,4,2,7]));
