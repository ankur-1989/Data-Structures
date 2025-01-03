var containsDuplicate = function (nums) {
  // O(n) and O(n)
  return nums.length !== new Set(nums).size;
};
