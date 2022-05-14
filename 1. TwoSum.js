/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

class Test {

  /**
   * Simple bruteforce, cycle for every couple of values
   */
  twoSum(nums, target) {      
    for(let i = 0; i < nums.length; i++) {
      for(let j = Number(i)+1; j < nums.length; j++ ) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }

  twoSumOptimized(nums, target) {
    let hashmap = nums.reduce((dict, n, i) => {dict[n] = i; return dict}, {})

    for(let i = 0; i< nums.length; i++) {
      if (hashmap[target - nums[i]]) {
        return [i, hashmap[target - nums[i]]];
      }
    }
  }
}

const testExecutor = new Test();

const testCase = [
  {nums: [2, 9, 7, 4], target: 9, result: [0, 2]},
  {nums: [2, 15, 7, 1], target: 8, result: [2, 3]},
  {nums: [7, 4], target: 11, result: [0, 1]},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.twoSumOptimized(testCase.nums, testCase.target);
  console.log('Result:', result);
  console.assert(result.every(index => testCase.result.some(n => n === index)))
})
