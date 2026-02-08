/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

var height = function(node) {
	if(node === null) return -1

	return 1 + Math.max(height(node.left), height(node.right))
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
	if(root === null) return true

	const diff = Math.abs(height(root.left) - height(root.right)) <= 1

	return diff && isBalanced(root.left) && isBalanced(root.right)
};


function arrayToBinaryTree(arr) {
	if(!arr.length || !arr[0]) return null

	const nodes = arr.map(v => v == null ? null : new TreeNode(v))

	for(let i = 0; i < arr.length; i++) {
		if(nodes[i] === null) continue

		const leftIndex = 2 * i + 1
		const rightIndex = 2 * i + 2

		if(leftIndex < arr.length) {
			nodes[i].left = nodes[leftIndex]
		}
		if(rightIndex < arr.length) {
			nodes[i].right = nodes[rightIndex]
		}
	}

	return nodes[0]
}

const root = arrayToBinaryTree([3,9,20,null,5,15,7,null,null,null,5,6])

console.log(isBalanced(root));