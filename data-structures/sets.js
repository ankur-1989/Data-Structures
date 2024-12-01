// function: values, union, size, intersection, has, difference, subset, remove
function mySet() {
  const collection = [];

  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };
  this.values = function () {
    return collection;
  };
  this.add = function (value) {
    if (!this.has(value)) {
      collection.push(value);
      return true;
    }
    return false;
  };
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  this.size = function () {
    return collection.length;
  };
  this.union = function (otherSet) {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((element) => {
      unionSet.add(element);
    });
    secondSet.forEach((element) => {
      unionSet.add(element);
    });
    return unionSet;
  };
  this.intersection = function (otherSet) {
    const intersectionSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach((element) => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });
    return intersectionSet;
  };
  this.difference = function (otherSet) {
    const differenceSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  this.subset = function (otherSet) {
    const firstSet = this.values();
    return firstSet.every((ele) => otherSet.has(ele));
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
