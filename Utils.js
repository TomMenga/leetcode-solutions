

export function toOrderedBinaryTree(nodesList) {
  var f = function insertBinTree (t = {value: void 0, left: void 0, right: void 0}, n){
    t.value !== void 0 
      ? t.value > n 
        ? t.left = insertBinTree(t.left,n)
        : t.right = insertBinTree(t.right,n)
      : t.value = n;
    return t;
  }
  return nodesList.reduce(f, void 0);
}

/**
 * Fill a binary tree following breadth-first left to right order
 */
export function toBinaryTree(nodesList) {
  const root = {
    value: nodesList[0]
  };
  const nodesQueue = [root];

  for (let i = 1; i < nodesList.length; i++) {
    const nodeToFill = nodesQueue[0];

    // If left is empty
    if (nodeToFill.left?.value === undefined) {
      nodeToFill.left = {
        value: nodesList[i]
      };
      nodesQueue.push(nodeToFill.left);

      continue;
    }

    // If right is empty
    if (nodeToFill.right?.value === undefined) {
      nodeToFill.right = {
        value: nodesList[i]
      };
      nodesQueue.push(nodeToFill.right);
      nodesQueue.shift();

      continue;
    }
  }

  return root;
}

/**
 * Transform a tree in an array.
 * The order of the elements follows the breadth first approach
 * @param {*} root The root of the tree 
 * @returns A breadth first ordered list of node values
 */
export function treeToArray(root) {
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

/**
 * Definition for singly-linked list.
 * function ListNode(value, next) {
 *     this.value = (value===undefined ? 0 : value)
 *     this.next = (next===undefined ? null : next)
 * }
 */
export function toLinkedList(list) {
  let head = {};
  let node = head;

  for(let i in list) {
    node.value = list[i];

    if (i < list.length-1) {
      const newNode = {};
      node.next = newNode;
      node = newNode;
    }
  }
  return head;
}

export function linkedListToArray(linkedList) {
  const result = [];
  let head = linkedList;

  while(head) {
    result.push(head.value)
    head = head.next;
  }

  return result;
}
