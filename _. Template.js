/**
 * Description
 */

 class Test {

  method(nums, target) {
    
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: 'foe', result: true},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(testCase.nums, testCase.target);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
