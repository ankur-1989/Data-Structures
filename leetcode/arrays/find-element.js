// we have sorted circular array and need to find if the element exists in the array.
// simple solution is linear search but we will use binary search for efficient solution.
function findElement(arr, x) {
  const N = arr.length;
  let low = 0;
  let high = N - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) return mid;
    if (arr[mid] <= arr[high]) {
      if (x > arr[mid] && x <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (x >= arr[low] && x < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}

console.log(findElement([1], 1));
