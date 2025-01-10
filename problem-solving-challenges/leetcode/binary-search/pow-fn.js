module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  pow: function (A, B, C) {
    const bigX = BigInt(x);
    const bigD = BigInt(d);
    let result = BigInt(1);
    let base = ((bigX % bigD) + bigD) % bigD; // Handle negative x

    let exp = BigInt(n);

    while (exp > 0) {
      if (exp % BigInt(2) === BigInt(1)) {
        result = (result * base) % bigD;
      }
      exp = exp / BigInt(2);
      base = (base * base) % bigD;
    }

    return Number(result);
  },
};
