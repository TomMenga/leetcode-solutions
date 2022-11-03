import * as Utils from './Utils.js';

/**
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] 
 * represent the start and the end of the ith interval and intervals is sorted in ascending order by 
 * starti. You are also given an interval newInterval = [start, end] that represents the start and
 * end of another interval.
 * 
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by start and
 * intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * 
 * Return intervals after the insertion.
 */
 class Test {

  insertInterval(intervals, newInterval) {
    let beforeMerge = [];
    let toMerge = [newInterval];
    let afterMerge = [];

    for(let interv of intervals) {
      
      if (this.getStart(newInterval) > this.getEnd(interv)) {
        beforeMerge.push(interv);
        continue;
      }

      if (this.getEnd(newInterval) < this.getStart(interv)) {
        afterMerge.push(interv);
        continue;
      }

      toMerge.push(interv);
    }

    return beforeMerge
            .concat(this.getMergedInterval(toMerge))
            .concat(afterMerge);
  }

  getStart(interval) {
    return interval[0];
  }

  getEnd(interval) {
    return interval[1];
  }

  getMergedInterval(intervals) {
    const start = Math.min(...intervals.map(this.getStart));
    const end = Math.max(...intervals.map(this.getEnd));

    return [[start, end]]
  }
}

const testExecutor = new Test();

const testCase = [
  {intervals: [[1,2],[3,5],[6,7],[8,10],[12,16],[17,18]], newInterval: [4,8], result: [[1,2],[3,10],[12,16],[17,18]]},
  {intervals: [[1,3],[6,9]], newInterval: [2,5], result: [[1,5],[6,9]]},
  {intervals: [[1,3],[6,9]], newInterval: [2,7], result: [[1,9]]},
  {intervals: [[3,5],[6,9]], newInterval: [1,2], result: [[1,2],[3,5],[6,9]]},
  {intervals: [[1,3],[6,9]], newInterval: [10,12], result: [[1,3],[6,9],[10,12]]},
];

testCase.forEach((testCase, i) => {
  console.log(`Executing test n° ${i+1}`, testCase);
  const result = testExecutor.insertInterval(testCase.intervals, testCase.newInterval);
  console.log('Result:', result);
  let assertion = result.reduce((res,interv,i) => res && Utils.arrayAreEquals(interv, testCase.result[i]), true)
  console.assert(assertion);
})
