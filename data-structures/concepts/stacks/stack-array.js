// functions:  push, pop, seek, size
// LIFO
const Stack = function () {
  this.top = -1;
  this.data = [];
  this.push = function (value) {
    this.top++;
    this.data[this.top] = value;
  };
  this.pop = function () {
    if (this.top === -1) return;
    const value = this.data[this.top];
    this.top--;
    return value;
  };
  this.show = function () {
    console.log(this.data, this.top);
  };
  this.isEmpty = function () {
    return this.top === -1;
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
stack.show();


