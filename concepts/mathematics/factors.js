function factor(n) {
  let factors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (i !== Math.floor(n / i)) {
        factors.push(Math.floor(n / i));
      }
    }
  }
  return factors;
}

console.log(factor(16));
