function isPowerOfTwo(n) {
  let count = 0;
  while (n) {
    count++;
    n = n & (n - 1);
  }
  if (count === 1) return true;
  return false;
}
