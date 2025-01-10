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
 * @return {string[][]}
 */
var printTree = function (root) {
  // rows = height + 1;
  // cols = 2 ^ height+1 - 1;
  // root - res[0][(n-1)/2]
  if (root === null) return [];
  const height = findHeight(root);
  const m = height + 1;
  const n = 2 ** (height + 1) - 1;
  let res = Array.from({ length: m }, () => Array(n).fill(""));
  let r = 0;
  let c = (n - 1) / 2;
  res[r][c] = `${root.val}`;
  let queue = [];
  if (root.left)
    queue.push({ node: root.left, r: r + 1, c: c - 2 ** (height - r - 1) });
  if (root.right)
    queue.push({ node: root.right, r: r + 1, c: c + 2 ** (height - r - 1) });
  while (queue.length > 0) {
    const { node, r, c } = queue.shift();
    res[r][c] = `${node.val}`;
    if (node.left)
      queue.push({ node: node.left, r: r + 1, c: c - 2 ** (height - r - 1) });
    if (node.right)
      queue.push({ node: node.right, r: r + 1, c: c + 2 ** (height - r - 1) });
  }

  return res;
};

const findHeight = (root) => {
  if (root === null) return -1;
  const leftHeight = findHeight(root.left);
  const rightHeight = findHeight(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
};
