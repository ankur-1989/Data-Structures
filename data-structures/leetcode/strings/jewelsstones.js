/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  let frequency = {};
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] in frequency) {
      frequency[stones[i]]++;
    } else {
      frequency[stones[i]] = 1;
    }
  }

  for (let i = 0; i < jewels.length; i++) {
    if (jewels[i] in frequency) {
      count += frequency[jewels[i]];
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
