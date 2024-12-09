function countSetBits(n) {
  //O(k) - no of set bits
  let bigN = BigInt(n);
  let count = 0n;
  while (bigN > 0n) {
    bigN = bigN & (bigN - 1n);
    count++;
  }
  return count;
}

function sumxor(n) {
  if (n === 0) return 1n;
  const bigN = BigInt(n);
  const bitsCount = BigInt(bigN.toString(2).length);
  const setBitsCount = countSetBits(bigN);
  return Number(1n << (bitsCount - setBitsCount));
}

console.log(sumxor(10));
console.log(sumxor(5));
console.log(sumxor(4));
console.log(sumxor(3434444444333));
