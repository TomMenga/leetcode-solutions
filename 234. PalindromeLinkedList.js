import { toLinkedList } from "./Utils";

class Test {

  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.value = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  /**
   * @param {ListNode} head
   * @return {boolean}
   */
  isPalindrome(head) {

    let result = true;
    const stack = [];
    let node = head;
    
    while (node) {
      stack.push(node.value);
      node = node.next;
    }

    let poppedValue = stack.pop();
    node = head;

    while (poppedValue !== undefined) {
      result = result && poppedValue === node.value;

      node = node.next;
      poppedValue = stack.pop();
    }
    

    return result;
  }

}

var testCase = toLinkedList([1,0,0]);
// console.log(JSON.stringify(testCase));
var execution = new Test();
const result = execution.isPalindrome(testCase);
console.log(result);
