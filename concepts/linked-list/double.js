/** Double Linked List applications
 *
 * 1. Webbrowsers are using it for forward and backward navigation.
 * 2. Music players for song list.
 * 3. Undo / redo
 * 4. Cache implementation for MRU and LRU
 * 5. operating System by thread schedulers
 * 6. Image viewer for forward and backward images.
 * 7. Memory Management efficient management of free memory blocks.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// insert At begin or head
function insertAtHead() {
  const newNode = new Node(5);
}
// insert at end
// insert at a position
// print linked list in reverse order
// traverse would be same as in Single Linked List
