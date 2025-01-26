/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const n = nums.length;
  const mt = Math.floor(n / 3) + 1;
  const ans = [];
  let el1 = -Infinity;
  let cnt1 = 0;
  let cnt2 = 0;
  let el2 = -Infinity;
  for (let i = 0; i < n; i++) {
    if (cnt1 === 0 && nums[i] !== el2) {
      cnt1 = 1;
      el1 = nums[i];
    } else if (cnt2 == 0 && nums[i] !== el1) {
      cnt2 = 1;
      el2 = nums[i];
    } else if (nums[i] === el1) cnt1++;
    else if (nums[i] === el2) cnt2++;
    else {
      cnt1--;
      cnt2--;
    }
  }

  cnt1 = 0;
  cnt2 = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === el1) cnt1++;
    if (nums[i] === el2) cnt2++;
  }

  if (cnt1 >= mt) {
    ans.push(el1);
  }
  if (cnt2 >= mt) {
    ans.push(el2);
  }

  return ans;
};
