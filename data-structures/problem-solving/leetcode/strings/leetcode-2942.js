/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  const present = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) present.push(i);
  }
  return present;
};
