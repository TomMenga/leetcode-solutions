import * as Utils from './Utils.js';

/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 */
 class Test {

  method(par1) {
    let halfIndexHead = par1;
    let head = par1;

    while (head?.next) {
      halfIndexHead = halfIndexHead.next;
      head = head.next.next;
    }

    return halfIndexHead;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [1,2,3,4,5], result: [3,4,5]},
  {par1: [1,2,3,4,5,6], result: [4,5,6]},
  {par1: [1], result: [1]},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  let result = testExecutor.method(Utils.toLinkedList(testCase.par1));
  result = Utils.linkedListToArray(result);
  console.log('Result:', result);
  console.assert(Utils.arrayAreEquals(result, testCase.result));
})
