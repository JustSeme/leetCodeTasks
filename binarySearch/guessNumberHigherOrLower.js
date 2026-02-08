const picked = 10
var guess = function(num) {
	if(num === picked) return 0
	else if(num < picked) return 1
	else return -1
}

var guessNumber = function (n) {
  let low = 1,
    high = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
		const guessResult = guess(mid)

    if (guessResult === 0) return mid;
    else if (guessResult > 0) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
};

console.log(guessNumber(15));
