function flipBits(n) {
  const maxBits = Math.floor(Math.log2(n) + 1);
  const shiftedNumber = 1 << (maxBits - 1); 
  return n ^ ((shiftedNumber - 1) | shiftedNumber);
}

console.log(flipBits(5));;

/* 
console.log(flipBits(10));
console.log(flipBits(8));
console.log(flipBits(4));
console.log(flipBits(2));
console.log(flipBits(15)); */


