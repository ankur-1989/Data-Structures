/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const numberFrequency = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in numberFrequency) {
      numberFrequency[nums[i]]++;
    } else {
      numberFrequency[nums[i]] = 1;
    }
  }

  const sorted = Object.entries(numberFrequency)
    .sort((a, b) => (a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]))
    .map((e) => [+e[0], e[1]]);
  let ans = [];
  for (let ele of sorted) {
    while (ele[1] > 0) {
      ans.push(ele[0]);
      ele[1]--;
    }
  }
  return ans;
};
