module.exports = {
  //param A : integer
  //return a strings
  // TODO: need to optimize the code.
  getNextNumber: function (lastNumber) {
    let nextNumber = [];
    for (let i = 0; i < lastNumber.length; ) {
      let character = lastNumber[i];
      let count = 0;
      while (lastNumber[i] === character && i < lastNumber.length) {
        count++;
        i++;
      }
      nextNumber.push(`${count}${character}`);
    }
    return nextNumber.join("");
  },
  countAndSay: function (A) {
    if (A == 1) return "1";
    let i = 2;
    let sequence = "1";
    while (i <= A) {
      sequence = this.getNextNumber(sequence);
      i++;
    }
    return sequence;
  },
};
