import * as Utils from './Utils.js';

/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
 * The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).
 */
 class Test {

  findLowestCommonAncestor(tree, p, q) {
    const major = p > q ? p : q;
    const minor = p < q ? p : q;

    if (major < tree.value) {
      return this.findLowestCommonAncestor(tree.left, p, q);
    } else if (minor > tree.value) {
      return this.findLowestCommonAncestor(tree.right, p, q);
    } else {  // minor <= tree.value <= major
      return tree.value
    }
  }
}

const testExecutor = new Test();

const testCase = [
  {tree: [6,2,8,0,4,7,9,null,null,3,5], p: 2, q: 8, result: 6},
  {tree: [6,2,8,0,4,7,9,null,null,3,5], p: 2, q: 0, result: 2},
  {tree: [6,2,8,0,4,7,9,null,null,3,5], p: 6, q: 9, result: 6},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.findLowestCommonAncestor(Utils.toOrderedBinaryTree(testCase.tree), testCase.p, testCase.q);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
