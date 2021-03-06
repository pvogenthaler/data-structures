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
  var boolean = false;
  
  if (this.value === target) {
    boolean = true;
  }
  for (var i = 0; i < this.children.length; i ++) {
    boolean = boolean || this.children[i].contains(target);
  }
  
  return boolean;
};

treeMethods.removeTree = function(value, tree) {
  tree = tree || this;

  for (var i = 0; i < tree.children.length; i ++) {
    if (tree.children[i].value === value) {
      tree.children.splice(i, 1);
    }
    tree.removeTree(value, tree.children[i]);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
