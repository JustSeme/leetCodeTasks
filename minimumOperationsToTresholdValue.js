/* function findSmallestNumber(nums) {
	let smallest = { value: Infinity, index: 0 };
	for(let i = 0; i < nums.length; i++) {
		if(nums[i] < smallest.value) {
			smallest = { value: nums[i], index: i };
		}	
	}

	nums.splice(smallest.index, 1);
	return smallest.value;
}

let numberOfOperations = 0; */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* var minOperations = function (nums, k) {
	if(nums.length < 2 || nums.every(v => v >= k)) {
		const returnedValue = numberOfOperations;
		numberOfOperations = 0;
		return returnedValue;
	}
	const x = findSmallestNumber(nums);
	const y = findSmallestNumber(nums);
 
	nums.push(Math.min(x, y) * 2 + Math.max(x, y));
	numberOfOperations++;
	return minOperations(nums, k);
}; */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo) {
    [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]];
  }

  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    
    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] <= this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

function minOperations(nums, k) {
  const heap = new MinHeap();
  nums.forEach(num => heap.add(num));
  let operations = 0;

  while (heap.peek() < k && heap.heap.length > 1) {
    const x = heap.poll();
    const y = heap.poll();
    heap.add(Math.min(x, y) * 2 + Math.max(x, y));
    operations++;
  }

  return heap.peek() >= k ? operations : -1;
}

console.log(minOperations([2,11,10,1,3], 5));