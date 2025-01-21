/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let col0 = -Infinity;
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0 && matrix[i][j] == 0) {
        matrix[i][j] = 0;
        col0 = 0;
      } else if (j === 0 && matrix[i][j] === 0) {
        col0 = 0;
        matrix[i][0] = 0;
      } else if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (j === 0) {
        matrix[i][j] = col0 === 0 ? 0 : matrix[i][j];
      } else {
        matrix[i][j] =
          matrix[i][0] === 0 || matrix[0][j] === 0 ? 0 : matrix[i][j];
      }
    }
  }
};
