/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */
 class Test {

  isValid(str) {

    let normStr = str.replace(/[^a-z0-9]/gi, '').toUpperCase();

    const middle = Math.floor(normStr.length / 2);

    for (let i = 0; i < middle; i++) {

      if (normStr[i] !== normStr[normStr.length-i-1])
        return false;
    }

    return true;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: 'A man, a plan, a canal: Panama', result: true},
  {par1: 'E le tazzine, igienizzatele', result: true},
  {par1: 'race a car', result: false},
  {par1: 'abcddcba', result: true},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.isValid(testCase.par1);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
