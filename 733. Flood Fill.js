import * as Utils from './Utils.js';
import _ from 'lodash';

/**
 * An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
 * You are also given three integers x, y, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].
 * To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.
 * Return the modified image after performing the flood fill.
 */
 class Test {

  orthogonalSteps = [
    {x: 0, y: -1},  // top
    {x: 1, y: 0},   // right
    {x: 0, y: 1},   // bottom
    {x: -1, y: 0},  // left
  ]

  method(image, x, y, newColor) {
    const originColor = image[x][y];
    const imageCopy = image; // Let's assume this is a new copy

    this.floodFill(imageCopy, x, y, originColor, newColor)

    return imageCopy
  }

  floodFill(image, x, y, originColor, newColor) {

    if (image[x][y] === originColor) {

      image[x][y] = newColor;
      const neighbors = this.getOrthogonalNeighbors(image, x, y);
      for (let i = 0; i < neighbors.length; i++) {
        this.floodFill(image, neighbors[i].x, neighbors[i].y, originColor, newColor);
      }
    }
  }

  /**
   * Return an array of neighbor coordinates {x: int, y: int}
   */
  getOrthogonalNeighbors(image, x, y) {
    const result = [];

    this.orthogonalSteps.forEach(step => {
      const neighX = x + step.x;
      const neighY = y + step.y;

      if (this.isInBound(image, neighX, neighY)) {
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
  {
    image: [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ], 
    color: 3,
    x: 1,
    y: 1,
    result: [
      [3, 3, 3],
      [3, 3, 0],
      [3, 0, 1],
    ], 
  },
  {
    image: [
      [1, 1, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 1, 0],
      [1, 0, 0, 0],
    ], 
    color: 3,
    x: 1,
    y: 1,
    result: [
      [1, 1, 3, 1],
      [1, 3, 3, 1],
      [1, 3, 1, 3],
      [1, 3, 3, 3],
    ], 
  },
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.method(testCase.image, testCase.x, testCase.y, testCase.color);
  console.log('Result:', result);
  console.assert(_.isEqual(testCase.result, result));
})
