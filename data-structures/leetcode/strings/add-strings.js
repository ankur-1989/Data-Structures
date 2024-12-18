/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0;
  let result = "";
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 && j >= 0) {
    let sum = +num1[i] + +num2[j] + carry;
    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }
    result = sum + result;
    i--;
    j--;
  }

  while (i >= 0) {
    let sum = +num1[i] + carry;
    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }
    result = sum + result;
    i--;
  }
  while (j >= 0) {
    let sum = +num2[j] + carry;
    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }
    result = sum + result;
    j--;
  }
  if (carry > 0) result = carry + result;
  return result;
};
