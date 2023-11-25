const consoleWriter = require("../utils/console-utils");

consoleWriter.write(
  "Object Oriented JavaScript - Create Object using Object.create method",
  "magenta",
);

// create an object literal with few properties
const coder = {
  isStudying: false,
  printIntro: function () {
    consoleWriter.logConsole(
      `My name is ${this.name}. Am I studying? : ${this.isStudying}`,
      true,
      "yellow",
    );
  },
};

// this will create a new object from 'coder' with prototype with 'coder'
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = "Surajit Rana";
me.printIntro();

const mePrototype = me.__proto__;
console.log("Object 'me' looks like :", mePrototype);

consoleWriter.logConsole(
  `Object 'me' has a prototype of object 'coder': ${me.__proto__.hasOwnProperty(
    "isStudying",
  )}`,
  true,
  "yellow",
);

consoleWriter.logConsole(
  `Object 'coder' has a property 'name': ${coder.hasOwnProperty("name")}`,
  true,
  "yellow",
);

consoleWriter.logExeBlock(true, "", "magenta");
