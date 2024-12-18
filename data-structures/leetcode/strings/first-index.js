/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// Find the Index of the First Occurrence in a String
var strStr = function (haystack, needle) {
  let i = 0;
  while (haystack.length - i + 1 >= needle.length) {
    if (haystack.substr(i, needle.length) === needle) {
      return i;
    }
    i++;
  }
  return -1;
};

strStr("sadbutsad", "sad");
