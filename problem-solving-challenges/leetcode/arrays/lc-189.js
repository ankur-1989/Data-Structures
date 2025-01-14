/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const N = nums.length;
  if (k % N === 0) return nums;
  k = k % N;
  nums = nums.reverse();
  nums = nums.slice(0, k - 1) + nums.slice(k, N);
};
