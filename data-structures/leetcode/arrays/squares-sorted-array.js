var sortedSquares = function (nums) {
  // O(n) + O(nlogn)
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  return nums.sort((a, b) => a - b);
};

// split and merge
var sortedSquares2 = function (nums) {
  // O(n)
  let nonZeroIndex = -1;

  if (!nums) return nums;
  if (nums[0] >= 0) return nums.forEach((element) => element * element);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      nonZeroIndex = i;
      break;
    }
  }

  for (let i = 0; i < nonZeroIndex / 2; i++) {
    [nums[i], nums[nonZeroIndex - i - 1]] = [
      nums[nonZeroIndex - i - 1],
      nums[i],
    ];
  }
  nums = nums.map((element) => element * element);
  let lt = 0;
  let result = [];
  let rt = nonZeroIndex;
  while (lt < nonZeroIndex && rt < nums.length) {
    if (nums[lt] < nums[rt]) {
      result.push(nums[lt]);
      lt++;
    } else {
      result.push(nums[rt]);
      rt++;
    }
  }

  return [...result, ...(nums[lt] ? nums.slice(lt) : nums.slice(rt))];
};

console.log(sortedSquares2([-4, -1, 0, 3, 10]));

// absolute merge
const sortedSquare3 = function (nums) {
  const result = [];

  for (let i = 0, j = nums.length - 1; i <= j; ) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      result.push(nums[i] * nums[i]);
      i++;
    } else {
      result.push(nums[j] * nums[j]);
      j--;
    }
  }
  return result.reverse();
};

console.log(sortedSquare3([-4, -1, 0, 3, 10]));
