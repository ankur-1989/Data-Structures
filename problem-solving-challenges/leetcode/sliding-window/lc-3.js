/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = 0;
  if (s.length === 0) return 0;
  let max = 1;
  let map = new Map();
  while (end < s.length) {
    if (map.has(s[end]) && map.get(s[end]) >= start) {
      max = Math.max(max, end - start);
      start = map.get(s[end]) + 1;
      map.set(s[end], end);
    } else {
      map.set(s[end], end);
    }
    end++;
  }
  max = Math.max(max, end - start);
  return max;
};
