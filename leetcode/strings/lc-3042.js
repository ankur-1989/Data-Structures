/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      count += isPrefixAndSuffix(words[i], words[j]) ? 1 : 0;
    }
  }
  return count;
};

const isPrefixAndSuffix = (str1, str2) => {
  if (str1 === str2) return true;
  return (
    str2.indexOf(str1) === 0 &&
    str2.lastIndexOf(str1) === str2.length - str1.length
  );
};
