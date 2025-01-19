class MinHeap {
    constructor() {
        this.heap = []
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while(
            index > 0 &&
            this.heap[index][0] < this.heap[this.getParentIndex(index)][0]
        ) {
            const parentIndex = this.getParentIndex(index);
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        
        while(true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let smallest = index;

            if(
                leftChildIndex < length &&
                this.heap[leftChildIndex][0] < this.heap[smallest][0]
            ) {
                smallest = leftChildIndex;
            }

            if(
                rightChildIndex < length &&
                this.heap[rightChildIndex][0] < this.heap[smallest][0]
            ) {
                smallest = rightChildIndex;
            }

            if(smallest === index) break;

            this.swap(index, smallest);
            index = smallest;
        }
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if(this.heap.length === 0) throw new Error('Heap is already empty');
        if(this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    peek() {
        if(this.heap.length === 0) throw new Error('Heap is already empty');
        return this.heap[0]
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    const rows = heightMap.length;
    const cols = heightMap[0].length;
    if (rows < 3 || cols < 3) return 0;

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const heap = new MinHeap();

    // Добавляем все граничные ячейки в кучу
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
                heap.push([heightMap[r][c], r, c]);
                visited[r][c] = true;
            }
        }
    }

    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0],
    ];

    let water = 0;

    // Обрабатываем ячейки
    while (!heap.isEmpty()) {
        const [height, row, col] = heap.pop();

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (
                newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                !visited[newRow][newCol]
            ) {
                visited[newRow][newCol] = true;

                // Если высота соседней ячейки меньше текущей, она может удерживать воду
                water += Math.max(0, height - heightMap[newRow][newCol]);

                // Добавляем соседнюю ячейку в кучу
                heap.push([
                    Math.max(height, heightMap[newRow][newCol]),
                    newRow,
                    newCol,
                ]);
            }
        }
    }

    return water;
};

console.log(trapRainWater([[5,5,5,1],[5,1,1,5],[5,1,5,5],[5,2,5,8]]));