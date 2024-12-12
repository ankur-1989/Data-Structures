const minimumIsland = (grid) => {
  let visited = new Set();
  let minSize = Infinity;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const size = exploreSize(grid, i, j, visited);
      if (size > 0 && size < minSize) minSize = size;
    }
  }
  return minSize;
};

const exploreSize = (grid, row, col, visited) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid[0].length;

  if (!rowInBounds || !colInBounds) return 0;

  if (grid[row][col] === "W") return 0;

  if (visited.has(`${row},${col}`)) return 0;
  visited.add(`${row},${col}`);

  let size = 1;

  size += exploreSize(grid, row - 1, col, visited);
  size += exploreSize(grid, row + 1, col, visited);
  size += exploreSize(grid, row, col - 1, visited);
  size += exploreSize(grid, row, col + 1, visited);

  return size;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid)); // -> 2
