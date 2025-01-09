/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let answer = [];
  answer[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }
  let suffixProduct = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixProduct *= nums[i + 1];
    answer[i] = answer[i] * suffixProduct;
  }
  return answer;
};

