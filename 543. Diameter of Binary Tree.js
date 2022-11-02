import * as Utils from './Utils.js';

/**
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
 * This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
 */
class Test {
  maxDiameter = 0;

  method(root) {
    this.maxDiameter = 0;
    this.calculateTreeMaxDiameter(root);
    return this.maxDiameter;
  }

  calculateTreeMaxDiameter(root) {
    if (!root) {
      return 0;
    }

    let leftDeepness = this.calculateTreeMaxDiameter(root.left)
    let rightDeepness = this.calculateTreeMaxDiameter(root.right)
    const partiamDiameter = leftDeepness + rightDeepness

    this.maxDiameter = Math.max(this.maxDiameter, partiamDiameter);

    return Math.max(leftDeepness, rightDeepness) + 1;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [1,2,3,4,5], result: 3},
  {par1: [1,2,3,4,5,6,7,8,9], result: 5},
  {par1: [1], result: 0},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(Utils.toBinaryTree(testCase.par1));
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
