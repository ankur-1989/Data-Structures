/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  for (let row of shift) {
    const amount = row[1] % s.length;
    switch (row[0]) {
      case 0:
        if (amount === 0) s = s;
        else {
          s = s.slice(amount) + s.slice(0, amount);
        }
        break;
      case 1:
        if (amount === 0) s = s;
        else {
          s = s.slice(-amount) + s.slice(0, s.length - amount);
        }
        break;
    }
  }
  return s;
};
