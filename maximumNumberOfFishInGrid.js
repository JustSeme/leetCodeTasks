/**
 * @param {number[][]} grid
 * @return {number}
 */
/* var findMaxFish = function(grid) {
    const rows = grid.length
    const cols = grid[0].length

    const stack = []
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] > 0) stack.push([i, j])
        }
    }

    const direcions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]

    let tail = stack.length
    while(tail > 0) {
        const [x, y] = stack.at(tail)
        tail++

        for(const [dx, dy] of direcions) {
            const nx = x + dx
            const ny = y + dy

            if(nx >= 0 && nx <= rows && ny >= 0 && ny <= cols && grid[nx][ny] > 0) {
                
            }
        }
    }
}; */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let maxFish = 0

    function dfs(r, c) {
        if(r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0)
            return 0

        let fish = grid[r][c]
        grid[r][c] = 0

        fish += dfs(r + 1, c)
        fish += dfs(r - 1, c)
        fish += dfs(r, c + 1)
        fish += dfs(r, c - 1)

        return fish
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] > 0) {
                maxFish = Math.max(maxFish, dfs(i, j))
            }
        }
    }

    return maxFish
};

console.log(findMaxFish([[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]))