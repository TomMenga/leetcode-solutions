import * as Utils from './Utils.js';

/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, 
 * write a function to search target in nums. If target exists, then return its index. 
 * Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 */
 class Test {

  method(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
      let mid = start + Math.floor((end - start) / 2);
      let midValue = nums[mid];

      // Found it!
      if (midValue === target) {
        return mid;
      }

      // Take right
      if (target > midValue) {
        start = mid + 1;
      } 

      // Take left
      if (target < midValue) {
        end = mid - 1;
      }
    }

    return -1;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [1, 5, 7, 15, 22], target: 22, result: 4},
  {par1: [1, 8, 9, 99], target: 1, result: 0},
  {par1: [1], target: 1, result: 0},
  {par1: [1, 8, 9, 20, 75], target: 10, result: -1},
  {par1: [7, 8, 9, 20, 75], target: 1, result: -1},
  {par1: [6, 8, 9, 32], target: 2, result: -1},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(testCase.par1, testCase.target);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
