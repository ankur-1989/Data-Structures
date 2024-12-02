var myPow = function (x, n) {
  let result = 1;
  if (x === 0 && n !== 0) return 0;
  if (n == 0 || x == 1) return 1;
  result = x ** Math.abs(n);

  if (n < 0) return 1 / result;
  return result;
};

console.log(myPow(2.0, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2.0, -2));
console.log(myPow(-2.0, 2));
console.log(myPow(-2.0, 5));
console.log(myPow(2, 0));
console.log(myPow(2, 1));
console.log(myPow(0, -2));
console.log(myPow(0, 0));
console.log(myPow(1, -2147483648));
