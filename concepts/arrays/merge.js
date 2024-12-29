function mergeSortedArray(arr1, arr2) {
  let i = 0,
    j = 0;
  const sortedArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }
  return sortedArray;
}

const arr1 = [1, 4, 5, 6];
const arr2 = [2, 4, 6, 7];
const merged = mergeSortedArray(arr1, arr2);
console.log(merged);
module.exports = {
  mergeSortedArray,
};
