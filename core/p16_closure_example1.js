const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Closure Fix - SetTimeOut", "green");
consoleWriter.logExeBlock(true, "Closure Fix - SetTimeOut", "yellow");

consoleWriter.logExeBlock(true, "Closure Un-fixed - SetTimeOut", "red");

function closureExample1() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      consoleWriter.logConsole(
        `TickTok Example Unfixed - Counter: ${i}`,
        true,
        "red"
      );
    }, i * 1000);
  }
}

closureExample1();

function closureExample2() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      consoleWriter.logConsole(
        `TickTok Example Fixed using 'let' instead of 'var' - Counter: ${i}`,
        true,
        "yellow"
      );
    }, i * 1000);
  }
}

setTimeout(() => {
  consoleWriter.logExeBlock(
    true,
    "Closure Fixed - SetTimeOut using 'let' instead of 'var'",
    "yellow"
  );
  closureExample2();
}, 6000);

function closureExample3() {
  for (var i = 0; i < 5; i++) {
    var closeIt = function (param) {
      setTimeout(() => {
        consoleWriter.logConsole(
          `TickTok Example Fixed using Closures - Counter: ${param}`,
          true,
          "green"
        );
      }, param * 1000);
    };
    closeIt(i);
  }
}

setTimeout(() => {
  consoleWriter.logExeBlock(
    true,
    "Closure Fixed - SetTimeOut using Closures",
    "green"
  );
  closureExample3();
}, 12000);
