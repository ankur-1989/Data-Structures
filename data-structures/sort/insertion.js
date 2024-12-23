/** not the best sorting algo but little efficient than bubble sort and selection sort.
 *
 * we are dividing the array in two sets. sorted and unsorted.
 *and it happens in-place.
 */

function insertion(arr) {
  // O(n**n)
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    j = i;
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

console.log(insertion([7, 2, 9, 5, 1]));
