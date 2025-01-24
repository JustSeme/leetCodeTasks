/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
/* var highestPeak = function(isWater) {
    const heights = []
    for(let i = 0; i < isWater.length; i++) {
        heights.push([])
        for(let j = 0; j < isWater[i].length; j++) {
            let cellHeight = isWater[i][j] === 0 ? 1 : 0
            if(cellHeight === 1) {
                const previousCell = heights[i][j - 1]
                const previousRow = heights[i - 1]
                const nextCell = isWater[i][j + 1]
                const nextRow = isWater[i + 1]
                cellHeight += Math.min(previousCell || 1, previousRow ? previousRow[j] : 1, nextCell === 0 ? 1 : 0, nextRow ? nextRow[j] === 0 ? 1 : 0 : 1)
            }
            heights[i].push(cellHeight)
        }
    }
    return heights
}; */

/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    const rows = isWater.length
    const cols = isWater[0].length

    const heights = Array.from({ length: rows }, () => Array(cols).fill(-1))

    const queue = []
    for(let i = 0; i < isWater.length; i++) {
        for(let j = 0; j < isWater[i].length; j++) {
            if(isWater[i][j] === 1) {
                heights[i][j] = 0
                queue.push([i, j])
            }
        }
    }

    const direcions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]

    let head = 0

    while(head < queue.length) {
        const [x, y] = queue[head]
        head++

        for(const [dx, dy] of direcions) {
            const nx = x + dx
            const ny = y + dy

            if(nx >= 0 && nx < rows && ny >= 0 && ny < cols && heights[nx][ny] === -1) {
                heights[nx][ny] = heights[x][y] + 1
                queue.push([nx, ny])
            }
        }
    }

    return heights
}

console.time('check')
const result = highestPeak([[0,0,1],[1,0,0],[0,0,0]])

for(let i = 0; i < result.length; i++) {
    console.log(result[i]);
}
console.timeEnd('check')
