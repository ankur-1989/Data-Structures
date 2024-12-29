/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  let i = 1;
  while (arr[i] - arr[i - 1] > 0 && i < arr.length) {
    i++;
  }
  if (i === 1) return false;
  if (arr[i] - arr[i - 1] === 0) return false;
  if (i === arr.length) return false;
  i -= 1;
  while (arr[i] - arr[i + 1] > 0 && i < arr.length) {
    i++;
  }
  if (arr[i] - arr[i + 1] === 0) return false;
  if (arr[i] - arr[i + 1] < 0) return false;
  return true;
};
