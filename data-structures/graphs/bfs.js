/** Graph: nodes + edges: used to describe the relationships between the things
 * Directed graph: edges with arrow heads
 * undirected graph: edges without arrow heads.
 * need to maintain adjacency list in code
 */
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

function bfsTraversal(graph, source) {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
}

bfsTraversal(graph, "a"); // abcdef or acbedf
