/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const original = [...heights];
  heights.sort((a, b) => a - b);
  let diffCount = 0;
  for (let i = 0; i < original.length; i++) {
    if (original[i] != heights[i]) {
      diffCount += 1;
    }
  }
  return diffCount;
};
