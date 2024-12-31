/** BFS - Level order traversal
 * Time Complexity - O(n)
 * Space Complexity - O(n) worst case
 *
 * DFS:
 * Pre-Order Traversal - root -> left -> right  DLR
 * InOrder Traversal - left - root- right - LDR
 * Post Order Traversal - left -> right -> root - LRD
 * Time Complexity - O(n)
 * Space Complexity - O(h) where h is the height of the tree.
 */

function bfs(root) {
  if (root === null) return;
  const queue = [root];
  while (queue.length > 0) {
    const visitingNode = queue.shift();
    console.log(visitingNode.data);
    if (visitingNode.left) queue.push(visitingNode.left);
    if (visitingNode.right) queue.push(visitingNode.right);
  }
}

function preOrder(root) {
  // space will be used as part of stack.
  // visit root -> visit left -> visit right
  if (root === null) return;
  console.log(root.data);
  preOrder(root.left);
  preOrder(root.right);
}

function inOrder(root) {
  if (root === null) return;
  inOrder(root.left);
  console.log(root.data);
  inOrder(root.right);
}
function postOrder(root) {
  if (root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.data);
}

module.exports = {
  bfs,
  preOrder,
  inOrder,
  postOrder,
};
