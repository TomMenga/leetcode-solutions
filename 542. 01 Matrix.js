import * as Utils from './Utils.js';

/**
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
 * The distance between two adjacent cells is 1.
 */
 class Test {

  orthogonalSteps = [
    {x: 0, y: -1},  // top
    {x: 1, y: 0},   // right
    {x: 0, y: 1},   // bottom
    {x: -1, y: 0},  // left
  ]

  method(matrix) {
    let result = []

    for (let i = 0; i < matrix.length; i++) {
      
      if (!result[i])
        result[i] = [];
      
      for (let j = 0; j < matrix[i].length; j++) {
        result[i][j] = this.calculateDistanceTo0(i, j, matrix);
      }
    }

    return result;
  }

  calculateDistanceTo0(i, j, matrix) {

    const queueOfCoords = [{x: i, y: j}];

    while (queueOfCoords.length > 0) {
      const coord = queueOfCoords.shift();

      if (matrix[coord.x][coord.y] === 0) {
        return Math.abs(i - coord.x) + Math.abs(j - coord.y);
      }

      const adjacentCoords = this.getAdjacentCoords(matrix, coord.x, coord.y)
      queueOfCoords.push(...adjacentCoords)
    }

    return undefined;
  }

  getAdjacentCoords(matrix, x, y) {
    const result = [];

    this.orthogonalSteps.forEach(step => {
      const neighX = x + step.x;
      const neighY = y + step.y;

      if (this.isInBound(matrix, neighX, neighY)) {
        result.push({x: neighX, y: neighY});
      }
    })

    return result;
  }

  isInBound(matrix, x, y) {
    return x >= 0 && x < matrix.length && y >= 0 && y < matrix[x].length;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [[0,0,0],[0,1,0],[1,1,1]], result: [[0,0,0],[0,1,0],[1,2,1]]},
  {par1: [[0,0,0],[0,1,0],[0,0,0]], result: [[0,0,0],[0,1,0],[0,0,0]]},
];

testCase.forEach((testCase, i) => {
  console.log(`Executing test n° ${i+1}`, testCase);
  const result = testExecutor.method(testCase.par1);
  console.log('Result:', result);
  console.assert(Utils.matrixAreEquals(testCase.result, result));
})
