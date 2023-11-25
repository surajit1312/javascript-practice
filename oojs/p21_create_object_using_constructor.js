const consoleWriter = require("../utils/console-utils");

consoleWriter.write(
  "Object Oriented JavaScript - Create Object using Constructor",
  "magenta",
);

// using constructor
function person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

// creating instances of person
let person1 = new person("Mukul", "Kumar");
consoleWriter.logConsole(
  `My name is ${person1.first_name} ${person1.last_name}`,
  true,
  "yellow",
);

// creating instances of person
let person2 = new person("Anand", "Raj");
consoleWriter.logConsole(
  `My name is ${person2.first_name} ${person2.last_name}`,
  true,
  "yellow",
);

consoleWriter.logExeBlock(true, "", "magenta");
