/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // Brute force O(m+n)

  const m = nums1.length;
  const n = nums2.length;

  // merge the arrays
  let merged = [];
  let i = 0,
    j = 0;
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }
  merged =
    i < m ? [...merged, ...nums1.slice(i)] : [...merged, ...nums2.slice(j)];

  if ((m + n) % 2 === 0) {
    const pos1 = (m + n) / 2;
    const pos2 = pos1 - 1;
    return (merged[pos1] + merged[pos2]) / 2;
  } else {
    const pos = Math.floor((m + n) / 2);
    return merged[pos];
  }
};

const median = findMedianSortedArrays([-1000, -1, -23], [3, 4]);
console.log(median);
