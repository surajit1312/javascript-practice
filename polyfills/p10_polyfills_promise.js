const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Promise Polyfills");

class CustomPromise {
  constructor(executor) {
    this.resolvedValue = null;
    this.onFulfilled = null;
    this.isFulfilled = false;

    this.rejectedError = null;
    this.onRejected = null;
    this.isRejected = false;

    const resolve = (value) => {
      this.resolvedValue = value;
      this.isFulfilled = true;
      if (typeof this.onFulfilled === "function") {
        this.onFulfilled(this.resolvedValue);
      }
    };

    const reject = (error) => {
      this.rejectedError = error;
      this.isRejected = true;
      if (typeof this.onRejected === "function") {
        this.onRejected(this.rejectedError);
      }
    };

    executor(resolve, reject);
  }

  then(callback) {
    this.onFulfilled = callback;
    if (this.isFulfilled) {
      this.onFulfilled(this.resolvedValue);
    }
    return this;
  }

  catch(callback) {
    this.onRejected = callback;
    if (this.isRejected) {
      this.onRejected(this.rejectedError);
    }
    return this;
  }

  static resolve(value) {
    return new CustomPromise((resolve, reject) => {
      resolve(value);
    });
  }

  static reject(value) {
    return new CustomPromise((resolve, reject) => {
      reject(value);
    });
  }

  static all(promises) {
    const results = [];
    const fulfilled = [];
    return new CustomPromise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise
          .then((val) => {
            results[index] = val;
            fulfilled.push(true);
            if (fulfilled.length === promises.length) {
              resolve(results);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }
}
setTimeout(() => {
  customPromiseCalls();
}, 500);

function customPromiseCalls() {
  consoleWriter.logExeBlock(true, "CustomPromise implementation and call");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("From Native Promise - Hello World!");
    }, 2000);
  });

  promise.then(function (val) {
    consoleWriter.logConsole(val);
  });

  const customPromise = new CustomPromise(function (resolve) {
    setTimeout(function () {
      resolve("From Promise Polyfill (With Timeout) - Hello World!");
    }, 2000);
  });

  const customPromiseWithOutTimeout = new CustomPromise(function (resolve) {
    resolve("From Promise Polyfill (Without Timeout) - Hello World!");
  });

  customPromise.then(function (val) {
    consoleWriter.logConsole(val);
  });

  customPromiseWithOutTimeout.then(function (val) {
    consoleWriter.logConsole(val);
    return val * 2;
  });

  const customPromiseReject = new CustomPromise(function (resolve, reject) {
    reject("From Promise Polyfill - Error encountered");
  });

  customPromiseReject
    .then(function (val) {
      consoleWriter.logConsole(val);
    })
    .catch(function (err) {
      consoleWriter.logError(err);
    });
}

setTimeout(() => {
  staticCustomPromiseCalls();
}, 5000);

function staticCustomPromiseCalls() {
  consoleWriter.logExeBlock(
    true,
    "Static implementation calls on CustomPromise.resolve and CustomPromise.reject"
  );

  CustomPromise.resolve("Success").then((val) => consoleWriter.logConsole(val));
  CustomPromise.reject("Failure").catch((val) => consoleWriter.logError(val));

  consoleWriter.logExeBlock(
    true,
    "Static implementation calls on CustomPromise.all"
  );

  CustomPromise.all([
    CustomPromise.resolve(10),
    CustomPromise.resolve(20),
    CustomPromise.resolve(30),
    // CustomPromise.reject("Error encountered in CustomPromise.all"),
    new CustomPromise((resolve, reject) => {
      setTimeout(() => {
        resolve(40);
      }, 3000);
    }),
  ])
    .then((values) => {
      consoleWriter.logConsole(values);
    })
    .catch((err) => {
      consoleWriter.logError(err);
    });
}
