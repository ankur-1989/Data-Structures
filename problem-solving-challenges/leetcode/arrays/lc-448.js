/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const numbers = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (numbers.has(nums[i])) continue;
    else numbers.add(nums[i]);
  }
  const missing = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!numbers.has(i)) {
      missing.push(i);
    }
  }
  return missing;
};
