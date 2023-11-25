const consoleWriter = require("../utils/console-utils");

consoleWriter.write(
  "Object Oriented JavaScript - Data Abstraction Illustration",
  "magenta",
);

// Abstraction Example

function Person(fname, lname) {
  let first_name = fname;
  let last_name = lname;

  let getPersonDetailsNoAccess = function () {
    consoleWriter.logConsole(
      `Person details from No Access Method: ${first_name} ${last_name}.`,
      true,
      "yellow",
    );
  };

  this.getPersonDetailsAccess = function () {
    consoleWriter.logConsole(
      `Person details from Access Method: ${first_name} ${last_name}.`,
      true,
      "yellow",
    );
  };
}

const p = new Person("Rahul", "Roy");
consoleWriter.logConsole(
  `Name: ${p.first_name} ${p.last_name}`,
  true,
  "yellow",
);

// getPersonDetailsNoAccess method will not be accessible using instance of Person
// p.getPersonDetailsNoAccess();
p.getPersonDetailsAccess();

consoleWriter.logExeBlock(true, "", "magenta");
