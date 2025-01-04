/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let t = 0,
    b = matrix.length - 1,
    l = 0,
    r = matrix[0].length - 1;
  let dir = 0;
  let spiral = [];
  while (t <= b && l <= r) {
    if (dir === 0) {
      for (let i = l; i <= r; i++) {
        spiral.push(matrix[t][i]);
      }
      t++;
    } else if (dir === 1) {
      for (let i = t; i <= b; i++) {
        spiral.push(matrix[i][r]);
      }
      r--;
    } else if (dir === 2) {
      for (let i = r; i >= l; i--) {
        spiral.push(matrix[b][i]);
      }
      b--;
    } else if (dir === 3) {
      for (let i = b; i >= t; i--) {
        spiral.push(matrix[i][l]);
      }
      l++;
    }
    dir = (dir + 1) % 4;
  }
  return spiral;
};
