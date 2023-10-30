const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Array Polyfills - Map");

const input = [1, 2, 3, 4, 5];

consoleWriter.logExeBlock(true, "Pre-defined map Illustration");

const output = input.map((item, index, arr) => {
  console.log(item, index, arr);
  return item * 2;
});
consoleWriter.logConsole(output);

consoleWriter.logExeBlock();

consoleWriter.logExeBlock(true, "Polyfill for 'map'");

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

consoleWriter.logNote(Array.prototype.myMap, true, "Array.prototype.myMap = ");

const myOutput = input.myMap((item, index, arr) => {
  console.log(item, index, arr);
  return item * 3;
});

consoleWriter.logConsole(myOutput);

consoleWriter.logExeBlock();
