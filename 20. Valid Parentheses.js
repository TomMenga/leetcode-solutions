/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 */

 class Test {

  isValid(text) {
    const bracketsStack = [];
    const bracketsMap = {
      ')': '(',
      ']': '[',
      '}': '{',
    };

    for(let i = 0; i< text.length; i++) {
      const brk = text[i];

      if (this.isOpenBracket(brk)) {
        bracketsStack.push(brk);
      }

      if (this.isCloseBracket(brk)) {
        const openBrk = bracketsStack.pop();
        if (bracketsMap[brk] !== openBrk) {
          return false;
        }
      }
    }

    if (bracketsStack.length > 0) {
      return false;
    }

    return true;
  }

  isOpenBracket(bracket) {
    return bracket === '(' || bracket === '[' || bracket === '{'
  }

  isCloseBracket(bracket) {
    return bracket === ')' || bracket === ']' || bracket === '}'
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: '()', result: true},
  {par1: '{[()]}', result: true},
  {par1: '[](){}', result: true},
  {par1: '[(]){}', result: false},
  {par1: '([]){}', result: true},
  {par1: '([](){}', result: false},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.isValid(testCase.par1);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})

