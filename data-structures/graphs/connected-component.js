const connectedComponentCount = (graph) => {
  let visited = new Set();
  let count = 0;
  for (let node in graph) {
    console.log(node, visited);
    if (explore(graph, node, visited)) {
      count++;
    }
  }
  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));
  for (let neighbour of graph[current]) {
    explore(graph, neighbour, visited);
  }
  return true;
};

const count = connectedComponentCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
});
console.log(count);
