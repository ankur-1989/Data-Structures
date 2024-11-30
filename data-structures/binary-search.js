let array = [1, 4, 6, 7, 7, 9];
let start = 0;
let end = array.length - 1;
target = 10;

function binarySearch(arr, start, end, target) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return true;
  if (arr[mid] > target) return binarySearch(arr, start, mid - 1, target);
  if (arr[mid] < target) return binarySearch(arr, mid + 1, end, target);
}

const result = binarySearch(array, start, end, target);
console.log(result);
