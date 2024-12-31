// one solution is to find the maximum in the left tree and find the minimum in right side and check with the root node.
/** another approach is to use inOrder traversal. This  should give you a sortedl data, if the tree is binary search tree.
 * Time complexity is O(n)
 */
function isBST(root) {
  if (root === null) return true;
  return (
    isLeftLesser(root) &&
    isRightGreater(root) &&
    isBST(root.left) &&
    isBST(root.right)
  );
}
