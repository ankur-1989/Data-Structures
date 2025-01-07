/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1 || n === 7) return true;
  let lastSeen = new Set();
  while (n != 1) {
    let sum = 0;
    while (n > 0) {
      const remainder = n % 10;
      sum += remainder ** 2;
      n = Math.floor(n / 10);
    }
    if (sum == 1 || sum == 7) return true;
    else if (lastSeen.has(sum)) return false;
    else lastSeen.add(sum);
    n = sum;
  }
  return true;
};
