

// Instantiate a new graph
var Graph = function() {      // O(1) - constant
  this.nodes = [];
  this.edges = {};

};

var GraphNode = function(value) {      // O(1) - constant
  this.value = value;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {     // O(1) - amortized constant
  this.nodes.push(new GraphNode(value)); 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {     // O(n) - linear
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {     // O(n) - linear
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
    }
  }
  if (this.edges[node] !== undefined) {
    for (var i = 0; i < this.edges[node].length; i++) {
      this.removeEdge(node, this.edges[node][i]);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {      // O(n) - linear
  if (this.edges[fromNode] !== undefined) {
    for (var i = 0; i < this.edges[fromNode].length; i++) {
      if (this.edges[fromNode][i] === toNode) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {      // O(1) - constant
  if (this.edges[fromNode] === undefined) {
    this.edges[fromNode] = [toNode];
  } else {
    this.edges[fromNode].push(toNode);
  }
  if (this.edges[toNode] === undefined) {
    this.edges[toNode] = [fromNode];
  } else {
    this.edges[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {     // O(n) - linear
  for (var i = 0; i < this.edges[fromNode].length; i++) {
    if (this.edges[fromNode][i] === toNode) {
      this.edges[fromNode].splice(i, 1);
    }
  }
  for (var i = 0; i < this.edges[toNode].length; i++) {
    if (this.edges[toNode][i] === fromNode) {
      this.edges[toNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {      // O(n) - linear
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


