function isPowerOfThree(n) {
  const largestPowerOfThree = 1162261467; // 3^19, the largest power of 3 in 32-bit integers
  return n > 0 && largestPowerOfThree % n === 0;
}
