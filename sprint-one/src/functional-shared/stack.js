var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  someInstance.length = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(value) {
  this.length++;
  this[this.length] = value; 
  return this.length;
};

stackMethods.pop = function() {
  if (this.length > 0) {
    var temp = this[this.length];
    
    this[length] = undefined;
    this.length--;
    console.log(this[this.length], this.length);
    return temp;
  }
};



