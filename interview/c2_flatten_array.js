const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Interview Question - Flatten a Nested Array", "magenta");
consoleWriter.logExeBlock(true, "", "green");

const nums = [20, 40, 60, [80, [100]], 120];

const flatterArray = function (nums) {
  let flatten = [];
  for (let item of nums) {
    if (!Array.isArray(item)) {
      flatten.push(item);
    } else {
      flatten = flatten.concat(flatterArray(item));
    }
  }
  return flatten;
};

const flatArr = flatterArray(nums);

consoleWriter.logConsole(
  `Flattened array of ${JSON.stringify(nums)} is : ${JSON.stringify(flatArr)}`
);
consoleWriter.logExeBlock(true, "", "green");
