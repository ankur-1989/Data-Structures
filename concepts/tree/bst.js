//Binary Tree: node has max two children.
// add, findMax, findMin, find, remove,
// would be used for hierarchical data.
/** Tree: Non linear data structure
 * Depth of a node x: length of path from root to node x
 * Height of a node in tree: no of edges in the longest path from x to leaf node.
 *
 * Node in a tree: has three fields - data, left, right
 * Strict binary tree: 0 or 2 children nodes
 * Complete binary tree - all nodes must have 2 except leaf nodes.
 * level === depth
 * max no of nodes at level i = 2 ^ i
 * Perfect Binary Tree: All levels will be completely filled.
 * 
 * Max no of nodes in a binary tree with height h 
 * 2 ^ (h+1) - 1
 * height of a perfect tree with the given number of nodes - h = log2(n) - 1
 * 
 * min-height = floor of log2n
 * max height = n-1 in case of sparse tree.
 * therefore, time complexity will be in best case is O(log2n) - min height of the tree.
 * and worst case O(n-1) - O(n)
 * Therefore, we try to keep our binary tree balanced, or with minimum height.
 * height difference for a particular node should not be more than 1
 * 
 * Height of an empty tree - -1
 * Height of a tree with one node - 0
 * 
 * Complete binary tree can be represented as an array in memory. 
 * where for every node i - left child is 2i+1 and right child is 2i+2
 * 
 * Array are used to create heap which is a binary tree
 * In binary search tree, all the values on the left are lesser and all the values on the right are greater for a particular node.
 */
// Intuitive approach is recursion
// TODO: BST Node 

// TODO: Insertion

// TODO: Search 

// TODO: Deletion

// TODO: Memory allocation in stack and heap in case of binary tree operations in JS
/** mainly stack and heap are responsible during the operations in Binary search. do we need to free the memory in heap in JS or it happens automatically */