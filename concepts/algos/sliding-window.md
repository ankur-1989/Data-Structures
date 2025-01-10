1. Used for finding subarray in an array with some given conditions.
2. subset of dynamic programming.
3. Time Complexity - O(n) and space complexity - O(1)
4. Things we iterate over sequentially.
   1. Contiguous sequence  of elements.
   2. Strings, arrays and linked list.
   3. min, max, longest, shortest and contained
   4. may be we need to calculate something
   5. Question Variants
      1. Fixed size Example - max sum subarray of size k
      2. Dynamic variant - smallest sum >= to some value S
      3. Dynamic variant with some auxiliary data structure.
         1. Longest substring type

### Problems

1. Find the subarrays that add up to 9
2. Given an array , find the maximum sum subarray of size k - statically sized sliding window
3. Given an array, find all the subarrays with the given sum - works well for positive numbers only
4. Given an array, find the maximum consecutive sequence of 1's by converting at most k times 0 to 1 - keep flipping until you reach the limit, if you reach the limit shift left and check again.
5. Given a string and n characters, find a shortest substring that contains all the desired characters.

Difference between subarray, substring, subsequence and subset.

Subarrays:

1. Order matters in subarray
2. empty array is a subarray
3. full array is also a subarray
4. should be contiguous
5. can not have duplicates in subarrays

Substrings:

1. same as subarray but in the context of strings.
2. made up of only characters.
3. all rules apply here which made in subarrays.

Subsequence:

1. a generalized subarray but contiguity rule does not apply here.
2. element order need to be preserved.
3. rest rules applies.

Subset:

1. all the elements of set are contained.
2. order and contiguity does not matter.
3. sets do not allow duplicate elements as well.
4.
