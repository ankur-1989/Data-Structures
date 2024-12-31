module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let count = 0;
    let stack = [];
    for (let char of A) {
      if (char === "(") {
        stack.push(char);
      } else if (char === ")") {
        if (stack.length === 0) count++;
        else stack.pop();
      }
    }
    if (stack.length > 0) count += stack.length;
    return count;
  },
};
