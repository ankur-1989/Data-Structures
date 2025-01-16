/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  /**
    Bruteforce: 
    1. scan thru the array
    2. create two auxiliary arrays - one for positive and one for negative.
    3. store the positve in positive array and negative in negative array.
    4. then merge 
     */
  /** Optimal solution
       two pointers - one for positive and one for negative. 
      */
  let positives = [];
  let negatives = [];
  let ans = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      positives.push(nums[i]);
    } else {
      negatives.push(nums[i]);
    }
  }
  let p = 0,
    n = 0;
  while (p < len / 2) {
    ans.push(positives[p++]);
    ans.push(negatives[n++]);
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  /**
    Bruteforce: 
    1. scan thru the array
    2. create two auxiliary arrays - one for positive and one for negative.
    3. store the positve in positive array and negative in negative array.
    4. then merge 
     */
  /** Optimal solution
       two pointers - one for positive and one for negative. 
      */
  let ans = [];
  let positive = 0;
  let negative = 1;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      ans[positive] = nums[i];
      positive += 2;
    } else {
      ans[negative] = nums[i];
      negative += 2;
    }
  }
  return ans;
};
