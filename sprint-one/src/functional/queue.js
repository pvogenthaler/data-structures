var Queue = function() {
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size ++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      var temp = storage[1];
      storage[1] = undefined;
      for (var key in storage) {
        storage[key - 1] = storage[key];      
      }
      storage[size] === undefined;
      size --;
      return temp;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
