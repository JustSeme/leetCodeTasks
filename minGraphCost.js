/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const numRows = grid.length
    const numCols = grid[0].length

    const minChanges = Array.from({ length: numRows }, () => Array(numCols).fill(Infinity))
    minChanges[0][0] = 0

    while(true) {
        const prevState = minChanges.map((arr) => arr.slice())

        for(let row = 0; row < numRows; row++) {
            for(let col = 0; col < numCols; col++) {
                if(row > 0) {
                    //console.log(`${row -1} ${col}`);
                    //console.log(minChanges[row - 1][col], 'second');
                    //console.log((grid[row - 1][col] === 3 ? 0 : 1), 'grid');
                    minChanges[row][col] = Math.min([minChanges[row][col], minChanges[row - 1][col] + (grid[row - 1][col] === 3 ? 0 : 1)])
                }
                if(col > 0) {
                    minChanges[row][col] = Math.min([minChanges[row][col], minChanges[row][col - 1] + (grid[row][col - 1] === 1 ? 0 : 1)])
                }
            }
        }

        for(let row = numRows - 1; row  >= 0; row--) {
            for(let col = numCols - 1; col >= 0; col--) {
                if(row < numRows - 1) {
                    minChanges[row][col] = Math.min([minChanges[row][col], minChanges[row + 1][col] + (grid[row + 1][col] === 4 ? 0 : 1)])
                }
                if(col < numCols - 1) {
                    minChanges[row][col] = Math.min([minChanges[row][col], minChanges[row][col + 1] + (grid[row][col + 1] === 2 ? 0 : 1)])
                }
            }
        }

        console.log('-----');
        if(JSON.stringify(minChanges) === JSON.stringify(prevState)) break; 
    }
    return minChanges[numRows - 1][numCols - 1]
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
/* var minCost = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [
        [0, 1],  // Right
        [0, -1], // Left
        [1, 0],  // Down
        [-1, 0]  // Up
    ];

    const deque = [];
    const costs = Array.from({ length: m }, () => Array(n).fill(Infinity));
    costs[0][0] = 0;
    deque.push([0, 0, 0]); // [x, y, cost]

    while (deque.length > 0) {
        const [x, y, cost] = deque.shift();

        if (x === m - 1 && y === n - 1) {
            return cost;
        }

        for (let i = 0; i < directions.length; i++) {
            const [dx, dy] = directions[i];
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                const newCost = cost + (grid[x][y] === i + 1 ? 0 : 1);

                if (newCost < costs[nx][ny]) {
                    costs[nx][ny] = newCost;

                    if (grid[x][y] === i + 1) {
                        deque.unshift([nx, ny, newCost]);
                    } else {
                        deque.push([nx, ny, newCost]);
                    }
                }
            }
        }
    }

    return costs[m - 1][n - 1];
}; */

const grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]

console.log(minCost(grid));