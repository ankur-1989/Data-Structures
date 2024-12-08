function isAnagram(s, t) {
  // O(n) O(n)
  // anagram - same length and same characters. order can be different.
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
}

// This can be solved with O(1) when taken an array of 26 characters in that case we will take constant space.

console.log(isAnagram("jar", "jam"));
console.log(isAnagram("racecar", "carrace"));
