module.exports = {
  //param A : array of integers
  //return an integer
  modExp: function (base, exp, mod) {
    let result = BigInt(1);
    base = BigInt(base) % BigInt(mod);

    while (exp > 0) {
      // If exp is odd, multiply the base with result
      if (exp % 2 === 1) {
        result = (result * base) % BigInt(mod);
      }
      // Square the base and reduce exp by half
      base = (base * base) % BigInt(mod);
      exp = Math.floor(exp / 2);
    }

    return result;
  },
  compute: function (A) {
    const MOD = 1000000007n; // BigInt for modulo
    const length = A.length;
    const power = this.modExp(2, length, MOD); // Compute 2^length % MOD
    return (power - 1n + MOD) % MOD; // Ensure result is non-negative
  },
  solve: function (A) {
    return this.compute(A).toString();
  },
};
