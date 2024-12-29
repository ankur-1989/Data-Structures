/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sFrequencyMap = {};
  const tFrequencyMap = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in sFrequencyMap) {
      sFrequencyMap[s[i]]++;
    } else {
      sFrequencyMap[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] in tFrequencyMap) {
      tFrequencyMap[t[i]]++;
    } else {
      tFrequencyMap[t[i]] = 1;
    }
  }

  for (key in sFrequencyMap) {
    if (key in tFrequencyMap && sFrequencyMap[key] === tFrequencyMap[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
