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
  }

  prepend(value) {
    let node2 = new Node();
    node2.value = value;
    if (this.head === null) {
      this.head = node2;
    } else {
      node2.next = this.head;
      this.head = node2;
    }
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
}
