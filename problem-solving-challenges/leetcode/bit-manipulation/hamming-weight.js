function hammingWeight(n) {
  // O(n)
  let count = 0;
  while (n) {
    if ((n & 1) === 1) {
      count++;
    }
    n = n >> 1;
  }
  return count;
}

function countSetBits(n) {
  //O(k) - no of set bits
  let count = 0;
  while (n) {
    n = n & (n - 1);
    count++;
  }
  return count;
}



console.log(countSetBits(14));
