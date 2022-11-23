import * as Utils from './Utils.js';

/**
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane 
 * and an integer k, return the k closest points to the origin (0, 0)
 * 
 * The distance between two points on the X-Y plane is the Euclidean distance 
 * (i.e., √(x1 - x2)2 + (y1 - y2)2).
 */
 class Test {

  method(points, k) {
    const sortedPoints = points.sort(this.getEuclideanDistanceFromPointSortFn([0, 0]));

    return sortedPoints.slice(0, k);
  }

  getEuclideanDistanceFromPointSortFn(point) {
    return (a, b) =>  this.getQuadraticEuclideanDistance(a, point) - this.getQuadraticEuclideanDistance(b, point);
  }

  getQuadraticEuclideanDistance(point1, point2) {
    return (point2[0] - point1[0])**2 + (point2[1] - point1[1])**2;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [[2,2],[1,1],[3,3]], k: 1, result: [[1,1]]},
  {par1: [[1,3],[-2,2]], k: 1, result: [[-2,2]]},
  {par1: [[3,3],[5,-1],[-2,4]], k: 2, result: [[3,3],[-2,4]]},
];

testCase.forEach((testCase, i) => {
  console.log(`Executing test n° ${i+1}`, testCase);
  const result = testExecutor.method(testCase.par1, testCase.k);
  console.log('Result:', result);
  console.assert(Utils.matrixAreEquals(result, testCase.result));
})
