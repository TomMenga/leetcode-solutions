import * as Utils from './Utils.js';

/**
 * Given a string s which consists of lowercase or uppercase letters, 
 * return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 */
 class Test {

  method(str) {
    const charGroup = this.groupByChar(str);

    let numOfCouples = Object.keys(charGroup).reduce((sum, char) => sum += Math.floor(charGroup[char] / 2), 0);

    return Math.min(str.length, numOfCouples*2 + 1);
  }

  groupByChar(str) {
    return str.split('').reduce((res, c) => {
        res[c] = res[c] ? ++res[c] : 1;
        return res;
    }, {});
}
}

const testExecutor = new Test();

const testCase = [
  {par1: 'abccccdd', result: 7},
  {par1: 'aabbccddee', result: 10},
  {par1: 'aabbccddeez', result: 11},
  {par1: 'aA', result: 1},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(testCase.par1);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
