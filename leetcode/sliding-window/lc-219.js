/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // window size can be less than or equal to k but not more than k
  // needs to check if the element has been repeated for that we would need a set or something.
  if (k === 0) return false;
  let left = 0;
  let seen = new Map();
  for (let right = 0; right < nums.length; right++) {
    if (seen.has(nums[right])) {
      if (
        Math.abs(right - seen.get(nums[right])) <= k &&
        seen.get(nums[right]) !== right
      )
        return true;
      else seen.set(nums[right], right);
    } else {
      seen.set(nums[right], right);
    }
  }
  return false;
};
