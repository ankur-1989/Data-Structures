/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  //O(N)
  let maxCount = 0;
  let i = 0;
  while (i < nums.length) {
    let j = i;
    let count = 0;
    while (nums[j] !== 0 && j < nums.length) {
      j++;
      count++;
    }
    if (count > maxCount) maxCount = count;
    i = j + 1;
  }
  return maxCount;
};
