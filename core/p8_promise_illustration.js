const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Javascript - Promise Illustration");

let validCart = false;
let paymentSucess = false;

function createOrder() {
  return new Promise(function (resolve, reject) {
    if (isCartValid()) {
      const orderId = "12345";
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    } else {
      const err = new Error("Cart is not valid!");
      reject(err);
    }
  });
}

function setPromiseReturn(state) {
  validCart = state;
  paymentSucess = state;
}

function isCartValid() {
  return validCart;
}

function isPaymentSucceeded() {
  return paymentSucess;
}

function createOrder() {
  return new Promise(function (resolve, reject) {
    if (isCartValid()) {
      const orderId = "12345";
      setTimeout(function () {
        resolve(orderId);
      }, 2000);
    } else {
      const err = new Error("Cart is not valid!");
      reject(err);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (isPaymentSucceeded() && orderId != "") {
      const status = "Payment Done!";
      setTimeout(function () {
        resolve(status);
      }, 1000);
    } else {
      const err = new Error("Payment Failed!");
      reject(err);
    }
  });
}

function printOrderSummary(status) {
  return new Promise(function (resolve, reject) {
    if (status === "Payment Done!") {
      setTimeout(function () {
        resolve("Order Summary!");
      }, 1000);
    } else {
      const err = new Error("Order summary creation Failed!");
      reject(err);
    }
  });
}

setTimeout(() => {
  consoleWriter.logExeBlock(
    true,
    "Chained promises - Success - Returning resolved"
  );
  promiseSuccess();
}, 1000);

function promiseSuccess() {
  setPromiseReturn(true);

  createOrder()
    .then(function (orderId) {
      return orderId;
    })
    .catch(function (err) {
      consoleWriter.logError(err.message);
    })
    .then(function (orderId) {
      consoleWriter.logConsole(
        `Order created with order Id [Status]:  ${orderId}`
      );
      return proceedToPayment(orderId);
    })
    .catch(function (err) {
      consoleWriter.logError(err.message);
    })
    .then(function (status) {
      consoleWriter.logConsole(`Payment status [Status]: ${status}`);
      return printOrderSummary(status);
    })
    .catch(function (err) {
      consoleWriter.logError(err.message);
    })
    .then(function (status) {
      consoleWriter.logConsole(`Order summary created [Status]: ${status}`);
    })
    .finally(function () {
      consoleWriter.logConsole("Finalized Transaction");
    });
}

setTimeout(() => {
  consoleWriter.logExeBlock(
    true,
    "Chained promises - Failure - Returning reject"
  );
  promiseFailure();
}, 15000);

function promiseFailure() {
  setPromiseReturn(false);
  createOrder()
    .then(function (orderId) {
      return orderId;
    })
    .catch(function (err) {
      consoleWriter.logError(err.message);
    })
    .then(function (orderId) {
      consoleWriter.logConsole(
        `Order created with order Id [Status]:  ${orderId}`
      );
      return proceedToPayment(orderId);
    })
    .catch(function (err) {
      consoleWriter.logError(err.message);
    })
    .then(function (status) {
      consoleWriter.logConsole(`Payment status [Status]: ${status}`);
      return printOrderSummary(status);
    })
    .catch(function (err) {
      consoleWriter.logError(err.message);
    })
    .then(function (status) {
      consoleWriter.logConsole(`Order summary created [Status]: ${status}`);
    })
    .finally(function () {
      consoleWriter.logConsole("Finalized Transaction");
    });
}
