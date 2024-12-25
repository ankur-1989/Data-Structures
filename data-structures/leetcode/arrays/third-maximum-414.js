/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // O(n logn)
  nums.sort((a, b) => b - a);
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;
  if (nums.length <= 2) return nums[0];
  firstMax = nums[0];
  let i = 1;

  while (i < nums.length) {
    if (nums[i] < firstMax && nums[i] > secondMax) {
      secondMax = nums[i];
      break;
    }
    i++;
  }

  if (secondMax !== -Infinity) {
    while (i < nums.length) {
      if (nums[i] < secondMax && nums[i] > thirdMax) {
        thirdMax = nums[i];
        break;
      }
      i++;
    }
  }

  return thirdMax !== -Infinity ? thirdMax : firstMax;
};

thirdMax([1, 2, 3]);
