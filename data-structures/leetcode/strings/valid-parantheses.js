/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = s.split("");
  const stack = [];
  let char = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(" || arr[i] == "[" || arr[i] == "{") {
      stack.push(arr[i]);
    } else if (arr[i] == ")" || arr[i] == "}" || arr[i] == "]") {
      char = stack.pop();
      if (
        (arr[i] == "}" && char !== "{") ||
        (arr[i] == "]" && char !== "[") ||
        (arr[i] == ")" && char !== "(")
      ) {
        return false;
      } else {
        continue;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};
