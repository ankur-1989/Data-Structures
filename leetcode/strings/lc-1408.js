/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  // Brute Force Approach
  // run a nested loop and check for every word with every other word if it includes this word.
  // if it exists then add this word in the result array.
  // Time complexity of this brute force approach would be O(n*m)
  const results = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i == j) continue;
      if (words[j].includes(words[i])) {
        results.push(words[i]);
        break;
      }
    }
  }
  return results;
};
