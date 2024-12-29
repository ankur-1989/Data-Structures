var isPowerOfFour = function (n) {
  if (n < 0) return false;
  let original = n;
  let count = 0;
  while (n) {
    n = n & (n - 1);
    count++;
  }
  if (count === 1 && (Math.floor(Math.log2(original)) + 1) % 2 !== 0)
    return true;
  return false;
};
