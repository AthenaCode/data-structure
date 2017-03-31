var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = Object.keys(storage).length = 0;
  var end = Object.keys(storage).length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    end += 1;
  };

  someInstance.dequeue = function() {
    start += 1;
    return storage[start -1];

  };

  someInstance.size = function() {
    if(end - start < 0){
      return 0;
    } 
    return end - start;
  };

  return someInstance;
};
