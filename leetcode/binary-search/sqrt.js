module.exports = {
  //param A : integer
  //return an integer
  sqrt: function (A) {
    let low = 1;
    let high = Math.floor(A / 2);
    if (A === 0) return 0;
    if (A === 1) return 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (mid * mid === A) return mid;
      else if (mid * mid < A) {
        if ((mid + 1) * (mid + 1) > A) return mid;
        else low = mid + 1;
      } else high = mid - 1;
    }
    return 0;
  },
};
