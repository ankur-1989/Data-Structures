/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  //O(n)
  const str = s.split("");
  const number = /[0-9]/;
  for (let i = 0; i < str.length; i++) {
    if (number.test(str[i])) {
      str[i] = shift(str[i - 1], str[i]);
    }
  }
  return str.join("");
};
const shift = (chr, k) => {
  return String.fromCharCode(chr.charCodeAt(0) + +k);
};
