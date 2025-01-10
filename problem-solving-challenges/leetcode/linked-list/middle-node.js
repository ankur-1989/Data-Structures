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
var middleNode = function (head) {
  let size = 0;
  let current = head;
  while (current != null) {
    size += 1;
    current = current.next;
  }
  const middleNode = size % 2 === 0 ? size / 2 + 1 : Math.ceil(size / 2);

  let count = 1;
  current = head;
  while (current != null && count <= middleNode) {
    if (count === middleNode) {
      return current;
    }
    count++;
    current = current.next;
  }
};
