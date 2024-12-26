/** Merge Sort
 * It is not a in-place sorting algo.
 * recursive.
 * stable
 * Divide and conquer
 */

function mergeSort(arr) {
  // O(n logn)
  if (arr.length < 2) return arr;
  let midIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midIndex);
  let rightArr = arr.slice(midIndex, arr.length);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let leftIndex = 0;
  let rightIndex = 0;
  let resultArr = [];

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  return resultArr.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
}

console.log(mergeSort([1, 5, 3, 7, 9, 2, 10]));
