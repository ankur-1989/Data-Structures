/*
Question: Given an array of integers, find the equilibrium index where the sum of elements 
on the left is equal to the sum of elements on the right. 
The equilibrium index is the index i where the sum of elements from 0 to i-1 is equal to the 
sum of elements from i+1 to the end of the array.
*/

function getEquiIndex(arr) {
  let leftSum = 0;
  let rightSum = -1;
  const totalSum = arr.reduce((curr, acc) => curr + acc);
  for (let i = 0; i < arr.length; i++) {
    if (leftSum === rightSum) {
      return i;
    } else {
      leftSum = leftSum + arr[i];
      rightSum = totalSum - leftSum;
    }
  }
}

module.exports = {
  getEquiIndex,
};
