import * as Utils from './Utils.js';

/**
 * Implement a first in first out (FIFO) queue using only two stacks. 
 * The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 */
 class MyQueue {

  inStack = [];
  outStack = [];

  push(item) {
    this.inStack.push(item);
  }

  pop() {
    if (this.outStack.length === 0) {
      this.fillOutStack();
    }

    return this.outStack.pop();
  }

  peek() {
    if (this.outStack.length === 0) {
      this.fillOutStack();
    }

    return this.outStack[this.outStack.length-1];
  }

  empty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }

  toString() {
    return [...this.outStack].reverse().concat(this.inStack).toString();
  }

  fillOutStack() {
    while(this.inStack.length !== 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
}

// Test cases

const testQueue = new MyQueue();

testQueue.push(2);
testQueue.push(9);
testQueue.push(1);
testQueue.push(5);

console.log(testQueue.toString());

console.assert(testQueue.peek() === 2);
console.assert(testQueue.pop() === 2);

console.log(testQueue.toString());

console.assert(testQueue.peek() === 9);

testQueue.push(6);
console.assert(!testQueue.empty());

console.log(testQueue.toString());

testQueue.pop();
testQueue.pop();
testQueue.pop();
testQueue.pop();

console.assert(testQueue.empty());

