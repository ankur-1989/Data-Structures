function findDuplicates(nums) {
  const n = nums.length - 1;
  let res = 0;
  for (let ele of nums) {
    res = res ^ ele;
  }
  if (!res) return nums[0];
  for (let i = 1; i <= n; i++) {
    res ^= i;
  }
  return res > n ? res - n : res;
}

function findDuplicate(nums) {
  // Step 1: Use Floyd's Tortoise and Hare algorithm to find intersection
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Step 2: Find the entry point of the cycle (duplicate)
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([1, 1, 2]));
console.log(findDuplicate([3, 3, 3, 3]));
console.log(findDuplicate([1, 4, 4, 2, 4]));
