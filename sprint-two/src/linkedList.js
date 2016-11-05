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
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
