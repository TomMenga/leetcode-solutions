import { toLinkedList, linkedListToArray } from "./Utils";

/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */
 class Test {

  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.value = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   *
   * @param {ListNode} head
   * @return {boolean}
   */
  mergeTwoLists(list1, list2) {

    if(list1 || list2) {
      let major;
      let res;

      if (!list2 || list1?.value < list2.value) {
        major = list1;
        res = this.mergeTwoLists(list1.next, list2)
      } else {
        major = list2;
        res = this.mergeTwoLists(list1, list2.next)
      }
      major.next = res;

      return major; 
    }
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [1,7,10], par2: [1,3,11], result: [1,1,3,7,10,11]},
  {par1: [0], par2: [1,3,11], result: [0, 1,3,11]},
];

testCase.forEach(testCase => {
  console.log('Executing test', JSON.stringify(testCase));
  const result = testExecutor.mergeTwoLists(toLinkedList(testCase.par1), toLinkedList(testCase.par2));
  console.log('Result:', linkedListToArray(result));
  console.assert(linkedListToArray(result).every((el, i) => testCase.result[i] === el));
})
