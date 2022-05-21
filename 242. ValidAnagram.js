/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */

 class Test {

  method(text, anagram) {

    if (text.length !== anagram.length)
      return false;

    const letters = [];
    
    for (let char of text) {
      letters.push(char);
    }

    for (let char of anagram) {
      const i = letters.indexOf(char)
      
      if (i === -1)
        return false;
  
      letters.splice(i, 1);
    }

    return letters.length === 0;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: 'anagram', par2: 'nagaram', result: true},
  {par1: 'car', par2: 'rat', result: false},
  {par1: 'invalid', par2: 'invalidd', result: false},
  {par1: 'invalidd', par2: 'invalid', result: false},
  {par1: 'longer', par2: 'sm', result: false},
  {par1: 'smaller', par2: 'loooooonger', result: false},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(testCase.par1, testCase.par2);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
