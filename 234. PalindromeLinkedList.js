class Test {

  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
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
      stack.push(node.val);
      node = node.next;
    }

    let poppedValue = stack.pop();
    node = head;

    while (poppedValue !== undefined) {
      result = result && poppedValue === node.val;

      node = node.next;
      poppedValue = stack.pop();
    }
    

    return result;
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

var testCase = toLinkedList([1,0,0]);
// console.log(JSON.stringify(testCase));
var execution = new Test();
const result = execution.isPalindrome(testCase);
console.log(result);
