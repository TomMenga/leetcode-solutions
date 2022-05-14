/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

 class Test {

  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
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

      if (!list2 || list1?.val < list2.val) {
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


var toLinkedList = function(list) {
  let head = {};
  let node = head;

  for(i in list) {
    node.val = list[i];

    if (i < list.length-1) {
      const newNode = {};
      node.next = newNode;
      node = newNode;
    }
  }
  return head;
}

var toArray = function(linkedList) {
  const result = [];
  let head = linkedList;

  while(head) {
    result.push(head.val)
    head = head.next;
  }

  return result;
}

const testExecutor = new Test();

const testCase = [
  {par1: [1,7,10], par2: [1,3,11], result: [1,1,3,7,10,11]},
  {par1: [0], par2: [1,3,11], result: [0, 1,3,11]},
];

testCase.forEach(testCase => {
  console.log('Executing test', JSON.stringify(testCase));
  const result = testExecutor.mergeTwoLists(toLinkedList(testCase.par1), toLinkedList(testCase.par2));
  console.log('Result:', toArray(result));
  console.assert(toArray(result).every((el, i) => testCase.result[i] === el));
})
