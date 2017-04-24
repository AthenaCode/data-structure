var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = Object.keys(storage).length = 0;
  var end = Object.keys(storage).length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[start] = value;
    end++;
  };

  someInstance.pop = function() {
    end--;
    return storage[start]
  };

  someInstance.size = function() {
    if(end - start < 0) return 0;
    return end - start;
  };

  return someInstance;
};
