/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  const left = (node) => {
    if (!node) return 0;
    return left(node.left) + 1;
  };
  const right = (node) => {
    if (!node) return 0;
    return right(node.right) + 1;
  };
  const trans = (node) => {
    let l = left(node);
    let r = right(node);
    if (l === r) {
      return Math.pow(2, l) - 1;
    }
    return trans(node.left) + trans(node.right) + 1;
  };
  return trans(root);
};
