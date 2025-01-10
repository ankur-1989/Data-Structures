/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  let ways = 0;
  let leftSum = 0;
  let rightSum = 0;
  const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    rightSum = totalSum - leftSum;
    if (leftSum >= rightSum) ways++;
  }
  return ways;
};
