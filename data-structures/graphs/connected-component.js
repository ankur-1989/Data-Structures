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
  1: [2, 3],
  2: [3, 1],
  3: [2, 1],
});
console.log(count);
