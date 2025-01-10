module.exports = {
  //param A : string
  //param B : integer
  //return a strings
  solve: function (A, B) {
    let S = [];
    for (let i = 0; i < A.length; ) {
      let char = A[i];
      let count = 0;
      while (i < A.length && A[i] === char) {
        i++;
        count++;
      }
      if (count < B || count > B) {
        for (let j = 0; j < count; j++) {
          S.push(char);
        }
      } else {
        // If count equals B, do not add these characters (remove consecutive B duplicates)
        continue;
      }
    }
    return S.join("");
  },
};
