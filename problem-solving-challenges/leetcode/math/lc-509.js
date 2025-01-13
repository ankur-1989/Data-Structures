/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;
  let current = 0;
  let first = 1;
  let second = 0;
  for (let i = 2; i <= n; i++) {
    current = first + second;
    second = first;
    first = current;
  }
  return current;
};
