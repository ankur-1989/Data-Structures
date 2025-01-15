/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // brute force is merge sort - O(NLogn)
  // Better solution would be to store the count
  // of 0,1 and 2 and then run the loop and set the value in their places.
  // Optimal - Dutch national flag algorithm
  // set 0's first
  let insertIndex = 0;
  let i = 0;
  insertIndex = setTarget(nums, 0, i, insertIndex);
  insertIndex = setTarget(nums, 1, insertIndex, insertIndex);
};

const setTarget = (nums, target, start, insertIndex) => {
  let i = start;
  const len = nums.length;
  while (i < len) {
    if (nums[i] === target) {
      nums[i] = nums[insertIndex];
      nums[insertIndex] = target;
      insertIndex++;
    }
    i++;
  }
  return insertIndex;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // brute force is merge sort - O(NLogn)
  // Better solution would be to store the count
  // of 0,1 and 2 and then run the loop and set the value in their places.
  // Optimal - Dutch national flag algorithm
  // set 0's first
  const len = nums.length;
  let low = 0;
  let mid = 0;
  let high = len - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      const temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;
      mid++;
      low++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      const temp = nums[high];
      nums[high] = nums[mid];
      nums[mid] = temp;
      high--;
    }
  }
};
