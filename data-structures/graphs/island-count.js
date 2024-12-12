const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const islandCount = (grid) => {
  let visited = new Set();
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (explore(grid, i, j, visited)) count++;
    }
  }
  return count;
};

const explore = (grid, row, col, visited) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid[0].length;

  if (!rowInBounds || !colInBounds) return false;

  if (grid[row][col] === "W") return false;

  if (visited.has(`${row},${col}`)) return false;
  visited.add(`${row},${col}`);

  explore(grid, row - 1, col, visited);
  explore(grid, row + 1, col, visited);
  explore(grid, row, col - 1, visited);
  explore(grid, row, col + 1, visited);

  return true;
};

const totalIsLands = islandCount(grid);
console.log(totalIsLands);
