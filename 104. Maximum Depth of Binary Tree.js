import * as Utils from './Utils.js';

/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */
 class Test {

  method(root) {
    if (!root) {
      return 0;
    }

    let leftDeepness = this.method(root.left);
    let rightDeepness = this.method(root.right);

    return Math.max(leftDeepness, rightDeepness) + 1;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [1,2,3,4,5], result: 3},
  {par1: [1,2,3,4,5,6,7,8,9], result: 4},
  {par1: [1], result: 1},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(Utils.toBinaryTree(testCase.par1));
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
