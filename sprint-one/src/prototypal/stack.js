var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.length = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.pop = function () {
  if (this.length > 0) {
    var temp = this[this.length];
    this[this.length] = undefined;
    this.length--;
  }
  return temp;
};

stackMethods.push = function (value) {
  this.length++;
  this[this.length] = value;
  return this.length;
};

stackMethods.size = function () {
  return this.length;
};
