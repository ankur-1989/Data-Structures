/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  /**
    1. Individual elements before prefix sum.
    2. 
     */
  let count = 0;
  let prefixSum = 0;
  let prefixSumFrequencyMap = { 0: 1 };
  for (let num of nums) {
    prefixSum += num;
    if (prefixSum - k in prefixSumFrequencyMap) {
      count += prefixSumFrequencyMap[prefixSum - k];
    }

    prefixSumFrequencyMap[prefixSum] =
      (prefixSumFrequencyMap[prefixSum] || 0) + 1;
  }
  return count;
};
