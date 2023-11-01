const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Async Await Illustration", "red");

function promiseOldWaySuccess() {
  const promiseMessage = "Promise Usage in Old Way";
  consoleWriter.logExeBlock(true, promiseMessage, "blue");

  const promiseSuccess = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(promiseMessage);
    }, 5000);
  });

  promiseSuccess.then((val) => {
    consoleWriter.logConsole(val, true, "blue");
    consoleWriter.logExeBlock(true, "", "blue");
  });
}

setTimeout(() => {
  promiseOldWaySuccess();
}, 1000);

function promiseAsyncAwaitSuccess() {
  const promiseMessage = "Promise Usage with Async Await";
  consoleWriter.logExeBlock(true, promiseMessage, "green");

  const promiseSuccess = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(promiseMessage);
    }, 5000);
  });

  async function callPromise() {
    const value = await promiseSuccess;
    consoleWriter.logConsole(value, true, "green");
    consoleWriter.logExeBlock(true, "", "green");
  }

  callPromise();
}

setTimeout(() => {
  promiseAsyncAwaitSuccess();
}, 10000);

function promiseOldWayFailure() {
  const promiseErrorMessage = "Promise Error Usage in Old Way";
  consoleWriter.logExeBlock(true, promiseErrorMessage, "red");

  const promiseFailure = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(promiseErrorMessage);
    }, 5000);
  });

  promiseFailure
    .then((val) => {
      consoleWriter.logConsole(val, "red");
      consoleWriter.logExeBlock(true, "", "blue");
    })
    .catch((err) => {
      consoleWriter.logError(err, true, "red");
      consoleWriter.logExeBlock(true, "", "red");
    });
}

setTimeout(() => {
  promiseOldWayFailure();
}, 20000);

function promiseAsyncAwaitFailure() {
  const promiseErrorMessage = "Promise Error Usage with Async Await";
  consoleWriter.logExeBlock(true, promiseErrorMessage, "yellow");

  const promiseSuccess = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(promiseErrorMessage);
    }, 5000);
  });

  async function callPromise() {
    try {
      const value = await promiseSuccess;
      consoleWriter.logConsole(value);
      consoleWriter.logExeBlock(true, "", "green");
    } catch (err) {
      consoleWriter.logError(err, true, "yellow");
      consoleWriter.logExeBlock(true, "", "yellow");
    }
  }

  callPromise();
}

setTimeout(() => {
  promiseAsyncAwaitFailure();
}, 30000);
