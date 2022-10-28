import * as Utils from './Utils.js';

/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
 */
 class Test {

  method(list) {
    let occurrencies = {};

    for(let num of list) {

      if (!occurrencies[num]) occurrencies[num] = 0;

      occurrencies[num]++;

      if (occurrencies[num] > list.length / 2) {
        return num
      }
    }
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [2,2,1,1,1,2,2], result: 2},
  {par1: [3,2,3], result: 3},
  {par1: [0], result: 0},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(testCase.par1);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
