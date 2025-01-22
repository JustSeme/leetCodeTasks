function prepareMatrixMap(matrix) {
    const valueMap = new Map()
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            valueMap.set(matrix[i][j], [i, j])
        }
    }
    return valueMap
}


/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const rows = mat.length
    const cols = mat[0].length
    const rowCounts = new Array(rows).fill(0)
    const colCounts = new Array(cols).fill(0)
    const matrixMap = prepareMatrixMap(mat)

    for(let i = 0; i < arr.length; i++) {
        const [row, col] = matrixMap.get(arr[i])
        rowCounts[row]++
        colCounts[col]++
        
        if(rowCounts[row] === cols || colCounts[col] === rows) return i
    }
}

const arr = [1,4,5,2,6,3]
const mat = [[4,3,5],[1,2,6]]

console.time('check')
console.log(firstCompleteIndex(arr, mat))
console.timeEnd('check')