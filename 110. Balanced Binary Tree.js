import * as Utils from './Utils.js';

/**
 * Given a binary tree, determine if it is height-balanced.
 * A balanced is a binary tree in which the left and right subtrees of every node differ in height by no more than 1
 */
 class Test {

  method(tree) {
    const res = this.isHeightBalanced(tree);
    return res.isBalanced;
  }

  /**
   * Recursive solution to the problem
   * A tree is balanced if 
   * - The left branch is balanced
   * - The right branch is balanced
   * - The height difference between left and right is <= 1
   */
  isHeightBalanced(tree) {

    const leftBranch = tree.left?.value
      ? this.isHeightBalanced(tree.left)
      : {
          height: 0, 
          isBalanced: true,
        };

    const rightBranch = tree.right?.value
      ? this.isHeightBalanced(tree.right)
      : {
          height: 0, 
          isBalanced: true,
        };

    const heightDiff = Math.abs(leftBranch.height - rightBranch.height);
    const isBalanced = leftBranch.isBalanced && rightBranch.isBalanced && heightDiff <= 1;

    return {
      height: Math.max(leftBranch.height, leftBranch.height) + 1,
      isBalanced: isBalanced
    }
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [3,9,20,null,null,15,7], result: true},
  {par1: [1,2,2,3,3,null,null,4,4], result: false},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(Utils.toBinaryTree(testCase.par1));
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
