/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // need to maintain the count of flipped zero
  // need to maintain the count of consecutive ones.

  let maxLength = 0;
  let left = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    // If we encounter a zero, increment zeroCount
    if (nums[right] === 0) {
      zeroCount++;
    }

    // If there are more than one zero, shrink the window
    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // Calculate the max length of the window
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
