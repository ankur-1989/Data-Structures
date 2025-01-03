/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const doubles = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (
      doubles.has(2 * arr[i]) ||
      (arr[i] % 2 === 0 && doubles.has(Math.floor(arr[i] / 2)))
    )
      return true;
    else doubles.add(arr[i]);
  }
  return false;
};
