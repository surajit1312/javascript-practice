"use strict";

const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Object - Define Property", "green");
consoleWriter.logExeBlock(
  true,
  "Object - Define Property - Creating Locked Objects",
  "yellow"
);

var lockedObj = {};

Object.defineProperty(lockedObj, "locked", {
  value: 6,
  writable: false,
  configurable: false,
});

// lockedObj.locked = 7;
// TypeError: Cannot assign to read only property 'locked' of object '#<Object>'
consoleWriter.logConsole(
  "If value is changed, then shows Error as : TypeError: Cannot assign to read only property 'locked' of object '#<Object>'",
  true,
  "magenta"
);

consoleWriter.logConsole(
  `Is lockedObj property 'locked' enumerable? : ${lockedObj.propertyIsEnumerable(
    "locked"
  )}`,
  true,
  "red"
);

Object.defineProperty(lockedObj, "enumeratedProp", {
  value: 7,
  writable: false,
  configurable: false,
  enumerable: true,
});

consoleWriter.logConsole(
  `Is lockedObj property 'enumeratedProp' enumerable? : ${lockedObj.propertyIsEnumerable(
    "enumeratedProp"
  )}`,
  true,
  "red"
);

lockedObj.newProp = 10;
consoleWriter.logConsole(
  `Is lockedObj property 'newProp' enumerable? : ${lockedObj.propertyIsEnumerable(
    "newProp"
  )}`,
  true,
  "red"
);

consoleWriter.logExeBlock(
  true,
  "Object - Define Property - Enumerable",
  "yellow"
);

Object.keys(lockedObj).forEach((key) => {
  consoleWriter.logConsole(
    `Print keys only if enumerable '${key}'`,
    true,
    "yellow"
  );
});

consoleWriter.logExeBlock(
  true,
  "Object - Define Property - Configurable",
  "yellow"
);

var configObj = {};

Object.defineProperty(configObj, "a", {
  value: 10,
  writable: true,
  enumerable: true,
  configurable: false,
});

configObj.a = 11;

Object.defineProperty(configObj, "a", {
  value: 11,
  writable: false,
  enumerable: true,
  configurable: false,
});

consoleWriter.logConsole(
  "Making configurable property false, only value and writable properties can be changed",
  "yellow"
);
// Object.defineProperty(configObj, 'a', {
//     value: 11,
//     writable: false,
//     enumerable: false,
//     configurable: false,
// });

// TypeError: Cannot redefine property: a

// Object.defineProperty(configObj, 'a', {
//     value: 11,
//     writable: false,
//     enumerable: true,
//     configurable: true,
// });
// TypeError: Cannot redefine property: a
consoleWriter.logConsole(
  "If 'configurable' and 'enumerable' Errors out as : TypeError: Cannot redefine property: a",
  true,
  "magenta"
);
