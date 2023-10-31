const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Javascript - Promise Chaining");

const promise = new Promise((resolve, reject) => {
  const response = 10;
  consoleWriter.logConsole(`Step 0. Resolved value ${response}`);
  resolve(response);
});

promise
  .then((val) => {
    consoleWriter.logConsole(`Step 1. Resolved value ${val}`); // 10
    return val * 2; // value passed to next then as 20
  })
  .then((val) => {
    consoleWriter.logConsole(`Step 2. Resolved value ${val}`); // 20
    return val * 3; // value passed to next then as 60
  })
  .then((val) => {
    consoleWriter.logConsole(`Step 3. Resolved value ${val}`); // 60
    return val * 4; // value passed to next then as 240
  })
  .catch((err) => {
    // This code will not run as no error is thrown or rejected by Promise 'promise'
    consoleWriter.logConsole(`Step 4. Resolved value ${err}`);
    return val * 5; // value not passed
  })
  .then((val) => {
    consoleWriter.logConsole(`Step 5. Resolved value ${val}`); // 240
    return val * 6; // value passed to next then as 1440
  })
  .finally((val) => {
    consoleWriter.logConsole(`Step 6. Finally value ${val}`); // val is undefined as finally does not have a parameter
    return val * 7; // nothing returned
  })
  .then((val) => {
    consoleWriter.logConsole(`Step 7. Resolved value ${val}`); // 1440
    return val * 8; // value passed to next then if called as  11520
  });
