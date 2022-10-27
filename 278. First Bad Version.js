import * as Utils from './Utils.js';

/**
 * You are a product manager and currently leading a team to develop a new product. Unfortunately, 
 * the latest version of your product fails the quality check. 
 * Since each version is developed based on the previous version, 
 * all the versions after a bad version are also bad.
 * 
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, 
 * which causes all the following ones to be bad.
 */
 class Test {
  badVersion = 0;

  constructor(badVersion) {
    this.badVersion = badVersion;
  }

  getFirstBadVersion(versions) {
    let start = 1;
    let end = versions;
    let middle;

    while (start <= end) {
      middle = start + Math.floor((end - start) / 2);

      if (this.isBadVersion(middle)) {
        if (!this.isBadVersion(middle - 1)) {
          return middle;
        }

        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
  }

  isBadVersion(version) {
    return version >= this.badVersion;
  }
}

const testCase = [
  {numOfVersions: 5, badVersion: 3, result: 3},
  {numOfVersions: 5, badVersion: 5, result: 5},
  {numOfVersions: 30, badVersion: 3, result: 3},
  {numOfVersions: 1, badVersion: 1, result: 1},
];

testCase.forEach(testCase => {
  const testExecutor = new Test(testCase.badVersion);
  console.log('Executing test', testCase);
  const result = testExecutor.getFirstBadVersion(testCase.numOfVersions);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
