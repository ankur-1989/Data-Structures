function sym(...args) {
  // O(n^2)
  return args.reduce(getDiff);
}

function getDiff(arr1, arr2) {
  const firstSet = new Set(arr1);
  const secondSet = new Set(arr2);
  return [
    ...arr1.filter((ele) => !secondSet.has(ele)),
    ...arr2.filter((ele) => !firstSet.has(ele)),
  ].filter((ele, index, self) => self.indexOf(ele) === index);
}

sym([1, 2, 3], [5, 2, 1, 4]);
