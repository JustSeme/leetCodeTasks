var sqrt = function(num) {
	if(num < 2) return num

  let low = 1, high = num, answer = 0

  while(low <= high) {
    const mid = Math.floor((low + high) / 2)
		const square = mid * mid

    if(square === num) return mid
    else if (square < num) {
			answer = mid
			low = mid + 1
		}
    else high = mid - 1
  }

	return answer
}

console.log(sqrt(18));
