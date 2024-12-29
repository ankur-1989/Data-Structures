function hasPath(graph, source, destination) {
  if (source === destination) return true;
  for (let neighbour of graph[source]) {
    if (hasPath(graph, neighbour, destination)) return true;
  }
  return false;
}
//bfs approach
function hasPath(graph, source, destination) {
  let queue = [source];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current === destination) return true;
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
  return false;
}

module.exports = { hasPath };
