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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let curr = root;
  let diff = Infinity;
  let closest = undefined;
  while (curr != null) {
    if (curr.val === target) return curr.val;
    if (Math.abs(curr.val - target) < diff) {
      diff = Math.abs(curr.val - target);
      closest = curr.val;
    } else if (Math.abs(curr.val - target) === diff && curr.val < closest) {
      closest = curr.val;
    }
    if (target < curr.val) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
  return closest;
};
