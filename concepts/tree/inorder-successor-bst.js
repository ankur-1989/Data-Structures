/**
 *
 * @param {*} root
 * @returns
 *
 * What will be the next visiting node for the already visited node.
 * Case 1: Node has right subtree
 *  * Find the min in the right subtree and return that value
 * Case 2: No right subtree
 * go to the nearest ancestor for which given would be in the left subtree.
 */

function findMin(root) {
  if (root === null) return null;
  while (root.left != null) {
    root = root.left;
  }
  return root;
}
function getSucessor(root, data) {
  // O(h) height of the BST
  const current = find(root, data);
  if (current === null) return null;
  if (current.right !== null) {
    return findMin(current.right);
  } else {
    let sucessor = null;
    let ancestor = root;
    while (ancestor !== current) {
      if (current.data < ancestor.data) {
        sucessor = ancestor;
        ancestor = ancestor.left;
      } else {
        ancestor = ancestor.right;
      }
    }
    return sucessor;
  }
}
