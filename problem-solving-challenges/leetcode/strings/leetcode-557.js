/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const A = s.split(" ");
  for (let i = 0; i < A.length; i++) {
    A[i] = reverse(A[i]);
  }
  return A.join(" ");
};

const reverse = (s) => {
  let i = 0;
  let j = s.length - 1;
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
