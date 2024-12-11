/**
 * uses stack to implement DFS
 */

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

function dfsTraversal(graph, source) {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
}

function dfsRecursiveTraversal(graph, source) {
  console.log(source);
  for (let neighbour of graph[source]) {
    dfsRecursiveTraversal(graph, neighbour);
  }
}

dfsTraversal(graph, "a");
dfsRecursiveTraversal(graph, "a");
