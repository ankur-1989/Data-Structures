/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num = Math.floor(num / 2);
      steps += 1;
    } else {
      num -= 1;
      steps += 1;
    }
  }
  return steps;
};
