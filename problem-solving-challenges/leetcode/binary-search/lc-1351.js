/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  // Approach 1
  /** Use Binary search to find the index of first negative number for a row. 
    Then Subtract the index from the length of the row will give the count of negative numbers in that row.
    This way we can count all the negative number in = O(m . logn);
     */
  let count = 0;
  for (let row of grid) {
    const index = findNegativeIndex(row);
    if (index === -1) count += 0;
    else count += row.length - index;
  }
  return count;
};

const findNegativeIndex = (row) => {
  let low = 0;
  let high = row.length - 1;
  while (low <= high) {
    if (row[low] < 0) return low;
    let mid = Math.floor((low + high) / 2);
    if (row[mid] < 0) {
      if (row[mid - 1] < 0) {
        high = mid - 1;
      } else {
        return mid;
      }
    } else if (row[mid] >= 0) {
      if (row[mid + 1] >= 0) {
        low = mid + 1;
      } else {
        return mid + 1;
      }
    }
  }
  return -1;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  // Approach 2

  let count = 0;
  let n = grid[0].length;
  let negativeIndex = n - 1;
  for (let row of grid) {
    while (negativeIndex >= 0 && row[negativeIndex] < 0) {
      negativeIndex--;
    }
    count += n - (negativeIndex + 1);
  }
  return count;
};
