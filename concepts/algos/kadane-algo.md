This algorithm is used to find the maximum sum of a contiguous subarray with in a one dimensional array of numbers which can include both positive and negative numbers.

Calculating the sum at each position:

Decision:

1. Either you can include the number at each position and extend the subarray.
2. or start a new subarray beginning at that position.

Keep the record of max_so_far and max_ending while iterating through the array. 

Related problems

* [ ] Maximum subarray sum
