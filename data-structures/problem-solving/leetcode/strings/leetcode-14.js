/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // O(N * M)
  const target = strs[0];
  let longest = Infinity;
  for (let i = 1; i < strs.length; i++) {
    let count = 0;
    let j = 0;
    const check = strs[i];
    while (check[j] === target[j] && j < check.length) {
      count++;
      j++;
    }
    if (count < longest) longest = count;
  }
  return target.substring(0, longest);
};

/** Other approaches
 * Binary search
 * Horizontal scanning
 *  taking a prefix and reducing the length of prefix.
 */
