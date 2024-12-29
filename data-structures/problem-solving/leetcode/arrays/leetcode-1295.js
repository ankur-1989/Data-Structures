/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenDigitsCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let n = nums[i];
    while (n > 0) {
      n = Math.floor(n / 10);
      count++;
    }
    if (count % 2 === 0) evenDigitsCount += 1;
  }
  return evenDigitsCount;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenDigitsCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (
      (nums[i] >= 10 && nums[i] <= 99) ||
      (nums[i] >= 1000 && nums[i] <= 9999) ||
      nums[i] === 100000
    ) {
      evenDigitsCount += 1;
    }
  }
  return evenDigitsCount;
};
