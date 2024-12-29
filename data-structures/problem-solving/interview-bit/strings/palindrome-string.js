module.exports = {
  //param A : string
  //return an integer
  isPalindrome: function (A) {
    const S = A.replace(/\W+/g, "").toLowerCase();
    return S.split("").reverse().join("") === S ? 1 : 0;
  },
};
