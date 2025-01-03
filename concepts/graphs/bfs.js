/** Graph: nodes + edges: used to describe the relationships between the things
 * can be ordered pair and unordered pair. 
 * Ordered pair - (a,b) where a is vertices and b is edges <> (b,a) if(a!==b)
 * Unordered pair - {a,b} order does not matter 
 * Directed graph: edges with arrow heads
 * undirected graph: edges without arrow heads.
 * need to maintain adjacency list in code
 */

/**
 * Graph:
 * Weighted Graph vs Unweighted graph
 * Directed vs undirected graph
 * Graph representation in Memory
 * Self loops in Graphs
 * Max edge in a graph - with directed one - n(n-1) 
 * with undirected graph - n(n-1) / 2
 * 
 * Walk or Path - no vertices and no edges are repeated
 * Trail - no edges are repeated.
 * 
 * Strongly connected graph: path from any vertex to any vertex
 * Undirected graph - connected
 * Closed Walk: starts and ends at the same vertex
 * Cylce - no repeatetion other than start and end
 * Acylcic graph - no cycle in graph.
 */
/** Graph Representation
 * Edge List - Space complexity is ok but Time complexity is high
 * Adjacency Matrix - Time Complexity is ok but space complexity is high.
 * Adjacency list - both are good in this representation.
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
