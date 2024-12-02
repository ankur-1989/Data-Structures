/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // O(n)
  let lastNonZeroIndex = 0;

  // Move all non-zero elements to the front of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex++;
    }
  }

  // Fill the rest of the array with zeros
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};
