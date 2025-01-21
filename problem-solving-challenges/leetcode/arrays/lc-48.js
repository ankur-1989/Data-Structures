/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const m = matrix.length;
  for (let i = 0; i < m; i++) {
    for (let j = i; j < m; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < m; i++) {
    matrix[i].reverse();
  }
};
