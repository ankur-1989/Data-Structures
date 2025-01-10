// Single Linked List implementation

/** Algorithm
 * 
 * A node with data variable and pointer to the next node. 
 * then a head pointer which will point to the first node of the linked list.
 * if head == null then it is an empty list. 
 * 
 * InsertAtBegining(elem) -> to insert the element at the start of the linked list. 
 * 
 * 
 * 
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertAtBegin(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  length() {
    return this.size;
  }
  insertAt(data, k) {
    /** Use Cases
     * 1. List can be empty
     * 2. or out of bound of Linked list.
     */
    if (k < 1 || k > this.size + 1) throw "Index out of bound";
    const newNode = new Node(data);
    if (k == 1) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }
    let curr = this.head;
    for (let i = 0; i < k - 2; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
  }
  delete(k) {
    if (this.head == null) throw "List is empty";
    if (k < 1) throw "invalid index";
    if (k === 1) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let curr = this.head;
    for (let i = 0; i < k - 2; i++) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
      this.size--;
    }
  }

  traverse() {
    let curr = this.head;
    let list = "";
    while (curr != null) {
      list = list + curr.data + " ";
      curr = curr.next;
    }
    console.log(list);
  }
  traverseForwardRecursion(head) {
    if (head === null) return;
    this.traverseForwardRecursion(head.next);
    console.log("Node ->", head.data); // after call will print in reverse order.
  }
  reverse() {
    if (this.head === null) return;
    let prev = null;
    let curr = this.head;
    while (curr != null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  revereRecursion(p) {
    if (p.next == null) {
      this.head = p;
      return;
    }
    this.revereRecursion(p.next);
    const q = p.next;
    p = q.next;
    p.next = null;
  }
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
  reverseBetween(left, right) {
    let start = 1;
    let curr = this.head;
    let prev = null;
    let leftNode = this.head;
    // After this while loop, curr should be pointing to the node at left position. start should be equal to left.
    while (start < left) {
      curr = curr.next;
      start++;
    }

    while (leftNode.next != curr) {
      leftNode = leftNode.next;
    }

    while (curr != null && start <= right) {
      const next = curr.next;
      console.log(curr.data);
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
    leftNode.next = prev;
  }
}

const list = new SinglyLinkedList();
list.insertAtBegin(5);

list.insertAtBegin(4);
list.insertAtBegin(3);

list.insertAtBegin(2);
list.insertAtBegin(1);
// list.insertAt(10, 10); should throw error.
list.traverse();
list.reverseBetween(2, 4);
list.traverse();
// console.log(list.traverseForwardRecursion(list.head));

module.exports = {
  SinglyLinkedList,
};
// Double Linked list implementation
