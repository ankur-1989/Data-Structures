/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let i = 0,
    j = 0;
  let mergedString = "";
  while (i < word1.length && j < word2.length) {
    mergedString = mergedString + word1[i];
    mergedString = mergedString + word2[j];
    i++;
    j++;
  }
  mergedString += word1.length > word2.length ? word1.slice(i) : word2.slice(j);
  return mergedString;
};

console.log(mergeAlternately("abcd", "pqrs"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
