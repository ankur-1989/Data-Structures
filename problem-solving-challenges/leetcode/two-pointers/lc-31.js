/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const n = nums.length;
  let pivot;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivot = i;
      break;
    }
  }
  if (pivot === undefined) {
    return nums.reverse();
  }
  for (let i = n - 1; i > pivot; i--) {
    if (nums[i] > nums[pivot]) {
      const temp = nums[i];
      nums[i] = nums[pivot];
      nums[pivot] = temp;
      break;
    }
  }
  let i = pivot + 1;
  let j = n - 1;
  while (i < j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
};
