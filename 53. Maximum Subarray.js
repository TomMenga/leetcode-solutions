import * as Utils from './Utils.js';

/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 */
 class Test {

  method(numbers) {
    let result = numbers[0];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      
      sum = this.max(sum + numbers[i], numbers[i]);
      result = this.max(result, sum);
    }

    return result;
  }

  max(a, b) {
    return a > b ? a : b;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [-2,1,-3,4,-1,2,1,-5,4], result: 6},
  {par1: [5,4,-1,7,8], result: 23},
  {par1: [-7,-4,-1,-3], result: -1},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(testCase.par1);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
