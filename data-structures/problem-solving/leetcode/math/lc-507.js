/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  // find all the divisors
  // loop through the divisors to get the sum
  // check if sum is equal to num or not
  if (num === 1) return false;
  const divisors = [1];
  let sum = 0;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      divisors.push(Math.floor(num / i));
    }
  }
  for (let i = 0; i < divisors.length; i++) {
    sum += divisors[i];
  }
  if (sum === num) return true;
  return false;
};
