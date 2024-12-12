/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // Up, Down, Left, Right
  const queue = [];
  const distances = Array.from({ length: rows }, () =>
    Array(cols).fill(Infinity)
  );

  // Initialize queue with all `0` cells and set their distances to 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        distances[i][j] = 0;
      }
    }
  }

  // Perform BFS from all `0`s
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      // Check bounds and if a shorter distance is found
      if (
        newX >= 0 &&
        newX < rows &&
        newY >= 0 &&
        newY < cols &&
        distances[newX][newY] > distances[x][y] + 1
      ) {
        distances[newX][newY] = distances[x][y] + 1;
        queue.push([newX, newY]);
      }
    }
  }

  return distances;
};
