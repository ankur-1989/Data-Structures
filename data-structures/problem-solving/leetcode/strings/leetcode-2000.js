/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  // need index to reverse the string.
  const index = word.indexOf(ch);
  if (index === -1) return word;
  return reverse(word, index + 1);
};

const reverse = (s, k) => {
  let i = 0;
  let j = k - 1;
  const str = s.split("");
  while (i < j) {
    const temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    i++;
    j--;
  }
  return str.join("");
};
