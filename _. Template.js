import * as Utils from './Utils.js';

/**
 * Description
 */
 class Test {

  method(par1) {
    
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: 'foe', result: true},
];

testCase.forEach((testCase, i) => {
  console.log(`Executing test n° ${i+1}`, testCase);
  const result = testExecutor.method(testCase.par1);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
