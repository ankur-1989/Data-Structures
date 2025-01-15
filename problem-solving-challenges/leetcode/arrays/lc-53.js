/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // Brute force appoach is to generate all the arrays - O(N^2)
  // Kadane's algo
  const len = nums.length;
  let max_so_far = nums[0];
  let max_ending = nums[0];
  for (let i = 1; i < len; i++) {
    max_ending = Math.max(nums[i], max_ending + nums[i]);
    max_so_far = Math.max(max_so_far, max_ending);
  }
  return max_so_far;
};
