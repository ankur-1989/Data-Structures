module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    const set = {};
    for (let i = 0; i < A.length; i++) {
      if (A[i] in set) {
        set[A[i]]++;
      } else {
        set[A[i]] = 1;
      }
    }
    for (let i = 0; i < A.length; i++) {
      if (set[A[i]] > 1) return A[i];
    }
    return -1;
  },
};
