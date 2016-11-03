var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this.length ++;
  this[this.length] = value;
  return this.length;
};

Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    var temp = this[1];
    this[1] = undefined;
    for (var key in this) {
      this[key - 1] = this[key];
    }
    this[this.length] = undefined;
    this.length --;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.length;
};

