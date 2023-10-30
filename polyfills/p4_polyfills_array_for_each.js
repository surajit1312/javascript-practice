const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Array Polyfills - ForEach");

const input = [1, 2, 3, 4, 5];

consoleWriter.logExeBlock(true, "Pre-defined forEach Illustration");

input.forEach((item) => {
  consoleWriter.logConsole(item * 2);
});

consoleWriter.logExeBlock();

consoleWriter.logExeBlock(true, "Polyfill for 'forEach'");

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

consoleWriter.logNote(
  Array.prototype.myForEach,
  true,
  "Array.prototype.myForEach = "
);

input.myForEach((item) => {
  consoleWriter.logConsole(item * 2);
});

consoleWriter.logExeBlock();
