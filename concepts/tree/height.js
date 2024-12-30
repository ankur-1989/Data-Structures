// find the height of the binary search tree.
// which will be number of edges in longest path from root to leaf node

function findHeight(root) {
  if (root === null) return -1;

  const leftHeight = findHeight(root.left);
  const rightHeight = findHeight(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

module.exports = {
  findHeight,
};
