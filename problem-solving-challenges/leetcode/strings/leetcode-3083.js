/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  const reverse = s.split("").reverse().join("");
  let i = 0;
  while (i < reverse.length) {
    const substr = reverse.substring(i, i + 2);
    if (substr.length === 2 && s.includes(substr)) return true;
    i += 1;
  }
  return false;
};
