/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(number) {
  if (number < 0) return NaN;
  if (number === 0 || number === 1) return number;

  let start = 0,
    end = Math.floor(number / 2);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const square = mid * mid;

    if (square === number) return mid;
    if (square < number) start = mid + 1;
    else end = mid - 1;
  }
  return Math.floor((start + end) / 2);
}
