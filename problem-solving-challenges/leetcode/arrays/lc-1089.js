/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArr.push(arr[i]);
      newArr.push(0);
    } else {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = newArr[i];
  }
};

var duplicateZeros = function (arr) {
  const newArr = [];
  let zeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeros++;
  }
  let i = arr.length - 1,
    j = arr.length + zeros - 1;
  while (i !== j) {
    insert(arr, i, j--);
    if (arr[i] === 0) {
      insert(arr, i, j--);
    }
    i--;
  }
};

const insert = (arr, i, j) => {
  if (j < arr.length) {
    arr[j] = arr[i];
  }
};
