/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let concatenation = "";
  for (let i = 0; i < words.length && concatenation.length < s.length; i++) {
    concatenation += words[i];
  }
  return s === concatenation;
};
