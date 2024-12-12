/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  let originalColor = image[sr][sc];
  let visited = new Set();
  explore(image, sr, sc, visited, color, originalColor);
  return image;
};

const explore = (image, row, col, visited, color, originalColor) => {
  const rowInBounds = 0 <= row && row < image.length;
  const colInBounds = 0 <= col && col < image[0].length;

  if (!rowInBounds || !colInBounds) return false;

  if (image[row][col] !== originalColor) return false;

  if (visited.has(`${row},${col}`)) return;

  visited.add(`${row},${col}`);

  if (image[row][col] === originalColor) image[row][col] = color;

  explore(image, row - 1, col, visited, color, originalColor);
  explore(image, row + 1, col, visited, color, originalColor);
  explore(image, row, col - 1, visited, color, originalColor);
  explore(image, row, col + 1, visited, color, originalColor);

  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
