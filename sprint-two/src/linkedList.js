var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    if (list.tail !== null) {
      var previousTail = list.tail;
      list.tail = Node(value);
      previousTail.next = list.tail;
    } else {
      list.tail = Node(value);
      list.head = list.tail;
    }
  };

  list.removeHead = function() {
    var previousHead = list.head;
    list.head = list.head.next;
    return previousHead.value;
  };

  list.contains = function(target, node) {
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

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
