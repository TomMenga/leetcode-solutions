import * as Utils from './Utils.js';

/**
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 */
 class Test {

  method(list) {
    let elements = {}
    
    for(let n of list) {
      if (elements[n]) {
        return true;
      }
      elements[n] = true;
    }
    return false;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [1,2,3,1], result: true},
  {par1: [1], result: false},
  {par1: [1,2,3,4,5], result: false},
  {par1: [1,1,1,1,1], result: true},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(testCase.par1);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
