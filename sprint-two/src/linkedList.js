var LinkedList = function() { // O(1) - constant
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { // O(1) - constant

    if (list.tail !== null) {
      var previousTail = list.tail;
      list.tail = Node(value);
      previousTail.next = list.tail;
    } else {
      list.tail = Node(value);
      list.head = list.tail;
    }
  };

  list.removeHead = function() { // O(1) - constant
    var previousHead = list.head;
    list.head = list.head.next;
    return previousHead.value;
  };

  list.removeTail = function(node) {  // O(n) - linear
    node = node || this.head;
    if (node.next.next === null) {
      var result = list.tail.value;
      list.tail = node;
      node.next = null;
      return result;
    } else {
      list.removeTail(node.next);
    }
  };

  list.contains = function(target, node) { // O(n) - linear
    node = node || list.head;
    if (node.value === target) {
      return true;
    } else if (node.next === null) {
      return false;
    } else {
      return list.contains(target, node.next);
    }
  };

  return list;
};

var Node = function(value) { // O(1) - constant 
  var node = {};

  
  node.value = value;
  node.prevous = null;
  node.next = null;

  return node;
};


var DoublyLinkedList = function() { // O(1) - constant
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { // O(1) - constant

    if (list.tail !== null) {
      var previousTail = list.tail;
      list.tail = Node(value);
      previousTail.next = list.tail;
      list.tail.previous = previousTail;
    } else {
      list.tail = Node(value);
      list.head = list.tail;
    }
  };

  list.addToHead = function(value) {  // O(1) - constant
    var currentHead = list.head;
    var newHead = Node(value);
    currentHead.previous = newHead;
    newHead.next = currentHead;
    list.head = newHead;
  };

  list.removeHead = function() { // O(1) - constant
    var previousHead = list.head;
    list.head = list.head.next;
    list.head.previous = null;
    return previousHead.value;
  };

  list.removeTail = function() {  // O(1) - constant
    var currentTail = list.tail;
    var newTail = currentTail.previous;
    newTail.next = null;
    currentTail.previous = null;
    list.tail = newTail; 
  };

  list.contains = function(target, node) { // O(n) - linear
    node = node || list.head;
    if (node.value === target) {
      return true;
    } else if (node.next === null) {
      return false;
    } else {
      return list.contains(target, node.next);
    }
  };

  return list;
};











/*
 * Complexity: What is the time complexity of the above functions?
 */
