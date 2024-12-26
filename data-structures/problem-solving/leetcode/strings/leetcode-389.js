/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const sArray = s.split("");
  sArray.sort();
  sArray.join("");
  const tArray = t.split("");
  tArray.sort();
  tArray.join("");
  let i = 0;
  j = 0;
  while (i < sArray.length && j < tArray.length) {
    if (sArray[i] !== tArray[j]) return tArray[j];
    i++;
    j++;
  }
  return tArray[j];
};
