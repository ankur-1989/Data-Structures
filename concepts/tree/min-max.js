// Find min and max element in Binary Search Tree.

function findMin(root) {
  let curr = root;
  if (root === null) return -1;
  while (curr.left !== null) {
    curr = curr.left;
  }
  return curr.data;
}

function findMax(root) {
  if (root === null) return -1;
  let curr = root;
  while (curr.right !== null) {
    curr = curr.right;
  }
  return curr.data;
}

module.exports = {
  findMin,
  findMax,
};
