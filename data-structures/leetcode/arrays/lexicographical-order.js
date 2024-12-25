module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    let i = 0;
    for (; i < A.length; i++) {
      if (A[i] < A[A.length - 1]) break;
    }
    return [...A.slice(0, i), ...A.slice(i).reverse()];
  },
};
