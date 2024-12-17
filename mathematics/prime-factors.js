function primeFactors(n) {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      let count = 0;
      while (n % i === 0) {
        n = n / i;
        count++;
      }
      console.log(i, count);
    }
    if (n !== 1) {
      console.log(n, 1);
    }
  }
}

primeFactors(24);
