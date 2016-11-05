var BinarySearchTree = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.insert = function(val, node) {
  node = node || this;
  
  if (val > node.value) {
    if (node.right === null) {
      node.right = new BinarySearchTree(val);
    } else {
      node.insert(val, node.right);
    }
  } else {
    if (node.left === null) {
      node.left = new BinarySearchTree(val);
    } else {
      node.insert(val, node.left);
    }
  }
};

BinarySearchTree.prototype.contains = function(val, node) {
  node = node || this;
  var boolean = false;
  if (node.value === val) {
    boolean = true;    
  }
  if (val > node.value && node.right !== null) {
    boolean = boolean || node.contains(val, node.right);
  }
  if (val < node.value && node.left != null) {
    boolean = boolean || node.contains(val, node.left);
  }
  return boolean;
};

BinarySearchTree.prototype.depthFirstLog = function(func, node) {
  node = node || this;
  func(node.value);

  if (node.right !== null) {
    node.depthFirstLog(func, node.right);
  }
  if (node.left !== null) {
    node.depthFirstLog(func, node.left);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
