function isPaying(arr, demand) {
  const max = 1 << arr.length;
  let subsetSum = 0;
  for (let k = 1; k < max; k++) {
    for (let i = 0; i < arr.length; i++) {
      if (k & (1 << i)) {
        subsetSum += arr[i];
      }
    }

    if (subsetSum === demand) return true;
    subsetSum = 0;
  }
  return false;
}

console.log(isPaying([2, 5, 7, 3, 4], 8));
