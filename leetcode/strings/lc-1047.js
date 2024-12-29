/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
      continue;
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};
