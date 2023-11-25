"use strict";

const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Function Curry in Javascript", "green");
consoleWriter.logExeBlock(true, "Function Curry in Javascript", "yellow");

function sum(p) {
  return function (q) {
    return function (r) {
      return function (s) {
        return p + q + r + s;
      };
    };
  };
}

const result = sum(1)(2)(3)(4);
consoleWriter.logConsole(`Sum: ${result}`, true, "green");

function currySum(p) {
  return function (q) {
    if (q) {
      return currySum(p + q);
    } else {
      return p;
    }
  };
}

const curryResult = currySum(1)(2)(3)(4)();
consoleWriter.logConsole(`Curry Sum: ${curryResult}`, true, "green");

consoleWriter.logExeBlock(
  true,
  "Function Curry v/s Partial Application in Javascript",
  "yellow",
);

function summation(a, b, c, d) {
  return a + b + c + d;
}

function curry(fn) {
  return function curriedFn(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        return curriedFn(...args, ...next);
      };
    }
  };
}

const totalSum = curry(summation);

consoleWriter.logConsole(
  `Curried Summation for totalSum(1)(2)(3)(4): ${totalSum(1)(2)(3)(4)}`,
  true,
  "magenta",
);

consoleWriter.logConsole(
  `Curried Summation for totalSum(1, 2)(3, 4): ${totalSum(1, 2)(3, 4)}`,
  true,
  "magenta",
);

consoleWriter.logConsole(
  `Curried Summation for totalSum(1, 2, 3)(4) : ${totalSum(1, 2, 3)(4)}`,
  true,
  "magenta",
);

consoleWriter.logConsole(
  `Curried Summation for totalSum(1, 2, 3)(4) : ${totalSum(1, 2, 3)(4)}`,
  true,
  "magenta",
);

consoleWriter.logConsole(
  `Curried Summation for totalSum(1, 2, 3, 4) : ${totalSum(1, 2, 3, 4)}`,
  true,
  "magenta",
);
