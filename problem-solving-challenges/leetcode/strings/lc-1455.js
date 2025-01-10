/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  // BruteForce - O(n^2)
  const words = sentence.split(" ");
  let found = Infinity;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < searchWord.length) continue;
    if (words[i].indexOf(searchWord) === 0) {
      return i + 1;
    }
  }
  return -1;
};

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 *
 * TWO pointers - O(N)
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let cwp = 1;
  let ci = 0;
  const len = sentence.length;
  const word = searchWord.length;
  if (!sentence || !searchWord || searchWord.length > sentence.length)
    return -1;
  while (ci < len) {
    while (sentence[ci] === " " && ci < len) {
      cwp++;
      ci++;
    }
    let mc = 0;
    while (sentence[ci] === searchWord[mc] && mc < word && ci < len) {
      mc++;
      ci++;
    }
    if (mc === word) return cwp;
    while (ci < len && sentence[ci] !== " ") ci++;
  }
  return -1;
};
