var HashTable = function() {    // O(1) - constant
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {     // O(n) - linear
  
  // if >75% storage full then run double
  if ((this._count + 1) / this._limit > .75) {
    this.reHash(this._limit * 2);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var replaced = false;

  if (bucket === undefined) {
    var bucket = [];
  } else {
    for (var i = 0; i < bucket.length; i ++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        replaced = true;
      }
    }
  }

  if (!replaced) {
    bucket.push([k, v]);
  }

  this._storage.set(index, bucket);
  this._count++;
};

HashTable.prototype.reHash = function(newLimit) {
  var temp = [];
  this._storage.each(function(bucket) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        temp.push(bucket[i]);
        this._storage.set(i, undefined);
      }
    }
  });
  this._limit = newLimit;
  for (var i = 0; i < temp.length; i++) {
    this.insert(temp[i][0], temp[i][1]);
  }

};

HashTable.prototype.retrieve = function(k) {    // O(n) - linear
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i ++) {
    if (bucket[i] !== undefined) {  
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {    // O(n) - linear    
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i ++) {
    if (bucket[i][0] === k) {
      bucket[i] = undefined;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


