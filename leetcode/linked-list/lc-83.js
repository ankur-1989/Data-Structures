/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // set to check if the element has occured already.
  const elements = new Set();
  let curr = head;
  let prev = head;
  // loop to traverse the linked list.
  while (curr != null) {
    if (elements.has(curr.val)) {
      // if the element is already in the set then remove the node and connect the next node with the previous node.
      const next = curr.next;
      prev.next = next;
      curr = next;
    } else {
      elements.add(curr.val);
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
};
