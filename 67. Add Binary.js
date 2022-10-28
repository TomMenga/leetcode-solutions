import * as Utils from './Utils.js';

/**
 * Given two binary strings a and b, return their sum as a binary string.
 */
 class Test {

  method(bin1, bin2) {
    bin1 = bin1.split('');
    bin2 = bin2.split('');

    let result = '';
    let carryOver = 0;

    for(let i = 0; i < Math.max(bin1.length, bin2.length); i++) {

      let dig1 = bin1[bin1.length - 1 - i] ?? 0;
      let dig2 = bin2[bin2.length - 1 - i] ?? 0;

      const a = parseInt(dig1) + parseInt(dig2) + carryOver;

      carryOver = Math.floor(a / 2);
      result = `${a % 2}${result}`;
    }

    if (carryOver) {
      result = `${carryOver}${result}`;
    }

    return result;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: '1100', par2: '1', result: '1101'},
  {par1: '1010', par2: '1011', result: '10101'},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(testCase.par1, testCase.par2);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
