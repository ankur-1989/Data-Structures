function firstOccurence(arr, target) {
  // O(logn)
  let low = 0;
  let high = arr.length - 1;
  let result = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      result = mid;
      high = mid - 1;
    } else if (target < arr[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return result;
}
