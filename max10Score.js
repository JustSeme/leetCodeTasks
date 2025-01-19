/**
 * @param {string} s
 * @return {number}
 */
/* var maxScore = function(s) {
    const prefixOnes = []
    prefixOnes[0] = (s[0] === '1' ? 1 : 0)
    let countZeros = (s[0] === '0' ? 1 : 0)
    for(let i = 1; i < s.length; i++) {
        countZeros +=(s[i] === '0' ? 1 : 0)
        prefixOnes[i] = prefixOnes[i - 1] + (s[i] === '1' ? 1 : 0)
        console.log(countZeros);
        console.log(prefixOnes);
    }
}; */

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let totalOnes = 0

    for(const char of s) {
        if(char === '1') totalOnes++
    }

    let maxScoreInt = 0
    let leftZeros = 0

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '0' && !!s[i + 1])
            leftZeros++
        else
            totalOnes--

        const currentScore = leftZeros + totalOnes
        maxScoreInt = Math.max(maxScoreInt, currentScore)
    }

    return maxScoreInt
}

console.log(maxScore("011101"))