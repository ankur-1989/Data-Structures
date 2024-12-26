module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    const digits = /\d/;
    const lowerCase = /[a-z]/;
    const upperCase = /[A-Z]/;
    const specialCase = /[^\w\s]/;
    const hasDigit = digits.test(A);
    const isLengthValid = A.length >= 8 && A.length <= 15;
    const hasUpperCase = upperCase.test(A);
    const hasLowerCase = lowerCase.test(A);
    const hasSpecialCase = specialCase.test(A);

    if (
      hasDigit &&
      isLengthValid &&
      hasUpperCase &&
      hasLowerCase &&
      hasSpecialCase
    )
      return 1;
    return 0;
  },
};
