function lonelyInteger(arr) {
  let res = undefined;
  for (let ele of arr) {
    res = res ^ ele;
  }
  return res;
}

console.log(lonelyInteger([1, 3, 4, 2, 2]));
