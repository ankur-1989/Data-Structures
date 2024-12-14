// Single Linked List implementation

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

  add(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  length() {
    return this.size;
  }
  insertAt(data, k) {
    if (k > this.size) {
      throw "indexOutofbound";
    }
    if (k == 1) {
      const n = new Node(data);
      const temp = this.head;
      this.head = n;
      this.head.next = temp;
      this.size++;
    } else {
      const n = new Node(data);
      let curr = this.head;
      let temp = this.head.next;
      let count = 0;
      while (temp.next != null && count != k) {
        curr = curr.next;
        temp = temp.next;
        count++;
      }
      curr.next = n;
      curr.next.next = temp;
      this.size++;
    }
  }
  delete(data) {
    let temp = null;
    if (data == this.head.data) {
      temp = this.head;
      this.head = this.head.next;
      this.size--;
    } else {
      let curr = this.head;
      temp = this.head.next;
      while (temp.next != null) {
        if (temp.data == data) {
          curr.next = temp.next;
          this.size--;
          break;
        }
        temp = temp.next;
        curr = curr.next;
      }
    }
  }
  traverse() {
    let curr = this.head;
    let list = "";
    while (curr != null) {
      list = list + curr.data + " ";
      curr = curr.next;
    }
    return list;
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr != null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}

const list = new SinglyLinkedList();
list.add(1);
list.add(5);
list.add(7);
list.add(9);
console.log(list.length());
console.log(list.traverse());
list.insertAt(8, 2);
console.log(list.length());
console.log(list.traverse());
list.insertAt(13, 5);
list.insertAt(14, 1);
list.insertAt(14, 3);
console.log(list.traverse());
list.delete(14);

list.reverse();
console.log(list.traverse());
// Double Linked list implementation
