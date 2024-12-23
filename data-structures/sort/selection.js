/** It checks for the smallest element in each pass and keep it starting position incrementally. */
function selection(arr) {
  // O(n**2)
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestElement = arr[i];
    let position = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallestElement) {
        smallestElement = arr[j];
        position = j;
      }
    }
    arr[position] = arr[i];
    arr[i] = smallestElement;
  }
  return arr;
}

console.log(selection([64, 25, 12, 22, 11]));
console.log(selection([-1, 25, 12, 22, 0]));
