/** Sorting classifications
 * 1. Time Complexity
 * 2. Space Complexity
 * 3. Stability - preserve the relative order.
 * 4. Internal sort vs External sort - Ram vs external storage
 * 5. recursive or non-recursive
 */

function bubble(arr) {
  // O(n**2)

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubble([7, 2, 9, 5, 1]));
