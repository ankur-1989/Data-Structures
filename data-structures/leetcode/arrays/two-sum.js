function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in map) {
      return [i, map[diff]];
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
