/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const str = s.split(" ");
  str.sort((a, b) => +a[a.length - 1] - +b[b.length - 1]);
  return str.join(" ").replace(/[0-9]/g, "");
};
