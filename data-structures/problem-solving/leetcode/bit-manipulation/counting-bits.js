/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const output = [];
  for (let i = 0; i <= n; i++) {
    if (i == 0) {
      output.push(0);
    } else {
      const result = output[Math.floor(i / 2)] + (i % 2);
      output.push(result);
    }
  }
  return output;
};
