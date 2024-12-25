var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let maxCount = 0;
  let count = 0;

  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] - sortedNums[i - 1] == 1) {
      count++;
    } else if (sortedNums[i] - sortedNums[i - 1] == 0) {
      count = count + 0;
    } else {
      if (count > maxCount) {
        maxCount = count;
      }
      count = 0;
    }
  }
  return maxCount > count ? maxCount + 1 : count + 1;
};

// const result = longestConsecutive([100, 4, 200, 1, 3, 2]);
const case2 = longestConsecutive([1, 2, 0, 1]);
// console.log(result);
console.log(case2);

module.exports = {
  longestConsecutive,
};
