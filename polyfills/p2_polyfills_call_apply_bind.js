const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Polyfills - Call, Apply, Bind");

const person = {
  firstName: "Surajit",
  lastName: "Rana",
};

const getIntro = function (location, state) {
  const message = `My name is ${this.firstName} ${this.lastName}. I live in ${location}, ${state}.`;
  consoleWriter.logConsole(message, true);
};

consoleWriter.logExeBlock(true, "Default - Function.Call");

getIntro.call(person, "Bengaluru", "Karnataka");

// ======================================= Polyfill Call =========================================

consoleWriter.logExeBlock(true, "Polyfill - Function.myCall Implementation");

Function.prototype.myCall = function (scope, ...args) {
  scope.fn = this;
  return scope.fn(...args);
};

consoleWriter.logNote(
  Function.prototype.myCall,
  true,
  "Function.prototype.myCall = "
);

getIntro.myCall(person, "Bengaluru", "Karnataka");
consoleWriter.logExeBlock();
// ================================================================================================

consoleWriter.logExeBlock(true, "Default - Function.Apply");

getIntro.apply(person, ["Bengaluru", "Karnataka"]);

// ======================================= Polyfill Apply =========================================

consoleWriter.logExeBlock(true, "Polyfill - Function.myApply Implementation");

Function.prototype.myApply = function (scope, args) {
  scope.fn = this;
  return scope.fn(...args);
};

consoleWriter.logNote(
  Function.prototype.myApply,
  true,
  "Function.prototype.myApply = "
);

getIntro.myApply(person, ["Bengaluru", "Karnataka"]);
consoleWriter.logExeBlock();
// ================================================================================================

consoleWriter.logExeBlock(true, "Default - Function.Bind");

const introBinder = getIntro.bind(person, ["Bengaluru", "Karnataka"]);
introBinder("This is parameter into bind");

const introBinderNew = getIntro.bind(person, "Bengaluru", "Karnataka");
introBinderNew("This is parameter into bind");

// ======================================= Polyfill Bind ==========================================

consoleWriter.logExeBlock(true, "Polyfill - Function.myBind Implementation");

Function.prototype.myBind = function (scope, ...args) {
  scope.fn = this;
  return function (...args2) {
    scope.fn(...args, ...args2);
  };
};

consoleWriter.logNote(
  Function.prototype.myBind,
  true,
  "Function.prototype.myBind = "
);

const introMyBinder = getIntro.myBind(person, ["Bengaluru", "Karnataka"]);
introMyBinder("This is parameter into bind");

const introMyBinderNew = getIntro.myBind(person, "Bengaluru", "Karnataka");
introMyBinderNew("This is parameter into bind");

consoleWriter.logExeBlock();
// ================================================================================================
