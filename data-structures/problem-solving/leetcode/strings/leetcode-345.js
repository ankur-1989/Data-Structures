/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let i = 0;
  let j = s.length - 1;
  const arr = s.split("");
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  while (i < j) {
    if (!vowels.has(arr[i]) && !vowels.has(arr[j])) {
      i++;
      j--;
    } else if (vowels.has(arr[i]) && !vowels.has(arr[j])) {
      j--;
    } else if (!vowels.has(arr[i]) && vowels.has(arr[j])) {
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
