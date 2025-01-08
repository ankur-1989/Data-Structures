/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  let n = nums.length;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let average = sum / k;
  let maxAverage = average;
  if (k === n) return maxAverage;

  for (let right = k; right < n; right++) {
    sum += nums[right] - nums[right - k];
    average = sum / k;
    if (average > maxAverage) maxAverage = average;
  }

  return maxAverage;
};
