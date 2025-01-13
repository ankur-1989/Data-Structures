/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let countingMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    countingMap.set(nums[i], (countingMap.get(nums[i]) || 0) + 1);
  }
  let sum = 0;
  for (let [key, value] of countingMap.entries()) {
    if (value === 1) sum += key;
  }
  return sum;
};
