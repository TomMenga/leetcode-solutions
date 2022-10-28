import * as Utils from './Utils.js';

/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */
 class Test {

  reverseList(head) {
    let prev, next;

    while (head) {
      next = head.next;
      head.next = prev;

      prev = head;
      head = next;
    }
    return prev;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [1,2,3,4,5], result: [5,4,3,2,1]},
  {par1: [1,2], result: [2,1]},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  let result = testExecutor.reverseList(Utils.toLinkedList(testCase.par1));
  result = Utils.linkedListToArray(result);
  console.log('Result:', result);
  console.assert(Utils.arrayAreEquals(result, testCase.result));
})
