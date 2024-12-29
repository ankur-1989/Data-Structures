// not a stable sorting algo. In stable alog, relative order of records with equal key is prserved.

function partition(A, start, end) {
  // worst case O(n^2) // Average case O(n logn)
  let pivot = A[end];
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (A[i] <= pivot) {
      const temp = A[pIndex];
      A[pIndex] = A[i];
      A[i] = temp;
      pIndex++;
    }
  }
  const temp = A[pIndex];
  A[pIndex] = A[end];
  A[end] = temp;
  return pIndex;
}

function quickSort(A, start, end) {
  if (start < end) {
    const pIndex = partition(A, start, end);
    quickSort(A, start, pIndex - 1);
    quickSort(A, pIndex + 1, end);
  }
}
const array = [7, 2, 1, 5, 6, 8, 3, 4];
quickSort(array, 0, 7);
console.log(array);
