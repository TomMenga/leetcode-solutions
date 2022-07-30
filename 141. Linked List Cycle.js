import * as Utils from './Utils.js';

/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * Return true if there is a cycle in the linked list. Otherwise, return false
 * 
 * Post solution comment: See "Floyd's cycle-finding algorithm" for a O(1) space solution
 */
 class Test {

  method(head) {
    const stack = [];

    let node = head;
    while(node.next) {

      if (stack.some(n => n === node)) {
        return true;
      }

      stack.push(node); 
      node = node.next;
    }

    return false;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [4,6,8,7,2], hasCycle: false, result: false},
  {par1: [3], hasCycle: false, result: false},
  {par1: createLinkedListWithCycle(), hasCycle: true, result: true}
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);

  const param = testCase.hasCycle
    ? testCase.par1
    : Utils.toLinkedList(testCase.par1);

  const result = testExecutor.method(param);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})

// [3] => [5] => [7] => [9] =*> [3]
function createLinkedListWithCycle() {
  const head = {value: 3, next: null};
  head.next = { value: 5, next: { value: 7, next: {value: 9, next: head}}}

  return head;
}