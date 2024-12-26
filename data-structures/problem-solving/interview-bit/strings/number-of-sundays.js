module.exports = {
  //param A : string
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let count = 0;
    let map = {
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
      Sunday: 7,
    };
    count = Math.floor(B / 7);
    const remainder = B % 7;
    if (remainder === 0) return count;
    const left = 7 - map[A] + 1;
    if (left <= remainder) return count + 1;
    else return count;
  },
};
