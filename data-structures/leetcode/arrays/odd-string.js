/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  const characterDigit = {};
  for (let i = 97; i < 123; i++) {
    characterDigit[String.fromCharCode(i)] = i;
  }
  const diffStore = [];
  const frequencyMap = {};
  let N = words.length;
  let m = words[0].length;

  for (let i = 0; i < N; i++) {
    // O(N*m);
    let diff = [];
    for (let j = 0; j < m - 1; j++) {
      diff.push(characterDigit[words[i][j + 1]] - characterDigit[words[i][j]]);
    }
    diffStore.push(diff.join(","));
  }
  for (let i = 0; i < diffStore.length; i++) {
    if (diffStore[i] in frequencyMap) frequencyMap[diffStore[i]]++;
    else frequencyMap[diffStore[i]] = 1;
  }
  let uniqueKey = "";
  for (const [key, frequency] of Object.entries(frequencyMap)) {
    if (frequency === 1) {
      uniqueKey = key;
      break;
    }
  }
  for (let i = 0; i < diffStore.length; i++) {
    if (diffStore[i] === uniqueKey) return words[i];
  }
  return -1;
};
