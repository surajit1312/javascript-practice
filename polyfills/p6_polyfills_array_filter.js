const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Array Polyfills - Filter");

const input = [1, 2, 3, 4, 5];

consoleWriter.logExeBlock(true, "Pre-defined filter Illustration");

const output = input.filter((item, index, arr) => {
  console.log(item, index, arr);
  return item > 3;
});
consoleWriter.logConsole(output);

consoleWriter.logExeBlock();

consoleWriter.logExeBlock(true, "Polyfill for 'filter'");

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

consoleWriter.logNote(
  Array.prototype.myFilter,
  true,
  "Array.prototype.myFilter = ",
);

const myOutput = input.myFilter((item, index, arr) => {
  console.log(item, index, arr);
  return item > 2;
});

consoleWriter.logConsole(myOutput);

consoleWriter.logExeBlock();
