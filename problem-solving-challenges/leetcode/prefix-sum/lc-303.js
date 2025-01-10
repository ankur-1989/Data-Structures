/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  prefixArray = [];
  for (let index = 1; index < nums.length; index++) {
    nums[index] += nums[index - 1];
  }
  prefixArray = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (left === 0) return prefixArray[right];
  return prefixArray[right] - prefixArray[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
