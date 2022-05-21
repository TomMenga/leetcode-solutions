/**
 * Given the root of a binary tree, invert the tree, and return its root.
 */

 class Test {

  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.value = (value===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * } 
   */
  invertTree(root) {
    
    if (root.left || root.right) {
      // go deep 

      const newRight = this.invertTree(root.left);
      const newLeft = this.invertTree(root.right)

      //swap
      root.left = newLeft;
      root.right = newRight;
    }

    return root;
  }
}



var toOrderedTree = function(list) {
  var f = function insertBinTree (t = {value: void 0, left: void 0, right: void 0}, n){
    t.value !== void 0 
      ? t.value > n 
        ? t.left = insertBinTree(t.left,n)
        : t.right = insertBinTree(t.right,n)
      : t.value = n;
    return t;
  }
  
  return list.reduce(f, void 0);
}

var toArray = function (root) {
  const res = [];

  const queue = [root];

  while(queue.length !== 0) {
    const node = queue.pop();
    if (node) {
      res.push(node.value);
      queue.unshift(...[node.right, node.left])
    }
  }

  return res;
}

const testExecutor = new Test();

const testCase = [
  {par1: [4,2,7,1,3,6,9], result: [4,7,2,9,6,3,1]},
  {par1: [2,1,3], result: [2,3,1]},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.invertTree(toOrderedTree(testCase.par1));
  console.log('Result:', toArray(result));
  console.assert(toArray(result).every((el, i) => testCase.result[i] === el));
})
