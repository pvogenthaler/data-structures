var Tree = function(value) { // constant
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { // constant
  this.children.push(Tree(value)); 
};

treeMethods.contains = function(target) { // linear
  if (this.containsHelper(target)) {
    return true;
  } else {
    return false;
  }
};

treeMethods.containsHelper = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i ++) {
    return this.children[i].containsHelper(target);   
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
