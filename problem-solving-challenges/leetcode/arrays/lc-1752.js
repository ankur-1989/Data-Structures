/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let minIndex = -1;

  const len = nums.length;
  for (let i = 1; i < len; i++) {
    if (nums[i] >= nums[i - 1]) continue;
    else {
      minIndex = i;
      break;
    }
  }
  if (minIndex > -1 && nums[len - 1] > nums[0]) return false;
  if (minIndex === -1) return true;
  for (let i = minIndex + 1; i < len; i++) {
    if (nums[i] >= nums[i - 1]) continue;
    else return false;
  }
  return true;
};
