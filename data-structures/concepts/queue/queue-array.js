// function, enqueue, dequeue, size, front
function Queue() {
  const collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length == 0;
  };
}

/** In circular array - next position will be (i+1)%N  and previous position will be (i+N-1)%N*/