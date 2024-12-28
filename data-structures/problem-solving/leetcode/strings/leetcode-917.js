/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let i = 0;
  let j = s.length - 1;
  const arr = s.split("");
  const letters = /[a-zA-Z]/;
  while (i < j) {
    if (!letters.test(arr[i]) && !letters.test(arr[j])) {
      i++;
      j--;
    } else if (letters.test(arr[i]) && !letters.test(arr[j])) {
      j--;
    } else if (!letters.test(arr[i]) && letters.test(arr[j])) {
      i++;
    } else {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  return arr.join("");
};
