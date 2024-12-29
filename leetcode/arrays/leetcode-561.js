/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  // O(n logn)
  nums.sort((a, b) => a - b);
  const numPairs = nums.length / 2;
  let sum = 0;
  for (i = 0; i < nums.length; i = i + 2) {
    sum += Math.min(nums[i], nums[i + 1]);
  }
  return sum;
};
// if we use counting sort algo then it can be done in O(n+m)
// need to understand Counting Sort algo.
