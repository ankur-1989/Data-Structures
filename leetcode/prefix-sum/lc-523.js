/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  // true if there is good sub array otherwise false.
  // good subarray is of length atleast 2 and sum of the subarray is a multiple of k
  // Brute force approach - O(N^2)
  for (let i = 0; i < nums.length; i++) {
    let prefixSum = nums[i];
    for (j = i + 1; j < nums.length; j++) {
      prefixSum += nums[j];
      if (prefixSum % k === 0) return true;
    }
  }
  return false;
};
// Optimized approach
var checkSubarraySum = function (nums, k) {
  // true if there is good sub array otherwise false.
  // good subarray is of length atleast 2 and sum of the subarray is a multiple of k
  // Brute force approach - O(N^2)
  for (let i = 0; i < nums.length; i++) {
    let prefixSum = nums[i];
    for (j = i + 1; j < nums.length; j++) {
      prefixSum += nums[j];
      if (prefixSum % k === 0) return true;
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  // true if there is good sub array otherwise false.
  // good subarray is of length atleast 2 and sum of the subarray is a multiple of k
  // Optimized approach - O(N)
  let remainders = { 0: -1 };
  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    if (prefixSum % k in remainders) {
      if (i - remainders[prefixSum % k] >= 2) return true;
    } else {
      remainders[prefixSum % k] = i;
    }
  }
  return false;
};
