function flipBits(n) {
  const limit = Math.floor(Math.log2(n) + 1);
  const shiftedNumber = 1 << (limit - 1);
  return n ^ ((shiftedNumber - 1) | shiftedNumber);
}

console.log(flipBits(10));
console.log(flipBits(8));
console.log(flipBits(4));
console.log(flipBits(2));
console.log(flipBits(15));
