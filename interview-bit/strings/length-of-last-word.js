module.exports = {
  //param A : string
  //return an integer
  lengthOfLastWord: function (A) {
    let count = 0;
    let i = A.length - 1;

    while (i >= 0) {
      if (A[i] !== " ") {
        break;
      }
      i--;
    }
    while (i >= 0 && A[i] !== " ") {
      count += 1;
      i--;
    }
    return count;
  },
};
