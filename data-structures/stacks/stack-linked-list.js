/** In case of Linked List dta only will be inserted at the head and will be printed from the head */

class Node {
  constructor(val) {
    this.data = val ?? undefined;
    this.next = null;
  }
}

const Stack = function () {
  this.top = null;
  this.push = function (val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
  };
  this.show = function () {
    let curr = this.top;
    while (curr != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  };
  this.pop = function () {
    if (this.top === null) {
      return;
    }
    const value = this.top.data;
    console.log(value);
    this.top = this.top.next;
  };
};

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.show();
stack.pop();
stack.pop();
console.log("After pop");
stack.show();
