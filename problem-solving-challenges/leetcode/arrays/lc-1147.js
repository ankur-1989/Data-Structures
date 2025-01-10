/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let largest = -Infinity;
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
      index = i;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (!(largest >= 2 * nums[i]) && i !== index) return -1;
  }
  return index;
};
