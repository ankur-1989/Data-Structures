function determineNumbers(arr) {
  let res = undefined;
  for (let ele of arr) {
    res = res ^ ele;
  }
  // find leftmost position
  const pos = Math.floor(Math.log2(res) + 1);
  let first, second;
}

// res = a ^ b
