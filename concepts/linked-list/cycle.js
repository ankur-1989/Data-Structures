function detectLoop(head) {
  // your code here
  if (head == null) return false;
  let fast = head.next;
  let slow = head;

  while (fast != null && fast.next != null && slow != null) {
    if (fast == slow) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
}

module.exports = {
  detectLoop,
};
