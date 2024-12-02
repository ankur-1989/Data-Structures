var isPalindrome = function (x) {
  // O(n) && O(n)
  return String(x) === String(x).split("").reverse().join("");
};

var isPalindrome2 = function (x) {
  if (x < 0) return false;
  if (x % 10 === 0 && x !== 0) return false;
  let reverse = 0;
  const original = x;
  while (x > 0) {
    const lastDigit = x % 10;
    reverse = reverse * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
  if (reverse === original) return true;
  return false;
};

console.log(isPalindrome2(121));
console.log(isPalindrome2(-121));
console.log(isPalindrome2(10));
console.log(isPalindrome2(101));
console.log(isPalindrome2(1111));
