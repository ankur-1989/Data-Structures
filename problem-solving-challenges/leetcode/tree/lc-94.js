var inorderTraversal = function (root, output = []) {
  if (root === null) return output;
  inorderTraversal(root.left, output);
  output.push(root.val);
  inorderTraversal(root.right, output);
  return output;
};
