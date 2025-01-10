/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let i = 0;
  let result = "";
  const n = s.length;
  const limit = 2 * k;
  while (i < s.length) {
    const j = i + 2 * k;
    let substring = "";
    const charactersLeft = s.substring(i).length;
    if (limit > charactersLeft && k < charactersLeft) {
      subString = s.substring(i);
      result += reverse(subString, k);
    } else {
      subString = s.substring(i, j);
      result += reverse(subString, k);
    }

    i = j;
  }
  return result;
};

const reverse = (str, k) => {
  let i = 0;
  let j = k - 1;
  const strArray = str.split("");
  while (i < j) {
    const temp = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = temp;
    i++;
    j--;
  }
  return strArray.join("");
};
