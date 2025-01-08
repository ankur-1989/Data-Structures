/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function (nums) {
  let maxValue = 0;
  const N = nums.length;

  for (let left = 0; left < N; left++) {
    let p = nums[left];
    let g = nums[left];
    let l = nums[left];
    for (let right = left + 1; right < N; right++) {
      const x = nums[right];
      p = product(p, x);
      g = gcd(g, x);
      l = lcm(l, x);
      if (p === g * l) {
        maxValue = Math.max(maxValue, right - left + 1);
      } else {
        break;
      }
    }
  }

  return maxValue;
};

const product = (num1, num2) => {
  return num1 * num2;
};

const lcm = (num1, num2) => {
  return (num1 * num2) / gcd(num1, num2);
};

const gcd = (num1, num2) => {
  if (num1 === num2) return num1;
  if (num2 === 0) return num1;
  if (num1 < num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
    return gcd(num2, num1 % num2);
  } else {
    return gcd(num2, num1 % num2);
  }
};
