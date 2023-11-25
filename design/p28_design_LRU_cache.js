/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let value = -1;
  if (this.map.has(key)) {
    value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
  }
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let prevValue = this.get(key);
  if (prevValue === -1) {
    if (this.map.size === this.capacity) {
      for (var [firstKey] of this.map) {
        this.map.delete(firstKey);
        break;
      }
    }
  }
  this.map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(`lRUCache.get(1): ${lRUCache.get(1)}`); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(`lRUCache.get(2): ${lRUCache.get(2)}`); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(`lRUCache.get(1): ${lRUCache.get(1)}`); // return -1 (not found)
console.log(`lRUCache.get(3): ${lRUCache.get(3)}`); // return 3
console.log(`lRUCache.get(4): ${lRUCache.get(4)}`); // return 4
