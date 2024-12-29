/** Access: Read/write element at an index in array is O(1)
 * Insert at the end of the array: O(1) but if the list is full then O(n)
 * Insert at any position - O(n)
 * Removing - O(n)
 * Good utilisation of the memory - LinkedList
 * Arrays are stored in Computer as one continguous block of memory.
 * Therefore, it takes constant time to access the elements from the array as
 * it is easy to find the location of the element if you know the base location
 *
 * Cons of Dynamic Array:
 *  - Costs involved in copying the data to new array
 *  - Wastage of memory sometimes.
 */

/** Linked List
 *
 * It does not store the data in contiguous memory locations.
 * therefore, we need to store the value and address to access the element in O(1) time.
 * therefore, node always consist of two blocks - Val & address.
 *
 *
 * May be good for Large data as it may take less memory than Array.
 * Accessing an element - O(n)
 * Insert - O(n)
 * Remove - O(n)
 *
 * Array vs LinkedList
 * Insert at the beginning - O(n) vs O(1)
 * At End - O(1) if array is not full otherwise O(n) vs O(n)
 * at ith position - O(n) vs O(n)
 *
 * Array is easy to use.
 * LinkedList is more prone to errors - segmentation fault, memory leak
 */
