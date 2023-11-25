const consoleWriter = require("../utils/console-utils");

consoleWriter.write(
  "Interview Question - Find character that has a maximum frequency in an Array",
  "magenta"
);
consoleWriter.logExeBlock(true, "", "green");

const findMaxChar = function (charArr) {
  const mapChar = charArr.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});
  return Object.entries(mapChar).reduce(
    (acc, item) => {
      acc = item[1] > acc[1] ? item : acc;
      return acc;
    },
    [null, 0]
  )[0];
};

const charArr = [
  "a",
  "b",
  "c",
  "d",
  "c",
  "d",
  "a",
  "e",
  "j",
  "a",
  "c",
  "b",
  "a",
  "e",
];
const maxChar = findMaxChar(charArr);
consoleWriter.logConsole(
  `Character that occurred maximum number of times is '${maxChar}'`,
  false,
  "yellow"
);

consoleWriter.logExeBlock(true, "", "green");
