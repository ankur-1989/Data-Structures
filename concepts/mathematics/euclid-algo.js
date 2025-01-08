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

// recursive approach
const gcdR = (num1, num2) => {
  if(num1 === num2) return num1;  
  if(num2 === 0) return num1;
  if(num1 < num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
    return gcdR(num2, num1 % num2);
  } else {
       return gcdR(num2, num1 % num2);
  }
}

console.log(gcdR(105, 350));