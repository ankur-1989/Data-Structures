/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let start = 1;
  let curr = head;
  let prev = null;
  let leftNode = left === 1 ? null : head;
  // After this while loop, curr should be pointing to the node at left position. start should be equal to left.
  while (start < left) {
    curr = curr.next;
    start++;
  }

  while (leftNode && leftNode.next != curr) {
    leftNode = leftNode.next;
  }

  while (curr != null && start <= right) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    start++;
  }

  let temp = prev;
  while (temp.next != null) {
    temp = temp.next;
  }
  temp.next = curr;
  if (leftNode) {
    leftNode.next = prev;
  }
  if (left === 1) {
    head = prev;
  }
  return head;
};
