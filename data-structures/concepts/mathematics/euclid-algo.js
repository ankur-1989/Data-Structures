function gcd(a, b) {
  let dividend = a;
  let divisor = b;
  while (divisor !== 0) {
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }
  return dividend;
}

console.log(gcd(105, 350));
