const { buildGraph } = require("./traversal");

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const shortestPath = (edges, src, dst) => {
  //BFS - will give shortest path
  const graph = buildGraph(edges);
  const visited = new Set(src);
  // console.log(graph);
  const queue = [[src, 0]];
  while (queue.length > 0) {
    const [current, distance] = queue.shift();
    if (current === dst) return distance;
    for (let neighbour of graph[current]) {
      queue.push([neighbour, distance + 1]);
      visited.add(neighbour);
    }
  }
  return -1;
};

const pathLength = shortestPath(edges, "w", "z");
console.log(pathLength);
