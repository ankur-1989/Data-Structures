// functions:  push, pop, seek, size
// LIFO
const Stack = function () {
  this.count = 0;
  this.data = {};
  this.push = function (value) {
    this.data[this.count] = value;
    this.count++;
  };
  this.peek = function () {
    return this.data[this.count - 1];
  };
  this.size = function () {
    return this.count;
  };
  this.pop = function () {
    this.count--;
    const result = this.data[this.count];
    delete this.data[this.count];
    return result;
  };
};

const stack = new Stack();
stack.push(5);
stack.push(6);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
