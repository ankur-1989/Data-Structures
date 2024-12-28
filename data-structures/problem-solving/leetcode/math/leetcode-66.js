/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = digits.length - 1;
  let carry = 0;
  let sum = digits[i] + 1;
  if (sum > 9) {
    carry = Math.floor(sum / 10);
    digits[i] = sum % 10;
    i -= 1;
    while (carry !== 0 && i >= 0) {
      sum = digits[i] + carry;
      if (sum > 9) {
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        digits[i] = sum;
      } else {
        carry = 0;
        digits[i] = sum;
      }
      i--;
    }
    if (carry > 0) digits.unshift(carry);
  } else {
    digits[i] = sum;
  }
  return digits;
};
