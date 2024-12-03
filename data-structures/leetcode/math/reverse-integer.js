var reverse = function (x) {
  let rev = 0;
  let original = Math.abs(x);
  while (original > 0) {
    const last = original % 10;
    if (rev > Math.pow(2, 31) / 10 || (rev == Math.pow(2, 31) / 10 && last > 7))
      return 0;
    if (
      rev < Math.pow(2, -31) / 10 ||
      (rev == Math.pow(2, -31) / 10 && last < -8)
    )
      return 0;
    rev = rev * 10 + last;
    original = Math.floor(original / 10);
  }
  if (x < 0) return -rev;
  return rev;
};

/* var reverse = function (x) {
  let rev = 0;
  while (x !== 0) {
    let pop = x % 10;
    x = (x - pop) / 10;
    if (rev > Math.pow(2, 31) / 10 || (rev == Math.pow(2, 31) / 10 && pop > 7))
      return 0;
    if (
      rev < Math.pow(-2, 31) / 10 ||
      (rev == Math.pow(-2, 31) / 10 && pop < -8)
    )
      return 0;
    rev = rev * 10 + pop;
  }
  return rev;
}; */

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
