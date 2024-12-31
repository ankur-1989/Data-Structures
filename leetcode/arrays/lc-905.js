/**
 * @param {number[]} nums
 * @return {number[]}
 * Time: O(n)
 * Space: O(N)
 * TODO: try quick sort can save space complexity
 */
var sortArrayByParity = function (nums) {
  let odds = [];
  let writer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      nums[writer] = nums[i];
      writer++;
    } else {
      odds.push(nums[i]);
    }
  }
  return nums.slice(0, writer).concat(odds);
};
