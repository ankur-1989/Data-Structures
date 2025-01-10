module.exports = {
  //param A : string
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let i = 0;
    let maxCount = 0;

    while (i < A.length) {
      let substring = "";
      let count = 0;
      if (A.substring(i).length < B) {
        subString = A.substring(i);
      } else {
        const j = i + B;
        subString = A.substring(i, j);
      }
      for (let k = 0; k < subString.length; k++) {
        if (subString[k] === "a") count++;
      }
      if (count > maxCount) maxCount = count;
      i = i + B;
    }
    return maxCount;
  },
};
