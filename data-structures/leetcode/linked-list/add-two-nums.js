/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let first = l1;
  let second = l2;
  let sum = first.val + second.val;
  let carry = sum > 9 ? Math.floor(sum / 10) : 0;
  let val = sum % 10;
  let result = new ListNode(val);
  first = first.next;
  second = second.next;
  let head = result;
  while (first != null && second !== null) {
    sum = first.val + second.val + carry;
    carry = sum > 9 ? Math.floor(sum / 10) : 0;
    val = sum % 10;
    const node = new ListNode(val);
    head.next = node;
    first = first.next;
    second = second.next;
    head = head.next;
  }
  while (first != null) {
    sum = first.val + carry;
    carry = sum > 9 ? Math.floor(sum / 10) : 0;
    val = sum % 10;
    const node = new ListNode(val);
    head.next = node;
    first = first.next;
    head = head.next;
  }
  while (second != null) {
    sum = second.val + carry;
    carry = sum > 9 ? Math.floor(sum / 10) : 0;
    val = sum % 10;
    const node = new ListNode(val);
    head.next = node;
    second = second.next;
    head = head.next;
  }
  if (carry > 0) {
    const node = new ListNode(carry);
    head.next = node;
  }

  return result;
};
