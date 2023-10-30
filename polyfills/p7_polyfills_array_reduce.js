const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Array Polyfills - Reduce");

const input = [1, 2, 3, 4, 5];

consoleWriter.logExeBlock(true, "Pre-defined reduce Illustration");

const output = input.reduce((acc, curr, index, arr) => {
  console.log(acc, curr, index, arr);
  acc += curr;
  return acc;
}, 0);
consoleWriter.logConsole(output);

consoleWriter.logExeBlock();

consoleWriter.logExeBlock(true, "Polyfill for 'reduce'");

Array.prototype.myReduce = function (callback, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

consoleWriter.logNote(
  Array.prototype.myReduce,
  true,
  "Array.prototype.myReduce = "
);

const myOutput = input.myReduce((acc, curr, index, arr) => {
  console.log(acc, curr, index, arr);
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

consoleWriter.logConsole(myOutput);

consoleWriter.logExeBlock();
