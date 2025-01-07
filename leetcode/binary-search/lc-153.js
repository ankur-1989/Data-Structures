/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let N = nums.length;
  let high = N - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let next = (mid + 1) % N;
    let prev = (mid + N - 1) % N;
    if (nums[low] < nums[high]) return nums[low];
    if (nums[mid] <= nums[next] && nums[mid] <= nums[prev]) return nums[mid];
    if (nums[mid] <= nums[high]) high = mid - 1;
    else if (nums[mid] >= nums[low]) {
      low = mid + 1;
    }
  }
  return -1;
};
