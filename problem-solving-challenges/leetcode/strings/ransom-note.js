/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let frequency = {};
  for (let i = 0; i < magazine.length; i++) {
    if (magazine[i] in frequency) {
      frequency[magazine[i]]++;
    } else {
      frequency[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (ransomNote[i] in frequency) {
      frequency[ransomNote[i]]--;
      if (frequency[ransomNote[i]] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

console.log(canConstruct("aa", "ab"));
