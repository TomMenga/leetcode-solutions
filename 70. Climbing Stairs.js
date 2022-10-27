import * as Utils from './Utils.js';

/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */
 class Test {

  method(numOfSteps) {
    let numOfPermutation = Math.floor(numOfSteps / 2);
    let result = 0;

    for (let i = 0; i <= numOfPermutation; i++) {
      let groupOf2 = i
      let groupOf1 = numOfSteps - (groupOf2 * 2) 
      result += this.factorial(groupOf1 + groupOf2) / (this.factorial(groupOf1) * this.factorial(groupOf2));
    }

    return result;
  }

  factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: 2, result: 2},
  {par1: 3, result: 3},
  {par1: 5, result: 8},
  {par1: 6, result: 13},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(testCase.par1);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
