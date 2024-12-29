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
}

const list = new SinglyLinkedList();
list.insertAtBegin(5);

list.insertAtBegin(4);
list.insertAtBegin(3);

list.insertAt(2, 1);
list.insertAt(6, 3);
list.insertAt(7, 5);
list.insertAt(9, 7);
// list.insertAt(10, 10); should throw error.
list.traverse();
console.log(list.traverseForwardRecursion(list.head));


// Double Linked list implementation
