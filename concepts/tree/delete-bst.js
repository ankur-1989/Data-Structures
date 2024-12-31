/**
 *
 * @param {*} root
 * @param {*} data
 * Case 1: No child - Simply de-link
 * Case 2: only 1 child - connect the child to the parent and then de-link that node.
 * Case 3: has two children:
 *  One approach:
 *    1. find min in the right
 *    2. copy the min in the targeted node.
 *    3. delete the duplicate node.
 * Second approach:
 *   2. find max in the left. and same process as in first approach.
 */

import { findMin } from "./min-max";
function deleteBST(root, data) {
  if (root === null) return root;
  else if (data < root.data) root.left = deleteBST(root.left, data);
  else if (data > root.data) root.right = deleteBST(root.right, data);
  else {
    // Case 1: No child
    if (root.left === null && root.right === null) {
      // delete root; // need to check in JavaScript
      root = null;
    } // Case 2: 1 Child
    else if (root.left === null) {
      const temp = root;
      root = root.right;
      // delete temp;
    } else if (root.right === null) {
      const temp = root;
      root = root.right;
      // delete temp;
    }
    // Case 3: 2 children
    else {
      const temp = findMin(root);
      root.data = temp.data;
      root.right = deleteBST(root.right, temp.data);
    }
    return root;
  }
}
