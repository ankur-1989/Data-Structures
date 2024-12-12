/** Undirected graph can have cycles as it is bidirectional. In this case, to avoid infinite loops we will use an extra flag called visited to check if we
 * have visited that node or not. Generally traversal complexity is O(e) and space compliexity is O(n)
 */

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const graph = {
  i: ["j", "k"],
  j: ["i"],
  k: ["i", "m", "l"],
  m: ["k"],
  l: ["k"],
  o: ["n"],
  n: ["o"],
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);
  for (const neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst, visited)) return true;
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const isExists = undirectedPath(edges, "o", "n");
console.log(isExists);
