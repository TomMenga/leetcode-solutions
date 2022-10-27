import * as Utils from './Utils.js';

/**
 * Description
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
