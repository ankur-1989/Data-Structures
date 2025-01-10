/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let nextGreatestElementPos = -1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (i < nextGreatestElementPos) {
      arr[i] = arr[nextGreatestElementPos];
    } else {
      nextGreatestElementPos = findGreatestElement(arr, i + 1);
      arr[i] = arr[nextGreatestElementPos];
    }
  }
  arr[arr.length - 1] = -1;
  return arr;
};

const findGreatestElement = (arr, start) => {
  let max = -Infinity;
  let pos = -1;
  for (let i = start; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      pos = i;
    }
  }
  return pos;
};

var replaceElements = function (arr) {
  const len = arr.length;
  let max = -1;
  for (let i = len - 1; i >= 0; i--) {
    let curr = arr[i];
    arr[i] = max;
    if (curr > max) {
      max = curr;
    }
  }
  return arr;
};
