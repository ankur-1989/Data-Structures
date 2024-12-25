var missingNumber = function (nums) {
  let res = undefined;
  for (let i = 0; i <= nums.length; i++) {
    res = res ^ i;
  }
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};
