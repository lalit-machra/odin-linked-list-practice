class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node1 = new Node();
    node1.value = value;
    if (this.head === null) {  // empty list
      this.head = node1;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      if (temp.next === null) {
        temp.next = node1;
      } else {
        console.log("linked list has no node with next property as null");
      }
    }
    return node1;
  }

  prepend(value) {
    let node2 = new Node();
    node2.value = value;
    node2.next = this.head;
    this.head = node2;
    return node2;
  }

  size() {
    if (this.head === null) return 0;  // no nodes in list
    let sum = 0;
    let temp = this.head;
    while (temp !== null) {     // temp will become null when it goes beyond last node
      sum += 1;
      temp = temp.next;
    }
    return sum;
  }

  head() {
    return this.head;
  }

  tail() {
    if (this.head === null) return null;
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }

  at(index) {
    if (this.head === null) return null;   // empty list
    let ind = 0;
    let temp = this.head;
    while (temp !== null) {
      if (index === ind) {
        return temp;
      }
      ind++;
      temp = temp.next;
    }
    // If index is out of bounds
    if (index >= ind) {
      return null;
    }
  }

  pop() {
    if (this.head === null) return null;
    let temp = this.head;
    while (temp.next.next !== null) {  // go till second last element
      temp = temp.next;
    }
    let poppedNode = temp.next;
    temp.next = null;   // last node is no more referenced, hence it is lost in memory
    return poppedNode;
  }

  contains(value) {
    if (this.head === null) return false;
    let temp = this.head;
    while (temp !== null) {
      if (value === temp.value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  find(value) {
    if (this.head === null) return null;
    let ind = 0
    let temp = this.head;
    while(temp != null) {
      if (value === temp.value) {
        return ind;
      }
      ind++;
      temp = temp.next;
    }
    return null;
  }

  toString() {
    if (this.head === null) return null;
    let temp = this.head;
    let listString = '';
    while (temp != null) {
      listString = listString.concat("( ", temp.value, " ) -> ");
      if (temp.next === null) {
        listString = listString.concat("null");
      }
      temp = temp.next;
    }
    return listString;
  }

  insertAt(value, index) {
    let size = this.size();
    if (this.head === null || index === 0) {   // Can't add node to any other position than 0th index in empty list
      return this.prepend(value);
    } else if (index >= size) {   // If new node to be inserted at last index or greater than that, just append it
      return this.append(value);
    }

    let ind = 0;
    let temp = this.head;
    while (temp !== null) {   // Only required to add new node in between two nodes, other cases are already dealt with
      if ((index - 1) === ind) {
        let node3 = new Node();
        node3.value = value;
        node3.next = temp.next;
        temp.next = node3;
        return node3;
      }
      ind++;
      temp = temp.next;
    }
    // Faulty values of index
    return null;
  }

  removeAt(index) {
    let size = this.size();
    if (this.head === null || index >= size) return null;

    let ind = 0;
    let removedNode;
    let temp = this.head;
    while (temp !== null) {
      if (index === ind && ind === 0) {   // node at 0th index
        removedNode = temp;
        this.head = temp.next;
        temp.next = null;
        return removedNode;
      } else if (index === (size - 1)) {   // remove last node
        return this.pop();
      } else {   // remove node from middle indices
        if ((index - 1) === ind) {
          removedNode = temp.next;
          temp.next = temp.next.next;
          return removedNode;
        }
      }
      ind++;
      temp = temp.next;
    }
    // Faulty values of index
    return null;
  }
}
