function isPrime(n) {
  //a number which can be exactly divided by two numbers.
  if (n === 2) return true;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(19));

// count all the prime numbers upto n
function countPrime(n) {
  let primes = [];
  for (let i = 0; i <= n; i++) {
    primes[i] = 1;
  }
  primes[0] = 0;
  primes[1] = 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // O(n loglogn)
    if (primes[i] === 1) {
      for (let j = 2; j * i <= n; j++) {
        primes[j * i] = 0;
      }
    }
  }
}
