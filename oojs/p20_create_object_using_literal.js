const consoleWriter = require("../utils/console-utils");

consoleWriter.write(
  "Object Oriented JavaScript - Create Object using Literals",
  "magenta",
);

// Defining Object using Literals
let person = {
  // attributes
  first_name: "Mike",
  last_name: "Johnson",
  // method
  getName: function () {
    return `${this.first_name} ${this.last_name}`;
  },
  // object inside object
  phone: {
    mobile: "9878765540",
    landline: "080-6756686",
  },
};

consoleWriter.logConsole(
  `My name is ${person.getName()}. My mobile number is ${person.phone.mobile}.`,
  true,
  "yellow",
);

consoleWriter.logExeBlock(true, "", "magenta");
