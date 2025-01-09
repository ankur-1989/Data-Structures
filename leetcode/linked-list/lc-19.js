/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let curr = head;
  let len = 0;

  while (curr != null) {
    len++;
    curr = curr.next;
  }
  if (len === n) {
    head = head.next;
    return head;
  }
  curr = head.next;
  prev = head;
  let count = 0;
  while (curr != null) {
    if (count === len - n - 1) {
      prev.next = curr.next;
      break;
    } else {
      count++;
      curr = curr.next;
      prev = prev.next;
    }
  }
  return head;
};
